"use client"

import { useState } from "react"
import { AdminLayout } from "@/components/admin/admin-layout"
import { Plus, Edit, Trash2, Search, X } from "lucide-react"

const initialProducts = [
  {
    id: 1,
    name: "Rhode Beauty Lip Tint",
    brand: "Rhode",
    category: "Makeup",
    price: "45K",
    stock: 124,
    status: "Active",
  },
  {
    id: 2,
    name: "Rare Beauty Liquid Blush",
    brand: "Rare Beauty",
    category: "Makeup",
    price: "55K",
    stock: 87,
    status: "Active",
  },
  {
    id: 3,
    name: "Kylie Cosmetics Liquid Lipstick",
    brand: "Kylie",
    category: "Makeup",
    price: "48K",
    stock: 45,
    status: "Active",
  },
  {
    id: 4,
    name: "Rhode Beauty Skincare Set",
    brand: "Rhode",
    category: "Skincare",
    price: "125K",
    stock: 23,
    status: "Low Stock",
  },
  {
    id: 5,
    name: "Rare Beauty Setting Powder",
    brand: "Rare Beauty",
    category: "Powder",
    price: "42K",
    stock: 156,
    status: "Active",
  },
]

export default function ProductsPage() {
  const [products, setProducts] = useState(initialProducts)
  const [searchQuery, setSearchQuery] = useState("")
  const [showModal, setShowModal] = useState(false)
  const [editingProduct, setEditingProduct] = useState<any>(null)
  const [formData, setFormData] = useState({ name: "", brand: "", category: "", price: "", stock: "" })

  const filteredProducts = products.filter(
    (p) =>
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.brand.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const handleAddProduct = () => {
    setEditingProduct(null)
    setFormData({ name: "", brand: "", category: "", price: "", stock: "" })
    setShowModal(true)
  }

  const handleEditProduct = (product: any) => {
    setEditingProduct(product)
    setFormData(product)
    setShowModal(true)
  }

  const handleSaveProduct = () => {
    if (editingProduct) {
      setProducts(products.map((p) => (p.id === editingProduct.id ? { ...editingProduct, ...formData } : p)))
    } else {
      setProducts([...products, { id: Math.max(...products.map((p) => p.id)) + 1, ...formData, status: "Active" }])
    }
    setShowModal(false)
  }

  const handleDeleteProduct = (id: number) => {
    setProducts(products.filter((p) => p.id !== id))
  }

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="font-serif text-4xl font-bold text-foreground">Products Management</h1>
            <p className="text-muted-foreground mt-2">Add, edit, or manage your product inventory</p>
          </div>
          <button
            onClick={handleAddProduct}
            className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:shadow-lg transition"
          >
            <Plus size={20} /> Add Product
          </button>
        </div>

        {/* Search */}
        <div className="relative">
          <Search size={18} className="absolute left-3 top-3 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        {/* Products Table */}
        <div className="bg-white border border-border rounded-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-secondary/30 border-b border-border">
                <tr>
                  <th className="text-left px-6 py-4 font-semibold text-foreground">Product Name</th>
                  <th className="text-left px-6 py-4 font-semibold text-foreground">Brand</th>
                  <th className="text-left px-6 py-4 font-semibold text-foreground">Category</th>
                  <th className="text-left px-6 py-4 font-semibold text-foreground">Price</th>
                  <th className="text-left px-6 py-4 font-semibold text-foreground">Stock</th>
                  <th className="text-left px-6 py-4 font-semibold text-foreground">Status</th>
                  <th className="text-left px-6 py-4 font-semibold text-foreground">Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredProducts.map((product, i) => (
                  <tr key={i} className="border-b border-border hover:bg-secondary/20 transition">
                    <td className="px-6 py-4 font-medium text-foreground">{product.name}</td>
                    <td className="px-6 py-4 text-muted-foreground">{product.brand}</td>
                    <td className="px-6 py-4 text-muted-foreground">{product.category}</td>
                    <td className="px-6 py-4 font-semibold">{product.price} UZS</td>
                    <td className="px-6 py-4">{product.stock} units</td>
                    <td className="px-6 py-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          product.status === "Active" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
                        }`}
                      >
                        {product.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 flex gap-2">
                      <button
                        onClick={() => handleEditProduct(product)}
                        className="p-2 text-primary hover:bg-primary/10 rounded transition"
                      >
                        <Edit size={18} />
                      </button>
                      <button
                        onClick={() => handleDeleteProduct(product.id)}
                        className="p-2 text-red-600 hover:bg-red-50 rounded transition"
                      >
                        <Trash2 size={18} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Add/Edit Product Modal */}
        {showModal && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4">
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-serif text-2xl font-bold text-foreground">
                  {editingProduct ? "Edit Product" : "Add New Product"}
                </h2>
                <button onClick={() => setShowModal(false)} className="text-muted-foreground hover:text-foreground">
                  <X size={24} />
                </button>
              </div>

              <div className="space-y-4 mb-6">
                <input
                  type="text"
                  placeholder="Product Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <input
                  type="text"
                  placeholder="Brand"
                  value={formData.brand}
                  onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="">Select Category</option>
                  <option value="Skincare">Skincare</option>
                  <option value="Makeup">Makeup</option>
                  <option value="Powder">Powder</option>
                  <option value="Creams">Creams</option>
                </select>
                <input
                  type="text"
                  placeholder="Price (e.g., 45K)"
                  value={formData.price}
                  onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <input
                  type="number"
                  placeholder="Stock Quantity"
                  value={formData.stock}
                  onChange={(e) => setFormData({ ...formData, stock: e.target.value })}
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div className="flex gap-3">
                <button
                  onClick={handleSaveProduct}
                  className="flex-1 px-4 py-2 bg-primary text-primary-foreground font-semibold rounded-lg hover:shadow-lg transition"
                >
                  Save
                </button>
                <button
                  onClick={() => setShowModal(false)}
                  className="flex-1 px-4 py-2 border-2 border-border text-foreground font-semibold rounded-lg hover:bg-secondary transition"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </AdminLayout>
  )
}
