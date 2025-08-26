"use client"

import { useState } from "react"
import { notFound } from "next/navigation"
import Image from "next/image"
import { Star, Heart, ShoppingCart, Minus, Plus, Shield, Truck, RotateCcw } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { useCart } from "@/contexts/cart-context"
import { useToast } from "@/hooks/use-toast"
import { products } from "@/lib/data"

interface ProductPageProps {
  params: {
    slug: string
  }
}

export default function ProductPage({ params }: ProductPageProps) {
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(0)
  const { addItem } = useCart()
  const { toast } = useToast()

  // Find product by slug instead of ID
  const product = products.find((p) => p.slug === params.slug)

  if (!product) {
    notFound()
  }

  const handleAddToCart = () => {
    addItem(product, quantity)
    toast({
      title: "Added to cart",
      description: `${quantity} x ${product.name} added to your cart.`,
    })
  }

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star key={i} className={`h-4 w-4 ${i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`} />
    ))
  }

  // Fallback if no images
  const images = product.images?.length ? product.images : [product.image]

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid lg:grid-cols-2 gap-12">
        {/* MAIN IMAGE */}
        <div className="space-y-4">
          <div className="aspect-square relative overflow-hidden rounded-lg bg-gray-100">
            <Image src={images[selectedImage]} alt={product.name} fill className="object-cover" />
            {product.discount && <Badge className="absolute top-4 left-4 bg-red-500">-{product.discount}%</Badge>}
          </div>

          {/* THUMBNAIL IMAGES */}
          <div className="grid grid-cols-3 gap-4">
            {images.map((img, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`aspect-square relative overflow-hidden rounded-lg bg-gray-100 border-2 ${
                  selectedImage === index ? "border-green-600" : "border-transparent"
                }`}
              >
                <Image src={img} alt={`${product.name} ${index + 1}`} fill className="object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
            <div className="flex items-center space-x-4 mb-4">
              <div className="flex items-center space-x-1">
                {renderStars(product.rating)}
                <span className="text-sm text-gray-500">({product.reviews} reviews)</span>
              </div>
              <Badge variant="secondary">{product.category}</Badge>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <span className="text-3xl font-bold text-green-600">Ksh{product.price}</span>
            {product.originalPrice && (
              <span className="text-xl text-gray-500 line-through">Ksh{product.originalPrice}</span>
            )}
          </div>

          <p className="text-gray-600 leading-relaxed">{product.description}</p>

          {/* Quantity and Add to Cart */}
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <span className="font-medium">Quantity:</span>
              <div className="flex items-center border rounded-md">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  disabled={quantity <= 1}
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="px-4 py-2 font-medium">{quantity}</span>
                <Button variant="ghost" size="icon" onClick={() => setQuantity(quantity + 1)}>
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="flex space-x-4">
              <Button onClick={handleAddToCart} className="flex-1 bg-green-600 hover:bg-green-700" size="lg">
                <ShoppingCart className="h-5 w-5 mr-2" />
                Add to Cart
              </Button>
              <Button className="hidden" variant="outline" size="lg">
                <Heart className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Features */}
          <div className="grid grid-cols-3 gap-4 pt-6 border-t">
            <div className="text-center">
              <Truck className="h-6 w-6 mx-auto mb-2 text-green-600" />
              <p className="text-sm font-medium">Home Delivery</p>
              <p className="text-xs text-gray-500">On orders over Ksh2500</p>
            </div>
            <div className="text-center">
              <Shield className="h-6 w-6 mx-auto mb-2 text-green-600" />
              <p className="text-sm font-medium">Quality Assured</p>
              <p className="text-xs text-gray-500">Tested & certified</p>
            </div>
            <div className="text-center">
              <RotateCcw className="h-6 w-6 mx-auto mb-2 text-green-600" />
              <p className="text-sm font-medium">Easy Returns</p>
              <p className="text-xs text-gray-500">30-day guarantee</p>
            </div>
          </div>
        </div>
      </div>

      {/* Product Information Tabs */}
      <div className="mt-16">
        <Tabs defaultValue="description" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="description">Description</TabsTrigger>
            <TabsTrigger value="ingredients">Ingredients</TabsTrigger>
            <TabsTrigger value="usage">Usage</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
          </TabsList>

          <TabsContent value="description" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Product Description</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">{product.description}</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="ingredients" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Ingredients</CardTitle>
              </CardHeader>
              <CardContent>
                {product.ingredients?.length ? (
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    {product.ingredients.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-500">No ingredient information available.</p>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="usage" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Usage Instructions</CardTitle>
              </CardHeader>
              <CardContent>
                {product.usage?.length ? (
                  <div className="space-y-4 text-gray-600">
                    {product.usage.map((item, index) => (
                      <p key={index}>
                        <strong>{item.label}:</strong> {item.value}
                      </p>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-500">No usage instructions available.</p>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reviews" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Customer Reviews</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">{renderStars(product.rating)}</div>
                    <span className="text-lg font-medium">{product.rating}/5</span>
                    <span className="text-gray-500">({product.reviews} reviews)</span>
                  </div>

                  <Separator />

                  <div className="space-y-4">
                    <div className="border-b pb-4">
                      <div className="flex items-center space-x-2 mb-2">
                        {renderStars(5)}
                        <span className="font-medium">Sarah M.</span>
                      </div>
                      <p className="text-gray-600">
                        "Excellent product! I've been using this for 3 months and feel much more energetic. Great
                        quality and fast delivery."
                      </p>
                    </div>

                    <div className="border-b pb-4">
                      <div className="flex items-center space-x-2 mb-2">
                        {renderStars(4)}
                        <span className="font-medium">Sam Mariga</span>
                      </div>
                      <p className="text-gray-600">
                        "Good value for money. The packaging is excellent and the product seems to be working well."
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
