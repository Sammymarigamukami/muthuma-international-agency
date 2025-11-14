"use client"

import Link from "next/link"
import { samplePosts } from "@/lib/blog"
import { Card } from "./ui/card"
import { Button } from "./ui/button";

const blogpost = samplePosts.slice(0, 3);

export default function BlogsPage() {



  return (
    <section className="py-10 bg-gray-50">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Medical Blogs</h1>
          <div className="overflow-hidden grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {blogpost.map((post) => (
                <div key={post.id} className="p-2 h-auto">
                  <Card className="bg-white shadow rounded-lg overflow-hidden hover:shadow-md transition flex flex-col h-full">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <p className="text-sm text-green-600 mb-2">{post.category}</p>
                      <h2 className="text-xl font-semibold mb-2 line-clamp-2 min-h-[4rem]">
                        {post.title}
                      </h2>
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      <Link
                        href={`/blogs/${post.slug}`}
                        className="text-green-600 font-medium hover:underline"
                      >
                        Read More
                      </Link>
                    </div>
                  </Card>
                </div>
              ))}
          </div>
          <div className="text-center">
            <Link href="/blogs">
              <Button size="lg" variant="outline" className="px-8 bg-transparent">
                View All Blogs
              </Button>
            </Link>
          </div>
      </div>
    </section>
  )
}


