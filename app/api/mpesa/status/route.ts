// app/api/mpesa/status/route.ts
import { NextResponse } from "next/server";
import { db } from "@/dp/drizzle";
import { payment } from "@/dp/schema";
import { eq } from "drizzle-orm";

export async function GET(req: Request) {
  try {
    // ✅ Extract checkoutRequestId from query string
    const { searchParams } = new URL(req.url);
    const checkoutRequestId = searchParams.get("checkoutRequestId");

    if (!checkoutRequestId) {
      return NextResponse.json(
        { error: "Missing checkoutRequestId" },
        { status: 400 }
      );
    }

    // ✅ Query database for payment record
    const records = await db
      .select()
      .from(payment)
      .where(eq(payment.checkoutRequestId, checkoutRequestId))
      .limit(1)
      .execute();

    const record = records[0];

    if (!record) {
      return NextResponse.json(
        { error: "Payment not found" },
        { status: 404 }
      );
    }

    // ✅ Return the status of payment
    return NextResponse.json({
      checkoutRequestId: record.checkoutRequestId,
      status: record.status,
      amount: record.amount,
      phoneNumber: record.phone,
      createdAt: record.createdAt,
    });
  } catch (error) {
    console.error("Error fetching payment status:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
