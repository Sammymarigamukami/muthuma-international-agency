import Link from "next/link"
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react"
import { FaTiktok } from "react-icons/fa6";

interface FooterSection {
  title: string;
  pages: {
    name: string;
    href: string;
  }[];
}

const footerData: FooterSection[] = [
  {
    title: "Shop By Category",
    pages: [
      {
        name: "All Products",
        href: "/products",
      },
      {
        name: "Medical Test Kits",
        href: "/products?category=Medical Test Kits",
      },
      {
        name: "Submit Prescription",
        href: "/submit-prescription",
      },
      {
        name: "Visit Nearest Facility",
        href: "#",
      }
    ]

  },
  {
    title: "About Us",
    pages: [
      {
        name: "Our Team",
        href: "/ourteam",
      },
      {
        name: "Careers",
        href: "/careers",
      },
      {
        name: "Blog",
        href: "/blog",
      },
      {
        name:"Private Policy",
        href:"/privacypolicy"
      },
      {
        name:"Terms & Conditions",
        href:"/termsandconditions"
      },
      {
        name: "Our Story",
        href: "/about",
      }
    ]
  },
  {
    title:"Our Services",
    pages: [
      {
        name: "Products Store",
        href: "/products",
      },
      {
        name: "Book Consultation",
        href: "/book-consultation",
      },
      {
        name: "Submit Prescription",
        href: "/submit-prescription",
      }
    ]
  },
  {
    title: "Customer Care",
    pages: [
      {
        name: "Delivery & returns",
        href: "returns",
      },
      {
        name: "My account",
        href: "#",
      },
      {
        name: "FAQ's",
        href: "/faq",
      },
    ]
  }
]

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container items-center px-5 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-1 justify-center">
          {/* Company Info */}
          <div className="space-y-2 items-center">
                <div className="place-item-center ">
                  <img
                   className=" sm:h-20 md:h-24 w-auto object-contain"
                   src="/footerlogo.png" 
                   alt="footer logo" />
                </div>
                <p className="text-gray-400 text-sm">Find us on</p>
            <div className="flex gap-2">
              <Link href="https://www.facebook.com/share/1BmBCsMbmr/" className="text-gray-400 hover:text-white">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="https://www.tiktok.com/@nairobi.outpatien?_r=1&_t=ZM-91CG8LONMRk" className="text-gray-400 hover:text-white">
                <FaTiktok className="h-5 w-5" />
              </Link>
            </div>
          </div>
          {/* Footer Links */}

          {footerData.map((section)=> (
            <div key={section.title}>
              <h4 className="font-semibold">{section.title}</h4>
              <ul className="mt-2 space-y-2">
                {section.pages.map((page) => (
                  <li key={page.name}>
                    <Link href={page.href} className="text-gray-400 text-sm font-medium hover:text-white">
                      {page.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <h4 className="font-semibold">Contact Us</h4>
            <ul className="mt-2 space-y-2 ">
              <li className="text-gray-400 text-sm font-medium ">123 Health St.</li>
              <li className="text-gray-400 text-sm font-medium ">Nairobi, Kenya</li>
              <li><p className="text-gray-400 text-sm font-medium ">Email: </p>
                <Link
                className="text-gray-400 text-xs font-medium hover:text-white"
                 href="mailto:info@muthumainternational.com">
                  info@muthumainternational.com
                </Link>
              </li>
            </ul>

          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-xs">© 2025 Muthuma International Agency. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-gray-400 hover:text-white text-xs ">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-white text-xs ">
              Terms of Service
            </Link>
            <Link href="/cookies" className="text-gray-400 hover:text-white text-xs ">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
