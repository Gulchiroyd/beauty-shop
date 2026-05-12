"use client"
import { Navigation } from "@/components/navigation"
import { HeroSlider } from "@/components/hero-slider"
import { FeaturedProducts } from "@/components/featured-products"
import { Categories } from "@/components/categories"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <HeroSlider />
      <FeaturedProducts />
      <Categories />
      <Footer />
    </main>
  )
}
