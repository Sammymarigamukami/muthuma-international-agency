"use client";

import Link from "next/link";
import { samplePosts } from "@/lib/blog";
import { Card } from "@/components/ui/card";

export default function BlogsPage() {
  return (
    <section className="py-10 bg-gray-50">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">
          Medical Blog Articles
        </h1>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {samplePosts.map((post) => (
            <Card
              key={post.id}
              className="flex flex-col bg-white h-full shadow hover:shadow-lg transition duration-300 rounded-xl overflow-hidden"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-52 object-cover"
              />

              <div className="flex flex-col justify-between flex-grow p-5">
                <div>
                  <p className="text-sm text-green-600 mb-2 uppercase">
                    {post.category}
                  </p>
                  <h2 className="text-lg font-semibold text-gray-900 mb-3">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 line-clamp-3">
                    {post.excerpt}...
                  </p>
                </div>

                <div className="mt-4">
                  <Link
                    href={`/blogs/${post.slug}`}
                    className="text-green-600 font-medium hover:underline"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
