"use client";

import React from 'react';
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { products } from "@/lib/data";
import { useState } from "react";

const featuredProducts = products.filter(p => p.featured).slice(0, 5);

export default function MedicalEquipment() {
  const [loaded, setLoaded] = useState<{ [key: string]: boolean }>({});

  const handleImageLoad = (id: string) => {
    setLoaded((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <section className="py-16 bg-gray-50 transition-all duration-500">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Medical Equipment & Lab Supplies
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {featuredProducts.map((product) => (
            <Link key={product.id} href={`/products/${product.category?.toLowerCase()}/${product.name
                      ?.toLowerCase()
                      .replace(/\s+/g, "-")}/${product.id}`}>
              <Card className="group hover:shadow-lg transition-all duration-300 cursor-pointer h-full rounded-t-lg">
                <CardContent className="p-6 text-center">
                  <div className="relative overflow-hidden rounded-2xl mb-4 h-48 flex items-center justify-center bg-gray-100">
                    {!loaded[product.id] && (
                      <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center text-gray-400">
                        Loading...
                      </div>
                    )}
                    <img
                      src={product.image}
                      alt={product.name}
                      className={`w-full md:w-30 object-cover transition-all duration-700 ease-out ${
                        loaded[product.id]
                          ? "opacity-100 scale-100"
                          : "opacity-0 scale-105"
                      }`}
                      onLoad={() => handleImageLoad(product.id)}
                      onError={() => handleImageLoad(product.id)}
                    />
                  </div>
                  <h3 className="font-semibold text-lg mb-2 text-gray-900">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 text-sm line-clamp-2">
                    {product.description}
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}