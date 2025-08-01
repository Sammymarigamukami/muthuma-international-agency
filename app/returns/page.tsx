import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { RotateCcw, Package, Clock, CheckCircle, XCircle, AlertCircle } from "lucide-react"

export default function ReturnsPage() {
  const returnSteps = [
    {
      step: 1,
      title: "Check Eligibility",
      description: "Ensure your item is eligible for return within our 30-day policy",
      icon: CheckCircle,
    },
    {
      step: 2,
      title: "Start Return",
      description: "Log into your account or use your order number to start the return process",
      icon: RotateCcw,
    },
    {
      step: 3,
      title: "Package Item",
      description: "Pack the item securely in original packaging with all accessories",
      icon: Package,
    },
    {
      step: 4,
      title: "Send Back",
      description: "Use our prepaid return label or drop off at any of our stores",
      icon: Clock,
    },
  ]

  const returnPolicies = [
    {
      category: "Supplements & Vitamins",
      policy: "30 days",
      condition: "Unopened only",
      icon: CheckCircle,
      color: "text-green-600",
    },
    {
      category: "Beauty Products",
      policy: "30 days",
      condition: "Unopened only",
      icon: CheckCircle,
      color: "text-green-600",
    },
    {
      category: "Food Items",
      policy: "14 days",
      condition: "Unopened only",
      icon: AlertCircle,
      color: "text-yellow-600",
    },
    {
      category: "Equipment & Accessories",
      policy: "30 days",
      condition: "Original packaging",
      icon: CheckCircle,
      color: "text-green-600",
    },
    {
      category: "Books & Magazines",
      policy: "30 days",
      condition: "Good condition",
      icon: CheckCircle,
      color: "text-green-600",
    },
    {
      category: "Personalized Items",
      policy: "No returns",
      condition: "Unless faulty",
      icon: XCircle,
      color: "text-red-600",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-green-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <RotateCcw className="h-16 w-16 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Returns & Refunds</h1>
            <p className="text-xl md:text-2xl mb-8">Easy returns within 30 days</p>
            <p className="text-lg opacity-90">
              Not completely satisfied? We offer hassle-free returns on most items within 30 days of purchase.
            </p>
          </div>
        </div>
      </div>

      {/* Return Process */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How to Return</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {returnSteps.map((step) => (
                <Card key={step.step} className="text-center">
                  <CardContent className="p-6">
                    <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <step.icon className="h-8 w-8 text-green-600" />
                    </div>
                    <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-3 text-sm font-bold">
                      {step.step}
                    </div>
                    <h3 className="text-lg font-semibold mb-3">{step.title}</h3>
                    <p className="text-gray-600 text-sm">{step.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Return Policies */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Return Policies by Category</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {returnPolicies.map((policy, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <policy.icon className={`h-6 w-6 ${policy.color} mt-1`} />
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold mb-2">{policy.category}</h3>
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="outline" className={policy.color}>
                            {policy.policy}
                          </Badge>
                          <Badge variant="outline" className="text-gray-600">
                            {policy.condition}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Important Information */}
      <div className="bg-green-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Important Information</h2>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-green-600">What We Accept</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-gray-600">✓ Items in original packaging</p>
                <p className="text-gray-600">✓ Unopened supplements and beauty products</p>
                <p className="text-gray-600">✓ Equipment with all accessories</p>
                <p className="text-gray-600">✓ Items with original receipt or order confirmation</p>
                <p className="text-gray-600">✓ Faulty or damaged items (any condition)</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-red-600">What We Don't Accept</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-gray-600">✗ Opened supplements or vitamins</p>
                <p className="text-gray-600">✗ Used beauty or personal care products</p>
                <p className="text-gray-600">✗ Opened food items (unless faulty)</p>
                <p className="text-gray-600">✗ Personalized or custom items</p>
                <p className="text-gray-600">✗ Items returned after 30 days</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Refund Information */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Refund Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="text-center">
                <CardContent className="p-6">
                  <Clock className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Processing Time</h3>
                  <p className="text-gray-600">
                    Refunds are processed within 3-5 business days of receiving your return.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <CheckCircle className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Refund Method</h3>
                  <p className="text-gray-600">Refunds are issued to your original payment method automatically.</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <Package className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Return Shipping</h3>
                  <p className="text-gray-600">
                    Free return shipping with our prepaid labels or drop off at any store.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Start Return */}
      <div className="bg-green-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Start a Return?</h2>
            <p className="text-lg mb-8">Have your order number ready and we'll guide you through the process.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary">
                Start Online Return
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-white border-white hover:bg-white hover:text-green-600 bg-transparent"
              >
                Find a Store
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Support */}
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-6">Need Help with Your Return?</h2>
            <p className="text-gray-600 mb-8">
              Our customer service team is here to help with any questions about returns or refunds.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Badge variant="outline" className="text-lg py-2 px-4">
                📞 coming soon
              </Badge>
              <Badge variant="outline" className="text-lg py-2 px-4">
                ✉️ soon
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
