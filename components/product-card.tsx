"use client"

import { useState } from "react"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, Heart, ShoppingCart } from "lucide-react"
import { useCart } from "@/contexts/cart-context"
import { useToast } from "@/hooks/use-toast"
import type { Product } from "@/lib/types"

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart()
  const { toast } = useToast()
  const [isWishlisted, setIsWishlisted] = useState(false)

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1,
    })
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    })
  }

  const toggleWishlist = () => {
    setIsWishlisted(!isWishlisted)
    toast({
      title: isWishlisted ? "Removed from wishlist" : "Added to wishlist",
      description: `${product.name} has been ${isWishlisted ? "removed from" : "added to"} your wishlist.`,
    })
  }

  return (
    <Card className="group hover:shadow-lg transition-all duration-300 h-full">
      <CardContent className="p-0 h-full flex flex-col">
        <div className="relative overflow-hidden rounded-t-lg">
          <img
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {product.isOnSale && <Badge className="absolute top-2 left-2 bg-red-500 hover:bg-red-600">Sale</Badge>}
          <Button
            variant="ghost"
            size="icon"
            className={`absolute top-2 right-2 ${
              isWishlisted ? "text-red-500" : "text-gray-400"
            } hover:text-red-500 bg-white/80 backdrop-blur-sm`}
            onClick={toggleWishlist}
          >
            <Heart className={`h-5 w-5 ${isWishlisted ? "fill-current" : ""}`} />
          </Button>
        </div>

        <div className="p-4 flex-1 flex flex-col">
          <div className="mb-2">
            <Badge variant="secondary" className="text-xs">
              {product.category}
            </Badge>
          </div>

          <Link href={`/products/${product.id}`} className="flex-1">
            <h3 className="font-semibold text-gray-900 mb-2 hover:text-green-600 transition-colors line-clamp-2">
              {product.name}
            </h3>
          </Link>

          <p className="text-sm text-gray-600 mb-3 line-clamp-2 flex-1">{product.description}</p>

          <div className="flex items-center mb-3">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${
                    i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                  }`}
                />
              ))}
            </div>
            <span className="text-sm text-gray-600 ml-2">({product.reviews})</span>
          </div>

          <div className="flex items-center justify-between mt-auto">
            <div className="flex items-center space-x-2">
              <span className="text-lg font-bold text-gray-900">£{product.price}</span>
              {product.originalPrice && (
                <span className="text-sm text-gray-500 line-through">£{product.originalPrice}</span>
              )}
            </div>
            <Button size="sm" onClick={handleAddToCart} className="bg-green-600 hover:bg-green-700">
              <ShoppingCart className="h-4 w-4 mr-1" />
              Add
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
