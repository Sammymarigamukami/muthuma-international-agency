import { Truck, Shield, RotateCcw, Phone } from "lucide-react"

export default function PromotionalBanner() {
  return (
    <section className="bg-green-600 text-white py-4">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-center">
          <div className=" items-center justify-center space-x-2 hidden">
            <Truck className="h-5 w-5" />
            <span className="text-sm font-medium">Free delivery over Ksh2500</span>
          </div>
          <div className="flex items-center justify-center space-x-2">
            <Shield className="h-5 w-5" />
            <span className="text-sm font-medium">Quality guaranteed</span>
          </div>
          <div className="flex items-center justify-center space-x-2">
            <RotateCcw className="h-5 w-5" />
            <span className="text-sm font-medium">30-day returns</span>
          </div>
        </div>
      </div>
    </section>
  )
}
