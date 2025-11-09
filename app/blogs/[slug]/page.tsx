"use client"

import { useParams } from "next/navigation"
import { samplePosts } from "@/lib/blog"
import ReactMarkdown from "react-markdown"
import { Card } from "@/components/ui/card"

export default function SingleBlog() {
  const { slug } = useParams()
  const post = samplePosts.find((b) => b.slug === slug)

  if (!post) {
    return <p className="text-center py-16 text-red-500">Blog post not found.</p>
  }

  return (
    <Card className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-4xl">
        <p className="text-sm text-green-600 mb-2">{post.category}</p>
        <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
        <p className="text-gray-500 mb-4">
          By {post.author} | {post.date}
        </p>
        <img src={post.image} alt={post.title} className="w-full h-80 object-cover rounded mb-8" />
        <div className="prose max-w-none">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>
        <div className="mt-6">
          {post.tags.map((tag) => (
            <span key={tag} className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full mr-2 text-sm">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Card>
  )
}