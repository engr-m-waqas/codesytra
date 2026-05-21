import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  // Only allow POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const { name, email, whatsapp, projectType, budgetRange, projectDetails } = req.body;

    // Validate inputs
    if (!name || !email || !projectType || !budgetRange || !projectDetails) {
      return res.status(400).json({ error: 'All fields are required.' });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Please provide a valid email address.' });
    }

    // Create transporter using environment variables set in Vercel dashboard
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.EMAIL_PORT || '587'),
      secure: process.env.EMAIL_SECURE === 'true' || process.env.EMAIL_PORT === '465',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"CodeSyntra Project Desk" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO || process.env.EMAIL_USER || 'codesyntraa@gmail.com',
      replyTo: email,
      subject: `🚀 New Project Request: ${projectType} from ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 12px; background-color: #0f172a; color: #f1f5f9;">
          <h2 style="color: #38bdf8; border-bottom: 2px solid #334155; padding-bottom: 10px; margin-bottom: 20px;">🚀 New Project Request Received</h2>
          
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #94a3b8; width: 140px;">Client Name:</td>
              <td style="padding: 8px 0; font-weight: bold; color: #ffffff;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #94a3b8;">Email Address:</td>
              <td style="padding: 8px 0; color: #38bdf8;"><a href="mailto:${email}" style="color: #38bdf8; text-decoration: none;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #94a3b8;">Phone / WhatsApp:</td>
              <td style="padding: 8px 0; color: #ffffff; font-weight: bold;">${whatsapp ? whatsapp : '<span style="color: #64748b; font-weight: normal;">Not Provided</span>'}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #94a3b8;">Project Type:</td>
              <td style="padding: 8px 0; color: #ffffff;"><span style="background-color: #1e293b; padding: 4px 10px; border-radius: 6px; font-size: 0.9em; border: 1px solid #334155;">${projectType}</span></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #94a3b8;">Budget Range:</td>
              <td style="padding: 8px 0; color: #10b981; font-weight: bold;">${budgetRange}</td>
            </tr>
          </table>

          <div style="background-color: #1e293b; padding: 16px; border-radius: 8px; border: 1px solid #334155;">
            <h4 style="margin-top: 0; color: #94a3b8; margin-bottom: 8px;">Project Specifications:</h4>
            <p style="margin: 0; line-height: 1.6; color: #f1f5f9; white-space: pre-wrap;">${projectDetails}</p>
          </div>

          <div style="margin-top: 30px; padding-top: 15px; border-top: 1px solid #334155; text-align: center; font-size: 0.8em; color: #64748b;">
            Sent automatically by the CodeSyntra API Portal.
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return res.status(200).json({
      success: true,
      message: 'Your message has been sent successfully. Our team will contact you soon.',
    });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ error: 'Failed to send email. Please try again later.' });
  }
}
