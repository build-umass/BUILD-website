import type { NextApiRequest, NextApiResponse } from "next";

const RESEND_API_KEY = process.env.RESEND_API_KEY;
const PERSONAL_EMAIL = process.env.PERSONAL_EMAIL;

interface ContactForm {
  name: string;
  email: string;
  organization?: string;
  subject: string;
  message: string;
}

function isValidEmail(email: string): boolean {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ detail: "Method not allowed" });
  }

  if (!RESEND_API_KEY || !PERSONAL_EMAIL) {
    console.error("Missing RESEND_API_KEY or PERSONAL_EMAIL environment variables");
    return res.status(500).json({ detail: "Server configuration error" });
  }

  const { name, email, organization, subject, message }: ContactForm = req.body;

  // Validation
  if (!name || name.trim().length < 2) {
    return res.status(400).json({ detail: "Name must be at least 2 characters" });
  }

  if (!email || !isValidEmail(email)) {
    return res.status(400).json({ detail: "Invalid email format" });
  }

  if (!subject) {
    return res.status(400).json({ detail: "Subject is required" });
  }

  if (!message || message.trim().length < 10) {
    return res.status(400).json({ detail: "Message must be at least 10 characters" });
  }

  const htmlContent = `
    <h2>New Contact Form Submission</h2>
    <p><strong>From:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Organization:</strong> ${organization || "N/A"}</p>
    <p><strong>Subject:</strong> ${subject}</p>
    <hr>
    <p><strong>Message:</strong></p>
    <p>${message}</p>
  `;

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "BUILD UMass <onboarding@resend.dev>",
        to: [PERSONAL_EMAIL],
        subject: `BUILD Website Contact: ${subject}`,
        html: htmlContent,
        reply_to: [email],
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Resend API error:", errorText);
      return res.status(500).json({ detail: "Failed to send email" });
    }

    return res.status(200).json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    return res.status(500).json({ detail: "An unexpected error occurred" });
  }
}
