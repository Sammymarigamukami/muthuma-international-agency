import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { HelpCircle, MessageCircle, Phone, Mail } from "lucide-react"

export default function FAQPage() {
  const faqCategories = [
    {
      title: "Orders & Shipping",
      faqs: [
        {
          question: "How long does delivery take?",
          answer:
            "Standard delivery takes 3-5 business days. Express delivery is available for next-day delivery if ordered before 2pm. Free delivery is available on orders over KSh2500.",
        },
        {
          question: "Can I track my order?",
          answer:
            "Yes! Once your order is dispatched, you'll receive a tracking number via email. You can track your order on our website or through the courier's tracking system.",
        },
        {
          question: "What if I'm not home for delivery?",
          answer:
            "Our couriers will attempt delivery and leave a card if you're not home. You can reschedule delivery or collect from a local pickup point.",
        },
        {
          question: "Do you deliver internationally?",
          answer:
            "Yes, we deliver to over 50 countries worldwide. International delivery times and costs vary by destination. Check our shipping page for full details.",
        },
      ],
    },
    {
      title: "Products & Health",
      faqs: [
        {
          question: "Are your products suitable for vegans?",
          answer:
            "Many of our products are vegan-friendly and clearly labeled. Look for the vegan symbol on product pages or use our vegan filter when browsing.",
        },
        {
          question: "How do I know which vitamins I need?",
          answer:
            "We recommend consulting with a healthcare professional before starting any supplement regimen. Our in-store nutritionists can also provide guidance based on your individual needs.",
        },
        {
          question: "Are your products tested for quality?",
          answer:
            "Yes, all our products undergo rigorous quality testing. We work with certified laboratories and follow strict quality assurance protocols to ensure safety and efficacy.",
        },
        {
          question: "Can I take multiple supplements together?",
          answer:
            "While many supplements can be taken together, some may interact. Always read product labels and consult with a healthcare professional if you're taking multiple supplements or medications.",
        },
      ],
    },
    {
      title: "Returns & Refunds",
      faqs: [
        {
          question: "What is your return policy?",
          answer:
            "You can return unopened products within 30 days of purchase for a full refund. Items must be in original packaging with receipt or order confirmation.",
        },
        {
          question: "Can I return opened products?",
          answer:
            "For hygiene reasons, we cannot accept returns of opened supplements, beauty products, or food items unless they are faulty or not as described.",
        },
        {
          question: "How long do refunds take?",
          answer:
            "Refunds are processed within 3-5 business days of receiving your return. The time to appear in your account depends on your payment method and bank.",
        },
        {
          question: "What if my product is damaged?",
          answer:
            "If you receive a damaged product, please contact us immediately with photos. We'll arrange a replacement or full refund at no cost to you.",
        },
      ],
    },
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
              {/*<Card className="text-center">
                <CardContent className="p-6">
                  <MessageCircle className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Live Chat</h3>
                  <p className="text-gray-600 mb-4">Chat with our customer service team on whatsapp</p>
                  <Button className="bg-green-600 hover:bg-green-700">Start Chat</Button>
                </CardContent>
              </Card>*/}

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
