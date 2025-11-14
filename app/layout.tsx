
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
import { businessSchema, productsSchema } from "@/lib/metaschema"


const inter = Inter({ subsets: ["latin"] })


export const metadata: Metadata = {
  icons: {
    icon: "/placeholder.svg",
    shortcut: "/placeholder.svg",
    apple: "/placeholder.svg",
  },
  title: "Health Supply Market Kenya - Medical Supplies Online",
  description: "Buy reliable medical consumables, test kits, and hospital supplies in Kenya. Fast delivery, affordable prices, trusted quality. Order online at Health Supply Market.",
  keywords: [
    "medical supplies kenya",
    "medical consumables kenya",
    "hospital supplies kenya",
    "medical test kits kenya",
    "HIV test kit kenya",
    "blood sugar test kit kenya",
    "pregnancy test kit kenya",
    "lab supplies kenya",
    "PPE supplies kenya",
    "surgical consumables kenya",
    "online medical shop kenya",
    "medical equipment kenya",
    "healthcare products kenya",
    "hospital equipment nairobi",
    "home medical kits kenya",
    "omega-3 supplements kenya",
    "herbal supplements kenya",
    "vitamins and supplements kenya"
  ],
  verification: {
    google: "ds_IGYsd1w0SWgME9wuxVYohbN8HOvtlwIe7W1_GKJQ",
  }
}


export default function RootLayout({children,}: {children: React.ReactNode})
 {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(productsSchema) }}
        />
      </head>
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