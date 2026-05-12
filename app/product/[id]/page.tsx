"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Heart, Star, Truck, RotateCcw } from "lucide-react"
import { useCart } from "@/context/cart-context"

const products: Record<string, any> = {
  "1": {
    id: 1,
    name: "Rhode Beauty Lip Tint",
    brand: "Rhode",
    price: 45000,
    rating: 4.8,
    reviews: 156,
    images: ["/placeholder.svg?key=ih182", "/placeholder.svg?key=test1", "/placeholder.svg?key=test2"],
    description: "Luxurious lip tint with stunning color payoff and lasting comfort.",
    details: ["Long-lasting formula", "Natural color payoff", "Moisturizing blend", "Cruelty-free", "5ml volume"],
    inStock: true,
    shipping: "Free shipping on orders over 200,000 UZS",
  },
  "2": {
    id: 2,
    name: "Rare Beauty Liquid Blush",
    brand: "Rare Beauty",
    price: 55000,
    rating: 4.9,
    reviews: 324,
    images: ["/placeholder.svg?key=79kpg", "/placeholder.svg?key=test3", "/placeholder.svg?key=test4"],
    description: "Buildable liquid blush for a natural, dimensional flush.",
    details: ["Blendable formula", "Multiple shades available", "Long wear", "Vegan friendly", "6ml volume"],
    inStock: true,
    shipping: "Free shipping on orders over 200,000 UZS",
  },
}

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = products[params.id]
  const { addItem } = useCart()
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(0)
  const [isWishlisted, setIsWishlisted] = useState(false)

  if (!product) {
    return (
      <main className="min-h-screen bg-white">
        <Navigation />
        <div className="max-w-7xl mx-auto px-4 py-16 text-center">
          <p className="text-xl text-muted-foreground">Product not found</p>
        </div>
        <Footer />
      </main>
    )
  }

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      brand: product.brand,
      quantity,
      image: product.images[0],
    })
    setQuantity(1)
  }

  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="bg-secondary rounded-lg overflow-hidden h-96 md:h-96">
              <img
                src={product.images[selectedImage] || "/placeholder.svg"}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex gap-3">
              {product.images.map((image: string, index: number) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`h-20 w-20 rounded-lg overflow-hidden border-2 transition ${
                    selectedImage === index ? "border-primary" : "border-border"
                  }`}
                >
                  <img
                    src={image || "/placeholder.svg"}
                    alt={`View ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="flex flex-col">
            {/* Brand & Title */}
            <p className="text-sm uppercase tracking-wider text-muted-foreground mb-2">{product.brand}</p>
            <h1 className="font-serif text-4xl font-bold text-foreground mb-4">{product.name}</h1>

            {/* Rating */}
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className={i < Math.floor(product.rating) ? "fill-accent text-accent" : "text-border"}
                  />
                ))}
              </div>
              <span className="text-sm font-medium">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            {/* Price */}
            <div className="mb-6">
              <span className="font-serif text-4xl font-bold text-foreground">
                {(product.price / 1000).toFixed(0)}K UZS
              </span>
              <p className="text-sm text-muted-foreground mt-2">{product.shipping}</p>
            </div>

            {/* Description */}
            <p className="text-foreground mb-6 leading-relaxed">{product.description}</p>

            {/* Details */}
            <div className="mb-6">
              <h3 className="font-semibold text-foreground mb-3">Key Features:</h3>
              <ul className="space-y-2">
                {product.details.map((detail: string, i: number) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <span className="text-accent mt-1">✓</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Stock Status */}
            {product.inStock ? (
              <p className="text-green-600 font-semibold mb-6">In Stock</p>
            ) : (
              <p className="text-red-600 font-semibold mb-6">Out of Stock</p>
            )}

            {/* Quantity & Actions */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <label className="font-semibold">Quantity:</label>
                <div className="flex items-center border border-border rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-4 py-2 hover:bg-secondary transition"
                  >
                    −
                  </button>
                  <span className="px-6 py-2 font-semibold">{quantity}</span>
                  <button onClick={() => setQuantity(quantity + 1)} className="px-4 py-2 hover:bg-secondary transition">
                    +
                  </button>
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={handleAddToCart}
                  className="flex-1 px-6 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:shadow-lg transition"
                >
                  Add to Cart
                </button>
                <button
                  onClick={() => setIsWishlisted(!isWishlisted)}
                  className="px-6 py-4 border-2 border-border rounded-lg hover:border-primary transition"
                >
                  <Heart size={20} className={isWishlisted ? "fill-primary text-primary" : "text-foreground"} />
                </button>
              </div>
            </div>

            {/* Additional Info */}
            <div className="mt-8 pt-8 border-t border-border space-y-4">
              <div className="flex items-center gap-3">
                <Truck size={20} className="text-primary" />
                <div>
                  <p className="font-semibold">Free Shipping</p>
                  <p className="text-sm text-muted-foreground">On orders over 200,000 UZS</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <RotateCcw size={20} className="text-primary" />
                <div>
                  <p className="font-semibold">Easy Returns</p>
                  <p className="text-sm text-muted-foreground">30-day return policy</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="border-t border-border pt-8">
          <h2 className="font-serif text-2xl font-bold text-foreground mb-6">Customer Reviews</h2>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="p-4 bg-secondary/20 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <p className="font-semibold">Customer {i}</p>
                  <div className="flex">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} size={14} className="fill-accent text-accent" />
                    ))}
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Amazing product! Highly recommend it. Lorem ipsum dolor sit amet consectetur.
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
