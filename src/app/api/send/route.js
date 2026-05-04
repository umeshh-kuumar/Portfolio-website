import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

export async function POST(req) {
  const { email, subject, message } = await req.json();
  console.log(email, subject, message);

  if (!resend) {
    return NextResponse.json({ error: "Email service not configured" }, { status: 500 });
  }

  try {
    const data = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: ["246810umesh@gmail.com"],
      subject: subject,
      html: `
        <h1>${subject}</h1>
        <p>New message from: ${email}</p>
        <p>${message}</p>
      `,
    });
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
