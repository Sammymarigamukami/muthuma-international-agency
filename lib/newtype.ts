export interface newProduct {
    id: string
    name: string
    description: string
    price: number
    image: string
    images: string[]
    category: string
    packaging: string
    usage: {
        label: string
    }[]
    rating: number
    reviews: number
    featured: boolean
    inStock: boolean
}