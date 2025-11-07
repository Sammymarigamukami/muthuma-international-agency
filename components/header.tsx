"use client"

import { useEffect, useState, useRef } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Search, ShoppingCart, Menu, User, Heart, UserRound, Cross } from "lucide-react"
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa6";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { useCart } from "@/contexts/cart-context"
import { useAppContext } from "@/contexts/AppContext"
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { authClient } from "@/lib/auth-client"
import { useSignOut } from "@/hooks/use-signout"
import { useSearch } from "@/contexts/SearchContext"
import { products } from "@/lib/data"
import { groupByCategory } from "@/lib/utils"
import { Product } from "@/lib/types"
import React from "react"


const headerPages =  [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Our Team", href: "/ourteam" },
  { name: "Term and Conditions", href: "/termsandcondition" },
  { name: "Privacy Policy", href: "/privacypolicy" },
  { name: "Return Policy", href: "/returns" },
  { name: "FAQs", href: "/faq" },
  { name: "Blogs", href: "/blogs" },
  { name: "Submit A Prescription", href: "/submit-prescription" },
  { name: "Book Consultation", href: "/book-consultation" },
  { name: "Health Checks Appointments", href: "/health-checks-appointments"},
  { name: "Careers", href: "/careers" },
]

const navigation = [
  { name: "Medical Test Kits",
    sub: [
      { 
        id: 1, 
        name: "Infectious Disease Test Kits"
      },
      { id: 2, name: "Pregnancy Test Kits"},
    ],
  },
  {
      name: "Medical Supplies",
      sub: [
        { id: 4, name: "Gloves" },
        { id: 5, name: "Masks" },
        { id: 6, name: "Bandages" },
      ],
    },
    {
      name: "Homecare Equipment",
      sub: [
        { id: 7, name: "Thermometers" },
        { id: 8, name: "BP Monitors" },
      ],
    },
    {
      name: "Lab Equipment",
      sub: [
        { id: 9, name: "Microscopes" },
        { id: 10, name: "Centrifuges" },
      ],
    },
    {
      name: "Lab Glassware",
      sub: [
        { id: 11, name: "Beakers" },
        { id: 12, name: "Test Tubes" },
      ],
    },
]



