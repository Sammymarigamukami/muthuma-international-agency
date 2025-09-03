// app/api/mpesa/status/route.ts
import { NextRequest, NextResponse } from "next/server";
import { db } from "@/dp/drizzle";
import { payment } from "@/dp/schema";
import { eq } from "drizzle-orm";

export async function GET(req: NextRequest) {
  try {
    // Extract checkoutRequestId from query string
    const checkoutRequestId = req.nextUrl.searchParams.get("checkoutRequestId");

    if (!checkoutRequestId) {
      return NextResponse.json(
        { error: "Missing checkoutRequestId" },
        { status: 400 }
      );
    }

    // Query database for payment record
    const [record] = await db
      .select()
      .from(payment)
      .where(eq(payment.checkoutRequestId, checkoutRequestId));

    if (!record) {
      return NextResponse.json(
        { error: "Payment not found" },
        { status: 404 }
      );
    }

    // Return the status of payment
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

