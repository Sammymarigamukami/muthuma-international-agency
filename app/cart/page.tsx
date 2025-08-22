"use client"

import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation";
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { useCart } from "@/contexts/cart-context"
import { useAppContext } from "@/contexts/AppContext"

export default function CartPage() {
  const { items, updateQuantity, removeItem, getTotal, getItemCount } = useCart()
  const {user, setShowUserLogin } = useAppContext()

  console.log("Current user state:", user);
  console.log("Is user logged in?", !!user);

  const router = useRouter();

  const handleCheckout = () => {
    if (!user) {
      console.log("User not logged in, showing login form.");
      setShowUserLogin(true);
      return;
    }
    console.log("User logged in, proceeding to checkout.");
    router.push("/checkout")
  }

  {/*const handleCheckout = () => {
  if (!user) {
    console.log("User not logged in, showing login form.");
    setShowUserLogin(true);
    return;
  }
  router.push("/cart")
  // Your business WhatsApp number
  const phone = "254715907311";

  // Build message from cart items
  const cartMessage = items
    .map(item => `${item.quantity} x ${item.name} @ KSh${item.price.toFixed(2)} = KSh${(item.price * item.quantity).toFixed(2)}`)
    .join("\n");

  const message = encodeURIComponent(
    `Hello, I want to place an order:\n\n${cartMessage}\n\nTotal: KSh ${getTotal().toFixed(2)}`
  );

  // Open WhatsApp
  window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
};*/}


  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="text-center space-y-6">
          <ShoppingBag className="h-24 w-24 mx-auto text-gray-300" />
          <h1 className="text-3xl font-bold text-gray-900">Your cart is empty</h1>
          <p className="text-gray-600">Start shopping to add items to your cart</p>
          <Button asChild className="bg-green-600 hover:bg-green-700">
            <Link href="/products">Continue Shopping</Link>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Shopping Cart</h1>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-4">
          {items.map((item) => (
            <Card key={item.id}>
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="relative w-20 h-20 rounded-lg overflow-hidden bg-gray-100">
                    <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                  </div>

                  <div className="flex-1 space-y-2">
                    <h3 className="font-medium text-gray-900">{item.name}</h3>
                    <p className="text-sm text-gray-500">{item.category}</p>
                    <p className="font-bold text-green-600">KSh{item.price.toFixed(2)}</p>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      disabled={item.quantity <= 1}
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="w-12 text-center font-medium">{item.quantity}</span>
                    <Button variant="outline" size="icon" onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>

                  <div className="text-right">
                    <p className="font-bold text-gray-900">Ksh{(item.price * item.quantity).toFixed(2)}</p>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => removeItem(item.id)}
                      className="text-red-600 hover:text-red-700 hover:bg-red-50"
                    >
                      <Trash2 className="h-4 w-4 mr-1" />
                      Remove
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle>Order Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between">
                <span>Items ({getItemCount()})</span>
                <span>Ksh{getTotal().toFixed(2)}</span>
              </div>

              <div className="flex justify-between">
                <span>Delivery</span>
                <span className="text-green-600">NOT FREE</span>
              </div>

              <div className="flex justify-between">
                <span>Ksh{(getTotal()).toFixed(2)}</span>
              </div>

              <Separator />

              <div className="flex justify-between font-bold text-lg">
                <span>Total</span>
                <span>KSh{(getTotal()).toFixed(2)}</span>
              </div>

              <Button asChild className="w-full bg-green-600 hover:bg-green-700" size="lg"
              onClick={handleCheckout}
              ><Link href={"/checkout"} >Proceed to Checkout</Link></Button>

              <Button variant="outline" className="w-full bg-transparent" asChild
              >
                <Link href="/products">Continue Shopping</Link>
              </Button>

              <div className="text-center text-sm text-gray-500 pt-4">
                <p>Free delivery on orders over Ksh2500</p>
                <p>30-day money-back guarantee</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
