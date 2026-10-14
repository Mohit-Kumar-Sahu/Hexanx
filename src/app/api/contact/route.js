import { Resend } from 'resend';
import { NextResponse } from 'next/server';
import { generateContactEmailHtml } from '../../../lib/emailTemplates';

const resend = new Resend(process.env.RESEND_API_KEY);

const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwJvNXy6EL1CKjQ6eoKGk13-LDQ8Fo2pHzwGgTYPOPKzOq1zFniQKSbPUki6hO4AN-EaA/exec";

export async function POST(request) {
  try {
    const body = await request.json().catch(() => null);

    if (!body) {
      return NextResponse.json(
        { success: false, error: 'Invalid JSON request payload.' },
        { status: 400 }
      );
    }

    const { name, email, service, message } = body;

    // Field Validations
    if (!name || typeof name !== 'string' || !name.trim()) {
      return NextResponse.json(
        { success: false, error: 'Name is required.' },
        { status: 400 }
      );
    }

    if (!email || typeof email !== 'string' || !/\S+@\S+\.\S+/.test(email.trim())) {
      return NextResponse.json(
        { success: false, error: 'A valid email address is required.' },
        { status: 400 }
      );
    }

    if (!message || typeof message !== 'string' || !message.trim()) {
      return NextResponse.json(
        { success: false, error: 'Message cannot be empty.' },
        { status: 400 }
      );
    }

    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const selectedService = (service && typeof service === 'string' && service.trim()) ? service.trim() : 'Hexanx OS';
    const trimmedMessage = message.trim();
    const referenceId = `HEX-INQ-${Date.now().toString(36).toUpperCase()}-${Math.random().toString(36).substring(2, 6).toUpperCase()}`;

    // Forward to Google Sheet CRM asynchronously without blocking email dispatch
    if (GOOGLE_SCRIPT_URL) {
      const crmData = new FormData();
      crmData.append('formType', 'contact');
      crmData.append('Name', trimmedName);
      crmData.append('Email', trimmedEmail);
      crmData.append('Service', selectedService);
      crmData.append('Message', trimmedMessage);
      crmData.append('ReferenceId', referenceId);

      fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        body: crmData,
        mode: 'no-cors'
      }).catch((crmErr) => {
        console.warn('[Contact CRM Webhook Warning]:', crmErr.message);
      });
    }

    // Verify Resend API Key is set
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey || apiKey === 'your_resend_key_here') {
      console.warn('[Resend Warning]: RESEND_API_KEY is not configured or using default placeholder in .env.local.');
      return NextResponse.json(
        {
          success: false,
          error: 'Resend API key is not configured. Please add your valid RESEND_API_KEY to .env.local.'
        },
        { status: 500 }
      );
    }

    // Render enterprise HTML email
    const emailHtml = generateContactEmailHtml({
      name: trimmedName,
      email: trimmedEmail,
      service: selectedService,
      message: trimmedMessage,
      referenceId,
    });

    const replyToAddress = process.env.RESEND_REPLY_TO || 'contact@hexanx.in';

    // Dispatch email to the user
    const { data, error } = await resend.emails.send({
      from: 'Hexanx <noreply@updates.hexanx.in>',
      to: [trimmedEmail],
      replyTo: replyToAddress,
      subject: `Received: Your Inquiry at Hexanx [Ref: ${referenceId}]`,
      html: emailHtml,
    });

    if (error) {
      console.error('[Resend Error - Contact]:', error);
      return NextResponse.json(
        {
          success: false,
          error: error.message || 'Failed to dispatch email via Resend.'
        },
        { status: 502 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Inquiry received and confirmation email dispatched successfully.',
      id: data?.id,
      referenceId,
    });
  } catch (err) {
    console.error('[API Exception - /api/contact]:', err);
    return NextResponse.json(
      { success: false, error: err.message || 'An unexpected error occurred while processing your request.' },
      { status: 500 }
    );
  }
}
