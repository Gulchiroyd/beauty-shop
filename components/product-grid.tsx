"use client"

import { useState } from "react"
import Link from "next/link"
import { Heart, Star, ShoppingCart } from "lucide-react"
import { useLanguage } from "@/context/language-context"

interface FilterProps {
  category: string
  brand: string
  priceRange: [number, number]
  sortBy: string
}

const allProducts = [
  {
    id: 1,
    name: "Rhode Beauty Lip Tint",
    brand: "rhode",
    category: "lips",
    price: 45000,
    rating: 4.8,
    reviews: 156,
    image: "/rhode-beauty-lip-tint.jpg",
    badge: "New",
  },
  {
    id: 2,
    name: "Rare Beauty Liquid Blush",
    brand: "rare-beauty",
    category: "face",
    price: 55000,
    rating: 4.9,
    reviews: 324,
    image: "/rare-beauty-blush.jpg",
    badge: "Best Seller",
  },
  {
    id: 3,
    name: "Kylie Cosmetics Liquid Lipstick",
    brand: "kylie",
    category: "lips",
    price: 48000,
    rating: 4.7,
    reviews: 287,
    image: "/kylie-cosmetics-lipstick.jpg",
    badge: "Sale",
  },
  {
    id: 4,
    name: "Rhode Beauty Skincare Set",
    brand: "rhode",
    category: "skincare",
    price: 125000,
    rating: 4.9,
    reviews: 412,
    image: "/rhode-beauty-skincare.jpg",
    badge: "Premium",
  },
  {
    id: 5,
    name: "Rare Beauty Setting Powder",
    brand: "rare-beauty",
    category: "powder",
    price: 42000,
    rating: 4.6,
    reviews: 198,
    image: "/powder-makeup.jpg",
    badge: "Popular",
  },
  {
    id: 6,
    name: "Kylie Cosmetics Eye Cream",
    brand: "kylie",
    category: "eyes",
    price: 52000,
    rating: 4.8,
    reviews: 276,
    image: "/luxury-cosmetics-rhode.jpg",
    badge: "New",
  },
  {
    id: 7,
    name: "Rhode Beauty Moisturizer",
    brand: "rhode",
    category: "creams",
    price: 68000,
    rating: 4.7,
    reviews: 334,
    image: "/rhode-moisturizer.webp",
    badge: "Best Seller",
  },
  {
    id: 8,
    name: "Rare Beauty Foundation",
    brand: "rare-beauty",
    category: "foundation",
    price: 65000,
    rating: 4.9,
    reviews: 402,
    image: "/rare-foundation.webp",
    badge: "Top Rated",
  },
  {
    id: 9,
    name: "Kylie Cosmetics Eyeshadow Palette",
    brand: "kylie",
    category: "eyes",
    price: 72000,
    rating: 4.8,
    reviews: 198,
    image: "/rare-beauty-makeup.jpg",
    badge: "Popular",
  },
  {
    id: 10,
    name: "Rhode Beauty Serum",
    brand: "rhode",
    category: "serums",
    price: 95000,
    rating: 4.9,
    reviews: 256,
    image: "/rhode-serum.webp",
    badge: "Best Seller",
  },
  {
    id: 11,
    name: "Rare Beauty Face Primer",
    brand: "rare-beauty",
    category: "makeup",
    price: 38000,
    rating: 4.7,
    reviews: 312,
    image: "/creams-skincare.jpg",
    badge: "New",
  },
  {
    id: 12,
    name: "Kylie Cosmetics Lip Gloss",
    brand: "kylie",
    category: "lips",
    price: 35000,
    rating: 4.6,
    reviews: 289,
    image: "/kylie-cosmetics.jpg",
    badge: "Popular",
  },
]

export function ProductGrid({ filters, searchQuery }: { filters: FilterProps; searchQuery: string }) {
  const { t } = useLanguage()
  const [wishlisted, setWishlisted] = useState<Set<number>>(new Set())

  const filteredProducts = allProducts
    .filter((product) => {
      // Search filter
      if (searchQuery && !product.name.toLowerCase().includes(searchQuery.toLowerCase())) {
        return false
      }

      // Category filter
      if (filters.category !== "all" && product.category !== filters.category) {
        return false
      }

      // Brand filter
      if (filters.brand !== "all" && product.brand !== filters.brand) {
        return false
      }

      // Price filter
      if (product.price < filters.priceRange[0] || product.price > filters.priceRange[1]) {
        return false
      }

      return true
    })
    .sort((a, b) => {
      switch (filters.sortBy) {
        case "price-low":
          return a.price - b.price
        case "price-high":
          return b.price - a.price
        case "rating":
          return b.rating - a.rating
        case "newest":
          return b.id - a.id
        default:
          return 0
      }
    })

  const toggleWishlist = (id: number) => {
    const newWishlisted = new Set(wishlisted)
    if (newWishlisted.has(id)) {
      newWishlisted.delete(id)
    } else {
      newWishlisted.add(id)
    }
    setWishlisted(newWishlisted)
  }

  return (
    <div>
      {filteredProducts.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-lg text-muted-foreground">No products found matching your filters.</p>
        </div>
      ) : (
        <>
          <p className="text-sm text-muted-foreground mb-6">Showing {filteredProducts.length} products</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <Link key={product.id} href={`/product/${product.id}`}>
                <div className="group bg-white border border-border rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
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
                    <button
                      onClick={(e) => {
                        e.preventDefault()
                        toggleWishlist(product.id)
                      }}
                      className="absolute top-3 left-3 p-2 bg-white/90 hover:bg-white rounded-full transition opacity-0 group-hover:opacity-100"
                    >
                      <Heart
                        size={18}
                        className={wishlisted.has(product.id) ? "fill-primary text-primary" : "text-primary"}
                      />
                    </button>
                  </div>

                  {/* Content */}
                  <div className="p-4 flex-1 flex flex-col">
                    <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">
                      {product.brand.replace("-", " ")}
                    </p>
                    <h3 className="font-serif text-sm font-semibold text-foreground mb-2 line-clamp-2">
                      {product.name}
                    </h3>

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
                      <span className="text-xs text-muted-foreground">({product.reviews})</span>
                    </div>

                    {/* Footer */}
                    <div className="mt-auto flex justify-between items-center">
                      <span className="font-serif text-lg font-bold text-foreground">
                        {(product.price / 1000).toFixed(0)}K {t("price_uzs")}
                      </span>
                      <button
                        onClick={(e) => {
                          e.preventDefault()
                        }}
                        className="p-2 bg-primary text-primary-foreground rounded-full hover:shadow-md transition"
                      >
                        <ShoppingCart size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </>
      )}
    </div>
  )
}
