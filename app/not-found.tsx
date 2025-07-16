import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <div className="max-w-md mx-auto space-y-6">
        <h1 className="text-6xl font-bold text-gray-300">404</h1>
        <h2 className="text-2xl font-bold text-gray-900">Page Not Found</h2>
        <p className="text-gray-600">Sorry, we couldn't find the page you're looking for.</p>
        <Button asChild className="bg-green-600 hover:bg-green-700">
          <Link href="/">Return Home</Link>
        </Button>
      </div>
    </div>
  )
}
