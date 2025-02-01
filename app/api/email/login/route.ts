import { Resend } from "resend";
import { NextResponse } from "next/server";
import RegistrationOTPEmail from "@/react-email-starter/emails/registration-otp-email";

const resend = new Resend("re_4yyJobCa_JtcwVtcacofPzgtti5b5FZn8");
export async function POST(request: Request) {
  let { otp, firstname } = await request.json();
  await resend.emails.send({
    from: "Acme <onboarding@resend.dev>",
    to: ["emekaeric12@gmail.com"],
    subject: "Capital Bank Verification",
    
    react: RegistrationOTPEmail({ otp, firstname }),
  });
  return NextResponse.json({ success: true, data: null, message: "OTP Sent" }, { status: 200 });
}