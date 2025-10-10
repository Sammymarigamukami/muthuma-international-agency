import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { CartProvider } from "@/contexts/cart-context"
import { Toaster } from "sonner"  
import { AppProvider, useAppContext } from "@/contexts/AppContext"
import SessionWatcher from "@/components/SessionWatcher"
import AuthWrapper from "@/components/authWrapper"


const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  icons: {
    icon: "/placeholder.svg",
    shortcut: "/placeholder.svg",
    apple: "/placeholder.svg",
  },
  title: "Muthuma International",
  description:
    "Discover vitamins, supplements, herbal remedies, beauty and wellness products at Muthuma International. Your trusted partner in natural health.",
  keywords: "vitamins, supplements, herbal remedies, natural health, wellness, beauty products",
}

export default function RootLayout({children,}: {children: React.ReactNode})
 {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppProvider>
        <CartProvider>
          <Header />
          <main>{children}</main>
          <Footer />
          <Toaster />
          <SessionWatcher />
          <AuthWrapper />
        </CartProvider>
        </AppProvider>
      </body>
    </html>
  )
}