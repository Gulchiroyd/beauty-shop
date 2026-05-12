"use client"

import { useState } from "react"
import { AdminLayout } from "@/components/admin/admin-layout"
import { Plus, Edit, Trash2, X } from "lucide-react"

const initialSlides = [
  {
    id: 1,
    title: "Elegance in Every Shade",
    subtitle: "Discover Premium Cosmetics",
    image: "placeholder1",
    active: true,
  },
  { id: 2, title: "Rare Beauty Redefined", subtitle: "Exclusive Collections", image: "placeholder2", active: true },
  { id: 3, title: "Kylie Cosmetics", subtitle: "Limited Edition", image: "placeholder3", active: true },
]

export default function SliderPage() {
  const [slides, setSlides] = useState(initialSlides)
  const [showModal, setShowModal] = useState(false)
  const [editingSlide, setEditingSlide] = useState<any>(null)
  const [formData, setFormData] = useState({ title: "", subtitle: "", cta: "" })

  const handleAddSlide = () => {
    setEditingSlide(null)
    setFormData({ title: "", subtitle: "", cta: "" })
    setShowModal(true)
  }

  const handleEditSlide = (slide: any) => {
    setEditingSlide(slide)
    setFormData({ title: slide.title, subtitle: slide.subtitle, cta: slide.title })
    setShowModal(true)
  }

  const handleSaveSlide = () => {
    if (editingSlide) {
      setSlides(slides.map((s) => (s.id === editingSlide.id ? { ...s, ...formData } : s)))
    } else {
      setSlides([...slides, { id: Math.max(...slides.map((s) => s.id)) + 1, ...formData, image: "new", active: true }])
    }
    setShowModal(false)
  }

  const handleDeleteSlide = (id: number) => {
    setSlides(slides.filter((s) => s.id !== id))
  }

  const handleToggleActive = (id: number) => {
    setSlides(slides.map((s) => (s.id === id ? { ...s, active: !s.active } : s)))
  }

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="font-serif text-4xl font-bold text-foreground">Hero Slider Management</h1>
            <p className="text-muted-foreground mt-2">
              Manage promotional slides, new arrivals, and contest announcements
            </p>
          </div>
          <button
            onClick={handleAddSlide}
            className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:shadow-lg transition"
          >
            <Plus size={20} /> Add Slide
          </button>
        </div>

        {/* Slides Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {slides.map((slide) => (
            <div
              key={slide.id}
              className="bg-white border border-border rounded-lg overflow-hidden hover:shadow-lg transition"
            >
              <div className="h-32 bg-secondary/30 flex items-center justify-center text-muted-foreground">
                [Image Preview]
              </div>
              <div className="p-4">
                <h3 className="font-serif text-lg font-bold text-foreground mb-1">{slide.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{slide.subtitle}</p>
                <div className="flex items-center justify-between">
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={slide.active}
                      onChange={() => handleToggleActive(slide.id)}
                      className="w-4 h-4"
                    />
                    <span className="text-xs font-medium">Active</span>
                  </label>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleEditSlide(slide)}
                      className="p-2 text-primary hover:bg-primary/10 rounded transition"
                    >
                      <Edit size={16} />
                    </button>
                    <button
                      onClick={() => handleDeleteSlide(slide.id)}
                      className="p-2 text-red-600 hover:bg-red-50 rounded transition"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Add/Edit Slide Modal */}
        {showModal && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4">
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-serif text-2xl font-bold text-foreground">
                  {editingSlide ? "Edit Slide" : "Add New Slide"}
                </h2>
                <button onClick={() => setShowModal(false)} className="text-muted-foreground hover:text-foreground">
                  <X size={24} />
                </button>
              </div>

              <div className="space-y-4 mb-6">
                <input
                  type="text"
                  placeholder="Slide Title"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <input
                  type="text"
                  placeholder="Subtitle"
                  value={formData.subtitle}
                  onChange={(e) => setFormData({ ...formData, subtitle: e.target.value })}
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <input
                  type="text"
                  placeholder="CTA Button Text"
                  value={formData.cta}
                  onChange={(e) => setFormData({ ...formData, cta: e.target.value })}
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Upload Image</label>
                  <input
                    type="file"
                    accept="image/*"
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={handleSaveSlide}
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
