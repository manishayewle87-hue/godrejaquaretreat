import nodemailer from 'nodemailer';
import { escapeHtml } from '@/lib/security';

export interface LeadEmailPayload {
  name: string;
  phone: string;
  email?: string | null;
  source: string;
  configuration?: string | null;
  ip?: string;
}

export async function sendLeadNotificationEmail(payload: LeadEmailPayload): Promise<boolean> {
  const recipientEmail = process.env.ADMIN_EMAIL || 'propsmartrealty@gmail.com';
  const emailUser = process.env.EMAIL_USER || process.env.SMTP_USER;
  const emailPass = process.env.EMAIL_PASS || process.env.SMTP_PASS || process.env.GMAIL_APP_PASSWORD;

  const safeName = escapeHtml(payload.name);
  const safePhone = escapeHtml(payload.phone);
  const safeEmail = escapeHtml(payload.email || 'Not Provided');
  const safeSource = escapeHtml(payload.source || 'Website Lead Form');
  const safeConfig = escapeHtml(payload.configuration || 'General Enquiry');
  const timestamp = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });

  console.log(`\n======================================================`);
  console.log(`🚨 NEW INBOUND LEAD FOR: propsmartrealty@gmail.com`);
  console.log(`👤 Name: ${payload.name}`);
  console.log(`📞 Phone: ${payload.phone}`);
  console.log(`📧 Email: ${payload.email || 'N/A'}`);
  console.log(`📌 Source: ${payload.source}`);
  console.log(`🏢 Typology/Intent: ${payload.configuration || 'N/A'}`);
  console.log(`🕒 Time (IST): ${timestamp}`);
  console.log(`======================================================\n`);

  if (!emailUser || !emailPass) {
    console.warn('⚠️ EMAIL_USER or EMAIL_PASS not set. Email logged above. Set env vars on Vercel to receive via Gmail SMTP.');
    return false;
  }

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: emailUser,
        pass: emailPass,
      },
    });

    const mailOptions = {
      from: `"Godrej The Retreat Lead Alert" <${emailUser}>`,
      to: recipientEmail,
      subject: `🚨 New Real Estate Lead: ${safeName} (${safePhone}) - ${safeSource}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f4f5f7; margin: 0; padding: 20px; }
            .card { max-width: 580px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.08); border: 1px solid #e1e4e8; }
            .header { background: #0B0C10; padding: 24px; text-align: center; border-bottom: 3px solid #00A88E; }
            .header h1 { color: #ffffff; margin: 0; font-size: 20px; font-weight: 700; letter-spacing: 0.05em; }
            .header p { color: #00A88E; margin: 6px 0 0 0; font-size: 12px; text-transform: uppercase; letter-spacing: 0.15em; font-weight: 600; }
            .content { padding: 28px; }
            .badge { display: inline-block; padding: 4px 12px; background: #e6f7f4; color: #008772; font-size: 11px; font-weight: 700; text-transform: uppercase; border-radius: 20px; margin-bottom: 20px; }
            table { width: 100%; border-collapse: collapse; margin-top: 10px; }
            td { padding: 12px 10px; border-bottom: 1px solid #f0f2f5; font-size: 14px; color: #333333; }
            td.label { width: 35%; font-weight: 600; color: #666666; }
            td.value { font-weight: 500; }
            .phone-link { color: #00A88E; text-decoration: none; font-weight: 700; font-size: 16px; }
            .cta-bar { margin-top: 24px; text-align: center; }
            .cta-btn { display: inline-block; padding: 12px 28px; background: #25D366; color: #ffffff; font-weight: 700; text-decoration: none; border-radius: 8px; font-size: 14px; margin-right: 10px; }
            .footer { background: #f8f9fa; padding: 16px; text-align: center; font-size: 11px; color: #888888; border-top: 1px solid #eeeeee; }
          </style>
        </head>
        <body>
          <div class="card">
            <div class="header">
              <h1>Godrej The Retreat | Lead Alert</h1>
              <p>Godrej Park World Hinjewadi Phase 1</p>
            </div>
            <div class="content">
              <span class="badge">Immediate Buyer Lead</span>
              <table>
                <tr>
                  <td class="label">Customer Name</td>
                  <td class="value"><strong>${safeName}</strong></td>
                </tr>
                <tr>
                  <td class="label">Phone Number</td>
                  <td class="value"><a href="tel:${safePhone}" class="phone-link">${safePhone}</a></td>
                </tr>
                <tr>
                  <td class="label">Email Address</td>
                  <td class="value">${safeEmail}</td>
                </tr>
                <tr>
                  <td class="label">Interest / Typology</td>
                  <td class="value"><strong>${safeConfig}</strong></td>
                </tr>
                <tr>
                  <td class="label">Lead Source</td>
                  <td class="value">${safeSource}</td>
                </tr>
                <tr>
                  <td class="label">Received At (IST)</td>
                  <td class="value">${timestamp}</td>
                </tr>
              </table>
              <div class="cta-bar">
                <a href="https://wa.me/91${safePhone.replace(/[^0-9]/g, '').slice(-10)}?text=Hi%20${encodeURIComponent(payload.name)}%2C%20thank%20you%20for%20your%20enquiry%20regarding%20Godrej%20The%20Retreat%20Hinjewadi." class="cta-btn" target="_blank">💬 WhatsApp Customer</a>
                <a href="tel:${safePhone}" style="display: inline-block; padding: 12px 24px; background: #00A88E; color: #ffffff; font-weight: 700; text-decoration: none; border-radius: 8px; font-size: 14px;">📞 Call Customer</a>
              </div>
            </div>
            <div class="footer">
              Sent automatically to <strong>${recipientEmail}</strong> from Godrej The Retreat Lead Capture Portal.
            </div>
          </div>
        </body>
        </html>
      `,
    };

    await transporter.sendMail(mailOptions);
    console.log(`✅ Lead notification email successfully dispatched to: ${recipientEmail}`);
    return true;
  } catch (error) {
    console.error('❌ Failed to dispatch lead notification email:', error);
    return false;
  }
}
