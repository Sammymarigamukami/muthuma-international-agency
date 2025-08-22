// app/api/mpesa/callback/route.ts
import { NextRequest, NextResponse } from "next/server";
import { db } from "@/dp/drizzle";
import { payment } from "@/dp/schema";
import { eq } from "drizzle-orm";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    console.log("Callback body:", JSON.stringify(body, null, 2));

    const result = body.Body?.stkCallback;
    if (!result) {
      return NextResponse.json(
        { success: false, error: "Invalid callback body" },
        { status: 400 }
      );
    }

    const checkoutRequestId = result.CheckoutRequestID;
    const resultCode = result.ResultCode; // 0 = success
    const resultDesc = result.ResultDesc;

    if (resultCode === 0) {
      // Extract metadata safely
      const metadata = result.CallbackMetadata?.Item || [];
      const amount = metadata.find((i: any) => i.Name === "Amount")?.Value;
      const receiptNumber = metadata.find(
        (i: any) => i.Name === "MpesaReceiptNumber"
      )?.Value;
      const phone = metadata.find((i: any) => i.Name === "PhoneNumber")?.Value;

      const updateData: any = {
        status: "SUCCESS",
        receiptNumber: receiptNumber || null,
        updatedAt: new Date(),
      };

      if (amount) updateData.amount = amount;
      if (phone) updateData.phone = phone;

      await db
        .update(payment)
        .set(updateData)
        .where(eq(payment.checkoutRequestId, checkoutRequestId));
    } else {
      // mark as failed and keep the failure reason for debugging
      await db
        .update(payment)
        .set({
          status: "FAILED",
          receiptNumber: null,
          updatedAt: new Date(),
        })
        .where(eq(payment.checkoutRequestId, checkoutRequestId));

      console.warn(`STK Push failed: ${resultDesc}`);
    }

    // Always return 200 so Safaricom doesn't retry the callback
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("Callback error:", err);
    // still return 200 to prevent Safaricom retries
    return NextResponse.json({ success: false }, { status: 200 });
  }
}
