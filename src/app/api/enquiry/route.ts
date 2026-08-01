import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

// Define the temporary file path for storing leads in serverless environments
const LEADS_FILE = '/tmp/leads.json';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, source = "Website Enquiry", config = "" } = body;

    if (!name || !phone) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const newLead = {
      id: Date.now().toString(),
      name,
      email: email || "N/A",
      phone,
      source,
      config,
      timestamp: new Date().toISOString()
    };

    // Read existing leads
    let leads = [];
    if (fs.existsSync(LEADS_FILE)) {
      const fileData = fs.readFileSync(LEADS_FILE, 'utf8');
      try {
        leads = JSON.parse(fileData);
      } catch (e) {}
    }

    // Prepend new lead
    leads.unshift(newLead);

    // Save back to file
    fs.writeFileSync(LEADS_FILE, JSON.stringify(leads, null, 2));

    console.log(`[LEAD CAPTURED] ${name} | ${phone} | ${source}`);

    return NextResponse.json({ success: true, message: "Enquiry submitted successfully" });
  } catch (error) {
    console.error("Enquiry API Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

// Add GET method to fetch leads for the Admin Dashboard
export async function GET(req: Request) {
  try {
    let leads = [];
    if (fs.existsSync(LEADS_FILE)) {
      const fileData = fs.readFileSync(LEADS_FILE, 'utf8');
      leads = JSON.parse(fileData);
    }
    return NextResponse.json({ leads });
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch leads" }, { status: 500 });
  }
}
