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
    if (!phoneRegex.test(phone.replace(/\D/g, '').slice(-10))) {
      return NextResponse.json(
        { error: 'Invalid phone number format' },
        { status: 400 }
      );
    }

    // 2. Mock CRM / Database Push
    // In a real environment, you would use fetch() to send this to Zoho/Salesforce/Webhooks
    console.log("====================================");
    console.log("🚨 NEW LEAD CAPTURED: GODREJ PARK WORLD");
    console.log("====================================");
    console.log(`Name: ${name}`);
    console.log(`Phone: ${phone}`);
    console.log(`Email: ${email || 'Not Provided'}`);
    console.log(`Interest: ${configuration || 'Not Specified'}`);
    console.log("====================================");

    // 3. Simulate processing delay
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // 4. Return Success
    return NextResponse.json(
      { 
        success: true, 
        message: 'Lead captured successfully',
        data: { name, phone } 
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
