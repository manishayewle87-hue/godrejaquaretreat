import { NextResponse } from 'next/server';
import { getClientIp, rateLimitLeadSubmission } from '@/lib/rate-limit';
import { sanitizeString, validatePhone, validateEmail, isHoneypotTriggered } from '@/lib/security';

export async function POST(request: Request) {
  try {
    const ip = getClientIp(request);

    // 1. Rate Limiting Check
    const rateCheck = rateLimitLeadSubmission(ip);
    if (!rateCheck.allowed) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again shortly.' },
        { status: 429, headers: { 'Retry-After': String(rateCheck.reset) } }
      );
    }

    const body = await request.json().catch(() => null);
    if (!body || typeof body !== 'object') {
      return NextResponse.json({ error: 'Invalid request body' }, { status: 400 });
    }

    // 2. Honeypot Bot Detection
    if (isHoneypotTriggered(body)) {
      console.warn(`[SPAM BLOCKED] Honeypot triggered from IP: ${ip}`);
      return NextResponse.json({ success: true, message: 'Lead captured successfully' }, { status: 200 });
    }

    // 3. Server-Side Validation & Sanitization
    const name = sanitizeString(body.name, 100);
    const cleanPhone = validatePhone(body.phone);
    const email = body.email ? validateEmail(body.email) : null;
    const configuration = sanitizeString(body.configuration || 'Not Specified', 200);

    if (!name || name.length < 2) {
      return NextResponse.json(
        { error: 'Please provide a valid name (at least 2 characters)' },
        { status: 400 }
      );
    }

    if (!cleanPhone) {
      return NextResponse.json(
        { error: 'Please provide a valid 10-digit phone number' },
        { status: 400 }
      );
    }

    // 4. CRM Push (Logging / Webhook)
    console.log('====================================');
    console.log('🚨 NEW LEAD CAPTURED: GODREJ PARK WORLD');
    console.log(`Name: ${name} | Phone: ${cleanPhone}`);
    if (email) console.log(`Email: ${email}`);
    console.log(`Interest: ${configuration}`);
    console.log('====================================');

    // 5. Automated WhatsApp API Webhook (if configured)
    const WA_API_ENDPOINT = process.env.WHATSAPP_API_ENDPOINT || 'https://api.whatsapp.com/v1/messages';
    const WA_API_KEY = process.env.WHATSAPP_API_TOKEN || process.env.WA_API_KEY;

    if (WA_API_KEY && WA_API_KEY !== 'demo_key') {
      try {
        await fetch(WA_API_ENDPOINT, {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${WA_API_KEY}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            messaging_product: 'whatsapp',
            to: `91${cleanPhone.slice(-10)}`,
            type: 'template',
            template: {
              name: 'godrej_welcome_brochure',
              language: { code: 'en' },
              components: [
                {
                  type: 'body',
                  parameters: [{ type: 'text', text: name }],
                },
              ],
            },
          }),
        });
        console.log('✅ WhatsApp automated message fired successfully.');
      } catch (waError) {
        console.error('❌ WhatsApp API failed:', waError);
      }
    }

    // 6. Return Clean Success Response
    return NextResponse.json(
      {
        success: true,
        message: 'Lead captured successfully',
        data: { name, phone: cleanPhone.slice(-10) },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing lead:', error);
    return NextResponse.json(
      { error: 'Internal server error while processing request' },
      { status: 500 }
    );
  }
}