export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { user, isLoading, setShowUserLogin, showUserLogin } = useAppContext()
  const [searchQuery, setSearchQuery] = useState("")
  const { items } = useCart()
  const router = useRouter()
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0)
  const [isClient, setIsClient] = useState(false);
  const [ showCategories, setShowCategories] = useState(true);
  const [ showMore, setShowMore] = useState(false);
  const [ activeMenu, setActiveMenu] = useState<string | null>(null);
  const [ hideTop, setHideTop] = useState(false);
  const { searchTerm, setSearchTerm } = useSearch();

  const grouped = groupByCategory(products as Product[]);


  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/products?search=${encodeURIComponent(searchQuery.trim())}`)
      setSearchQuery("")
    }
  }
    useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {

    const currentpath = window.location.pathname;
    const publicRoutes = ["/reset-password"];

    if (!isLoading && !user && !publicRoutes.includes(currentpath)){
      router.push("/")
    }
  }, [user, isLoading, router])
  

  const handleClick = () => {
    router.push("order")
  }

  const handleSignOut = useSignOut();

  useEffect(() => {
    if (searchTerm.length > 0) {
      router.push("/products");
    }
  }, [searchTerm, router])

  console.log('Header render - user:', user);

  const handleShowCategories = () => {
    setShowCategories(true);
    setShowMore(false);
  }

  const handleShowMore = () => {
    setShowCategories(false);
    setShowMore(true);
  }

  // hide top bar when scrolling dowm, show when scrolling up

  useEffect(() => {
    const handleScroll = () => setHideTop(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    
    <header
  className={`md:fixed top-0 z-50 left-0 w-full border-b transition-all duration-300  ${
    hideTop
      ? "bg-white/80 backdrop-blur-sm shadow-md "
      : "bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 "
  }`}
>
    <div className={showUserLogin ? "pointer-events-none opacity-40" : ""}>
      {/* Top bar */}
      {!hideTop &&(
      <div className="bg-green-600 mt-0 hidden md:flex ">
      <div className="border-b border-green-200/40" >
        <div className="container mx-auto px-4">
          <nav className="hidden md:flex h-auto flex-wrap items-center justify-center py-2">
            {headerPages.map((item, index) => (
              <React.Fragment key={item.name}>
                <Link
                  href={item.href}
                  className="text-[14px] font-medium text-gray-600 hover:text-primary transition-colors"
                >
                  {item.name}
                </Link>

                {/* Separator only between items */}
                {index !== headerPages.length - 1 && (
                  <div className="h-3.5 w-px bg-gray-500 mx-3 shrink-0"></div>
                )}
              </React.Fragment>
            ))}
          </nav>
        </div>
      </div>
      </div>
      )}


        {/* Main header */}
        <div className="flex items-center justify-between px-4 ">
          <div className="flex items-center flex-shrink gap-4 w-1/4 ">
            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                {/* Toggle Buttons */}
                <SheetTitle className="flex justify-around mt-4 border-b pb-2">
                  <button
                  onClick={handleShowCategories}
                  className={`px-4 py-2 rounded-md text-sm font-medium 
                    ${showCategories ? 'bg-green-600 text-white' : 'text-gray-600 hover:bg-gray-100'}`}
                  >categories</button>
                  <button
                    onClick={handleShowMore}
                    className={`px-4 py-2 rounded-md text-sm font-medium 
                      ${showMore ? 'bg-green-600 text-white' : 'text-gray-600 hover:bg-gray-100'}`}
                  >More</button>
                </SheetTitle>
                <nav className="flex flex-col space-y-4">

                  { showCategories && navigation.map((item) => (
                    
                    <Link
                      key={item.name}
                      href= {`/products?category=${item.name}`}
                      className="text-sm font-medium text-gray-700 border-b-gray-500"
                      onClick={() => setIsMenuOpen(false)}
                    >
                    
                      {item.name}
                    </Link>
                  ))}
                  { showMore && headerPages.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-sm font-medium text-gray-700 border-b-gray-500"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>
                {/* Mobile Search */}
                <div className="mt-6">
                  <form onSubmit={handleSearch} className="relative hidden">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      type="search"
                      placeholder="Search products..."
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-8"
                    />
                  </form>
                </div>
              </SheetContent>
            </Sheet>

              <Link href="/" className="flex items-center space-x-2 min-w-fit">
                <div className="flex items-center justify-center">
                  <img
                    className="h-10 sm:h-20 md:h-14 lg:h-16 w-auto"
                    src="/outpatientlogo.png"
                    alt="logo"
                  />
                </div>
              </Link>
          </div>

          {/* Search and Actions */}
          <div className="flex items-center justify-end flex-grow w-3/4 gap-3">
            {/* Desktop Search */}
            <div className="hidden sm:flex items-center space-x-2 flex-1 ml-8 w-auto ">
              <form onSubmit={handleSearch} className="relative w-full max-w-[1000px] ml-10">
                <Search
                  className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground cursor-pointer"
                  onClick={handleSearch}
                />
                <Input
                  type="search"
                  value={searchTerm}
                  placeholder="Search products..."
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className=" pl-8 w-full"
                />
              </form>
            </div>
            {/* Social Icons */}
          <div className="hidden md:flex items-center space-x-3">
            <Link href="https://facebook.com" target="_blank"><FaFacebookF className="text-gray-600 hover:text-blue-600 text-3xl cursor-pointer" /></Link>
            <Link href="https://instagram.com" target="_blank"><FaInstagram className="text-gray-600 hover:text-pink-500 text-3xl cursor-pointer" /></Link>
            <Link href="https://tiktok.com" target="_blank"><FaTiktok className="text-gray-600 hover:text-black text-3xl cursor-pointer" /></Link>
          </div>

            <Link href="/cart">
              <Button variant="ghost" size="icon" className="relative mt-3">
                <ShoppingCart className="h-5 w-5" />
                {itemCount > 0 && (
                  <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs">
                    {itemCount}
                  </Badge>
                )}
              </Button>
            </Link>
            <div>
                { isLoading ? (
                  <div className="w-10 h-10 rounded-full bg-gray-200 animate-pulse" />
                ): user ? (
                    <div className="relative group">
                      <img src="/profile_icon.png" className="w-10 rounded-full" alt="User Profile" />
                      <ul className="hidden group-hover:block absolute top-10 right-0 bg-white shadow border border-gray-200 py-2.5 w-30 rounded-md text-sm z-40">
                        <li onClick={handleClick} className="p-1.5 pl-3 hover:bg-[#4fbf8b]/10 cursor-pointer">
                          My order
                        </li>
                        <li onClick={handleSignOut} className="p-1.5 pl-3 hover:bg-[#4fbf8b]/10 cursor-pointer">
                          Logout
                        </li>
                      </ul>
                    </div>
                  ) : (
                    <>
                      <button
                        className="cursor-pointer px-8 py-2 bg-[#4fbf8b] hover:bg-[#44ae7c] transition text-white rounded-full hidden md:block"
                        onClick={() => setShowUserLogin(true)}
                      >
                        Login
                      </button>
                      <div
                        onClick={() => setShowUserLogin(true)}
                        className="md:hidden cursor-pointer"
                      >
                        <UserRound size={30} className="text-gray-600"/>
                      </div>
                    </>
                  
                )}
            </div>
          </div>
             {/* Mobile Search */}
        </div>
            <div className="flex sm:hidden items-center mt-2 mb-3 space-x-2 pl-12  flex-1 w-auto">

                <Input
                
                  type="search"
                  value={searchTerm}
                  placeholder="Search products..."
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className=" pl-8 pr-6 w-75 shadow-sm outline-none"
                />
            </div>
        {/* Desktop Menu */}
          <div className="hidden md:flex h-10 items-center justify-center border-t">
            <nav className="hidden md:flex items-center space-x-6 relative">
              <Link
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                href="/"
              >
                Home
              </Link>

              {/* Dropdown: Shop By Category */}
              <div className="relative group">
                <button 
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                  Shop by Category
                </button>
                {/* Category submenu */}
                <ul className="absolute left-0 mt-2 hidden group-hover:block bg-white border shadow-lg rounded-md min-w-[200px] z-50">
                  {Object.entries(grouped).map(([category, categoryProducts]) => (
                    <li 
                    key={category} 
                    onMouseEnter={() => setActiveMenu(category)}
                    onMouseLeave={() => setActiveMenu(null)}
                    className="relative group/item">
                      <span className="block px-4 py-2 hover:bg-gray-100 cursor-pointer">
                        <Link href={`/products?category=${encodeURIComponent(category)}`}>{category}</Link>
                      </span>

                      {/* Products submenu */}
                      {activeMenu === category && (
                      <ul className="absolute top-0 left-full hidden group-hover/item:block bg-white border shadow-md rounded-md min-w-[200px]">
                        {categoryProducts.map((product) => (
                          <li key={product.id}>
                            <Link
                              href={`/products/${product.category?.toLowerCase()}/${product.name
                                ?.toLowerCase()
                                .replace(/\s+/g, "-")}/${product.id}`}
                              className="block px-4 py-2 text-sm hover:bg-gray-100"
                            >
                              {product.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                      )}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Other links */}
              <Link 
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              href="/products"
              >Shop by Condition</Link>
              <Link 
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              href="/products"
              >Sales & Offers</Link>
              <Link 
              className="flex text-sm text-green-400 hover:text-green-600 font-medium transition-colors items-center"
              href="/submit-prescription"
              >
                <span><Cross size={20} /></span>
                Submit Prescription
              </Link>
              <Link 
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              href="#"
              >Health Services</Link>
            </nav>
          </div>
      </div>
    </header>
  )
}