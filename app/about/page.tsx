import { Card, CardContent } from "@/components/ui/card"
import { Leaf, Heart, Award, Users, Globe, Recycle } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-green-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Story</h1>
            <p className="text-xl md:text-2xl mb-8">Connecting You with Trusted Natural Wellness</p>
            <p className="text-lg opacity-90">
                We connect you with trusted natural wellness products — carefully selected to 
                support a healthier, more balanced life. 
                While we don’t make the products ourselves, we’re committed to offering 
                only what we’d use and trust ourselves.
            </p>
          </div>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Journey</h2>
         </div> 
      </div>

      {/* Values Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="text-center">
              <CardContent className="p-6">
                <Leaf className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Natural First</h3>
                <p className="text-gray-600">
                  We believe in the power of nature and prioritize natural, sustainable ingredients in all our products.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <Heart className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Health & Wellness</h3>
                <p className="text-gray-600">
                  Your health and wellbeing are at the heart of everything we do, from product selection to customer
                  service.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <Award className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Quality Excellence</h3>
                <p className="text-gray-600">
                  We maintain the highest standards of quality and safety in all our products and services.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <Users className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Community Focus</h3>
                <p className="text-gray-600">
                  We're committed to supporting local communities and making natural health accessible to everyone.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <Globe className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Global Responsibility</h3>
                <p className="text-gray-600">
                  We take our environmental and social responsibilities seriously, working towards a sustainable future.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <Recycle className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Sustainability</h3>
                <p className="text-gray-600">
                  We're committed to sustainable practices, from eco-friendly packaging to ethical sourcing.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Mission Statement */}
      <div className="bg-green-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Our Mission</h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              To make natural health and wellness accessible to everyone, everywhere. 
              We’re committed to offering high-quality products, expert guidance, 
              and trusted service to support your journey to better health — empowering 
              you to live well, feel better, and thrive naturally, every day.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
