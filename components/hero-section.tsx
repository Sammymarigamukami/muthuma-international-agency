"use client"
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Contact, CreditCard, Globe, ThumbsUp, Truck } from 'lucide-react';
import Link from "next/link";

const heroImages = [
  {
    id: 1,
    imgBig: "/accuratebanner.jpg",
    imgSmall: "/phoneimg.jpg",
    alt: "Hero Image 1",
    link: "#"
  }
]

const data = [
  {
    id: 1,
    icon: <Truck />,
    title: "Express Delivery",
    description: "Same day delivery if ordered before 4pm"
  },
  {
    id: 2,
    icon: <Globe />,
    title: "Nationalwide Delivery",
    description: "We deliver to all major towns across Kenya"
  },
  {
    id: 3,
    icon: <Contact />,
    title: "Customer Support",
    description: "Available 7 days a week"
  },
  {
    id: 4,
    icon: <ThumbsUp />,
    title: "Genuine Products",
    description: "100% authentic products from trusted brands"
  },
  {
    id: 5,
    icon: <CreditCard />,
    title: "Easy Payments",
    description: "Pay by Mpesa"
  }

]

export default function HeroSection() {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 768);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  }
  return (
    <section className="relative bg-gradient-to-br from-green-50 to-blue-50 ">
      <div className="container mx-auto">
         <Slider {...settings}>
          {heroImages.map((image) => (
            <div key={image.id} className="relative">
              <Link href={image.link}>
                <img
                  src={isMobile ? image.imgSmall : image.imgBig}
                  alt={image.alt}
                  className="w-full h-100 object-cover overflow-hidden"
                />
              </Link>
            </div>
          ))}
         </Slider>
         <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
          {data.map((item) => (
            <div key={item.id} className="flex space-x-3 p-3 rounded-lg hover:bg-gray-100 transition">
              <div className="text-green-600 text-2xl">{item.icon}</div>
              <div>
              <h3 className="font-semibold text-gray-900">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            </div>
          ))}
         </div>
      </div>
    </section>
  )
}