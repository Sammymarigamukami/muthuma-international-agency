import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Pill, Leaf, Sparkles, Heart, Dumbbell } from "lucide-react"

const categories = [
  {
    name: "Vitamins",
    description: "Essential vitamins for daily health",
    icon: Pill,
    href: "/products?category=Vitamins",
    color: "bg-blue-50 text-blue-600",
  },
  {
    name: "Supplements",
    description: "Nutritional supplements for wellness",
    icon: Dumbbell,
    href: "/products?category=Supplements",
    color: "bg-green-50 text-green-600",
  },
  {
    name: "Herbal",
    description: "Natural herbal remedies",
    icon: Leaf,
    href: "/products?category=Herbal",
    color: "bg-emerald-50 text-emerald-600",
  },
  {
    name: "Beauty",
    description: "Natural beauty products",
    icon: Sparkles,
    href: "/products?category=Beauty",
    color: "bg-pink-50 text-pink-600",
  },
  {
    name: "Wellness",
    description: "Complete wellness solutions",
    icon: Heart,
    href: "/products?category=Wellness",
    color: "bg-purple-50 text-purple-600",
  },
  {
    name: "Proteins",
    description: "Complete wellness solutions",
    icon: Heart,
    href: "/products?category=Proteins",
    color: "bg-purple-50 text-purple-600",
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {categories.map((category) => {
            const IconComponent = category.icon
            return (
              <Link key={category.name} href={category.href}>
                <Card className="group hover:shadow-lg transition-all duration-300 cursor-pointer h-full">
                  <CardContent className="p-6 text-center">
                    <div
                      className={`w-16 h-16 rounded-full ${category.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <IconComponent className="h-8 w-8" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2 text-gray-900">{category.name}</h3>
                    <p className="text-gray-600 text-sm">{category.description}</p>
                  </CardContent>
                </Card>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
