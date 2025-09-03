import { NextResponse } from "next/server"
import { db } from "@/dp/drizzle"
import { orders, orderItems, user } from "@/dp/schema"
import { eq } from "drizzle-orm"

// Create new order with multiple items
export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { userEmail, items } = body


    const userRecord = await db.select().from(user).where(eq(user.email, userEmail))
    if (userRecord.length === 0) {
      return NextResponse.json({ error: "User not found" }, { status: 404 })
    }
    if (!items || items.length === 0) {
      return NextResponse.json({ error: "No items in order" }, { status: 400 })
    }

    // Calculate total amount
    const totalAmount = items.reduce(
      (sum: number, item: any) => sum + item.quantity * item.price,
      0
    )

    // Create order
    const newOrder = await db
      .insert(orders)
      .values({
        userEmail,
        totalAmount,
        status: "success",
      })
      .returning()

    const orderId = newOrder[0].id

    // Insert order items
    const orderItemsData = items.map((item: any) => ({
      orderId,
      productName: item.productName,
      quantity: item.quantity,
      price: item.price,
      subtotal: item.quantity * item.price,
    }))

    await db.insert(orderItems).values(orderItemsData)

    return NextResponse.json(
      { ...newOrder[0], items: orderItemsData },
      { status: 201 }
    )
  } catch (err) {
    console.error("POST /api/orders error:", err)
    return NextResponse.json({ error: "Failed to create order" }, { status: 500 })
  }
}

// Update order (status change)
export async function PUT(req: Request) {
  try {
    const body = await req.json()

    const updatedOrder = await db
      .update(orders)
      .set({
        status: body.status,
      })
      .where(eq(orders.id, body.id))
      .returning()

    if (!updatedOrder.length) {
      return NextResponse.json({ error: "Order not found" }, { status: 404 })
    }

    return NextResponse.json(updatedOrder[0], { status: 200 })
  } catch (err) {
    console.error("PUT /api/orders error:", err)
    return NextResponse.json({ error: "Failed to update order" }, { status: 500 })
  }
}

// Get all orders with items
export async function GET() {
  try {
    const allOrders = await db.select().from(orders).orderBy(orders.createdAt)

    // Fetch items for each order
    const ordersWithItems = await Promise.all(
      allOrders.map(async (order) => {
        const items = await db
          .select()
          .from(orderItems)
          .where(eq(orderItems.orderId, order.id))

        return { ...order, items }
      })
    )

    return NextResponse.json(ordersWithItems)
  } catch (err) {
    console.error("GET /api/orders error:", err)
    return NextResponse.json({ error: "Failed to fetch orders" }, { status: 500 })
  }
}

