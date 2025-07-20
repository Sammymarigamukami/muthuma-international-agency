export interface Product {
  id: string
  name: string
  description: string
  price: number
  originalPrice?: number
  discount?: number
  image: string
  images: string[]
  category: string
  ingredients: string[]
  usage: {
    dosage: string
    bestTime: string
    storage: string
    warning: string
  }
  rating: number
  reviews: number
  featured: boolean
  inStock: boolean
}

export interface CartItem extends Product {
  quantity: number
}
