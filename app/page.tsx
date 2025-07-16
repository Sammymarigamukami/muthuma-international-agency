import { Suspense } from "react"
import HeroSection from "@/components/hero-section"
import FeaturedProducts from "@/components/featured-products"
import CategoryGrid from "@/components/category-grid"
import PromotionalBanner from "@/components/promotional-banner"
import NewsletterSignup from "@/components/newsletter-signup"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <PromotionalBanner />
      <Suspense fallback={<div>Loading categories...</div>}>
        <CategoryGrid />
      </Suspense>
      <Suspense fallback={<div>Loading products...</div>}>
        <FeaturedProducts />
      </Suspense>
      <NewsletterSignup />
    </div>
  )
}
