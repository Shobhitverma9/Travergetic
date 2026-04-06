"use server";

import { ServerClient } from "postmark";

const client = new ServerClient(process.env.POSTMARK_API_TOKEN || "");

export async function sendContactEmail(data: {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  service: string;
  message: string;
}) {
  const recipientEmail = process.env.CONTACT_RECIPIENT_EMAIL || "sales@travergetic.com";
  const senderEmail = process.env.POSTMARK_SENDER_EMAIL || "sales@travergetic.com";

  try {
    await client.sendEmail({
      From: senderEmail,
      To: recipientEmail,
      Subject: `New Contact Form Submission: ${data.service}`,
      HtmlBody: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone || "N/A"}</p>
        <p><strong>Company:</strong> ${data.company || "N/A"}</p>
        <p><strong>Service:</strong> ${data.service}</p>
        <p><strong>Message:</strong></p>
        <p>${data.message.replace(/\n/g, "<br/>")}</p>
      `,
      TextBody: `
        New Contact Form Submission
        Name: ${data.name}
        Email: ${data.email}
        Phone: ${data.phone || "N/A"}
        Company: ${data.company || "N/A"}
        Service: ${data.service}
        Message: ${data.message}
      `,
      ReplyTo: data.email,
    });

    return { success: true };
  } catch (error: any) {
    console.error("Postmark Error:", error);
    return { success: false, error: error.message || "Failed to send email" };
  }
}
