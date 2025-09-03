import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "@/dp/drizzle";
import { Resend } from "resend";
import { nextCookies } from "better-auth/next-js";
import { schema } from "@/dp/schema";
import { renderAsync } from "@react-email/components";
import VerifyEmail from "@/components/emails/verify-email";
import ForgotPasswordEmail from "@/components/emails/reset-password";

const resend = new Resend(process.env.RESEND_API_KEY as string);
 
export const auth = betterAuth({
  secret: process.env.BETTER_AUTH_SECRET!,
  baseURL: process.env.BETTER_AUTH_URL,
  emailVerification: {
        sendVerificationEmail: async ({ user, url }) => {
            await resend.emails.send({
                from: `${process.env.EMAIL_SENDER_NAME} <${process.env.EMAIL_SENDER_ADDRESS}>`,
                to: user.email,
                subject: "Verify your email",
                react: VerifyEmail({ username: user.name, verifyUrl: url }),
            });
        },
        sendOnSignUp: true,
        autoSignInAfterVerification: true,
		    expiresIn: 3600 // 1 hour
    },
    emailAndPassword: {
    enabled: true,
    sendResetPassword: async ({ user, url }) => {
      try {
        const emailHtml = await renderAsync(
          ForgotPasswordEmail({
            username: user.name ?? "User",
            resetUrl: url,
            userEmail: user.email,
          })
        );

        const result = await resend.emails.send({
          from: `${process.env.EMAIL_SENDER_NAME} <${process.env.EMAIL_SENDER_ADDRESS}>`,
          to: user.email,
          subject: "Reset your password",
          html: emailHtml,
        });
      

        console.log("✅ Reset password email sent:", result);
      } catch (error: any) {
        console.error("❌ Error sending reset password email:", error);
      }
    },
    requireEmailVerification: true
  },
    database: drizzleAdapter(db, {
        provider: "pg", 
        schema,
    }),
    plugins: [nextCookies()],

      cors: {
    origin: [
      "http://localhost:3000", // dev frontend
      "https://holland-and-barrett-site-xu6q.vercel.app", // prod frontend
    ],
    credentials: true,
  },
});