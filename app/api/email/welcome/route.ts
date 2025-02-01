import { Resend } from "resend";
import { NextResponse } from "next/server";
import WelcomeEmail from "@/react-email-starter/emails/welcome-email";

const resend = new Resend("re_4yyJobCa_JtcwVtcacofPzgtti5b5FZn8");
export async function POST(request: Request) {
  let { firstname, websiteURL, email, password } = await request.json();
  await resend.emails.send({
    from: "Acme <onboarding@resend.dev>",
    to: ["emekaeric12@gmail.com"],
    subject: "Airgoworld Verification",
    react: WelcomeEmail({ firstname, websiteURL, email, password }),
  });
  return NextResponse.json({ success: true, data: null, message: "OTP Sent" }, { status: 200 });
}