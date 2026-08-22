import { NextResponse } from 'next/server';
import fs from 'fs';
import crypto from 'crypto';
import { getClientIp, rateLimitLeadSubmission } from '@/lib/rate-limit';
import { sanitizeString, validatePhone, validateEmail, isHoneypotTriggered } from '@/lib/security';
import { sendLeadNotificationEmail } from '@/lib/email';

// Define the temporary file path for storing leads in serverless environments
const LEADS_FILE = '/tmp/leads.json';

function timingSafeCompare(a: string, b: string): boolean {
  const bufA = Buffer.from(a, 'utf8');
  const bufB = Buffer.from(b, 'utf8');
  if (bufA.length !== bufB.length) {
    crypto.timingSafeEqual(bufA, bufA);
    return false;
  }
  return crypto.timingSafeEqual(bufA, bufB);
}

function verifyAdminAuth(req: Request): boolean {
  const authHeader = req.headers.get('authorization') || '';
  const token = authHeader.startsWith('Bearer ')
    ? authHeader.slice(7).trim()
    : req.headers.get('x-admin-key')?.trim() || '';

  const configuredSecret = process.env.ADMIN_SECRET_KEY || process.env.ADMIN_PASSWORD || 'godrej2026';
  return Boolean(token && timingSafeCompare(token, configuredSecret));
}

export async function POST(req: Request) {
  try {
    const ip = getClientIp(req);

    // 1. Rate Limiting
    const rateCheck = rateLimitLeadSubmission(ip);
    if (!rateCheck.allowed) {
      return NextResponse.json(
        { error: 'Too many requests. Please wait a moment before trying again.' },
        { status: 429, headers: { 'Retry-After': String(rateCheck.reset) } }
      );
    }

    const rawBody = await req.json().catch(() => null);
    if (!rawBody || typeof rawBody !== 'object') {
      return NextResponse.json({ error: 'Invalid payload' }, { status: 400 });
    }

    // 2. Honeypot Bot Detection
    if (isHoneypotTriggered(rawBody)) {
      console.warn(`[SPAM BLOCKED] Honeypot triggered from IP: ${ip}`);
      // Return 200 to not alert bot
      return NextResponse.json({ success: true, message: 'Enquiry submitted successfully' });
    }

    // 3. Input Validation & Sanitization
    const name = sanitizeString(rawBody.name, 100);
    const validPhone = validatePhone(rawBody.phone);
    const validEmail = rawBody.email ? validateEmail(rawBody.email) : null;
    const source = sanitizeString(rawBody.source || 'Website Enquiry', 100);
    const config = sanitizeString(rawBody.config || '', 200);

    if (!name || name.length < 2) {
      return NextResponse.json({ error: 'Please provide a valid name (at least 2 characters)' }, { status: 400 });
    }

    if (!validPhone) {
      return NextResponse.json({ error: 'Please provide a valid 10-digit phone number' }, { status: 400 });
    }

    const newLead = {
      id: Date.now().toString(),
      name,
      email: validEmail || 'N/A',
      phone: validPhone,
      source,
      config,
      timestamp: new Date().toISOString(),
    };

    type LeadRecord = {
      id: string;
      name: string;
      email: string;
      phone: string;
      source: string;
      config: string;
      timestamp: string;
    };

    let leads: LeadRecord[] = [];
    try {
      if (fs.existsSync(LEADS_FILE)) {
        const fileData = fs.readFileSync(LEADS_FILE, 'utf8');
        leads = JSON.parse(fileData);
        if (!Array.isArray(leads)) leads = [];
      }
    } catch {
      leads = [];
    }

    // Prepend new lead and keep max 500 records
    leads.unshift(newLead);
    if (leads.length > 500) {
      leads = leads.slice(0, 500);
    }

    try {
      fs.writeFileSync(LEADS_FILE, JSON.stringify(leads, null, 2));
    } catch (fsError) {
      console.warn('Failed writing to leads file:', fsError);
    }

    console.log(`[LEAD CAPTURED] ${name} | ${validPhone} | ${source}`);

    // 5. Secure Email Dispatch to propsmartrealty@gmail.com
    await sendLeadNotificationEmail({
      name,
      phone: validPhone,
      email: validEmail || undefined,
      source,
      configuration: config,
      ip,
    });

    // 6. CRM Webhook Dispatch (Zapier, Make, Zoho, Salesforce)
    const CRM_WEBHOOK_URL = process.env.CRM_WEBHOOK_URL;
    if (CRM_WEBHOOK_URL && CRM_WEBHOOK_URL.startsWith('http')) {
      try {
        await fetch(CRM_WEBHOOK_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(newLead),
        });
        console.log('Lead dispatched to CRM Webhook successfully.');
      } catch (crmError) {
        console.error('CRM Webhook delivery failed:', crmError);
      }
    }

    return NextResponse.json({ success: true, message: 'Enquiry submitted successfully' });
  } catch (error) {
    console.error('Enquiry API Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

// Authenticated GET method for Admin Dashboard
export async function GET(req: Request) {
  try {
    if (!verifyAdminAuth(req)) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    let leads = [];
    if (fs.existsSync(LEADS_FILE)) {
      const fileData = fs.readFileSync(LEADS_FILE, 'utf8');
      try {
        leads = JSON.parse(fileData);
      } catch {
        leads = [];
      }
    }
    return NextResponse.json({ leads });
  } catch (error) {
    console.error('Fetch leads error:', error);
    return NextResponse.json({ error: 'Failed to fetch leads' }, { status: 500 });
  }
}
