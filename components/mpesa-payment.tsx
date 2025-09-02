"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { useCart } from "@/contexts/cart-context"
import { sendTelegramMessage } from "@/lib/telegram"
import { useToast } from "@/hooks/use-toast"
import { toast } from "sonner"

import { Smartphone, CheckCircle, XCircle, Loader2, Shield, Clock, AlertTriangle } from "lucide-react"

interface MpesaPaymentProps {
  customerInfo: {
    firstName: string
    lastName: string
    email: string
    phone: string
    address: string
    city: string
    postalCode: string
  }
  total: number
  items: any[]
}

type PaymentStatus = "idle" | "initiating" | "pending" | "success" | "failed" | "timeout"

export function MpesaPayment({ customerInfo, total, items }: MpesaPaymentProps) {
  const [phoneNumber, setPhoneNumber] = useState(customerInfo.phone || "")
  const [paymentStatus, setPaymentStatus] = useState<PaymentStatus>("idle")
  const [transactionId, setTransactionId] = useState("")
  const [checkoutRequestId, setCheckoutRequestId] = useState("")
  const [countdown, setCountdown] = useState(0)
  const { clearCart } = useCart()

  // 🔹 Initiate real M-Pesa payment
  const initiateMpesaPayment = async () => {
    if (!phoneNumber || !phoneNumber.match(/^(\+254|254|0)[17]\d{8}$/)) {
      toast.error("Invalid Phone Number", {
    description: "Please enter a valid Kenyan phone number (e.g., +254712345678)",
    });
      return
    }

    setPaymentStatus("initiating")

    try {
      const res = await fetch("/api/mpesa/stkpush", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          phone: phoneNumber,
          amount: total,
          email: customerInfo.email,
          userId: customerInfo.email, // adjust if you store differently
        }),
      })

      if (!res.ok) throw new Error("Failed to initiate payment")
      const data = await res.json()

      setCheckoutRequestId(data.checkoutRequestId)
      setTransactionId(data.merchantRequestId || "")
      setPaymentStatus("pending")
      setCountdown(60)

      toast.success("Payment Request Sent", {
      description: `Check your phone ${phoneNumber} for the M-Pesa prompt`,
   });

      // Start countdown
      let timeLeft = 60
      const countdownInterval = setInterval(() => {
        timeLeft--
        setCountdown(timeLeft)
        if (timeLeft <= 0) {
          clearInterval(countdownInterval)
          setPaymentStatus("timeout")
        }
      }, 1000)

      // Poll backend for status updates
      const pollInterval = setInterval(async () => {
        const statusRes = await fetch(`/api/mpesa/status?checkoutRequestId=${data.checkoutRequestId}`)
        const statusData = await statusRes.json()

     if (statusData.status === "SUCCESS") {
     clearInterval(countdownInterval)
     clearInterval(pollInterval)
     setPaymentStatus("success")

     toast.success("Payment Successful!", {
     description: `Transaction ${statusData.receiptNumber} completed successfully`,
    });

  // Send customer info to Telegram
  const message = `
✅ New Payment Received:
Name: ${customerInfo.firstName} ${customerInfo.lastName}
Email: ${customerInfo.email}
Phone: ${phoneNumber}
Amount Paid: KSh ${total.toFixed(0)}
Transaction ID: ${statusData.receiptNumber}
  `;
  await sendTelegramMessage(message);

  setTimeout(() => clearCart(), 2000)
}


        if (statusData.status === "FAILED") {
          clearInterval(countdownInterval)
          clearInterval(pollInterval)
          setPaymentStatus("failed")
          toast.error("Payment Failed", {
          description: statusData.failureReason || "Transaction failed.",
       });
        }
      }, 5000) // poll every 5s
    } catch (error) {
      console.error(error)
      setPaymentStatus("failed")
      toast.error("Payment Error", {
      description: "Failed to initiate payment. Please try again.",
    });
    }
  }

  const resetPayment = () => {
    setPaymentStatus("idle")
    setTransactionId("")
    setCheckoutRequestId("")
    setCountdown(0)
  }

  const formatPhoneNumber = (phone: string) => {
    let formatted = phone.replace(/\D/g, "")
    if (formatted.startsWith("0")) formatted = "254" + formatted.slice(1)
    if (!formatted.startsWith("254")) formatted = "254" + formatted
    return "+" + formatted
  }

  const handlePhoneChange = (value: string) => {
    setPhoneNumber(formatPhoneNumber(value))
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Smartphone className="h-5 w-5 text-green-600" />
          <span>M-Pesa Payment</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* ----- IDLE ----- */}
        {paymentStatus === "idle" && (
          <>
            <div>
              <Label htmlFor="mpesa-phone">M-Pesa Phone Number</Label>
              <Input
                id="mpesa-phone"
                value={phoneNumber}
                onChange={(e) => handlePhoneChange(e.target.value)}
                placeholder="+254700000000"
                className="mt-1"
              />
              <p className="text-sm text-gray-500 mt-1">Enter the phone number registered with M-Pesa</p>
            </div>

            <div className="bg-green-50 p-4 rounded-lg">
              <div className="flex items-center space-x-2 mb-2">
                <Shield className="h-4 w-4 text-green-600" />
                <span className="text-sm font-medium text-green-800">Secure Payment</span>
              </div>
              <p className="text-sm text-green-700">You will receive a popup on your phone to enter your M-Pesa PIN</p>
            </div>

            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
              <span className="font-medium">Total Amount:</span>
              <span className="text-lg font-bold text-green-600">KSh {total.toFixed(0)}</span>
            </div>

            <Button onClick={initiateMpesaPayment} className="w-full bg-green-600 hover:bg-green-700" size="lg">
              Pay with M-Pesa
            </Button>
          </>
        )}

        {/* ----- INITIATING ----- */}
        {paymentStatus === "initiating" && (
          <div className="text-center py-8">
            <Loader2 className="h-8 w-8 animate-spin mx-auto mb-4 text-green-600" />
            <h3 className="text-lg font-medium mb-2">Initiating Payment...</h3>
            <p className="text-gray-600">Please wait while we process your request</p>
          </div>
        )}

        {/* ----- PENDING ----- */}
        {paymentStatus === "pending" && (
          <div className="text-center py-8">
            <Smartphone className="h-16 w-16 mx-auto text-green-600 animate-pulse mb-4" />
            <h3 className="text-lg font-medium mb-2">Check Your Phone</h3>
            <p className="text-gray-600 mb-4">
              A payment request has been sent to <strong>{phoneNumber}</strong>
            </p>
            <Alert className="mb-4">
              <Clock className="h-4 w-4" />
              <AlertDescription>Enter your M-Pesa PIN on your phone to complete the payment</AlertDescription>
            </Alert>
            <Badge variant="outline" className="text-orange-600 border-orange-600">
              Checkout ID: {checkoutRequestId}
            </Badge>
            <div className="text-sm text-gray-500 mt-2">
              Time remaining: <span className="font-mono font-bold">{countdown}s</span>
            </div>
            <Button variant="outline" onClick={resetPayment} className="mt-4">
              Cancel Payment
            </Button>
          </div>
        )}

        {/* ----- SUCCESS ----- */}
        {paymentStatus === "success" && (
          <div className="text-center py-8">
            <CheckCircle className="h-16 w-16 mx-auto text-green-600 mb-4" />
            <h3 className="text-lg font-medium text-green-800 mb-2">Payment Successful!</h3>
            <p className="text-gray-600 mb-4">Your order has been confirmed and will be processed shortly.</p>
            <div className="bg-green-50 p-4 rounded-lg mb-4">
              <div className="text-sm space-y-1">
                <div className="flex justify-between">
                  <span>Transaction ID:</span>
                  <span className="font-mono">{transactionId}</span>
                </div>
                <div className="flex justify-between">
                  <span>Amount Paid:</span>
                  <span className="font-medium">KSh {total.toFixed(0)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Phone Number:</span>
                  <span>{phoneNumber}</span>
                </div>
              </div>
            </div>
            <p className="text-sm text-gray-500">You will receive an SMS confirmation shortly.</p>
          </div>
        )}

        {/* ----- FAILED ----- */}
        {paymentStatus === "failed" && (
          <div className="text-center py-8">
            <XCircle className="h-16 w-16 mx-auto text-red-600 mb-4" />
            <h3 className="text-lg font-medium text-red-800 mb-2">Payment Failed</h3>
            <p className="text-gray-600 mb-4">The transaction was cancelled or failed to process.</p>
            <Alert className="mb-4" variant="destructive">
              <AlertTriangle className="h-4 w-4" />
              <AlertDescription>Please check your M-Pesa balance and try again.</AlertDescription>
            </Alert>
            <Button onClick={resetPayment} className="w-full bg-green-600 hover:bg-green-700">
              Try Again
            </Button>
          </div>
        )}

        {/* ----- TIMEOUT ----- */}
        {paymentStatus === "timeout" && (
          <div className="text-center py-8">
            <Clock className="h-16 w-16 mx-auto text-orange-600 mb-4" />
            <h3 className="text-lg font-medium text-orange-800 mb-2">Payment Timeout</h3>
            <p className="text-gray-600 mb-4">The payment request has expired. Please try again.</p>
            <Button onClick={resetPayment} className="w-full bg-green-600 hover:bg-green-700">
              Try Again
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
