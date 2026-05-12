"use client"

import { useState } from "react"
import { AdminLayout } from "@/components/admin/admin-layout"
import { Search } from "lucide-react"

const orders = [
  {
    id: "#VB-2001",
    customer: "Aisha Karim",
    email: "aisha@gmail.com",
    amount: "125K UZS",
    status: "Delivered",
    date: "2025-11-28",
    region: "Tashkent",
  },
  {
    id: "#VB-2002",
    customer: "Jamshid Ali",
    email: "jamshid@gmail.com",
    amount: "89K UZS",
    status: "Shipped",
    date: "2025-11-27",
    region: "Samarkand",
  },
  {
    id: "#VB-2003",
    customer: "Dilruba Khan",
    email: "dilruba@gmail.com",
    amount: "156K UZS",
    status: "Processing",
    date: "2025-11-26",
    region: "Tashkent",
  },
  {
    id: "#VB-2004",
    customer: "Ravshan Omar",
    email: "ravshan@gmail.com",
    amount: "203K UZS",
    status: "Delivered",
    date: "2025-11-25",
    region: "Bukhara",
  },
  {
    id: "#VB-2005",
    customer: "Zainab Syed",
    email: "zainab@gmail.com",
    amount: "97K UZS",
    status: "Pending",
    date: "2025-11-24",
    region: "Fergana",
  },
]

export default function OrdersPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")

  const filteredOrders = orders.filter((order) => {
    const matchesSearch =
      order.customer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.id.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesStatus = statusFilter === "all" || order.status === statusFilter
    return matchesSearch && matchesStatus
  })

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="font-serif text-4xl font-bold text-foreground">Orders Management</h1>
          <p className="text-muted-foreground mt-2">Manage and track all customer orders</p>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search size={18} className="absolute left-3 top-3 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search orders or customers..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="all">All Status</option>
            <option value="Pending">Pending</option>
            <option value="Processing">Processing</option>
            <option value="Shipped">Shipped</option>
            <option value="Delivered">Delivered</option>
          </select>
        </div>

        {/* Orders Table */}
        <div className="bg-white border border-border rounded-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-secondary/30 border-b border-border">
                <tr>
                  <th className="text-left px-6 py-4 font-semibold text-foreground">Order ID</th>
                  <th className="text-left px-6 py-4 font-semibold text-foreground">Customer</th>
                  <th className="text-left px-6 py-4 font-semibold text-foreground">Amount</th>
                  <th className="text-left px-6 py-4 font-semibold text-foreground">Region</th>
                  <th className="text-left px-6 py-4 font-semibold text-foreground">Status</th>
                  <th className="text-left px-6 py-4 font-semibold text-foreground">Date</th>
                  <th className="text-left px-6 py-4 font-semibold text-foreground">Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredOrders.map((order, i) => (
                  <tr key={i} className="border-b border-border hover:bg-secondary/20 transition">
                    <td className="px-6 py-4 font-semibold text-primary">{order.id}</td>
                    <td className="px-6 py-4">
                      <div>
                        <p className="font-medium text-foreground">{order.customer}</p>
                        <p className="text-sm text-muted-foreground">{order.email}</p>
                      </div>
                    </td>
                    <td className="px-6 py-4 font-semibold">{order.amount}</td>
                    <td className="px-6 py-4">{order.region}</td>
                    <td className="px-6 py-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          order.status === "Delivered"
                            ? "bg-green-100 text-green-800"
                            : order.status === "Shipped"
                              ? "bg-blue-100 text-blue-800"
                              : order.status === "Processing"
                                ? "bg-yellow-100 text-yellow-800"
                                : "bg-gray-100 text-gray-800"
                        }`}
                      >
                        {order.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-muted-foreground">{order.date}</td>
                    <td className="px-6 py-4">
                      <button className="text-primary hover:text-primary/80 font-medium text-sm">View</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </AdminLayout>
  )
}
