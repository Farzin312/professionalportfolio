import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

// Shape of the JSON body your <RequestForm /> sends:
type RequestBody = {
  selectedServices: string[];
  name: string;
  company: string;
  email: string;
  phone: string;
  budget: number;
  vision: string;
};

export async function POST(request: Request) {
  try {
    // 1) Parse the JSON body
    const body: RequestBody = await request.json();

    const {
      selectedServices,
      name,
      company,
      email,
      phone,
      budget,
      vision,
    } = body;

    // 2) Basic validation
    if (
      !Array.isArray(selectedServices) ||
      selectedServices.length === 0 ||
      !email ||
      !phone
    ) {
      return NextResponse.json(
        { error: 'Missing required fields in request body.' },
        { status: 400 }
      );
    }

    // 3) Set up Nodemailer transporter (Gmail SMTP)
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    // 4) Build the email to yourself (site owner)
    const ownerMailOptions = {
      from: `"Website Request" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      subject: `New Request from ${name || email}`,
      text: `
You’ve received a new request:

Name: ${name}
Company: ${company}
Email: ${email}
Phone: ${phone}
Budget: $${budget}

Selected Services:
${selectedServices.join(', ')}

Vision / Message:
${vision}
      `,
    };

    // 5) Build the acknowledgment email to the user
    const userMailOptions = {
      from: `"Your Company Name" <${process.env.GMAIL_USER}>`,
      to: email,
      subject: 'We’ve received your request!',
      text: `
Hi ${name || 'there'},

Thank you for reaching out! We’ve received your request and our team will be in touch within 24–48 hours.

Here’s what you sent us:
-------------------------
Name: ${name}
Company: ${company}
Email: ${email}
Phone: ${phone}
Budget: $${budget}

Selected Services: ${selectedServices.join(', ')}

Vision / Message:
${vision}
-------------------------

If you need to update any details, just reply to this email.

Best regards,
Your Name / Company
      `,
    };

    // 6) Send “to owner” and then “to user”
    await transporter.sendMail(ownerMailOptions);
    await transporter.sendMail(userMailOptions);

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error('Error in POST /api/send-request:', err);
    return NextResponse.json(
      { error: 'Failed to send emails. Please try again later.' },
      { status: 500 }
    );
  }
}
