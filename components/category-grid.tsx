"use client";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { products } from "@/lib/data";
import { useState } from "react";
import Image from "next/image";

const category = [...new Set(products.map(p => p.category))];

console.log("Featured Products:", category);

export default function CategoryGrid() {
  const [loaded, setLoaded] = useState<{ [key: string]: boolean }>({});

  const handleImageLoad = (id: string) => {
    setLoaded((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <section className="py-16 bg-gray-50 transition-all duration-500">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Shop by Category
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Your trusted source for premium medical equipment and lab supplies —
            delivering quality, precision, and care for every healthcare need.
          </p>
        </div>

{/*        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {category.map((cat) => (
            <Link key={cat} href={`/category/${cat}`}>
              <Card className="group hover:shadow-lg transition-all duration-300 cursor-pointer h-full rounded-t-lg">
                <CardContent className="p-6 text-center">
                  <h3 className="font-semibold text-lg mb-2 text-gray-900">
                    {cat.name}
                  </h3>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>*/}
      </div>
    </section>
  );
}