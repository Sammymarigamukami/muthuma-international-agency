import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Clock, Users, Briefcase, Heart, TrendingUp, Badge } from "lucide-react"

export default function CareersPage() {
  const jobOpenings = [
    {
      id: 1,
      title: "Store Manager",
      location: "London, UK",
      type: "Full-time",
      department: "Retail",
      description:
        "Lead a team of health enthusiasts in our flagship London store. Perfect for someone passionate about natural health and customer service.",
      requirements: ["3+ years retail management experience", "Passion for natural health", "Strong leadership skills"],
    },
    {
      id: 2,
      title: "Nutritionist",
      location: "Manchester, UK",
      type: "Full-time",
      department: "Health & Wellness",
      description: "Provide expert nutritional advice to customers and support our product development team.",
      requirements: ["Qualified nutritionist", "Customer-facing experience", "Knowledge of supplements"],
    },
    {
      id: 3,
      title: "Digital Marketing Specialist",
      location: "Remote",
      type: "Full-time",
      department: "Marketing",
      description:
        "Drive our digital marketing campaigns and help grow our online presence in the health and wellness space.",
      requirements: ["Digital marketing experience", "Social media expertise", "Analytics skills"],
    },
    {
      id: 4,
      title: "Supply Chain Coordinator",
      location: "Birmingham, UK",
      type: "Full-time",
      department: "Operations",
      description: "Ensure our natural products reach customers efficiently while maintaining quality standards.",
      requirements: ["Supply chain experience", "Attention to detail", "Problem-solving skills"],
    },
  ]

  const benefits = [
    {
      icon: Heart,
      title: "Health & Wellness",
      description: "Comprehensive health insurance, wellness programs, and employee discounts on all products",
    },
    {
      icon: TrendingUp,
      title: "Career Growth",
      description: "Clear progression paths, training programs, and opportunities to advance within the company",
    },
    {
      icon: Users,
      title: "Great Team",
      description: "Work with passionate people who share your commitment to natural health and wellness",
    },
    {
      icon: Briefcase,
      title: "Work-Life Balance",
      description: "Flexible working arrangements, generous holiday allowance, and family-friendly policies",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      {/* Hero Section */}
      <div className="bg-green-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Join Our Team</h1>
            <p className="text-xl md:text-2xl mb-8">Build your career in natural health and wellness</p>
            <p className="text-lg opacity-90">
              At Holland & Barrett, we're more than just a company – we're a community of people passionate about
              helping others live healthier, happier lives.
            </p>
          </div>
        </div>
      </div>

      {/* Why Work With Us */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Work With Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <benefit.icon className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Current Openings */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">No job opening</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {jobOpenings.map((job) => (
              <Card key={job.id}>
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <CardTitle className="text-xl mb-2">{job.title}</CardTitle>
                      <div className="flex flex-wrap gap-2 mb-2">
                        <Badge variant="outline" className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          {job.location}
                        </Badge>
                        <Badge variant="outline" className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {job.type}
                        </Badge>
                        <Badge variant="outline" className="flex items-center gap-1">
                          <Briefcase className="h-3 w-3" />
                          {job.department}
                        </Badge>
                      </div>
                    </div>
                    <Button className="bg-green-600 hover:bg-green-700 mt-4 md:mt-0">Apply Now</Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{job.description}</p>
                  <div>
                    <h4 className="font-semibold mb-2">Requirements:</h4>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      {job.requirements.map((req, index) => (
                        <li key={index}>{req}</li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Application Process */}
      <div className="bg-green-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Application Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-green-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  1
                </div>
                <h3 className="text-xl font-semibold mb-3">Apply Online</h3>
                <p className="text-gray-600">
                  Submit your application through our online portal with your CV and cover letter.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-green-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  2
                </div>
                <h3 className="text-xl font-semibold mb-3">Interview</h3>
                <p className="text-gray-600">
                  Meet with our team to discuss your experience and passion for natural health.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-green-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  3
                </div>
                <h3 className="text-xl font-semibold mb-3">Welcome Aboard</h3>
                <p className="text-gray-600">
                  Join our team and start making a difference in people's health and wellness journey.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Don't See the Right Role?</h2>
            <p className="text-gray-600 mb-8">
              We're always looking for talented individuals who share our passion for natural health. Send us your CV
              and we'll keep you in mind for future opportunities.
            </p>
            <Button size="lg" className="bg-green-600 hover:bg-green-700">
              Send Your CV
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
