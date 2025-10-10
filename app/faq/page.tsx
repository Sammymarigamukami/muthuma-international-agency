import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { HelpCircle, MessageCircle, Phone, Mail } from "lucide-react"

export default function FAQPage() {
  const faqCategories = [
    {
      title: "Account & General",
      faqs: [
        {
          question: "Who can use this platform?",
          answer:
            "You must be at least 18 years old and legally able to enter into binding agreements. Minors may only use the platform under parental or guardian supervision.",
        },
        {
          question: "Do I need an account to place orders or book appointments?",
          answer:
            "While some services allow guest checkout, creating an account provides faster checkout, order tracking, and access to your medical history and consultations.",
        },
        {
          question: "Are my personal and medical details secure?",
          answer:
            "We use strict administrative, technical, and physical safeguards to protect your personal and medical information.",
        },
        {
          question: "How do I contact customer support?",
          answer:
            "You can reach our support team at support@yourplatform.com or via the <span href='/contact'>Contact Us</span> page.",
        },
        {
          question: "What should I do if I forget my password?",
          answer:
            "Click the 'Forgot Password' link on the login page and follow the instructions to reset your password.",
        }
      ],
    },
    {
      title: "Products & Orders",
      faqs: [
        {
          question: "How do I know if a product is in stock?",
          answer:
            "Product availability is displayed on the product page. Availability may change without notice.",
        },
        {
          question: "How long will it take to receive my order?",
          answer:
            "Delivery times vary by location and product availability. We are not liable for delays caused by couriers or unforeseen events.",
        },
        {
          question: "Can I return a product?",
          answer:
            "Opened or used medical products cannot be returned due to health and safety regulations. Refunds or replacements are provided only for defective, damaged, or incorrect items.",
        },
        {
          question: "What payment methods do you accept?",
          answer:
            "We accept secure payments via credit/debit cards, mobile money services, and other approved gateways.",
        },
        {
          question: "What if I notice an error in my order?",
          answer:
            "Contact our support team immediately. We will investigate and provide a replacement, refund, or correction if necessary.",
        },
      ],
    },
    {
      title: "Prescriptions & Health Products",
      faqs: [
        {
          question: "Can I order prescription medications online?",
          answer:
            "Yes, but you must provide a valid prescription from a licensed healthcare professional.",
        },
        {
          question: "How are my prescriptions verified?",
          answer:
            "Our team verifies all prescriptions with the issuing healthcare professional before processing your order.",
        },
        {
          question: "Can I get advice on over-the-counter medications?",
          answer:
            "Our pharmacists can provide general guidance, but this does not replace a consultation with a licensed healthcare provider.",
        },
        {
          question: "Do you provide home delivery for prescriptions?",
          answer:
            "Yes, home delivery is available for eligible products, subject to location and legal regulations.",
        },
        {
          question: "Can I access my medical records online?",
          answer:
            "Registered users can view and download medical records, prescriptions, and consultation history through their account.",
        }
      ],
    },
    {
      title: "Health Services & Consultations",
      faqs: [
        {
          question: "How do I book a consultation with a doctor?",
          answer:
            "After creating an account, go to the <span className='text-green-600' href='/book-appointment'>Book Appointment</span> section, select your doctor and time slot, and confirm.",
        },
        {
          question: "Can I cancel or reschedule a consultation?",
          answer:
            "Yes, you can cancel or reschedule through your account, but some services may have specific notice periods or fees.",
        },
        {
          question: "Are consultations covered by insurance?",
          answer:
            "Insurance coverage depends on your provider and the service. Check with your insurance company before booking.",
        },
        {
          question: "How is my privacy protected during consultations?",
          answer:
            "All consultations are conducted via secure channels, and personal and medical information is handled according to our Privacy Policy.",
        },
      ],
    },
    {
      title: "Marketing & Notifications",
      faqs: [
        {
          question: "Can I subscribe to newsletters and promotions?",
          answer:
            "You can opt-in during registration or through your account settings. You may unsubscribe at any time.",
        }
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-green-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <HelpCircle className="h-16 w-16 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Frequently Asked Questions</h1>
            <p className="text-xl md:text-2xl mb-8">Find answers to common questions about our products and services</p>
            <p className="text-lg opacity-90">
              Can't find what you're looking for? Our customer service team is here to help.
            </p>
          </div>
        </div>
      </div>

      {/* FAQ Sections */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            {faqCategories.map((category, categoryIndex) => (
              <Card key={categoryIndex}>
                <CardHeader>
                  <CardTitle className="text-2xl text-green-600">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    {category.faqs.map((faq, faqIndex) => (
                      <AccordionItem key={faqIndex} value={`${categoryIndex}-${faqIndex}`}>
                        <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                        <AccordionContent className="text-gray-600">{faq.answer}</AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Support */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Still Need Help?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="text-center">
                <CardContent className="p-6">
                  <MessageCircle className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Live Chat</h3>
                  <p className="text-gray-600 mb-4">Chat with our customer service team on whatsapp</p>
                  <Button className="bg-green-600 hover:bg-green-700">Start Chat</Button>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <Phone className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Phone Support</h3>
                  <p className="text-gray-600 mb-4">Call us Monday-Friday, 9am-6pm</p>
                  <Button className="bg-green-600 hover:bg-green-700">0800 123 4567</Button>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <Mail className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Email Support</h3>
                  <p className="text-gray-600 mb-4">Send us an email and we'll respond within 24 hours</p>
                  <a href="mailto:marigasam18@gmail.com">
                     <Button className="bg-green-600 hover:bg-green-700">Send Email</Button>
                  </a>

                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Links */}
      <div className="bg-green-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-8">Quick Links</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Button variant="outline" className="h-auto p-4 flex flex-col bg-transparent">
                <span className="font-semibold">Shipping Info</span>
              </Button>
              <Button variant="outline" className="h-auto p-4 flex flex-col bg-transparent">
                <span className="font-semibold">Returns</span>
              </Button>
              <Button variant="outline" className="h-auto p-4 flex flex-col bg-transparent">
                <span className="font-semibold">Size Guide</span>
              </Button>
              <Button variant="outline" className="h-auto p-4 flex flex-col bg-transparent">
                <span className="font-semibold">Store Locator</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
