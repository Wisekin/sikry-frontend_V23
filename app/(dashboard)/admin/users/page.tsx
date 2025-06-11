"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { UserGroupIcon, UserPlusIcon, UserCircleIcon } from "@heroicons/react/24/outline"
import { UserPlus, Users, Mail } from "lucide-react"
import { useSearchParams } from "next/navigation"
import { useTranslation } from "react-i18next"

export default function UsersPage() {
  const { t } = useTranslation('adminUsersPage');
  const searchParams = useSearchParams()
  const activeTab = searchParams.get('tab') || 'overview'
  const viewMode = searchParams.get('view') || 'grid'

  const [searchQuery, setSearchQuery] = useState("")

  const users = [
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com",
      role: "Admin",
      status: "Active",
      lastActive: "2024-02-20 14:30:00"
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane.smith@example.com",
      role: "User",
      status: "Active",
      lastActive: "2024-02-20 13:15:00"
    },
    {
      id: 3,
      name: "Bob Johnson",
      email: "bob.johnson@example.com",
      role: "User",
      status: "Invited",
      lastActive: "2024-02-19 10:00:00"
    },
    {
      id: 4,
      name: "Alice Williams",
      email: "alice.williams@example.com",
      role: "User",
      status: "Active",
      lastActive: "2024-02-18 18:45:00"
    }
  ]

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.email.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-gray-50/50 p-6 md:p-10">
      <header className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-[#1B1F3B] flex items-center gap-3">
            <UserGroupIcon className="w-8 h-8" />
            {t('header.title')}
          </h1>
          <p className="text-gray-500 mt-1">{t('header.subtitle')}</p>
        </div>
        <Button size="lg" className="bg-[#1B1F3B] text-white hover:bg-[#2A3050] flex items-center gap-2">
          <UserPlusIcon className="w-5 h-5" />
          <span>{t('header.button')}</span>
        </Button>
      </header>

      <Card className="bg-white border-none shadow-sm">
        <CardHeader>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <CardTitle>{t('list.title')}</CardTitle>
              <CardDescription>{t('list.description', { count: filteredUsers.length })}</CardDescription>
            </div>
            <div className="relative w-full md:w-64">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder={t('list.searchPlaceholder')}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-3 text-left font-medium text-gray-600">{t('table.name')}</th>
                  <th className="px-4 py-3 text-left font-medium text-gray-600">{t('table.role')}</th>
                  <th className="px-4 py-3 text-left font-medium text-gray-600">{t('table.status')}</th>
                  <th className="px-4 py-3 text-left font-medium text-gray-600">{t('table.lastActive')}</th>
                  <th className="px-4 py-3 text-right font-medium text-gray-600">{t('table.actions')}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredUsers.map(user => (
                  <tr key={user.id}>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-3">
                        <UserCircleIcon className="w-8 h-8 text-gray-400" />
                        <div>
                          <p className="font-medium text-gray-800">{user.name}</p>
                          <p className="text-xs text-gray-500">{user.email}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-gray-600">{user.role}</td>
                    <td className="px-4 py-3">
                      <Badge variant={user.status === 'Active' ? 'default' : 'secondary'} className={user.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}>
                        {user.status}
                      </Badge>
                    </td>
                    <td className="px-4 py-3 text-gray-600">{user.lastActive}</td>
                    <td className="px-4 py-3 text-right">
                      <Button variant="outline" size="sm">{t('table.manage')}</Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
