import { useEffect, useState } from 'react'
import { Search, UsersRound } from 'lucide-react'

interface User {
  id: number
  name: string
  email: string
  role: string
}

export default function Users() {
  const [users, setUsers] = useState<User[]>([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    // Dummy user data (replace with API later)
    setUsers([
      { id: 1, name: 'John Doe', email: 'john@example.com', role: 'User' },
      { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Organizer' },
      { id: 3, name: 'Admin User', email: 'admin@eventbooking.com', role: 'Admin' },
    ])
  }, [])

  const filteredUsers = users.filter(
    (u) =>
      u.name.toLowerCase().includes(search.toLowerCase()) ||
      u.email.toLowerCase().includes(search.toLowerCase()) ||
      u.role.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 shadow-md">
            <UsersRound className="text-white w-5 h-5" />
          </div>
          <h1 className="text-3xl font-semibold text-gray-800 dark:text-white tracking-tight">
            User Management
          </h1>
        </div>

        <div className="relative w-full sm:w-72">
          <Search className="absolute left-3 top-2.5 text-gray-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Search users..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-9 pr-3 py-2 rounded-lg border border-gray-300 dark:border-gray-700 
            bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm text-sm 
            focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all
            placeholder:text-gray-400"
          />
        </div>
      </div>

      {/* Table Section */}
      <div className="bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-800 overflow-hidden transition-all">
        <table className="w-full text-left text-sm">
          <thead className="bg-gray-100/70 dark:bg-gray-900/60 text-gray-700 dark:text-gray-300 uppercase text-xs tracking-wider">
            <tr>
              <th className="p-4">ID</th>
              <th className="p-4">Name</th>
              <th className="p-4">Email</th>
              <th className="p-4">Role</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.length > 0 ? (
              filteredUsers.map((u) => (
                <tr
                  key={u.id}
                  className="border-t border-gray-100 dark:border-gray-800 hover:bg-blue-50/60 dark:hover:bg-gray-800/60 transition-colors"
                >
                  <td className="p-4 text-gray-600 dark:text-gray-400">{u.id}</td>
                  <td className="p-4 font-medium text-gray-800 dark:text-gray-100">{u.name}</td>
                  <td className="p-4 text-gray-500">{u.email}</td>
                  <td className="p-4">
                    <span
                      className={`px-3 py-1 text-xs font-semibold rounded-full shadow-sm ${
                        u.role === 'Admin'
                          ? 'bg-gradient-to-r from-red-500/10 to-red-500/20 text-red-600 dark:text-red-300 border border-red-500/20'
                          : u.role === 'Organizer'
                            ? 'bg-gradient-to-r from-purple-500/10 to-purple-500/20 text-purple-600 dark:text-purple-300 border border-purple-500/20'
                            : 'bg-gradient-to-r from-blue-500/10 to-blue-500/20 text-blue-600 dark:text-blue-300 border border-blue-500/20'
                      }`}
                    >
                      {u.role}
                    </span>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={4}
                  className="text-center py-10 text-gray-500 dark:text-gray-400 text-sm"
                >
                  No users found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}
