import { Card, CardContent } from "@/components/ui/card"
import { Leaf, Heart, Award, Users, Globe, Recycle, User } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-green-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Story</h1>
            <p className="text-xl md:text-2xl mb-8">Your Trusted Partner in Health, Wellness & Care</p>
            <p className="text-lg opacity-90">
                Muthuma International Agency makes it easier for hospitals, clinics, and retailers to order 
                wholesale medical and wellness products online. Our platform connects you directly 
                to authentic, high-quality supplies at competitive prices — all delivered with the 
                same trusted care that defines our pharmacies and hospitals.
            </p>
          </div>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-center mb-12">Our Journey</h2>
            <p className="text-lg opacity-90">
                 Our journey began with a simple vision — to make healthcare more accessible, 
                 reliable, and affordable for every community we serve. What started as a single 
                 pharmacy has grown into Muthuma International — a trusted network of hospitals, 
                 pharmacies, and an online platform dedicated to improving lives. Over the years, 
                 we’ve built lasting relationships with patients, healthcare professionals, and 
                 suppliers, ensuring that every product and service we provide meets the highest 
                 standards of care. Our commitment to innovation and compassion continues to guide 
                 us as we bring quality medical products and wellness solutions closer to you.
            </p>
            </div>
         </div> 
      </div>

      {/* Values Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="text-center">
              <CardContent className="p-6">
                <Heart className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Patient-Center-Care</h3>
                <p className="text-gray-600">
                  Every product, service, and innovation we offer is driven by our dedication to improving lives and ensuring patient wellbeing.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <Award className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Quality & Trust</h3>
                <p className="text-gray-600">
                  We maintain the highest medical and ethical standards to deliver products and services our customers can always trust.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <User className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Community Commitment</h3>
                <p className="text-gray-600">
                  We believe health is a shared responsibility — that’s why we invest in our communities through accessible healthcare and education.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <Globe className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Global Responsibility</h3>
                <p className="text-gray-600">
                  As a growing healthcare brand, we uphold our duty to operate ethically and contribute to a healthier, sustainable world.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <Recycle className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Sustainability</h3>
                <p className="text-gray-600">
                  From packaging to partnerships, we embrace eco-friendly and responsible practices that protect future generations.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <Leaf className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Innovation in Wellness</h3>
                <p className="text-gray-600">
                  We continuously evolve to bring modern solutions that combine technology, healthcare, and nature for better living.
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
              our mission is to bridge the gap between healthcare and convenience. 
              We are dedicated to providing quality medical products, pharmaceuticals, and wellness essentials 
              through a trusted online platform — supported by our network of hospitals and pharmacies. 
              We believe that access to reliable healthcare should be simple, affordable, and within reach for everyone. 
              Guided by integrity, innovation, and compassion, we work every day to ensure that individuals, families, 
              and communities receive the care, treatment, and wellness solutions they deserve — all in one place.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
