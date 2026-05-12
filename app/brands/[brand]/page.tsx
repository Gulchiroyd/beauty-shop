"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Sidebar } from "@/components/sidebar"
import { ProductGrid } from "@/components/product-grid"
import { useLanguage } from "@/context/language-context"
import { BRAND_NAMES } from "@/lib/constants"

export default function BrandPage({ params }: { params: { brand: string } }) {
  const { language, t } = useLanguage()
  const [filters, setFilters] = useState({
    category: "all",
    brand: params.brand,
    priceRange: [0, 200000],
    sortBy: "featured",
  })
  const [searchQuery, setSearchQuery] = useState("")

  const brandName = BRAND_NAMES[params.brand as keyof typeof BRAND_NAMES] || "Brand"

  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Brand Header */}
        <div className="mb-12">
          <h1 className="font-serif text-5xl font-bold text-foreground mb-4">{brandName}</h1>
          <p className="text-lg text-muted-foreground">{t("featured_from_brand")}</p>
          <p className="text-sm text-accent mt-2">{t("available_only_uzbekistan")}</p>
        </div>

        {/* Filters & Products */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <Sidebar filters={filters} setFilters={setFilters} />

          {/* Main Content */}
          <div className="flex-1">
            {/* Search */}
            <div className="mb-6">
              <input
                type="text"
                placeholder={t("search")}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            {/* Products */}
            <ProductGrid filters={filters} searchQuery={searchQuery} />
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
