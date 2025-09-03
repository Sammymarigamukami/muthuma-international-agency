"use client"

import type React from "react"

import { useEffect, useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Search, ShoppingCart, Menu, User, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { useCart } from "@/contexts/cart-context"
import { useAppContext } from "@/contexts/AppContext"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

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
  const { user, logout, isLoading, setShowUserLogin, showUserLogin } = useAppContext()
  const [searchQuery, setSearchQuery] = useState("")
  const { items } = useCart()
  const router = useRouter()
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0)
  const [isClient, setIsClient] = useState(false);

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
  
  const handleClick = () => {
    router.push("order")
  }

  const handleLogout = async () => {
    try {
      await logout(); // Call the logout function from your context
      router.push("/"); // Redirect after the logout is complete
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch(e)
    }
  }
  console.log('Header render - user:', user);

  return (
    
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
    <div className={showUserLogin ? "pointer-events-none opacity-40" : ""}>
      <div className="container mx-auto px-4">
        {/* Top bar */}
        <div className="flex h-12 items-center justify-between border-b text-sm">
          <Link
          href="mailto:work@example.com"
          className="text-muted-foreground hover:text-primary"
          >
           Email us: work@example.com
          </Link>
          <div className="flex items-center space-x-4">
            <Link href="/contact" className="text-muted-foreground hover:text-primary">
              Contact Us
            </Link>
            <Link href="/stores" className="text-muted-foreground hover:text-primary hidden">
              Store Locator
            </Link>
          </div>
        </div>

        {/* Main header */}
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col space-y-4">
                  {navigation.map((item) => (
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

            <Link href="/" className="ml-4 md:ml-0">
              <div className="flex items-center space-x-2">
                <div className="h-8 w-8 rounded-full bg-green-600 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">H&B</span>
                </div>
                <span className="font-bold text-xl text-green-600">Holland & Barrett</span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
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

          {/* Search and Actions */}
          <div className="flex items-center space-x-4">
            {/* Desktop Search */}
            {/*<div className="hidden sm:flex items-center space-x-2">
              <form onSubmit={handleSearch} className="relative">
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
                  className="w-[200px] lg:w-[300px] pl-8"
                />
              </form>
            </div>*/}

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
                        <li onClick={handleLogout} className="p-1.5 pl-3 hover:bg-[#4fbf8b]/10 cursor-pointer">
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
      </div>
      </div>
    </header>
  )
}