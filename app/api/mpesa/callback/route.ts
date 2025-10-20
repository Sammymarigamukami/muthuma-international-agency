// app/api/mpesa/callback/route.ts
export const dynamic = "force-dynamic";
export const runtime = "nodejs";

import { NextRequest, NextResponse } from "next/server";
import { db } from "@/dp/drizzle";
import { payment, orders } from "@/dp/schema";
import { eq } from "drizzle-orm";

export async function GET() {
  console.log("✅ MPESA Callback route accessed via GET");
  return NextResponse.json({
    message: "Callback route live  - POST required for STK callback",
  });
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    console.log(" Callback body:", JSON.stringify(body, null, 2));

    const result = body.Body?.stkCallback;
    if (!result) {
      return NextResponse.json(
        { success: false, error: "Invalid callback body" },
        { status: 400 }
      );
    }

    const checkoutRequestId = result.CheckoutRequestID;
    const resultCode = result.ResultCode;
    const resultDesc = result.ResultDesc;

    if (resultCode === 0) {
      //  Payment success
      const metadata = result.CallbackMetadata?.Item || [];
      const amount = metadata.find((i: any) => i.Name === "Amount")?.Value;
      const receiptNumber = metadata.find(
        (i: any) => i.Name === "MpesaReceiptNumber"
      )?.Value;
      const phone = metadata.find((i: any) => i.Name === "PhoneNumber")?.Value;

      const updateData: any = {
        status: "SUCCESS",
        updatedAt: new Date(),
        receiptNumber: receiptNumber || null,
      };

      if (amount) updateData.amount = amount;
      if (phone) updateData.phone = phone;

      await db
        .update(payment)
        .set(updateData)
        .where(eq(payment.checkoutRequestId, checkoutRequestId));

      const [updatedPayment] = await db
        .select()
        .from(payment)
        .where(eq(payment.checkoutRequestId, checkoutRequestId));

      if (updatedPayment?.orderId) {
        await db
          .update(orders)
          .set({ status: "SUCCESS" })
          .where(eq(orders.id, updatedPayment.orderId));
      }

      console.log("✅ Payment updated successfully:", updateData);
    } else {
      //  Payment failed
      await db
        .update(payment)
        .set({
          status: "FAILED",
          updatedAt: new Date(),
          receiptNumber: null,
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

      console.warn(`⚠️ STK Push failed: ${resultDesc}`);
    }

    // Safaricom requires HTTP 200 OK always
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error(" Callback error:", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
