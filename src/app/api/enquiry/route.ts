import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import nodemailer from 'nodemailer';

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

    // --- NODEMAILER INTEGRATION ---
    // Make sure to add EMAIL_USER and EMAIL_PASS to your Vercel Environment Variables
    if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
      try {
        const transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
          }
        });

        const mailOptions = {
          from: process.env.EMAIL_USER,
          to: 'propsmartrealty@gmail.com',
          subject: `🚨 New Lead: ${source} - ${name}`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 10px;">
              <h2 style="color: #0D211C; border-bottom: 2px solid #3BA0D1; padding-bottom: 10px;">Godrej Park World | New Lead</h2>
              <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
                <tr><td style="padding: 10px; border-bottom: 1px solid #f0f0f0;"><strong>Name:</strong></td><td style="padding: 10px; border-bottom: 1px solid #f0f0f0;">${name}</td></tr>
                <tr><td style="padding: 10px; border-bottom: 1px solid #f0f0f0;"><strong>Phone:</strong></td><td style="padding: 10px; border-bottom: 1px solid #f0f0f0;"><a href="tel:${phone}">${phone}</a></td></tr>
                <tr><td style="padding: 10px; border-bottom: 1px solid #f0f0f0;"><strong>Email:</strong></td><td style="padding: 10px; border-bottom: 1px solid #f0f0f0;">${email || 'N/A'}</td></tr>
                <tr><td style="padding: 10px; border-bottom: 1px solid #f0f0f0;"><strong>Source:</strong></td><td style="padding: 10px; border-bottom: 1px solid #f0f0f0;">${source}</td></tr>
                <tr><td style="padding: 10px; border-bottom: 1px solid #f0f0f0;"><strong>Intent/Config:</strong></td><td style="padding: 10px; border-bottom: 1px solid #f0f0f0;">${config || 'N/A'}</td></tr>
                <tr><td style="padding: 10px;"><strong>Time:</strong></td><td style="padding: 10px;">${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}</td></tr>
              </table>
            </div>
          `
        };

        await transporter.sendMail(mailOptions);
        console.log("Email sent successfully to propsmartrealty@gmail.com");
      } catch (mailError) {
        console.error("Nodemailer failed to send email:", mailError);
      }
    } else {
      console.warn("EMAIL_USER or EMAIL_PASS not set. Skipping Nodemailer.");
    }

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
