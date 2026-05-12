"use client"

import { useState } from "react"
import { AdminLayout } from "@/components/admin/admin-layout"
import { Plus, Edit, Trash2, X } from "lucide-react"

const initialCategories = [
  { id: 1, name: { uz: "Teri parvarishi", en: "Skincare", ru: "Уход за кожей" }, products: 124 },
  { id: 2, name: { uz: "Makiyaj", en: "Makeup", ru: "Макияж" }, products: 287 },
  { id: 3, name: { uz: "Pudra", en: "Powder", ru: "Пудра" }, products: 45 },
  { id: 4, name: { uz: "Kremlar", en: "Creams", ru: "Кремы" }, products: 156 },
]

export default function CategoriesPage() {
  const [categories, setCategories] = useState(initialCategories)
  const [showModal, setShowModal] = useState(false)
  const [editingCategory, setEditingCategory] = useState<any>(null)
  const [formData, setFormData] = useState({ uz: "", en: "", ru: "" })

  const handleAddCategory = () => {
    setEditingCategory(null)
    setFormData({ uz: "", en: "", ru: "" })
    setShowModal(true)
  }

  const handleEditCategory = (category: any) => {
    setEditingCategory(category)
    setFormData(category.name)
    setShowModal(true)
  }

  const handleSaveCategory = () => {
    if (editingCategory) {
      setCategories(categories.map((c) => (c.id === editingCategory.id ? { ...c, name: formData } : c)))
    } else {
      setCategories([...categories, { id: Math.max(...categories.map((c) => c.id)) + 1, name: formData, products: 0 }])
    }
    setShowModal(false)
  }

  const handleDeleteCategory = (id: number) => {
    setCategories(categories.filter((c) => c.id !== id))
  }

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="font-serif text-4xl font-bold text-foreground">Categories Management</h1>
            <p className="text-muted-foreground mt-2">Organize products into categories with multi-language support</p>
          </div>
          <button
            onClick={handleAddCategory}
            className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:shadow-lg transition"
          >
            <Plus size={20} /> Add Category
          </button>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <div key={category.id} className="bg-white border border-border rounded-lg p-6 hover:shadow-lg transition">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="font-serif text-lg font-bold text-foreground mb-2">{category.name.en}</h3>
                  <p className="text-xs text-muted-foreground mb-1">O'zbek: {category.name.uz}</p>
                  <p className="text-xs text-muted-foreground">Русский: {category.name.ru}</p>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleEditCategory(category)}
                    className="p-2 text-primary hover:bg-primary/10 rounded transition"
                  >
                    <Edit size={18} />
                  </button>
                  <button
                    onClick={() => handleDeleteCategory(category.id)}
                    className="p-2 text-red-600 hover:bg-red-50 rounded transition"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
              <p className="text-sm font-semibold text-accent">{category.products} products</p>
            </div>
          ))}
        </div>

        {/* Add/Edit Category Modal */}
        {showModal && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4">
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-serif text-2xl font-bold text-foreground">
                  {editingCategory ? "Edit Category" : "Add New Category"}
                </h2>
                <button onClick={() => setShowModal(false)} className="text-muted-foreground hover:text-foreground">
                  <X size={24} />
                </button>
              </div>

              <div className="space-y-4 mb-6">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">English Name *</label>
                  <input
                    type="text"
                    placeholder="e.g., Skincare"
                    value={formData.en}
                    onChange={(e) => setFormData({ ...formData, en: e.target.value })}
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Uzbek Name *</label>
                  <input
                    type="text"
                    placeholder="e.g., Teri parvarishi"
                    value={formData.uz}
                    onChange={(e) => setFormData({ ...formData, uz: e.target.value })}
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Russian Name *</label>
                  <input
                    type="text"
                    placeholder="e.g., Уход за кожей"
                    value={formData.ru}
                    onChange={(e) => setFormData({ ...formData, ru: e.target.value })}
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={handleSaveCategory}
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
