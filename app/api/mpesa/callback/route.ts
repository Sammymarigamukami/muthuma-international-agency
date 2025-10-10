// app/api/mpesa/callback/route.ts
import { NextRequest, NextResponse } from "next/server";
import { db } from "@/dp/drizzle";
import { payment, orders } from "@/dp/schema";
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

      // Update payment
      await db
        .update(payment)
        .set(updateData)
        .where(eq(payment.checkoutRequestId, checkoutRequestId));

      // Get the payment row so we know which order it belongs to
      const [updatedPayment] = await db
        .select()
        .from(payment)
        .where(eq(payment.checkoutRequestId, checkoutRequestId));

      if (updatedPayment?.orderId) {
        // Update the related order status
        await db
          .update(orders)
          .set({ status: "SUCCESS"})
          .where(eq(orders.id, updatedPayment.orderId));
      }
    } else {
      // mark as failed in both tables
      await db
        .update(payment)
        .set({
          status: "FAILED",
          receiptNumber: null,
          updatedAt: new Date(),
        })
        .where(eq(payment.checkoutRequestId, checkoutRequestId));

      const [failedPayment] = await db
        .select()
        .from(payment)
        .where(eq(payment.checkoutRequestId, checkoutRequestId));

      if (failedPayment?.orderId) {
        await db
          .update(orders)
          .set({ status: "FAILED" })
          .where(eq(orders.id, failedPayment.orderId));
      }

      console.warn(`STK Push failed: ${resultDesc}`);
    }

    // ✅ Always return 200 so Safaricom doesn’t retry
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("Callback error:", err);
    return NextResponse.json({ success: false }, { status: 200 }); // still 200 to stop retries
  }
}