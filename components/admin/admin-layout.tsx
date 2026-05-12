"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { LayoutDashboard, Package, ShoppingCart, BarChart3, Users, Menu, X, LogOut } from "lucide-react"

const menuItems = [
  { label: "Dashboard", href: "/admin", icon: LayoutDashboard },
  { label: "Orders", href: "/admin/orders", icon: ShoppingCart },
  { label: "Products", href: "/admin/products", icon: Package },
  { label: "Categories", href: "/admin/categories", icon: BarChart3 },
  { label: "Customers", href: "/admin/customers", icon: Users },
]

export function AdminLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(true)

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside
        className={`${sidebarOpen ? "w-64" : "w-20"} bg-foreground text-background transition-all duration-300 border-r border-gray-200`}
      >
        <div className="p-6 flex items-center justify-between">
          {sidebarOpen && (
            <Link href="/" className="font-serif text-xl font-bold text-accent">
              Vera Beauty
            </Link>
          )}
          <button onClick={() => setSidebarOpen(!sidebarOpen)} className="p-2 hover:bg-primary/20 rounded transition">
            {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        <nav className="mt-8 space-y-2 px-3">
          {menuItems.map((item) => {
            const Icon = item.icon
            return (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-primary/20 transition group"
              >
                <Icon size={20} className="text-accent flex-shrink-0" />
                {sidebarOpen && (
                  <span className="text-sm font-medium group-hover:text-accent transition">{item.label}</span>
                )}
              </Link>
            )
          })}
        </nav>

        {/* Logout */}
        <div className="absolute bottom-6 left-3 right-3">
          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-red-600/20 text-red-400 transition">
            <LogOut size={20} />
            {sidebarOpen && <span className="text-sm font-medium">Logout</span>}
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        <div className="p-8">{children}</div>
      </main>
    </div>
  )
}
