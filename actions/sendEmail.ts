"use server";

import { Resend } from "resend";
import { validateString } from "@/lib/utils";

const resend = new Resend(process.env.RESEND_API_KEY);



export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get('senderEmail');
  const message = formData.get('message');

  if (!validateString(senderEmail, 500)) {
    return { 
      error: "Invalid sender email" 
    };
  }

  if (!validateString(message, 5000)) {
    return {
      error: "Invalid message"
    };
  }

  // simple server validation
  try {
    await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>',
      to: 'igorkostoski@ymail.com',
      subject: 'Message from contact form',
      reply_to: senderEmail as string,
      text: message as string,
    });
    return {
      success: true
    };
  } catch (error: unknown) {
    console.log(error);
    return {
      error: "Failed to send email"
    };
  }
};
