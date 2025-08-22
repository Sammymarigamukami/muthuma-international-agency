// app/api/mpesa/stkpush/route.ts
import { NextRequest, NextResponse } from "next/server";
import { db } from "@/dp/drizzle";
import { payment } from "@/dp/schema";
import {
  getAccessToken,
  mpesaTimestamp,
  buildStkPassword,
  normalizeMsisdn,
  darajaBase,
} from "@/lib/mpesa";
import { auth } from "@/lib/auth"; // Better Auth

export async function POST(req: NextRequest) {
  try {
    // ✅ Ensure user is authenticated
    const session = await auth.api.getSession({ headers: req.headers });
    if (!session) {
      return NextResponse.json(
        { success: false, error: "Unauthorized" },
        { status: 401 }
      );
    }

    const { phone, amount } = await req.json();

    if (!phone || !amount || isNaN(amount)) {
      return NextResponse.json(
        { success: false, error: "Missing or invalid phone/amount" },
        { status: 400 }
      );
    }

    const userId = session.user.id;
    const email = session.user.email!;

    const timestamp = mpesaTimestamp();
    const shortcode = process.env.DARAJA_SHORTCODE!;
    const passkey = process.env.DARAJA_PASSKEY!;
    const password = buildStkPassword(shortcode, passkey, timestamp);

    const token = await getAccessToken();

    // 🔹 Request STK Push
    const res = await fetch(`${darajaBase}/mpesa/stkpush/v1/processrequest`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
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
        AccountReference: "MyShop",
        TransactionDesc: "Payment",
      }),
    });

    const data = await res.json();
    console.log("STK Push Response:", JSON.stringify(data, null, 2));

    // 🔹 Safely handle error from Safaricom
    if (data.errorCode || data.errorMessage) {
      return NextResponse.json(
        { success: false, error: data.errorMessage || "STK Push request failed" },
        { status: 400 }
      );
    }

    // 🔹 Save request to DB
    await db.insert(payment).values({
      userId,
      email,
      phone: normalizeMsisdn(phone),
      amount,
      status: "PENDING",
      merchantRequestId: data.MerchantRequestID || null,
      checkoutRequestId: data.CheckoutRequestID || null,
    });

    // 🔹 Return exactly what frontend expects
    return NextResponse.json({
      success: true,
      merchantRequestId: data.MerchantRequestID || null,
      checkoutRequestId: data.CheckoutRequestID || null,
      responseCode: data.ResponseCode || null,
      customerMessage: data.CustomerMessage || null,
    });
  } catch (err) {
    console.error("STK Push error:", err);
    return NextResponse.json(
      { success: false, error: "STK push failed" },
      { status: 500 }
    );
  }
}