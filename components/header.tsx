"use client"

import React from "react"

import { useEffect, useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Search, ShoppingCart, Menu, User, Heart } from "lucide-react"
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa6";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { useCart } from "@/contexts/cart-context"
import { useAppContext } from "@/contexts/AppContext"
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { authClient } from "@/lib/auth-client"
import { useSignOut } from "@/hooks/use-signout"

const headerPages =  [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Our Team", href: "/ourteam" },
  { name: "Term and Conditions", href: "/termsandcondition" },
  { name: "Privacy Policy", href: "/privacypolicy" },
  { name: "Return Policy", href: "/returns" },
  { name: "Contact Us", href: "/contact" },
  { name: "FAQs", href: "/faq" },
  { name: "Blogs", href: "/blogs" },
  { name: "Submit A Prescription", href: "/submit-prescription" },
  { name: "Book Consultation", href: "/book-consultation" },
  { name: "Health Checks Appointments", href: "/health-checks-appointments"},
  { name: "Careers", href: "/careers" },
]

const navigation = [
  { name: "Home", href: "/" },
  { name: "Vitamins", href: "/products?category=Vitamins" },
  { name: "Supplements", href: "/products?category=Supplements" },
  { name: "Herbal", href: "/products?category=Herbal" },
  { name: "Beauty", href: "/products?category=Beauty" },
  { name: "Wellness", href: "/products?category=Wellness" },
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
  const [ hideTopBar, setHideTopBar] = useState(false);

  let lastScrolly = 0;

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
    if (!isLoading && !user){
      router.push("/")
    }
  }, [user, isLoading, router])
  
  const handleClick = () => {
    router.push("order")
  }

  const handleSignOut = useSignOut();


  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch(e)
    }
  }
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

  useEffect (() => {
    const handleScroll = () => {
      const currentScrolly = window.scrollY;

      if (currentScrolly > lastScrolly && currentScrolly > 80) {
        setHideTopBar(true);
      } else {
        setHideTopBar(false);
      }
      lastScrolly = currentScrolly;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    
    <header className="sticky top-0 z-50 w-auto border-b  bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
    <div className={showUserLogin ? "pointer-events-none opacity-40" : ""}>
      {/* Top bar */}
      <div className={` bg-green-600 transition-transform duration-500 ${hideTopBar ? "-translate-y-full" : "translate-y-0"}`}>
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


        {/* Main header */}
        <div className="flex items-center justify-between px-4 mt-2 ">
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
                      href={item.href}
                      className="text-lg font-medium"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                  { showMore && headerPages.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-lg font-medium"
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
                      value={searchQuery}
                      onChange={handleSearchInputChange}
                      onKeyDown={handleKeyDown}
                      className="pl-8"
                    />
                  </form>
                </div>
              </SheetContent>
            </Sheet>

            <Link href="/" className="flex items-center space-x-2 min-w-fit">
              <div className="flex items-center space-x-2">
                <div className="h-8 w-8 rounded-full bg-green-600 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">H&B</span>
                </div>
                <span className="font-bold text-xl text-green-600">Muthuma International </span>
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
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={handleSearchInputChange}
                  onKeyDown={handleKeyDown}
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

            {/* Mobile Search Button */}
            <Button variant="ghost" size="icon" className="sm:hidden">
              <Search className="h-5 w-5 hidden" />
            </Button>

            <Button variant="ghost" size="icon" className="hidden">
              <User className="h-5 w-5 " />
            </Button>

            <Button variant="ghost" size="icon" className="hidden">
              <Heart className="h-5 w-5" />
            </Button>

            <Link href="/cart">
              <Button variant="ghost" size="icon" className="relative">
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
                        <img src="/placeholder-user.jpg" className="w-20 rounded-full" alt="Login" />
                      </div>
                    </>
                  
                )}
            </div>
          </div>
        </div>
        <div className="hidden md:flex h-10 items-center justify-center border-t  ">
          <nav className="hidden md:flex items-center space-x-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  )
}