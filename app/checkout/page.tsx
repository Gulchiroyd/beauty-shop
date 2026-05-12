"use client"

import type React from "react"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { useCart } from "@/context/cart-context"
import { useLanguage } from "@/context/language-context"
import Link from "next/link"

export default function CheckoutPage() {
  const { items, total } = useCart()
  const { language } = useLanguage()
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    region: "tashkent",
    paymentMethod: "uzcard",
  })
  const [isProcessing, setIsProcessing] = useState(false)
  const [orderPlaced, setOrderPlaced] = useState(false)

  if (items.length === 0 && !orderPlaced) {
    return (
      <main className="min-h-screen bg-white">
        <Navigation />
        <div className="max-w-7xl mx-auto px-4 py-16 text-center">
          <p className="text-xl text-muted-foreground mb-6">Your cart is empty</p>
          <Link
            href="/shop"
            className="inline-block px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg"
          >
            Continue Shopping
          </Link>
        </div>
        <Footer />
      </main>
    )
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsProcessing(true)
    // Simulate payment processing
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setOrderPlaced(true)
    setIsProcessing(false)
  }

  if (orderPlaced) {
    return (
      <main className="min-h-screen bg-white">
        <Navigation />
        <div className="max-w-2xl mx-auto px-4 py-16 text-center">
          <div className="mb-6 text-6xl">✓</div>
          <h1 className="font-serif text-4xl font-bold text-foreground mb-4">Order Confirmed!</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Thank you for your purchase. Your order has been placed successfully.
          </p>
          <div className="bg-secondary/30 rounded-lg p-6 mb-8 text-left">
            <p className="font-semibold text-foreground mb-2">Order Details:</p>
            <p className="text-muted-foreground mb-2">Order #: VB-2025-{Math.floor(Math.random() * 100000)}</p>
            <p className="text-muted-foreground mb-4">Total: {((total * 1.15) / 1000).toFixed(0)}K UZS</p>
            <p className="text-sm text-muted-foreground">A confirmation email has been sent to {formData.email}</p>
          </div>
          <Link
            href="/"
            className="inline-block px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:shadow-lg transition"
          >
            Back to Home
          </Link>
        </div>
        <Footer />
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="font-serif text-4xl font-bold text-foreground mb-8">Checkout</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Checkout Form */}
          <form onSubmit={handleSubmit} className="lg:col-span-2 space-y-6">
            {/* Shipping Information */}
            <div className="border border-border rounded-lg p-6">
              <h2 className="font-serif text-2xl font-bold text-foreground mb-6">Shipping Information</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">First Name *</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Last Name *</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Phone *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-semibold text-foreground mb-2">Address *</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Region *</label>
                <select
                  name="region"
                  value={formData.region}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="tashkent">Tashkent</option>
                  <option value="samarkand">Samarkand</option>
                  <option value="bukhara">Bukhara</option>
                  <option value="khiva">Khiva</option>
                  <option value="fergana">Fergana</option>
                  <option value="andijan">Andijan</option>
                </select>
              </div>
            </div>

            {/* Payment Method */}
            <div className="border border-border rounded-lg p-6">
              <h2 className="font-serif text-2xl font-bold text-foreground mb-6">Payment Method</h2>

              <div className="space-y-3">
                {[
                  { id: "uzcard", name: "UZCard" },
                  { id: "click", name: "Click" },
                  { id: "payme", name: "Payme" },
                  { id: "visa", name: "Visa/Mastercard" },
                ].map((method) => (
                  <label key={method.id} className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value={method.id}
                      checked={formData.paymentMethod === method.id}
                      onChange={handleInputChange}
                      className="mr-3"
                    />
                    <span className="font-medium">{method.name}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isProcessing}
              className="w-full px-6 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:shadow-lg transition disabled:opacity-50"
            >
              {isProcessing ? "Processing..." : "Complete Purchase"}
            </button>
          </form>

          {/* Order Summary */}
          <div className="bg-secondary/30 rounded-lg p-6 border border-border h-fit">
            <h2 className="font-serif text-xl font-bold text-foreground mb-6">Order Summary</h2>

            <div className="space-y-4 mb-6 pb-6 border-b border-border max-h-64 overflow-y-auto">
              {items.map((item) => (
                <div key={item.id} className="flex justify-between text-sm">
                  <div>
                    <p className="font-medium">{item.name}</p>
                    <p className="text-muted-foreground">Qty: {item.quantity}</p>
                  </div>
                  <p className="font-semibold">{((item.price * item.quantity) / 1000).toFixed(0)}K UZS</p>
                </div>
              ))}
            </div>

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
                <span className="text-muted-foreground">Tax (15%)</span>
                <span className="font-semibold">{((total * 0.15) / 1000).toFixed(0)}K UZS</span>
              </div>
            </div>

            <div className="flex justify-between mb-6">
              <span className="font-serif font-bold text-lg">Total</span>
              <span className="font-serif font-bold text-lg text-primary">
                {((total * 1.15) / 1000).toFixed(0)}K UZS
              </span>
            </div>

            <div className="bg-accent/10 border border-accent rounded-lg p-3">
              <p className="text-xs text-accent-foreground">✓ Secure payment processing</p>
              <p className="text-xs text-accent-foreground">✓ 30-day money-back guarantee</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
