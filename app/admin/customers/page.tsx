"use client"

import { useState } from "react"
import { AdminLayout } from "@/components/admin/admin-layout"
import { Search, Mail, Phone } from "lucide-react"

const customers = [
  {
    id: 1,
    name: "Aisha Karim",
    email: "aisha@gmail.com",
    phone: "+998 91 123 4567",
    orders: 5,
    totalSpent: "625K UZS",
    joinDate: "2025-08-15",
  },
  {
    id: 2,
    name: "Jamshid Ali",
    email: "jamshid@gmail.com",
    phone: "+998 93 234 5678",
    orders: 3,
    totalSpent: "289K UZS",
    joinDate: "2025-09-22",
  },
  {
    id: 3,
    name: "Dilruba Khan",
    email: "dilruba@gmail.com",
    phone: "+998 90 345 6789",
    orders: 8,
    totalSpent: "1.2M UZS",
    joinDate: "2025-07-10",
  },
  {
    id: 4,
    name: "Ravshan Omar",
    email: "ravshan@gmail.com",
    phone: "+998 99 456 7890",
    orders: 4,
    totalSpent: "487K UZS",
    joinDate: "2025-10-05",
  },
  {
    id: 5,
    name: "Zainab Syed",
    email: "zainab@gmail.com",
    phone: "+998 88 567 8901",
    orders: 2,
    totalSpent: "156K UZS",
    joinDate: "2025-11-01",
  },
]

export default function CustomersPage() {
  const [searchQuery, setSearchQuery] = useState("")

  const filteredCustomers = customers.filter(
    (c) =>
      c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.email.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="font-serif text-4xl font-bold text-foreground">Customers Management</h1>
          <p className="text-muted-foreground mt-2">View and manage customer information and purchase history</p>
        </div>

        {/* Search */}
        <div className="relative">
          <Search size={18} className="absolute left-3 top-3 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search customers..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        {/* Customers Table */}
        <div className="bg-white border border-border rounded-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-secondary/30 border-b border-border">
                <tr>
                  <th className="text-left px-6 py-4 font-semibold text-foreground">Name</th>
                  <th className="text-left px-6 py-4 font-semibold text-foreground">Contact</th>
                  <th className="text-left px-6 py-4 font-semibold text-foreground">Orders</th>
                  <th className="text-left px-6 py-4 font-semibold text-foreground">Total Spent</th>
                  <th className="text-left px-6 py-4 font-semibold text-foreground">Join Date</th>
                </tr>
              </thead>
              <tbody>
                {filteredCustomers.map((customer, i) => (
                  <tr key={i} className="border-b border-border hover:bg-secondary/20 transition">
                    <td className="px-6 py-4 font-medium text-foreground">{customer.name}</td>
                    <td className="px-6 py-4">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 text-sm">
                          <Mail size={14} className="text-muted-foreground" />
                          <span className="text-muted-foreground">{customer.email}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <Phone size={14} className="text-muted-foreground" />
                          <span className="text-muted-foreground">{customer.phone}</span>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 font-semibold">{customer.orders}</td>
                    <td className="px-6 py-4 font-semibold text-primary">{customer.totalSpent}</td>
                    <td className="px-6 py-4 text-muted-foreground">{customer.joinDate}</td>
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
