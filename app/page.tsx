import HeroSection from "@/components/hero-section"
import CategoryGrid from "@/components/category-grid"
import FeaturedProducts from "@/components/featured-products"
import PromotionalBanner from "@/components/promotional-banner"
import NewsletterSignup from "@/components/newsletter-signup"
import MedicalEquipment from "@/components/medical-equipment"
import HealthServices from "@/components/healthServices"
import BlogsPage from "@/components/blog"

export default function HomePage() {
  return (
    <div className="min-h-screen ">
      <HeroSection />
      <CategoryGrid />
      <MedicalEquipment />
      <HealthServices />
      <FeaturedProducts />
      <BlogsPage />
      <PromotionalBanner />
      <NewsletterSignup />
    </div>
  )
}
