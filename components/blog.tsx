"use client"

import Link from "next/link"
import { samplePosts } from "@/lib/blog"
import Slider from "react-slick";
import { Card } from "./ui/card";

export default function BlogsPage() {

  const settings = {
    focusOnSelect: true,
    dots: true,
    autoplay: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 500,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 }
      }
    ]
  };

  return (
    <section className="py-10 bg-gray-50">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Medical Blogs</h1>

        <Slider {...settings} className="space-x-4">
          {samplePosts.map((post) => (
            <div key={post.id} className="p-2 h-full">
              <Card className="bg-white shadow rounded-lg overflow-hidden hover:shadow-md transition flex flex-col h-full">
                <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <p className="text-sm text-green-600 mb-2">{post.category}</p>
                  <h2 className="text-xl font-semibold mb-2 line-clamp-2">{post.title}</h2>
                  <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                  <Link href={`/blogs/${post.slug}`} className="text-green-600 font-medium hover:underline">
                    Read More
                  </Link>
                </div>
              </Card>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  )
}

