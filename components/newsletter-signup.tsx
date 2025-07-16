"use client"

import type React from "react"

import { useState } from "react"
import { Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useToast } from "@/hooks/use-toast"

export default function NewsletterSignup() {
  const [email, setEmail] = useState("")
  const { toast } = useToast()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      toast({
        title: "Subscribed!",
        description: "Thank you for subscribing to our newsletter.",
      })
      setEmail("")
    }
  }

  return (
    <section className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-2xl mx-auto space-y-6">
          <Mail className="h-12 w-12 mx-auto text-green-400" />
          <h2 className="text-3xl font-bold">Stay Updated</h2>
          <p className="text-gray-300">
            Get the latest health tips, product updates, and exclusive offers delivered to your inbox.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-white text-gray-900"
              required
            />
            <Button type="submit" className="bg-green-600 hover:bg-green-700">
              Subscribe
            </Button>
          </form>

          <p className="text-xs text-gray-400">We respect your privacy. Unsubscribe at any time.</p>
        </div>
      </div>
    </section>
  )
}
