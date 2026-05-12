"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { useCart } from "@/context/cart-context"
import { Trash2, Plus, Minus } from "lucide-react"
import Link from "next/link"

export default function CartPage() {
  const { items, removeItem, updateQuantity, total } = useCart()

  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="font-serif text-4xl font-bold text-foreground mb-8">Shopping Cart</h1>

        {items.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground mb-6">Your cart is empty</p>
            <Link
              href="/shop"
              className="inline-block px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:shadow-lg transition"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {items.map((item) => (
                <div key={item.id} className="flex gap-4 p-4 bg-secondary/30 rounded-lg border border-border">
                  {/* Image */}
                  <div className="h-24 w-24 rounded-lg overflow-hidden bg-secondary flex-shrink-0">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Details */}
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground mb-1">{item.name}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{item.brand}</p>
                    <p className="font-serif text-lg font-bold text-foreground">
                      {(item.price / 1000).toFixed(0)}K UZS
                    </p>
                  </div>

                  {/* Quantity */}
                  <div className="flex items-center border border-border rounded-lg h-fit">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="px-3 py-2 hover:bg-secondary transition"
                    >
                      <Minus size={16} />
                    </button>
                    <span className="px-4 font-semibold">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="px-3 py-2 hover:bg-secondary transition"
                    >
                      <Plus size={16} />
                    </button>
                  </div>

                  {/* Remove */}
                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-red-600 hover:bg-red-50 p-2 rounded transition"
                  >
                    <Trash2 size={20} />
                  </button>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="bg-secondary/30 rounded-lg p-6 border border-border h-fit">
              <h2 className="font-serif text-xl font-bold text-foreground mb-4">Order Summary</h2>

              <div className="space-y-3 mb-4 pb-4 border-b border-border">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="font-semibold">{(total / 1000).toFixed(0)}K UZS</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Shipping</span>
                  <span className="font-semibold text-green-600">Free</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Tax</span>
                  <span className="font-semibold">{((total * 0.15) / 1000).toFixed(0)}K UZS</span>
                </div>
              </div>

              <div className="flex justify-between mb-6">
                <span className="font-serif font-bold text-lg">Total</span>
                <span className="font-serif font-bold text-lg">{((total * 1.15) / 1000).toFixed(0)}K UZS</span>
              </div>

              <Link
                href="/checkout"
                className="w-full block text-center px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:shadow-lg transition"
              >
                Proceed to Checkout
              </Link>

              <Link
                href="/shop"
                className="w-full block text-center mt-3 px-6 py-3 border-2 border-border text-foreground font-semibold rounded-lg hover:bg-secondary transition"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </main>
  )
}
