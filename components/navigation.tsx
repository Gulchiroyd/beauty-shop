"use client"

import { useState } from "react"
import Link from "next/link"
import { ShoppingCart, Heart, Menu, X } from "lucide-react"
import { useLanguage } from "@/context/language-context"

export function Navigation() {
  const { language, setLanguage, t } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <h1 className="font-serif text-2xl font-bold text-primary">Vera Beauty</h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-sm font-medium text-foreground hover:text-primary transition">
              {t("home")}
            </Link>
            <Link href="/shop" className="text-sm font-medium text-foreground hover:text-primary transition">
              {t("shop")}
            </Link>
            <div className="group relative">
              <button className="text-sm font-medium text-foreground hover:text-primary transition">
                {t("shop_by_brand")}
              </button>
              <div className="absolute left-0 mt-0 w-48 bg-white border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition z-10">
                <Link href="/brands/rhode" className="block px-4 py-3 text-sm hover:bg-secondary transition">
                  Rhode
                </Link>
                <Link
                  href="/brands/rare-beauty"
                  className="block px-4 py-3 text-sm hover:bg-secondary transition border-t border-border"
                >
                  Rare Beauty
                </Link>
                <Link
                  href="/brands/kylie"
                  className="block px-4 py-3 text-sm hover:bg-secondary transition border-t border-border"
                >
                  Kylie Cosmetics
                </Link>
              </div>
            </div>
            <Link href="/about" className="text-sm font-medium text-foreground hover:text-primary transition">
              {t("about")}
            </Link>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            {/* Language Selector */}
            <div className="hidden sm:flex gap-2">
              {(["uz", "en", "ru"] as const).map((lang) => (
                <button
                  key={lang}
                  onClick={() => setLanguage(lang)}
                  className={`px-2 py-1 text-xs font-semibold transition rounded ${
                    language === lang ? "bg-primary text-primary-foreground" : "text-foreground hover:text-primary"
                  }`}
                >
                  {lang.toUpperCase()}
                </button>
              ))}
            </div>

            {/* Icons */}
            <Link href="/wishlist" className="p-2 hover:bg-secondary rounded-full transition">
              <Heart size={20} className="text-foreground" />
            </Link>
            <Link href="/cart" className="p-2 hover:bg-secondary rounded-full transition relative">
              <ShoppingCart size={20} className="text-foreground" />
              <span className="absolute top-0 right-0 w-5 h-5 bg-accent text-accent-foreground text-xs rounded-full flex items-center justify-center font-bold">
                0
              </span>
            </Link>

            {/* Mobile Menu */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 hover:bg-secondary rounded-full transition"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-border">
            <div className="flex flex-col gap-4 pt-4">
              <Link href="/" className="text-sm font-medium text-foreground hover:text-primary">
                {t("home")}
              </Link>
              <Link href="/shop" className="text-sm font-medium text-foreground hover:text-primary">
                {t("shop")}
              </Link>
              <div className="flex flex-col gap-2 pt-2">
                <Link href="/brands/rhode" className="block px-4 py-3 text-sm hover:bg-secondary transition">
                  Rhode
                </Link>
                <Link
                  href="/brands/rare-beauty"
                  className="block px-4 py-3 text-sm hover:bg-secondary transition border-t border-border"
                >
                  Rare Beauty
                </Link>
                <Link
                  href="/brands/kylie"
                  className="block px-4 py-3 text-sm hover:bg-secondary transition border-t border-border"
                >
                  Kylie Cosmetics
                </Link>
              </div>
              <Link href="/about" className="text-sm font-medium text-foreground hover:text-primary">
                {t("about")}
              </Link>
              <div className="flex gap-2 pt-2">
                {(["uz", "en", "ru"] as const).map((lang) => (
                  <button
                    key={lang}
                    onClick={() => setLanguage(lang)}
                    className={`px-2 py-1 text-xs font-semibold rounded ${
                      language === lang ? "bg-primary text-primary-foreground" : "text-foreground hover:text-primary"
                    }`}
                  >
                    {lang.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
