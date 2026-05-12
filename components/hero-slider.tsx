"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useLanguage } from "@/context/language-context"

const slides = [
  {
    id: 1,
    title: { uz: "Har soya'da zarif", en: "Elegance in Every Shade", ru: "Элегантность в каждом оттенке" },
    subtitle: { uz: "Premium kosmetika to'plami", en: "Discover Premium Cosmetics", ru: "Откройте премиум косметику" },
    image: "/luxury-cosmetics-beauty.jpg",
    cta: { uz: "Yangi kelganlarni ko'rish", en: "Shop New Arrivals", ru: "Смотреть новые поступления" },
    brand: null,
  },
  {
    id: 2,
    title: { uz: "Rhode - Elegansiya", en: "Rhode - Premium Beauty", ru: "Rhode - Премиум красота" },
    subtitle: { uz: "Yangi koleksiya", en: "Exclusive Collections", ru: "Эксклюзивные коллекции" },
    image: "/luxury-cosmetics-rhode.jpg",
    cta: { uz: "Hozir o'zlashtir", en: "Explore Now", ru: "Исследуйте сейчас" },
    brand: "rhode",
  },
  {
    id: 3,
    title: {
      uz: "Rare Beauty - Maxsus",
      en: "Rare Beauty - Limited Edition",
      ru: "Rare Beauty - Ограниченное издание",
    },
    subtitle: { uz: "Ekskluziv to'plam", en: "Curated Selection", ru: "Отобранная коллекция" },
    image: "/luxury-makeup-rare-beauty.jpg",
    cta: { uz: "Kashf etish", en: "Discover", ru: "Откройте" },
    brand: "rare-beauty",
  },
  {
    id: 4,
    title: { uz: "Kylie - Shalohit", en: "Kylie Cosmetics - Bold & Bright", ru: "Kylie Cosmetics - Смелые оттенки" },
    subtitle: { uz: "Yangi mavsum kolleksiyasi", en: "New Season Collection", ru: "Коллекция нового сезона" },
    image: "/kylie-cosmetics-makeup.jpg",
    cta: { uz: "Sotib olish", en: "Shop Now", ru: "Купить сейчас" },
    brand: "kylie",
  },
]

export function HeroSlider() {
  const { language } = useLanguage()
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const goToSlide = (index: number) => setCurrentSlide(index)
  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length)
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)

  return (
    <div className="relative h-screen bg-gradient-hero overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.image || "/placeholder.svg"}
            alt={slide.title[language]}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
            <h2 className="font-serif text-5xl md:text-7xl font-bold text-white mb-4 text-balance">
              {slide.title[language]}
            </h2>
            <p className="text-xl md:text-2xl text-gray-100 mb-8">{slide.subtitle[language]}</p>
            <button className="px-8 py-3 bg-accent text-accent-foreground font-semibold rounded-full hover:shadow-lg transition">
              {slide.cta[language]}
            </button>
          </div>
        </div>
      ))}

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-10 p-2 bg-white/20 hover:bg-white/40 rounded-full backdrop-blur transition"
      >
        <ChevronLeft className="text-white" size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-10 p-2 bg-white/20 hover:bg-white/40 rounded-full backdrop-blur transition"
      >
        <ChevronRight className="text-white" size={24} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition ${
              index === currentSlide ? "bg-accent w-8" : "bg-white/50 hover:bg-white"
            }`}
          />
        ))}
      </div>
    </div>
  )
}
