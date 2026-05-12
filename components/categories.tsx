"use client"

import Link from "next/link"
import { useLanguage } from "@/context/language-context"

const categories = [
  {
    id: 1,
    name: { uz: "Teri parvarishi", en: "Skincare", ru: "Уход за кожей" },
    icon: "✨",
    image: "/skincare-products-display.png",
  },
  {
    id: 2,
    name: { uz: "Makiyaj", en: "Makeup", ru: "Макияж" },
    icon: "💄",
    image: "/makeup-cosmetics-flatlay.png",
  },
  {
    id: 3,
    name: { uz: "Pudra", en: "Powder", ru: "Пудра" },
    icon: "🎨",
    image: "/powder-makeup.jpg",
  },
  {
    id: 4,
    name: { uz: "Kremlar", en: "Creams", ru: "Кремы" },
    icon: "🧴",
    image: "/creams-skincare.jpg",
  },
]

export function Categories() {
  const { language } = useLanguage()

  return (
    <section className="py-16 bg-gradient-to-b from-white to-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">Shop by Category</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((category) => (
            <Link key={category.id} href={`/shop?category=${category.id}`} className="group">
              <div className="relative h-48 rounded-lg overflow-hidden mb-3">
                <img
                  src={category.image || "/placeholder.svg"}
                  alt={category.name[language]}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors" />
              </div>
              <h3 className="font-serif text-lg font-semibold text-foreground text-center group-hover:text-primary transition">
                {category.name[language]}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
