"use client"

import { ChevronDown } from "lucide-react"
import { useState } from "react"
import { useLanguage } from "@/context/language-context"

interface SidebarProps {
  filters: {
    category: string
    brand: string
    priceRange: number[]
    sortBy: string
  }
  setFilters: (filters: any) => void
}

const categories = [
  { id: "skincare", name: { uz: "Teri parvarishi", en: "Skincare", ru: "Уход за кожей" } },
  { id: "makeup", name: { uz: "Makiyaj", en: "Makeup", ru: "Макияж" } },
  { id: "lips", name: { uz: "Lablar", en: "Lips", ru: "Губы" } },
  { id: "eyes", name: { uz: "Ko'zlar", en: "Eyes", ru: "Глаза" } },
  { id: "face", name: { uz: "Yuz", en: "Face", ru: "Лицо" } },
  { id: "foundation", name: { uz: "Podlova", en: "Foundation", ru: "Основа" } },
  { id: "powder", name: { uz: "Pudra", en: "Powder", ru: "Пудра" } },
  { id: "creams", name: { uz: "Kremlar", en: "Creams", ru: "Кремы" } },
  { id: "serums", name: { uz: "Serumlari", en: "Serums", ru: "Сыворотки" } },
]

const brands = [
  { id: "rhode", name: "Rhode" },
  { id: "rare-beauty", name: "Rare Beauty" },
  { id: "kylie", name: "Kylie Cosmetics" },
]

export function Sidebar({ filters, setFilters }: SidebarProps) {
  const { language } = useLanguage()
  const [openSections, setOpenSections] = useState({
    category: true,
    brand: true,
    price: true,
    sort: true,
  })

  const toggleSection = (section: keyof typeof openSections) => {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }))
  }

  return (
    <div className="w-full lg:w-64 space-y-6">
      {/* Sort */}
      <div className="bg-secondary/30 rounded-lg p-4">
        <button
          onClick={() => toggleSection("sort")}
          className="flex items-center justify-between w-full font-semibold text-foreground"
        >
          Sort By
          <ChevronDown size={18} className={`transition ${openSections.sort ? "rotate-180" : ""}`} />
        </button>
        {openSections.sort && (
          <div className="mt-4 space-y-3">
            {[
              { id: "featured", label: "Featured" },
              { id: "newest", label: "Newest" },
              { id: "price-low", label: "Price: Low to High" },
              { id: "price-high", label: "Price: High to Low" },
              { id: "rating", label: "Highest Rated" },
            ].map((option) => (
              <label key={option.id} className="flex items-center cursor-pointer">
                <input
                  type="radio"
                  name="sort"
                  value={option.id}
                  checked={filters.sortBy === option.id}
                  onChange={(e) => setFilters({ ...filters, sortBy: e.target.value })}
                  className="mr-3"
                />
                <span className="text-sm">{option.label}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Categories */}
      <div className="bg-secondary/30 rounded-lg p-4">
        <button
          onClick={() => toggleSection("category")}
          className="flex items-center justify-between w-full font-semibold text-foreground"
        >
          Category
          <ChevronDown size={18} className={`transition ${openSections.category ? "rotate-180" : ""}`} />
        </button>
        {openSections.category && (
          <div className="mt-4 space-y-3">
            <label className="flex items-center cursor-pointer">
              <input
                type="radio"
                name="category"
                value="all"
                checked={filters.category === "all"}
                onChange={(e) => setFilters({ ...filters, category: e.target.value })}
                className="mr-3"
              />
              <span className="text-sm font-medium">All Categories</span>
            </label>
            {categories.map((cat) => (
              <label key={cat.id} className="flex items-center cursor-pointer">
                <input
                  type="radio"
                  name="category"
                  value={cat.id}
                  checked={filters.category === cat.id}
                  onChange={(e) => setFilters({ ...filters, category: e.target.value })}
                  className="mr-3"
                />
                <span className="text-sm">{cat.name[language]}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Brands */}
      <div className="bg-secondary/30 rounded-lg p-4">
        <button
          onClick={() => toggleSection("brand")}
          className="flex items-center justify-between w-full font-semibold text-foreground"
        >
          Brand
          <ChevronDown size={18} className={`transition ${openSections.brand ? "rotate-180" : ""}`} />
        </button>
        {openSections.brand && (
          <div className="mt-4 space-y-3">
            <label className="flex items-center cursor-pointer">
              <input
                type="radio"
                name="brand"
                value="all"
                checked={filters.brand === "all"}
                onChange={(e) => setFilters({ ...filters, brand: e.target.value })}
                className="mr-3"
              />
              <span className="text-sm font-medium">All Brands</span>
            </label>
            {brands.map((brand) => (
              <label key={brand.id} className="flex items-center cursor-pointer">
                <input
                  type="radio"
                  name="brand"
                  value={brand.id}
                  checked={filters.brand === brand.id}
                  onChange={(e) => setFilters({ ...filters, brand: e.target.value })}
                  className="mr-3"
                />
                <span className="text-sm">{brand.name}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Price Range */}
      <div className="bg-secondary/30 rounded-lg p-4">
        <button
          onClick={() => toggleSection("price")}
          className="flex items-center justify-between w-full font-semibold text-foreground"
        >
          Price Range
          <ChevronDown size={18} className={`transition ${openSections.price ? "rotate-180" : ""}`} />
        </button>
        {openSections.price && (
          <div className="mt-4 space-y-4">
            <div className="space-y-2">
              <label className="text-xs font-semibold text-muted-foreground">Min Price</label>
              <input
                type="number"
                value={filters.priceRange[0]}
                onChange={(e) =>
                  setFilters({
                    ...filters,
                    priceRange: [Number.parseInt(e.target.value), filters.priceRange[1]],
                  })
                }
                className="w-full px-3 py-2 border border-border rounded text-sm"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-semibold text-muted-foreground">Max Price</label>
              <input
                type="number"
                value={filters.priceRange[1]}
                onChange={(e) =>
                  setFilters({
                    ...filters,
                    priceRange: [filters.priceRange[0], Number.parseInt(e.target.value)],
                  })
                }
                className="w-full px-3 py-2 border border-border rounded text-sm"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
