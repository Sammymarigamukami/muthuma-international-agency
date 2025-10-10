import Link from "next/link"
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-full bg-green-600 flex items-center justify-center">
                <span className="text-white font-bold text-sm">H&B</span>
              </div>
              <span className="font-bold text-xl text-green-400">Muthuma International Agency</span>
            </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                Muthuma International Agency is a trusted healthcare provider offering genuine medical 
                supplies, prescription medicines, and wellness essentials. Combining the expertise of 
                licensed pharmacies with the ease of online shopping, we ensure safe, affordable, and 
                timely access to quality healthcare — wherever you are.
              </p>

            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-white">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white hidden">
                <Youtube className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-300 hover:text-white">
                  All Products
                </Link>
              </li>
              <li>
                <Link href="/products?category=Vitamins" className="text-gray-300 hover:text-white">
                  Vitamins
                </Link>
              </li>
              <li>
                <Link href="/products?category=Supplements" className="text-gray-300 hover:text-white">
                  Supplements
                </Link>
              </li>
              <li>
                <Link href="/products?category=Herbal" className="text-gray-300 hover:text-white">
                  Herbal
                </Link>
              </li>
              <li>
                <Link href="/products?category=Beauty" className="text-gray-300 hover:text-white">
                  Beauty
                </Link>
              </li>
            </ul>
          </div>

          {/* Product Categories */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Product Categories</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/products?category=Vitamins" className="text-gray-300 hover:text-white">
                  Medical Condition
                </Link>
              </li>
              <li>
                <Link href="/products?category=Supplements" className="text-gray-300 hover:text-white">
                  Vitamin and Supplements
                </Link>
              </li>
              <li>
                <Link href="/products?category=Herbal" className="text-gray-300 hover:text-white">
                  Medical Devices
                </Link>
              </li>
              <li>
                <Link href="/products?category=Beauty" className="text-gray-300 hover:text-white">
                  Personal Care
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Customer Service</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-300 hover:text-white">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="text-gray-300 hover:text-white hidden">
                  Shipping Info
                </Link>
              </li>
              <li>
                <Link href="/returns" className="text-gray-300 hover:text-white">
                  Returns
                </Link>
              </li>
              <li>
                <Link href="/stores" className="text-gray-300 hover:text-white ">
                  Store Locator
                </Link>
              </li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h3 className="font-semibold text-lg mb-4">About</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-300 hover:text-white">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/sustainability" className="text-gray-300 hover:text-white hidden">
                  Sustainability
                </Link>
              </li>
              <li>
                <Link href="/press" className="text-gray-300 hover:text-white hidden">
                  Press
                </Link>
              </li>
              <li>
                <Link href="/investors" className="text-gray-300 hover:text-white hidden">
                  Investors
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">© 2025 Muthuma International Agency. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-gray-400 hover:text-white text-sm ">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-white text-sm ">
              Terms of Service
            </Link>
            <Link href="/cookies" className="text-gray-400 hover:text-white text-sm ">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
