import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, Truck, Award } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-green-50 to-blue-50 py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Your Natural Health
                <span className="text-green-600 block">Journey Starts Here</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Discover premium vitamins, supplements, and natural wellness products trusted by millions.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/products">
                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-3">
                  Shop Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/products?category=Vitamins">
                <Button variant="outline" size="lg" className="px-8 py-3 bg-transparent">
                  Browse Vitamins
                </Button>
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
              <div className="flex items-center space-x-3">
                <Shield className="h-8 w-8 text-green-600" />
                <div>
                  <p className="font-semibold text-gray-900">Quality Assured</p>
                  <p className="text-sm text-gray-600">Tested & Certified</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Truck className="h-8 w-8 text-green-600" />
                <div>
                  <p className="font-semibold text-gray-900">Free Delivery</p>
                  <p className="text-sm text-gray-600">Orders over Ksh2500</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Award className="h-8 w-8 text-green-600" />
                <div>
                  <p className="font-semibold text-gray-900">3+ Years</p>
                  <p className="text-sm text-gray-600">Trusted Heritage</p>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src="/placeholder.svg?height=600&width=500"
                alt="Natural health products"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-green-200 rounded-full opacity-20 blur-3xl"></div>
            <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-blue-200 rounded-full opacity-20 blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
