
import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { CartProvider } from "@/contexts/cart-context"
import { Toaster } from "sonner"  
import { AppProvider } from "@/contexts/AppContext"
import AuthWrapper from "@/components/authWrapper"
import { useState } from "react"
import { SearchProvider } from "@/contexts/SearchContext"
import WhatsAppButton from "@/components/WhatsAppButton"


const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  icons: {
    icon: "/placeholder.svg",
    shortcut: "/placeholder.svg",
    apple: "/placeholder.svg",
  },
  title: "Health Supply Market",
  description: "Your trusted medical and consumable products supplier",
  keywords: "vitamins, supplements, herbal remedies, natural health, wellness, beauty products",
  verification: {
    google: "ds_IGYsd1w0SWgME9wuxVYohbN8HOvtlwIe7W1_GKJQ",
  }
}


export default function RootLayout({children,}: {children: React.ReactNode})
 {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SearchProvider>
        <AppProvider>
        <CartProvider>
          <Header />
          <main className="lg:pt-[165px] md:pt-[156px] sm:pt-0">{children}</main>
          <WhatsAppButton />
          <Footer />
          <Toaster />
          <AuthWrapper />
        </CartProvider>
        </AppProvider>
        </SearchProvider>
      </body>
    </html>
  )
}