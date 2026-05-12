"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ProductGrid } from "@/components/product-grid"
import { Sidebar } from "@/components/sidebar"
import { useLanguage } from "@/context/language-context"

export default function ShopPage() {
  const { t } = useLanguage()
  const [filters, setFilters] = useState({
    category: "all",
    brand: "all",
    priceRange: [0, 200000],
    sortBy: "featured",
  })
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">Shop Collection</h1>
          <p className="text-lg text-muted-foreground">Discover our complete range of premium cosmetics</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <Sidebar filters={filters} setFilters={setFilters} />

          {/* Products */}
          <div className="flex-1">
            {/* Search Bar */}
            <div className="mb-6">
              <input
                type="text"
                placeholder={t("search")}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            {/* Product Grid */}
            <ProductGrid filters={filters} searchQuery={searchQuery} />
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
