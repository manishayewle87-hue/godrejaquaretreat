import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, email, configuration } = body;

    // 1. Basic Server-Side Validation
    if (!name || !phone) {
      return NextResponse.json(
        { error: 'Name and Phone number are required' },
        { status: 400 }
      );
    }

    // Basic Phone Number Regex for Indian Numbers (10 digits)
    const phoneRegex = /^[0-9]{10}$/;
    const cleanPhone = phone.replace(/\D/g, '').slice(-10);
    
    if (!phoneRegex.test(cleanPhone)) {
      return NextResponse.json(
        { error: 'Invalid phone number format' },
        { status: 400 }
      );
    }

    // 2. CRM Push (Salesforce / Zoho)
    console.log("====================================");
    console.log("🚨 NEW LEAD CAPTURED: GODREJ PARK WORLD");
    console.log(`Name: ${name} | Phone: ${cleanPhone}`);
    console.log(`Interest: ${configuration || 'Not Specified'}`);
    console.log("====================================");

    // 3. Automated WhatsApp API Webhook (Meta / Interakt / Twilio)
    // NOTE: Replace NEXT_PUBLIC_WA_API_KEY with your actual environment variable
    const WA_API_ENDPOINT = "https://api.whatsapp.com/v1/messages"; // Example Endpoint
    const WA_API_KEY = process.env.WA_API_KEY || "demo_key";

    if (WA_API_KEY !== "demo_key") {
      try {
        await fetch(WA_API_ENDPOINT, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${WA_API_KEY}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            messaging_product: "whatsapp",
            to: `91${cleanPhone}`,
            type: "template",
            template: {
              name: "godrej_welcome_brochure",
              language: { code: "en" },
              components: [
                {
                  type: "body",
                  parameters: [
                    { type: "text", text: name }
                  ]
                }
              ]
            }
          })
        });
        console.log("✅ WhatsApp Automated Message Fired Successfully!");
      } catch (waError) {
        console.error("❌ WhatsApp API Failed:", waError);
        // We don't fail the entire request if WhatsApp fails
      }
    } else {
      console.log("⚠️ WA_API_KEY not set. Simulating WhatsApp Message dispatch.");
      await new Promise((resolve) => setTimeout(resolve, 800)); // Simulate API latency
    }

    // 4. Return Success
    return NextResponse.json(
      { 
        success: true, 
        message: 'Lead captured successfully',
        data: { name, phone: cleanPhone } 
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
