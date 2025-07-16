import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"

const categories = [
  {
    name: "Vitamins",
    description: "Essential vitamins for daily health",
    icon: "💊",
    href: "/products/vitamins",
    color: "bg-blue-50 hover:bg-blue-100",
  },
  {
    name: "Supplements",
    description: "Nutritional supplements for wellness",
    icon: "🏃‍♂️",
    href: "/products/supplements",
    color: "bg-green-50 hover:bg-green-100",
  },
  {
    name: "Herbal",
    description: "Natural herbal remedies",
    icon: "🌿",
    href: "/products/herbal",
    color: "bg-emerald-50 hover:bg-emerald-100",
  },
  {
    name: "Beauty",
    description: "Natural beauty & skincare",
    icon: "✨",
    href: "/products/beauty",
    color: "bg-pink-50 hover:bg-pink-100",
  },
  {
    name: "Wellness",
    description: "Complete wellness solutions",
    icon: "🧘‍♀️",
    href: "/products/wellness",
    color: "bg-purple-50 hover:bg-purple-100",
  },
  {
    name: "Sports Nutrition",
    description: "Fuel your active lifestyle",
    icon: "💪",
    href: "/products/sports",
    color: "bg-orange-50 hover:bg-orange-100",
  },
]

export default function CategoryGrid() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Shop by Category</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our comprehensive range of health and wellness products, carefully selected to support your journey
            to better health.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link key={category.name} href={category.href}>
              <Card
                className={`${category.color} border-0 transition-all duration-300 hover:shadow-lg hover:scale-105`}
              >
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">{category.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{category.name}</h3>
                  <p className="text-gray-600">{category.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
