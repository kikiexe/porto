import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import nodemailer from 'nodemailer';
import { EMAIL_USER, EMAIL_PASS } from '$env/static/private';

export const POST: RequestHandler = async ({ request }) => {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return json({ success: false, error: 'All fields are required.' }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASS
      }
    });

    await transporter.sendMail({
      from: `"Portfolio Contact" <${EMAIL_USER}>`,
      to: EMAIL_USER,
      replyTo: email,
      subject: `Portfolio — Message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      html: `
        <div style="font-family: sans-serif; max-width: 560px;">
          <p style="color: #6b6b6b; font-size: 12px; text-transform: uppercase; letter-spacing: 2px;">New message from portfolio</p>
          <hr style="border: none; border-top: 1px solid #d4cdc5; margin: 16px 0;" />
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <hr style="border: none; border-top: 1px solid #d4cdc5; margin: 16px 0;" />
          <p style="white-space: pre-wrap;">${message}</p>
        </div>
      `
    });

    return json({ success: true });
  } catch (err) {
    console.error('Email send error:', err);
    return json({ success: false, error: 'Failed to send message.' }, { status: 500 });
  }
};
