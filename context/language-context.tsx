"use client"

import type React from "react"
import { createContext, useContext, useState } from "react"

type Language = "uz" | "en" | "ru"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations = {
  uz: {
    home: "Bosh sahifa",
    shop: "Do'kon",
    about: "Biz haqida",
    contact: "Bog'lanish",
    cart: "Savat",
    wishlist: "Sevimli",
    search: "Qidirish",
    categories: "Kategoriyalar",
    skincare: "Teri parvarishi",
    makeup: "Makiyaj",
    powder: "Pudra",
    creams: "Kremlar",
    add_to_cart: "Savatga qo'shish",
    checkout: "Rasmdiy rasmiylashtirish",
    price: "Narx",
    rating: "Reyting",
    new_arrival: "Yangi kelgan",
    special_offer: "Maxsus taklif",
    lips: "Lablar",
    eyes: "Ko'zlar",
    face: "Yuz",
    foundation: "Podlova",
    serums: "Serumlari",
    rhode: "Rhode",
    rare_beauty: "Rare Beauty",
    kylie: "Kylie Cosmetics",
    shop_by_brand: "Brend bo'yicha xarid qiling",
    featured_from_brand: "Bu brenddan mashhur",
    new_from_brand: "Bu brenddan yangi",
    price_uzs: "so'm",
    delivery_country: "O'zbekiston bo'ylab yetkazib berish",
    available_only_uzbekistan: "Faqat O'zbekistonda mavjud",
  },
  en: {
    home: "Home",
    shop: "Shop",
    about: "About",
    contact: "Contact",
    cart: "Cart",
    wishlist: "Wishlist",
    search: "Search",
    categories: "Categories",
    skincare: "Skincare",
    makeup: "Makeup",
    powder: "Powder",
    creams: "Creams",
    add_to_cart: "Add to Cart",
    checkout: "Checkout",
    price: "Price",
    rating: "Rating",
    new_arrival: "New Arrival",
    special_offer: "Special Offer",
    lips: "Lips",
    eyes: "Eyes",
    face: "Face",
    foundation: "Foundation",
    serums: "Serums",
    rhode: "Rhode",
    rare_beauty: "Rare Beauty",
    kylie: "Kylie Cosmetics",
    shop_by_brand: "Shop by Brand",
    featured_from_brand: "Featured from this brand",
    new_from_brand: "New from this brand",
    price_uzs: "UZS",
    delivery_country: "Delivery throughout Uzbekistan",
    available_only_uzbekistan: "Available only in Uzbekistan",
  },
  ru: {
    home: "Главная",
    shop: "Магазин",
    about: "О нас",
    contact: "Контакт",
    cart: "Корзина",
    wishlist: "Избранное",
    search: "Поиск",
    categories: "Категории",
    skincare: "Уход за кожей",
    makeup: "Макияж",
    powder: "Пудра",
    creams: "Кремы",
    add_to_cart: "Добавить в корзину",
    checkout: "Оформить заказ",
    price: "Цена",
    rating: "Рейтинг",
    new_arrival: "Новое поступление",
    special_offer: "Специальное предложение",
    lips: "Губы",
    eyes: "Глаза",
    face: "Лицо",
    foundation: "Основа",
    serums: "Сыворотки",
    rhode: "Rhode",
    rare_beauty: "Rare Beauty",
    kylie: "Kylie Cosmetics",
    shop_by_brand: "Покупайте по брендам",
    featured_from_brand: "Популярное от этого бренда",
    new_from_brand: "Новое от этого бренда",
    price_uzs: "UZS",
    delivery_country: "Доставка по Узбекистану",
    available_only_uzbekistan: "Доступно только в Узбекистане",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)["en"]] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider")
  }
  return context
}
