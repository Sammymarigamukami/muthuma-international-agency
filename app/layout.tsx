import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { CartProvider } from "@/contexts/cart-context"
import { Toaster } from "@/components/ui/toaster"
import { Icon } from "lucide-react"
import { AuthProvider, useAppContext } from "@/contexts/AppContext"
import LoginWrapper from "@/components/LoginWrapper"
import SessionWatcher from "@/components/SessionWatcher"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  icons: {
    icon: "/placeholder.svg",
    shortcut: "/placeholder.svg",
    apple: "/placeholder.svg",
  },
  title: "Holland & Barrett - Health, Wellness & Natural Products",
  description:
    "Discover vitamins, supplements, herbal remedies, beauty and wellness products at Holland & Barrett. Your trusted partner in natural health.",
  keywords: "vitamins, supplements, herbal remedies, natural health, wellness, beauty products",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
})
 {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
        <CartProvider>
          <Header />
          <main>{children}</main>
          <Footer />
          <Toaster />
          <SessionWatcher />
          <LoginWrapper />
        </CartProvider>
        </AuthProvider>
      </body>
    </html>
  )
}