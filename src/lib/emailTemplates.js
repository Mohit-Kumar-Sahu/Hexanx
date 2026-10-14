/**
 * Enterprise HTML Email Templates for Hexanx
 * Inline-styled, cross-client compatible HTML with brand aesthetics.
 */

function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

/**
 * Contact Us - Confirmation Email
 */
export function generateContactEmailHtml({ name, email, service, message, referenceId }) {
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeService = escapeHtml(service || 'General Inquiry');
  const safeMessage = escapeHtml(message).replace(/\n/g, '<br/>');
  const safeRef = escapeHtml(referenceId);

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Received: Your Inquiry at Hexanx</title>
</head>
<body style="margin: 0; padding: 0; background-color: #0b0f19; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #334155; -webkit-font-smoothing: antialiased;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color: #0b0f19; width: 100%; padding: 40px 16px;">
    <tr>
      <td align="center">
        <!-- Main Card Container -->
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="max-width: 620px; background-color: #ffffff; border-radius: 20px; overflow: hidden; box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5); border: 1px solid #1e293b;">
          
          <!-- Top Gradient Accent Bar -->
          <tr>
            <td style="height: 6px; background: linear-gradient(90deg, #2563eb 0%, #7c3aed 50%, #db2777 100%); font-size: 0; line-height: 0;">&nbsp;</td>
          </tr>

          <!-- Header / Brand Section -->
          <tr>
            <td style="background-color: #0f172a; padding: 32px 36px; text-align: left;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                <tr>
                  <td>
                    <table role="presentation" cellspacing="0" cellpadding="0" border="0">
                      <tr>
                        <td style="vertical-align: middle;">
                          <div style="width: 40px; height: 40px; background: linear-gradient(135deg, #2563eb, #7c3aed); border-radius: 10px; text-align: center; line-height: 40px; color: #ffffff; font-weight: 800; font-size: 20px; letter-spacing: -0.5px;">
                            H
                          </div>
                        </td>
                        <td style="vertical-align: middle; padding-left: 14px;">
                          <div style="font-size: 22px; font-weight: 700; color: #ffffff; letter-spacing: -0.3px; line-height: 1.1;">
                            Hexanx
                          </div>
                          <div style="font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; color: #94a3b8; font-weight: 600; margin-top: 3px;">
                            Enterprise SaaS Ecosystem
                          </div>
                        </td>
                      </tr>
                    </table>
                  </td>
                  <td align="right" style="vertical-align: middle;">
                    <span style="display: inline-block; background-color: rgba(37, 99, 235, 0.15); border: 1px solid rgba(59, 130, 246, 0.4); color: #60a5fa; font-size: 11px; font-weight: 700; padding: 6px 14px; border-radius: 9999px; text-transform: uppercase; letter-spacing: 0.8px;">
                      Inquiry Received
                    </span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Main Content Area -->
          <tr>
            <td style="padding: 40px 36px 30px 36px; background-color: #ffffff;">
              <h1 style="margin: 0 0 16px 0; font-size: 24px; font-weight: 700; color: #0f172a; line-height: 1.3;">
                Thank you for contacting Hexanx, ${safeName}.
              </h1>
              
              <p style="margin: 0 0 20px 0; font-size: 15px; line-height: 1.6; color: #475569;">
                Our enterprise solutions team has received your message. A dedicated technical specialist is currently reviewing your requirements to provide an actionable, personalized response within <strong style="color: #0f172a;">24 business hours</strong>.
              </p>

              <!-- Reference Badge & Inquiry Summary Card -->
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 14px; margin: 28px 0; padding: 20px 24px;">
                <tr>
                  <td>
                    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                      <tr>
                        <td style="padding-bottom: 12px; border-bottom: 1px solid #e2e8f0;">
                          <span style="font-size: 11px; font-weight: 700; text-transform: uppercase; color: #64748b; letter-spacing: 1px;">
                            Inquiry Reference
                          </span>
                          <div style="font-size: 14px; font-weight: 700; color: #2563eb; font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace; margin-top: 2px;">
                            ${safeRef}
                          </div>
                        </td>
                        <td align="right" style="padding-bottom: 12px; border-bottom: 1px solid #e2e8f0;">
                          <span style="font-size: 11px; font-weight: 700; text-transform: uppercase; color: #64748b; letter-spacing: 1px;">
                            Product Interest
                          </span>
                          <div style="font-size: 14px; font-weight: 600; color: #0f172a; margin-top: 2px;">
                            ${safeService}
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td colspan="2" style="padding-top: 14px;">
                          <span style="font-size: 11px; font-weight: 700; text-transform: uppercase; color: #64748b; letter-spacing: 1px;">
                            Your Message Excerpt
                          </span>
                          <div style="font-size: 14px; color: #334155; line-height: 1.6; margin-top: 6px; padding: 12px; background-color: #ffffff; border-radius: 8px; border: 1px solid #e2e8f0;">
                            ${safeMessage}
                          </div>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <!-- What Happens Next Section -->
              <div style="margin: 32px 0 24px 0;">
                <h3 style="margin: 0 0 16px 0; font-size: 14px; font-weight: 800; text-transform: uppercase; letter-spacing: 1px; color: #0f172a;">
                  What Happens Next
                </h3>
                
                <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                  <tr>
                    <td style="vertical-align: top; width: 32px; padding-bottom: 16px;">
                      <div style="width: 24px; height: 24px; border-radius: 50%; background-color: #eff6ff; color: #2563eb; font-weight: 700; font-size: 12px; text-align: center; line-height: 24px;">
                        1
                      </div>
                    </td>
                    <td style="vertical-align: top; padding-left: 8px; padding-bottom: 16px;">
                      <div style="font-size: 14px; font-weight: 600; color: #0f172a;">Solution Architect Review</div>
                      <div style="font-size: 13px; color: #64748b; line-height: 1.4; margin-top: 2px;">
                        Our solutions engineers assess compatibility with Hexanx OS, Flasto, or Roomyes.
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td style="vertical-align: top; width: 32px; padding-bottom: 16px;">
                      <div style="width: 24px; height: 24px; border-radius: 50%; background-color: #eff6ff; color: #2563eb; font-weight: 700; font-size: 12px; text-align: center; line-height: 24px;">
                        2
                      </div>
                    </td>
                    <td style="vertical-align: top; padding-left: 8px; padding-bottom: 16px;">
                      <div style="font-size: 14px; font-weight: 600; color: #0f172a;">Direct Follow-up Consultation</div>
                      <div style="font-size: 13px; color: #64748b; line-height: 1.4; margin-top: 2px;">
                        We will email you directly at <strong style="color: #334155;">${safeEmail}</strong> with technical answers and scheduling options.
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td style="vertical-align: top; width: 32px;">
                      <div style="width: 24px; height: 24px; border-radius: 50%; background-color: #eff6ff; color: #2563eb; font-weight: 700; font-size: 12px; text-align: center; line-height: 24px;">
                        3
                      </div>
                    </td>
                    <td style="vertical-align: top; padding-left: 8px;">
                      <div style="font-size: 14px; font-weight: 600; color: #0f172a;">Tailored Product Demonstration</div>
                      <div style="font-size: 13px; color: #64748b; line-height: 1.4; margin-top: 2px;">
                        Experience live workflows and test migration pipelines tailored to your operations.
                      </div>
                    </td>
                  </tr>
                </table>
              </div>

              <!-- Button CTA -->
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="margin-top: 32px; padding-top: 24px; border-top: 1px solid #f1f5f9;">
                <tr>
                  <td align="center">
                    <a href="https://www.hexanx.in" target="_blank" rel="noopener noreferrer" style="display: inline-block; background: linear-gradient(135deg, #2563eb, #7c3aed); color: #ffffff; font-size: 14px; font-weight: 700; text-decoration: none; padding: 14px 32px; border-radius: 9999px; box-shadow: 0 10px 15px -3px rgba(37, 99, 235, 0.3);">
                      Explore Hexanx Ecosystem &rarr;
                    </a>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Corporate Footer -->
          <tr>
            <td style="background-color: #0f172a; padding: 28px 36px; border-top: 1px solid #1e293b; color: #94a3b8; font-size: 12px; line-height: 1.6;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                <tr>
                  <td>
                    <div style="color: #f8fafc; font-weight: 600; font-size: 13px; margin-bottom: 4px;">
                      Hexanx Pvt Ltd
                    </div>
                    <div>Santoshi Nagar, Raipur, Chhattisgarh 492001, India</div>
                    <div style="margin-top: 6px;">
                      Inquiries &amp; Support: <a href="mailto:contact@hexanx.in" style="color: #60a5fa; text-decoration: none;">contact@hexanx.in</a> &bull; <a href="https://www.hexanx.in" style="color: #60a5fa; text-decoration: none;">www.hexanx.in</a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td style="padding-top: 18px; border-top: 1px solid #1e293b; margin-top: 18px; font-size: 11px; color: #64748b;">
                    This automated email was sent to ${safeEmail} following your inquiry submission on Hexanx. If you did not make this request, please contact our security team immediately.
                  </td>
                </tr>
              </table>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

/**
 * Booking - Confirmation Email
 */
export function generateBookingEmailHtml({ name, email, service, date, time, referenceId }) {
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeService = escapeHtml(service || 'Hexanx OS Demo');
  const safeDate = escapeHtml(date);
  const safeTime = escapeHtml(time);
  const safeRef = escapeHtml(referenceId);

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Confirmed: Your Strategy Call Request with Hexanx</title>
</head>
<body style="margin: 0; padding: 0; background-color: #0b0f19; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #334155; -webkit-font-smoothing: antialiased;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color: #0b0f19; width: 100%; padding: 40px 16px;">
    <tr>
      <td align="center">
        <!-- Main Card Container -->
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="max-width: 620px; background-color: #ffffff; border-radius: 20px; overflow: hidden; box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5); border: 1px solid #1e293b;">
          
          <!-- Top Gradient Accent Bar -->
          <tr>
            <td style="height: 6px; background: linear-gradient(90deg, #10b981 0%, #2563eb 50%, #7c3aed 100%); font-size: 0; line-height: 0;">&nbsp;</td>
          </tr>

          <!-- Header / Brand Section -->
          <tr>
            <td style="background-color: #0f172a; padding: 32px 36px; text-align: left;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                <tr>
                  <td>
                    <table role="presentation" cellspacing="0" cellpadding="0" border="0">
                      <tr>
                        <td style="vertical-align: middle;">
                          <div style="width: 40px; height: 40px; background: linear-gradient(135deg, #10b981, #2563eb); border-radius: 10px; text-align: center; line-height: 40px; color: #ffffff; font-weight: 800; font-size: 20px; letter-spacing: -0.5px;">
                            H
                          </div>
                        </td>
                        <td style="vertical-align: middle; padding-left: 14px;">
                          <div style="font-size: 22px; font-weight: 700; color: #ffffff; letter-spacing: -0.3px; line-height: 1.1;">
                            Hexanx
                          </div>
                          <div style="font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; color: #94a3b8; font-weight: 600; margin-top: 3px;">
                            Strategy Consultation
                          </div>
                        </td>
                      </tr>
                    </table>
                  </td>
                  <td align="right" style="vertical-align: middle;">
                    <span style="display: inline-block; background-color: rgba(16, 185, 129, 0.15); border: 1px solid rgba(16, 185, 129, 0.4); color: #34d399; font-size: 11px; font-weight: 700; padding: 6px 14px; border-radius: 9999px; text-transform: uppercase; letter-spacing: 0.8px;">
                      Call Requested
                    </span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Main Content Area -->
          <tr>
            <td style="padding: 40px 36px 30px 36px; background-color: #ffffff;">
              <h1 style="margin: 0 0 16px 0; font-size: 24px; font-weight: 700; color: #0f172a; line-height: 1.3;">
                Strategy Session Logged, ${safeName}!
              </h1>
              
              <p style="margin: 0 0 20px 0; font-size: 15px; line-height: 1.6; color: #475569;">
                Your request for an enterprise strategy session with Hexanx has been successfully recorded. An expert from our technical leadership team will reach out shortly to align calendars and provide your direct meeting link.
              </p>

              <!-- Meeting Details Summary Card -->
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 14px; margin: 28px 0; padding: 22px 24px;">
                <tr>
                  <td>
                    <div style="font-size: 11px; font-weight: 800; text-transform: uppercase; color: #64748b; letter-spacing: 1px; margin-bottom: 16px;">
                      Requested Session Details
                    </div>

                    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                      <tr>
                        <td style="padding-bottom: 10px; width: 40%; font-size: 13px; color: #64748b;">Reference Code:</td>
                        <td style="padding-bottom: 10px; font-size: 13px; font-weight: 700; color: #2563eb; font-family: monospace;">${safeRef}</td>
                      </tr>
                      <tr>
                        <td style="padding-bottom: 10px; font-size: 13px; color: #64748b;">Selected Solution:</td>
                        <td style="padding-bottom: 10px; font-size: 14px; font-weight: 700; color: #0f172a;">${safeService}</td>
                      </tr>
                      <tr>
                        <td style="padding-bottom: 10px; font-size: 13px; color: #64748b;">Preferred Date:</td>
                        <td style="padding-bottom: 10px; font-size: 14px; font-weight: 600; color: #0f172a;">${safeDate}</td>
                      </tr>
                      <tr>
                        <td style="padding-bottom: 10px; font-size: 13px; color: #64748b;">Preferred Time:</td>
                        <td style="padding-bottom: 10px; font-size: 14px; font-weight: 600; color: #0f172a;">${safeTime} (IST)</td>
                      </tr>
                      <tr>
                        <td style="font-size: 13px; color: #64748b;">Session Format:</td>
                        <td style="font-size: 13px; font-weight: 600; color: #10b981;">1-on-1 Virtual Video Conference (Google Meet)</td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <!-- What to Expect in the Session -->
              <div style="margin: 32px 0 24px 0;">
                <h3 style="margin: 0 0 16px 0; font-size: 14px; font-weight: 800; text-transform: uppercase; letter-spacing: 1px; color: #0f172a;">
                  What We Will Cover
                </h3>
                
                <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                  <tr>
                    <td style="vertical-align: top; width: 28px; padding-bottom: 14px;">
                      <span style="color: #10b981; font-size: 18px; font-weight: bold;">&#10003;</span>
                    </td>
                    <td style="vertical-align: top; padding-left: 8px; padding-bottom: 14px;">
                      <div style="font-size: 14px; font-weight: 600; color: #0f172a;">Live Workflow Walkthrough</div>
                      <div style="font-size: 13px; color: #64748b; line-height: 1.4; margin-top: 2px;">
                        Interactive demonstration addressing your specific organizational pain points.
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td style="vertical-align: top; width: 28px; padding-bottom: 14px;">
                      <span style="color: #10b981; font-size: 18px; font-weight: bold;">&#10003;</span>
                    </td>
                    <td style="vertical-align: top; padding-left: 8px; padding-bottom: 14px;">
                      <div style="font-size: 14px; font-weight: 600; color: #0f172a;">Data Migration &amp; Security Architecture</div>
                      <div style="font-size: 13px; color: #64748b; line-height: 1.4; margin-top: 2px;">
                        Zero-downtime data transition strategy, compliance, and custom API integration pathways.
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td style="vertical-align: top; width: 28px;">
                      <span style="color: #10b981; font-size: 18px; font-weight: bold;">&#10003;</span>
                    </td>
                    <td style="vertical-align: top; padding-left: 8px;">
                      <div style="font-size: 14px; font-weight: 600; color: #0f172a;">Transparent Enterprise ROI &amp; Pricing</div>
                      <div style="font-size: 13px; color: #64748b; line-height: 1.4; margin-top: 2px;">
                        Custom tailored plans, implementation support, and dedicated SLA options.
                      </div>
                    </td>
                  </tr>
                </table>
              </div>

              <!-- Button CTA -->
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="margin-top: 32px; padding-top: 24px; border-top: 1px solid #f1f5f9;">
                <tr>
                  <td align="center">
                    <a href="https://www.hexanx.in" target="_blank" rel="noopener noreferrer" style="display: inline-block; background: linear-gradient(135deg, #10b981, #2563eb); color: #ffffff; font-size: 14px; font-weight: 700; text-decoration: none; padding: 14px 32px; border-radius: 9999px; box-shadow: 0 10px 15px -3px rgba(16, 185, 129, 0.3);">
                      Visit Hexanx Platform &rarr;
                    </a>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Corporate Footer -->
          <tr>
            <td style="background-color: #0f172a; padding: 28px 36px; border-top: 1px solid #1e293b; color: #94a3b8; font-size: 12px; line-height: 1.6;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                <tr>
                  <td>
                    <div style="color: #f8fafc; font-weight: 600; font-size: 13px; margin-bottom: 4px;">
                      Hexanx Pvt Ltd
                    </div>
                    <div>Santoshi Nagar, Raipur, Chhattisgarh 492001, India</div>
                    <div style="margin-top: 6px;">
                      Questions or reschedule request? Email <a href="mailto:contact@hexanx.in" style="color: #34d399; text-decoration: none;">contact@hexanx.in</a> &bull; <a href="https://www.hexanx.in" style="color: #34d399; text-decoration: none;">www.hexanx.in</a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td style="padding-top: 18px; border-top: 1px solid #1e293b; margin-top: 18px; font-size: 11px; color: #64748b;">
                    This confirmation email was sent to ${safeEmail} following your strategy call booking on Hexanx.
                  </td>
                </tr>
              </table>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}
