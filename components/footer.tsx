"use client"

import Link from "next/link"
import { useLanguage } from "@/context/language-context"

export function Footer() {
  const { language, t } = useLanguage()

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-2xl font-bold text-accent mb-4">Vera Beauty</h3>
            <p className="text-sm text-gray-400">Premium cosmetics for everyone. Elegance in every shade.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <div className="space-y-2 text-sm">
              <Link href="/" className="text-gray-400 hover:text-accent transition">
                {t("home")}
              </Link>
              <Link href="/shop" className="text-gray-400 hover:text-accent transition">
                {t("shop")}
              </Link>
              <Link href="/about" className="text-gray-400 hover:text-accent transition">
                {t("about")}
              </Link>
            </div>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold text-white mb-4">Support</h4>
            <div className="space-y-2 text-sm">
              <a href="mailto:support@verabeauty.uz" className="text-gray-400 hover:text-accent transition">
                support@verabeauty.uz
              </a>
              <p className="text-gray-400">+998 71 123 45 67</p>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold text-white mb-4">Follow Us</h4>
            <div className="flex gap-4">
              {["Instagram", "Facebook", "TikTok"].map((social) => (
                <a key={social} href="#" className="text-gray-400 hover:text-accent transition text-sm">
                  {social}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2025 Vera Beauty. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
