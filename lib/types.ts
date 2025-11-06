export interface Product {
  id: string
  name: string
  slug: string
  description: string
  price: number
  originalPrice?: number
  discount?: number
  image: string
  images: string[]
  category: string
  subcategory: string | null
  ingredients: string[]
 usage: {
    label: string
    value: string
  }[]
  rating: number
  reviews: number
  featured: boolean
  inStock: boolean
  tags: string[]

}

export interface CartItem extends Product {
  quantity: number
}
