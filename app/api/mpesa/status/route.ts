import { NextRequest, NextResponse } from "next/server"
import { db } from "@/dp/drizzle"
import { payment } from "@/dp/schema"
import { eq } from "drizzle-orm"

export async function GET(req: NextRequest) {
  try {
    const checkoutRequestId = req.nextUrl.searchParams.get("checkoutRequestId")

    if (!checkoutRequestId) {
      return NextResponse.json(
        { error: "Missing checkoutRequestId" },
        { status: 400 }
      )
    }

    const [record] = await db
      .select()
      .from(payment)
      .where(eq(payment.checkoutRequestId, checkoutRequestId))

    if (!record) {
      return NextResponse.json({ error: "Payment not found" }, { status: 404 })
    }

    return NextResponse.json(record)
  } catch (err) {
    console.error("Status API error:", err)
    return NextResponse.json({ error: "Failed to fetch status" }, { status: 500 })
  }
}
