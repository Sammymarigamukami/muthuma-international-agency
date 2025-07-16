export interface Product {
  id: string
  name: string
  description: string
  price: number
  originalPrice?: number
  discount?: number
  image: string
  category: string
  rating: number
  reviews: number
  featured: boolean
  inStock: boolean
}

export interface CartItem extends Product {
  quantity: number
}
