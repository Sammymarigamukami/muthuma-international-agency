"use client";

import { useEffect, useState } from "react";

export default function OrdersPage() {
  const [orders, setOrders] = useState<any[]>([]);
  const [activeTab, setActiveTab] = useState<"PENDING" | "SUCCESS" | "FAILED">("PENDING");

  // Fetch orders + payment info
  const fetchOrders = async () => {
    try {
      const res = await fetch("/api/orders");
      const data = await res.json();
      if (Array.isArray(data)) {
        setOrders(data);
      } else {
        console.error("Unexpected orders response:", data);
      }
    } catch (err) {
      console.error("Failed to fetch orders:", err);
    }
  };

  // Run once + poll every 5s
  useEffect(() => {
    fetchOrders();
    const interval = setInterval(fetchOrders, 5000);
    return () => clearInterval(interval);
  }, []);

  // Filter by tab
  const filteredOrders = orders.filter((o) => o.status === activeTab);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">My Orders</h1>

      {/* Tabs */}
      <div className="flex gap-4 mb-6">
        {["PENDING", "SUCCESS", "FAILED"].map((status) => (
          <button
            key={status}
            onClick={() => setActiveTab(status as any)}
            className={`px-4 py-2 rounded-lg transition ${
              activeTab === status
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {status}
          </button>
        ))}
      </div>

      {/* Orders List */}
      <div className="space-y-4">
        {filteredOrders.length > 0 ? (
          filteredOrders.map((order) => (
            <div key={order.id} className="border rounded-lg p-4 shadow-sm bg-white">
              <p><strong>Order ID:</strong> {order.id}</p>
              <p><strong>Status:</strong> {order.status}</p>
              <p><strong>Total Amount:</strong> KES {order.totalAmount}</p>
              {order.checkoutRequestId && <p><strong>Checkout ID:</strong> {order.checkoutRequestId}</p>}
              {order.phone && <p><strong>Phone:</strong> {order.phone}</p>}
              {order.receiptNumber && <p><strong>Receipt:</strong> {order.receiptNumber}</p>}
              <p className="text-sm text-gray-500">{new Date(order.createdAt).toLocaleString()}</p>

              {/* Order Items */}
              {order.items && order.items.length > 0 && (
                <div className="mt-2">
                  <p className="font-semibold">Items:</p>
                  <ul className="pl-4 list-disc">
                    {order.items.map((item: any, idx: number) => (
                      <li key={idx}>
                        {item.productName} x {item.quantity} = KES {item.subtotal}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))
        ) : (
          <p className="text-gray-500">No {activeTab.toLowerCase()} orders.</p>
        )}
      </div>
    </div>
  );
}
