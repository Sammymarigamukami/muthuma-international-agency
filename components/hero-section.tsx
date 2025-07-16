import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-r from-green-50 to-green-100 py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Your Natural Health Journey Starts Here
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Discover premium vitamins, supplements, and wellness products to support your healthy lifestyle. Trusted
                by millions for over 150 years.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-green-600 hover:bg-green-700" asChild>
                <Link href="/products">
                  Shop Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/about">Learn More</Link>
              </Button>
            </div>

            <div className="flex items-center space-x-8 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">150+</div>
                <div className="text-sm text-gray-600">Years of Trust</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">1000+</div>
                <div className="text-sm text-gray-600">Products</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">5M+</div>
                <div className="text-sm text-gray-600">Happy Customers</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-green-200 to-green-300 p-8">
              <div className="h-full w-full rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-32 h-32 mx-auto bg-white rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-4xl">🌿</span>
                  </div>
                  <p className="text-green-800 font-medium">Natural • Pure • Trusted</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
