// app/api/send-order/route.ts
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { customerInfo, items, total, receiptNumber } = body;

    if (!customerInfo?.email) {
      return NextResponse.json({ error: "Customer email missing" }, { status: 400 });
    }

    // Compose the email content
    const html = `
      <h2>✅ New Order Received</h2>
      <p><b>Name:</b> ${customerInfo.firstName} ${customerInfo.lastName}</p>
      <p><b>Email:</b> ${customerInfo.email}</p>
      <p><b>Phone:</b> ${customerInfo.phone}</p>
      <p><b>Address:</b> ${customerInfo.address}, ${customerInfo.city}, ${customerInfo.postalCode}</p>
      <p><b>Total:</b> KSh ${total}</p>
      <p><b>Receipt Number:</b> ${receiptNumber}</p>
      <h3>Items:</h3>
      <ul>
        ${items.map((item: any) => `<li>${item.name} x${item.quantity} - KSh ${item.price}</li>`).join("")}
      </ul>
    `;

    // Send email using Resend API
    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: `${process.env.EMAIL_SENDER_NAME} <${process.env.EMAIL_SENDER_ADDRESS}>`,
        to: [process.env.EMAIL_RECEIVER_ADDRESS],
        subject: `🛒 New Order - ${receiptNumber}`,
        html,
      }),
    });

    if (!resendResponse.ok) {
      const errorText = await resendResponse.text();
      console.error("Resend API error:", errorText);
      throw new Error("Failed to send email via Resend API");
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Send order email failed:", error);
    return NextResponse.json({ error: "Failed to send order email" }, { status: 500 });
  }
}

