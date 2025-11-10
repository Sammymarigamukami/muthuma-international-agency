"use client"

import Link from "next/link"
import { samplePosts } from "@/lib/blog"
import Slider from "react-slick"
import { Card } from "./ui/card"

export default function BlogsPage() {

  const settings = {
    focusOnSelect: true,
    dots: true,
    autoplay: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    pauseOnHover: true,
    pauseOnFocus: true,
    speed: 500,
    responsive: [
      {
        breakpoint: 5000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024, // tablets
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // mobile phones
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true, // center active slide
          centerPadding: "30px", // space on sides (you can adjust)
        },
      },
    ],
  }

  return (
    <section className="py-10 bg-gray-50">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Medical Blogs</h1>

        <Slider {...settings}>
          {samplePosts.map((post) => (
            <div key={post.id} className="p-2 h-full">
              <Card className="bg-white shadow rounded-lg overflow-hidden hover:shadow-md transition flex flex-col h-full">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <p className="text-sm text-green-600 mb-2">{post.category}</p>
                  <h2 className="text-xl font-semibold mb-2 line-clamp-2">{post.title}</h2>
                  <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
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
        </Slider>
      </div>
    </section>
  )
}
