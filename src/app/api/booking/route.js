import { Resend } from 'resend';
import { NextResponse } from 'next/server';
import { generateBookingEmailHtml } from '../../../lib/emailTemplates';

const resend = new Resend(process.env.RESEND_API_KEY);

const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwJvNXy6EL1CKjQ6eoKGk13-LDQ8Fo2pHzwGgTYPOPKzOq1zFniQKSbPUki6hO4AN-EaA/exec";
const HEXANX_BACKEND_URL = "https://hexanx-backend.onrender.com/api/queries/global";

export async function POST(request) {
  try {
    const body = await request.json().catch(() => null);

    if (!body) {
      return NextResponse.json(
        { success: false, error: 'Invalid JSON request payload.' },
        { status: 400 }
      );
    }

    const { name, email, phone, company, product, service, date, time, notes } = body;

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

    if (!date || typeof date !== 'string' || !date.trim()) {
      return NextResponse.json(
        { success: false, error: 'Preferred meeting date is required.' },
        { status: 400 }
      );
    }

    const trimmedTime = (time && typeof time === 'string') ? time.trim() : (notes ? 'Flexible / Per notes' : '');
    if (!trimmedTime && (!notes || typeof notes !== 'string' || !notes.trim())) {
      return NextResponse.json(
        { success: false, error: 'Preferred meeting time is required.' },
        { status: 400 }
      );
    }

    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const selectedService = (product && typeof product === 'string' && product.trim())
      ? product.trim()
      : (service && typeof service === 'string' && service.trim())
      ? service.trim()
      : 'Hexanx OS';
    const trimmedDate = date.trim();
    const referenceId = `HEX-CAL-${Date.now().toString(36).toUpperCase()}-${Math.random().toString(36).substring(2, 6).toUpperCase()}`;

    // Dynamic Product Mapping
    const targetProduct = (product || service || '').toLowerCase();
    const product_source = targetProduct.includes('flasto') ? 'flasto' : 
                           targetProduct.includes('roomyes') ? 'roomyes' : 
                           targetProduct.includes('ayra') ? 'ayra' : 'hexanx';

    // Forward to Hexanx OS Central CRM (Non-blocking)
    fetch(HEXANX_BACKEND_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        type: 'booking',
        product_source,
        name: trimmedName,
        email: trimmedEmail,
        phone: phone || '',
        company_name: company || '',
        message_data: { 
          requested_product: product || selectedService, 
          requested_date: trimmedDate, 
          notes: notes || (trimmedTime ? `Preferred Time: ${trimmedTime}` : '')
        }
      })
    }).catch(err => console.error('Failed to forward booking to Hexanx OS:', err));

    // Forward to Google Sheet CRM asynchronously without blocking email dispatch
    if (GOOGLE_SCRIPT_URL) {
      const crmData = new FormData();
      crmData.append('formType', 'booking');
      crmData.append('Name', trimmedName);
      crmData.append('Email', trimmedEmail);
      crmData.append('Service', selectedService);
      crmData.append('MeetingDate', trimmedDate);
      crmData.append('MeetingTime', trimmedTime);
      crmData.append('ReferenceId', referenceId);

      fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        body: crmData,
        mode: 'no-cors'
      }).catch((crmErr) => {
        console.warn('[Booking CRM Webhook Warning]:', crmErr.message);
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
    const emailHtml = generateBookingEmailHtml({
      name: trimmedName,
      email: trimmedEmail,
      service: selectedService,
      date: trimmedDate,
      time: trimmedTime,
      referenceId,
    });

    const replyToAddress = process.env.RESEND_REPLY_TO || 'contact@hexanx.in';

    // Dispatch email to the user
    const { data, error } = await resend.emails.send({
      from: 'Hexanx <noreply@updates.hexanx.in>',
      to: [trimmedEmail],
      replyTo: replyToAddress,
      subject: `Confirmed: Your Strategy Call Request with Hexanx [Ref: ${referenceId}]`,
      html: emailHtml,
    });

    if (error) {
      console.error('[Resend Error - Booking]:', error);
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
      message: 'Strategy session requested and confirmation email dispatched successfully.',
      id: data?.id,
      referenceId,
    });
  } catch (err) {
    console.error('[API Exception - /api/booking]:', err);
    return NextResponse.json(
      { success: false, error: err.message || 'An unexpected error occurred while processing your request.' },
      { status: 500 }
    );
  }
}
