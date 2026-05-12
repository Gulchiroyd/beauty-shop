import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { CartProvider } from "@/context/cart-context"
import { LanguageProvider } from "@/context/language-context"
import "./globals.css"

// Added premium serif and sans-serif fonts for Vera Beauty
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Vera Beauty - Premium Cosmetics | Rhode, Rare Beauty, Kylie",
  description:
    "Discover premium cosmetics from Rhode, Rare Beauty, and Kylie Cosmetics. Multi-language support: Uzbek, English, Russian.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-sans antialiased">
        <LanguageProvider>
          <CartProvider>
            {children}
            <Analytics />
          </CartProvider>
        </LanguageProvider>
      </body>
    </html>
  )
}
