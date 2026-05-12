"use client"

import { Heart, Star } from "lucide-react"
import { useLanguage } from "@/context/language-context"

const featuredProducts = [
  {
    id: 1,
    name: "Rhode Beauty Lip Tint",
    price: 45000,
    brand: "Rhode",
    image: "/rhode-beauty-lip-tint.jpg",
    rating: 4.8,
    reviews: 156,
    badge: "New",
  },
  {
    id: 2,
    name: "Rare Beauty Liquid Blush",
    price: 55000,
    brand: "Rare Beauty",
    image: "/rare-beauty-blush.jpg",
    rating: 4.9,
    reviews: 324,
    badge: "Best Seller",
  },
  {
    id: 3,
    name: "Kylie Cosmetics Liquid Lipstick",
    price: 48000,
    brand: "Kylie Cosmetics",
    image: "/kylie-cosmetics-lipstick.jpg",
    rating: 4.7,
    reviews: 287,
    badge: "Sale",
  },
  {
    id: 4,
    name: "Rhode Beauty Skincare Set",
    price: 125000,
    brand: "Rhode",
    image: "/rhode-beauty-skincare.jpg",
    rating: 4.9,
    reviews: 412,
    badge: "Premium",
  },
]

export function FeaturedProducts() {
  const { t } = useLanguage()

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">Featured Collection</h2>
          <p className="text-lg text-muted-foreground">Discover our curated selection of premium cosmetics</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              className="group bg-white border border-border rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden bg-secondary">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-3 right-3 bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-semibold">
                  {product.badge}
                </div>
                <button className="absolute top-3 left-3 p-2 bg-white/90 hover:bg-white rounded-full transition opacity-0 group-hover:opacity-100">
                  <Heart size={18} className="text-primary" />
                </button>
              </div>

              {/* Content */}
              <div className="p-4">
                <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">{product.brand}</p>
                <h3 className="font-serif text-sm font-semibold text-foreground mb-2 line-clamp-2">{product.name}</h3>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-3">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={14}
                        className={i < Math.floor(product.rating) ? "fill-accent text-accent" : "text-border"}
                      />
                    ))}
                  </div>
                  <span className="text-xs text-muted-foreground">
                    {product.rating} ({product.reviews})
                  </span>
                </div>

                {/* Price */}
                <div className="flex justify-between items-center">
                  <span className="font-serif text-lg font-bold text-foreground">
                    {(product.price / 1000).toFixed(0)}K {t("price_uzs")}
                  </span>
                  <button className="px-4 py-2 bg-primary text-primary-foreground rounded-full text-xs font-semibold hover:shadow-md transition">
                    {t("add_to_cart")}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
