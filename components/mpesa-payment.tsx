"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { useCart } from "@/contexts/cart-context"
import { useToast } from "@/hooks/use-toast"
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
  const [countdown, setCountdown] = useState(0)
  const { clearCart } = useCart()
  const { toast } = useToast()

  // Simulate M-Pesa STK Push
  const initiateMpesaPayment = async () => {
    // Validate phone number
    if (!phoneNumber || !phoneNumber.match(/^(\+254|254|0)[17]\d{8}$/)) {
      toast({
        title: "Invalid Phone Number",
        description: "Please enter a valid Kenyan phone number (e.g., +254712345678)",
        variant: "destructive",
      })
      return
    }

    // Validate customer info
    if (!customerInfo.firstName || !customerInfo.lastName || !customerInfo.email) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required customer information",
        variant: "destructive",
      })
      return
    }

    setPaymentStatus("initiating")

    try {
      // Simulate API call to initiate M-Pesa payment
      await new Promise((resolve) => setTimeout(resolve, 2000))

      // Generate mock transaction ID
      const mockTransactionId = `MP${Date.now().toString().slice(-8)}`
      setTransactionId(mockTransactionId)

      setPaymentStatus("pending")
      setCountdown(60) // 60 seconds timeout

      toast({
        title: "Payment Request Sent",
        description: `Check your phone ${phoneNumber} for M-Pesa prompt`,
      })

      // Start countdown
      const countdownInterval = setInterval(() => {
        setCountdown((prev) => {
          if (prev <= 1) {
            clearInterval(countdownInterval)
            setPaymentStatus("timeout")
            return 0
          }
          return prev - 1
        })
      }, 1000)

      // Simulate payment completion (70% success rate)
      setTimeout(
        () => {
          clearInterval(countdownInterval)
          const isSuccess = Math.random() > 0.3 // 70% success rate

          if (isSuccess) {
            setPaymentStatus("success")
            toast({
              title: "Payment Successful!",
              description: `Transaction ${mockTransactionId} completed successfully`,
            })
            // Clear cart after successful payment
            setTimeout(() => {
              clearCart()
            }, 2000)
          } else {
            setPaymentStatus("failed")
            toast({
              title: "Payment Failed",
              description: "Transaction was cancelled or failed. Please try again.",
              variant: "destructive",
            })
          }
        },
        Math.random() * 30000 + 10000,
      ) // Random between 10-40 seconds
    } catch (error) {
      setPaymentStatus("failed")
      toast({
        title: "Payment Error",
        description: "Failed to initiate payment. Please try again.",
        variant: "destructive",
      })
    }
  }

  const resetPayment = () => {
    setPaymentStatus("idle")
    setTransactionId("")
    setCountdown(0)
  }

  const formatPhoneNumber = (phone: string) => {
    // Auto-format Kenyan phone numbers
    let formatted = phone.replace(/\D/g, "")
    if (formatted.startsWith("0")) {
      formatted = "254" + formatted.slice(1)
    }
    if (!formatted.startsWith("254")) {
      formatted = "254" + formatted
    }
    return "+" + formatted
  }

  const handlePhoneChange = (value: string) => {
    const formatted = formatPhoneNumber(value)
    setPhoneNumber(formatted)
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
              <span className="text-lg font-bold text-green-600">
                KSh {(total).toFixed(0)}
              </span>
            </div>

            <Button onClick={initiateMpesaPayment} className="w-full bg-green-600 hover:bg-green-700" size="lg">
              Pay with M-Pesa
            </Button>
          </>
        )}

        {paymentStatus === "initiating" && (
          <div className="text-center py-8">
            <Loader2 className="h-8 w-8 animate-spin mx-auto mb-4 text-green-600" />
            <h3 className="text-lg font-medium mb-2">Initiating Payment...</h3>
            <p className="text-gray-600">Please wait while we process your request</p>
          </div>
        )}

        {paymentStatus === "pending" && (
          <div className="text-center py-8">
            <div className="relative mb-4">
              <Smartphone className="h-16 w-16 mx-auto text-green-600 animate-pulse" />
              <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center animate-bounce">
                !
              </div>
            </div>

            <h3 className="text-lg font-medium mb-2">Check Your Phone</h3>
            <p className="text-gray-600 mb-4">
              A payment request has been sent to <strong>{phoneNumber}</strong>
            </p>

            <Alert className="mb-4">
              <Clock className="h-4 w-4" />
              <AlertDescription>Enter your M-Pesa PIN on your phone to complete the payment</AlertDescription>
            </Alert>

            <div className="flex items-center justify-center space-x-2 mb-4">
              <Badge variant="outline" className="text-orange-600 border-orange-600">
                Transaction ID: {transactionId}
              </Badge>
            </div>

            <div className="text-sm text-gray-500">
              Time remaining: <span className="font-mono font-bold">{countdown}s</span>
            </div>

            <Button variant="outline" onClick={resetPayment} className="mt-4 bg-transparent">
              Cancel Payment
            </Button>
          </div>
        )}

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
                  <span className="font-medium">KSh {(total).toFixed(0)}</span>
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

        {paymentStatus === "failed" && (
          <div className="text-center py-8">
            <XCircle className="h-16 w-16 mx-auto text-red-600 mb-4" />
            <h3 className="text-lg font-medium text-red-800 mb-2">Payment Failed</h3>
            <p className="text-gray-600 mb-4">The transaction was cancelled or failed to process.</p>

            <Alert className="mb-4" variant="destructive">
              <AlertTriangle className="h-4 w-4" />
              <AlertDescription>
                Please check your M-Pesa balance and try again, or contact customer support.
              </AlertDescription>
            </Alert>

            <div className="space-y-2">
              <Button onClick={resetPayment} className="w-full bg-green-600 hover:bg-green-700">
                Try Again
              </Button>
              <Button
                variant="outline"
                className="w-full bg-transparent"
                onClick={() => (window.location.href = "/contact")}
              >
                Contact Support
              </Button>
            </div>
          </div>
        )}

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
