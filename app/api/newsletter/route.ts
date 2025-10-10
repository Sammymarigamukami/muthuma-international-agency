import { NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  try {
    const { email } = await req.json()

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 })
    }

    //  Sandbox mode: only send to YOUR OWN email until domain is verified
    const data = await resend.emails.send({
      from: "onboarding@resend.dev", // Sandbox sender
      to: "marigasam18@gmail.com",   // Replace with YOUR email
      subject: "New Newsletter Signup",
      html: `<p>${email} just subscribed to your newsletter.</p>`,
    })

    return NextResponse.json({ success: true, data })
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || "Failed to subscribe" },
      { status: 500 }
    )
  }
}

