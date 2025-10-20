// app/api/mpesa/stkpush/route.ts
import { NextRequest, NextResponse } from "next/server";
import { db } from "@/dp/drizzle";
import { orders, payment } from "@/dp/schema";
import {
  getAccessToken,
  mpesaTimestamp,
  buildStkPassword,
  normalizeMsisdn,
  darajaBase,
} from "@/lib/mpesa";
import { auth } from "@/lib/auth";

// ✅ Prevent static build evaluation
export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  try {
    const session = await auth.api.getSession({ headers: req.headers });
    if (!session) {
      return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 });
    }

    const body = await req.json();
    const { phone, amount, customerInfo, items } = body;

    if (!phone || !amount || isNaN(amount) || !customerInfo || !items) {
      return NextResponse.json({ success: false, error: "Missing or invalid data" }, { status: 400 });
    }

    const userId = session.user.id;
    const email = session.user.email!;

    const [newOrder] = await db
      .insert(orders)
      .values({
        userEmail: email,
        totalAmount: amount,
        status: "PENDING",
        createdAt: new Date(),
      })
      .returning();

    const orderId = newOrder.id;

    const timestamp = mpesaTimestamp();
    const shortcode = process.env.DARAJA_SHORTCODE!;
    const passkey = process.env.DARAJA_PASSKEY!;
    const password = buildStkPassword(shortcode, passkey, timestamp);
    const token = await getAccessToken();

    const res = await fetch(`${darajaBase}/mpesa/stkpush/v1/processrequest`, {
      method: "POST",
      headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        BusinessShortCode: shortcode,
        Password: password,
        Timestamp: timestamp,
        TransactionType: "CustomerPayBillOnline",
        Amount: amount,
        PartyA: normalizeMsisdn(phone),
        PartyB: shortcode,
        PhoneNumber: normalizeMsisdn(phone),
        CallBackURL: `${process.env.BASE_URL}/api/mpesa/callback`,
        AccountReference: `Order-${orderId}`,
        TransactionDesc: "Payment",
      }),
    });

    if (!res.ok) {
      console.error("STK Push request failed:", await res.text());
      return NextResponse.json({ success: false, error: "STK Push request failed" }, { status: 500 });
    }

    const data = await res.json();

    await db.insert(payment).values({
      userId,
      email,
      phone: normalizeMsisdn(phone),
      amount,
      status: "PENDING",
      merchantRequestId: data.MerchantRequestID || null,
      checkoutRequestId: data.CheckoutRequestID || null,
      customerInfo,
      items,
    });

    return NextResponse.json({
      success: true,
      orderId,
      merchantRequestId: data.MerchantRequestID,
      checkoutRequestId: data.CheckoutRequestID,
      responseCode: data.ResponseCode,
      customerMessage: data.CustomerMessage,
    });

  } catch (err) {
    console.error("STK Push error:", err);
    return NextResponse.json({ success: false, error: "STK push failed" }, { status: 500 });
  }
}
