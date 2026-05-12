"use client"

import { AdminLayout } from "@/components/admin/admin-layout"
import {
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts"
import { TrendingUp, Package, Users, ShoppingCart } from "lucide-react"

const salesData = [
  { month: "Jan", sales: 4000, revenue: 2400 },
  { month: "Feb", sales: 3000, revenue: 1398 },
  { month: "Mar", sales: 2000, revenue: 9800 },
  { month: "Apr", sales: 2780, revenue: 3908 },
  { month: "May", sales: 1890, revenue: 4800 },
  { month: "Jun", sales: 2390, revenue: 3800 },
]

const topProducts = [
  { name: "Rare Beauty Blush", value: 28 },
  { name: "Rhode Lip Tint", value: 22 },
  { name: "Kylie Lipstick", value: 18 },
  { name: "Skincare Set", value: 16 },
  { name: "Eye Cream", value: 16 },
]

const COLORS = ["#3A2A5F", "#C8A2FF", "#ECE2FF", "#F8D57E", "#D4A5D4"]

const stats = [
  { label: "Total Sales", value: "2,458", icon: ShoppingCart, trend: "+12.5%" },
  { label: "Revenue", value: "45.2M UZS", icon: TrendingUp, trend: "+8.2%" },
  { label: "Products", value: "486", icon: Package, trend: "+23" },
  { label: "Customers", value: "1,234", icon: Users, trend: "+45" },
]

export default function AdminDashboard() {
  return (
    <AdminLayout>
      <div className="space-y-8">
        {/* Header */}
        <div>
          <h1 className="font-serif text-4xl font-bold text-foreground">Dashboard</h1>
          <p className="text-muted-foreground mt-2">Welcome back! Here's your business overview.</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => {
            const Icon = stat.icon
            return (
              <div key={i} className="bg-white border border-border rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <p className="text-sm font-medium text-muted-foreground">{stat.label}</p>
                  <Icon size={20} className="text-primary" />
                </div>
                <p className="font-serif text-3xl font-bold text-foreground mb-2">{stat.value}</p>
                <p className="text-xs font-semibold text-green-600">{stat.trend}</p>
              </div>
            )
          })}
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Sales Chart */}
          <div className="lg:col-span-2 bg-white border border-border rounded-lg p-6">
            <h2 className="font-serif text-xl font-bold text-foreground mb-6">Sales Trend</h2>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={salesData} margin={{ top: 5, right: 30, left: 0, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                <XAxis dataKey="month" stroke="#666" />
                <YAxis stroke="#666" />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="sales" stroke="#3A2A5F" strokeWidth={2} />
                <Line type="monotone" dataKey="revenue" stroke="#C8A2FF" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Top Products */}
          <div className="bg-white border border-border rounded-lg p-6">
            <h2 className="font-serif text-xl font-bold text-foreground mb-6">Top Products</h2>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={topProducts}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, value }) => `${name}: ${value}`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {topProducts.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Recent Orders */}
        <div className="bg-white border border-border rounded-lg p-6">
          <h2 className="font-serif text-xl font-bold text-foreground mb-6">Recent Orders</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 font-semibold">Order ID</th>
                  <th className="text-left py-3 font-semibold">Customer</th>
                  <th className="text-left py-3 font-semibold">Amount</th>
                  <th className="text-left py-3 font-semibold">Status</th>
                  <th className="text-left py-3 font-semibold">Date</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    id: "#VB-2001",
                    customer: "Aisha Karim",
                    amount: "125K UZS",
                    status: "Delivered",
                    date: "2025-11-28",
                  },
                  { id: "#VB-2002", customer: "Jamshid Ali", amount: "89K UZS", status: "Shipped", date: "2025-11-27" },
                  {
                    id: "#VB-2003",
                    customer: "Dilruba Khan",
                    amount: "156K UZS",
                    status: "Processing",
                    date: "2025-11-26",
                  },
                  {
                    id: "#VB-2004",
                    customer: "Ravshan Omar",
                    amount: "203K UZS",
                    status: "Delivered",
                    date: "2025-11-25",
                  },
                  { id: "#VB-2005", customer: "Zainab Syed", amount: "97K UZS", status: "Pending", date: "2025-11-24" },
                ].map((order, i) => (
                  <tr key={i} className="border-b border-border hover:bg-secondary/20 transition">
                    <td className="py-3 font-semibold text-primary">{order.id}</td>
                    <td className="py-3">{order.customer}</td>
                    <td className="py-3">{order.amount}</td>
                    <td className="py-3">
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
                    <td className="py-3 text-muted-foreground">{order.date}</td>
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
