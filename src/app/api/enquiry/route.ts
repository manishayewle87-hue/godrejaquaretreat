import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone } = body;

    if (!name || !email || !phone) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Securely log the lead data to the server console (this represents pushing to a CRM)
    console.log("=== NEW LEAD CAPTURED ===");
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Phone: ${phone}`);
    console.log(`Timestamp: ${new Date().toISOString()}`);
    console.log("=========================");

    // In a production environment, you would push this data to Salesforce, Google Sheets, or a webhook here.
    // Example:
    // await fetch('https://your-crm-webhook.com', {
    //   method: 'POST',
    //   body: JSON.stringify({ name, email, phone })
    // });

    return NextResponse.json({ success: true, message: "Enquiry submitted successfully" });
  } catch (error) {
    console.error("Enquiry API Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
