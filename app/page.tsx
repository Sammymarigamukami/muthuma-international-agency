import HeroSection from "@/components/hero-section"
import CategoryGrid from "@/components/category-grid"
import FeaturedProducts from "@/components/featured-products"
import PromotionalBanner from "@/components/promotional-banner"
import NewsletterSignup from "@/components/newsletter-signup"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <CategoryGrid />
      <FeaturedProducts />
      <PromotionalBanner />
      <NewsletterSignup />
    </div>
  )
}
