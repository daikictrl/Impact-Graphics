import { useState, useEffect, useMemo } from 'react'
import { supabase } from '../lib/supabase'
import {
  Search,
  Trash2,
  LogOut,
  Calendar,
  Phone,
  Tag,
  DollarSign,
  Clock,
  Info,
  X,
  Lock,
  Mail,
  FileText,
  Loader2,
  ChevronDown,
  ExternalLink,
} from 'lucide-react'
import { toast } from 'sonner'

interface Booking {
  id: string
  full_name: string
  phone: string
  service: string
  budget: string | null
  deadline: string | null
  description: string
  created_at: string
}

export default function AdminPanel() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(true)
  const [loginLoading, setLoginLoading] = useState(false)
  const [loginError, setLoginError] = useState<string | null>(null)
  const [user, setUser] = useState<any>(null)
  
  // Bookings list state
  const [bookings, setBookings] = useState<Booking[]>([])
  const [fetchLoading, setFetchLoading] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedService, setSelectedService] = useState('')
  const [selectedBooking, setSelectedBooking] = useState<Booking | null>(null)
  const [deleteConfirmId, setDeleteConfirmId] = useState<string | null>(null)
  const [deleteLoading, setDeleteLoading] = useState(false)

  // Listen for auth state changes
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null)
      setLoading(false)
    })

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null)
      setLoading(false)
    })

    return () => {
      subscription.unsubscribe()
    }
  }, [])

  // Fetch bookings when user is authenticated
  useEffect(() => {
    if (user) {
      fetchBookings()
    }
  }, [user])

  const fetchBookings = async () => {
    setFetchLoading(true)
    try {
      const { data, error } = await supabase
        .from('bookings')
        .select('*')
        .order('created_at', { ascending: false })

      if (error) throw error
      setBookings(data || [])
    } catch (error: any) {
      console.error('Error fetching bookings:', error)
      toast.error('Failed to load bookings.')
    } finally {
      setFetchLoading(false)
    }
  }

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoginLoading(true)
    setLoginError(null)
    console.log('Login attempt started for email:', email)
    try {
      console.log('Supabase URL:', import.meta.env.VITE_SUPABASE_URL)
      console.log('Supabase Anon Key exists:', !!import.meta.env.VITE_SUPABASE_ANON_KEY)

      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      })

      if (error) {
        console.error('Supabase Auth error:', error)
        throw error
      }
      console.log('Login successful, user data:', data.user)
      toast.success('Successfully logged in!')
      setUser(data.user)
    } catch (error: any) {
      console.error('Login catch block error:', error)
      setLoginError(error.message || 'Invalid email or password.')
    } finally {
      setLoginLoading(false)
    }
  }

  const handleLogout = async () => {
    try {
      const { error } = await supabase.auth.signOut()
      if (error) throw error
      toast.success('Logged out successfully.')
      setUser(null)
    } catch (error: any) {
      console.error('Logout error:', error)
      toast.error('Failed to logout.')
    }
  }

  const handleDeleteBooking = async (id: string) => {
    setDeleteLoading(true)
    try {
      const { error } = await supabase.from('bookings').delete().eq('id', id)
      if (error) throw error
      
      toast.success('Booking deleted successfully.')
      setBookings(bookings.filter((b) => b.id !== id))
      setDeleteConfirmId(null)
      if (selectedBooking?.id === id) {
        setSelectedBooking(null)
      }
    } catch (error: any) {
      console.error('Delete error:', error)
      toast.error('Failed to delete booking.')
    } finally {
      setDeleteLoading(false)
    }
  }

  // Filtered bookings
  const filteredBookings = useMemo(() => {
    return bookings.filter((b) => {
      const matchesSearch =
        b.full_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        b.phone.includes(searchTerm) ||
        b.description.toLowerCase().includes(searchTerm.toLowerCase())
      
      const matchesService = selectedService === '' || b.service === selectedService

      return matchesSearch && matchesService
    })
  }, [bookings, searchTerm, selectedService])

  // Get unique list of services for filter
  const uniqueServices = useMemo(() => {
    const services = bookings.map((b) => b.service)
    return Array.from(new Set(services))
  }, [bookings])

  // Format date helper
  const formatDate = (dateString: string) => {
    try {
      const date = new Date(dateString)
      return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      })
    } catch (e) {
      return dateString
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-[#F8FAFC] flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-10 h-10 animate-spin text-[#457B9D] mx-auto mb-4" />
          <p className="text-gray-500 font-medium">Verifying Session...</p>
        </div>
      </div>
    )
  }

  // --- LOGIN PAGE UI ---
  if (!user) {
    return (
      <div
        className="min-h-screen flex items-center justify-center px-4 bg-cover bg-center"
        style={{
          backgroundImage: 'linear-gradient(135deg, rgba(29, 53, 87, 0.9) 0%, rgba(69, 123, 157, 0.9) 100%), url("/images/hero_Book-service.jpg")',
        }}
      >
        <div className="w-full max-w-md bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden border border-white/20 p-8 sm:p-10">
          <div className="text-center mb-8 flex flex-col items-center">
            <img
              src="/images/logo.png"
              alt="IMPACT GRAPHICS Logo"
              className="h-16 object-contain mb-4"
            />
            <h2 className="text-2xl font-extrabold text-[#1D3557] mb-1" style={{ fontFamily: 'Poppins, sans-serif' }}>
              IMPACT GRAPHICS
            </h2>
            <p className="text-gray-500 text-xs font-semibold">Admin Portal Authentication</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            {loginError && (
              <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg text-sm font-semibold flex items-center gap-2">
                <span className="text-red-500 font-bold">⚠️</span>
                <span>{loginError}</span>
              </div>
            )}
            <div>
              <label className="block text-sm font-semibold text-[#1D3557] mb-2">Email Address</label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-gray-400 pointer-events-none">
                  <Mail size={18} />
                </span>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-[#D0E1E6] focus:border-[#457B9D] focus:ring-2 focus:ring-[#457B9D]/10 outline-none transition-all"
                  placeholder="admin@example.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-[#1D3557] mb-2">Password</label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-gray-400 pointer-events-none">
                  <Lock size={18} />
                </span>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-[#D0E1E6] focus:border-[#457B9D] focus:ring-2 focus:ring-[#457B9D]/10 outline-none transition-all"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loginLoading}
              className="w-full bg-[#457B9D] hover:bg-[#1D3557] text-white py-3.5 rounded-lg font-bold transition-colors duration-200 flex items-center justify-center gap-2 shadow-lg disabled:opacity-80"
            >
              {loginLoading ? (
                <>
                  <Loader2 size={18} className="animate-spin" /> Authenticating...
                </>
              ) : (
                'Sign In'
              )}
            </button>
          </form>
        </div>
      </div>
    )
  }

  // --- DASHBOARD UI ---
  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* Header */}
      <header className="bg-white border-b border-[#E2E8F0] sticky top-0 z-30">
        <div className="max-w-[1400px] mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src="/images/logo.png"
              alt="IMPACT GRAPHICS Logo"
              className="h-10 w-auto object-contain"
            />
            <div>
              <h1 className="text-xl font-bold text-[#1D3557] tracking-tight">Impact Graphics</h1>
              <p className="text-xs text-[#457B9D] font-medium">Administration Panel</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <span className="hidden md:inline-block text-sm text-gray-500 bg-[#F1F5F9] px-3 py-1.5 rounded-full font-medium">
              Logged in as: <strong className="text-[#1D3557]">{user.email}</strong>
            </span>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 bg-[#EF4444]/10 hover:bg-[#EF4444] text-[#EF4444] hover:text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200"
            >
              <LogOut size={16} /> Logout
            </button>
          </div>
        </div>
      </header>

      {/* Main Dashboard Layout */}
      <main className="max-w-[1400px] mx-auto px-6 py-8">
        
        {/* KPI metrics */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-2xl border border-[#E2E8F0] shadow-sm flex items-center gap-5">
            <div className="w-12 h-12 rounded-xl bg-[#457B9D]/10 flex items-center justify-center text-[#457B9D]">
              <FileText size={24} />
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-400">Total Bookings</p>
              <h3 className="text-3xl font-extrabold text-[#1D3557]">{bookings.length}</h3>
            </div>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-[#E2E8F0] shadow-sm flex items-center gap-5">
            <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center text-green-600">
              <Tag size={24} />
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-400">Active Services</p>
              <h3 className="text-3xl font-extrabold text-[#1D3557]">{uniqueServices.length}</h3>
            </div>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-[#E2E8F0] shadow-sm flex items-center gap-5 col-span-2">
            <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center text-purple-600">
              <Calendar size={24} />
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-400">Latest Submission</p>
              <h3 className="text-base font-bold text-[#1D3557]">
                {bookings.length > 0 ? formatDate(bookings[0].created_at) : 'No bookings yet'}
              </h3>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="bg-white rounded-2xl border border-[#E2E8F0] shadow-sm overflow-hidden mb-8">
          {/* Filters Area */}
          <div className="p-6 border-b border-[#E2E8F0] flex flex-col md:flex-row md:items-center gap-4 justify-between">
            <div className="relative flex-1 max-w-md">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400 pointer-events-none">
                <Search size={18} />
              </span>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search by client name, phone or details..."
                className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-[#E2E8F0] focus:border-[#457B9D] focus:ring-2 focus:ring-[#457B9D]/10 outline-none transition-all text-sm"
              />
            </div>

            <div className="flex gap-3">
              <div className="relative">
                <select
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="appearance-none bg-white pl-4 pr-10 py-2.5 rounded-lg border border-[#E2E8F0] focus:border-[#457B9D] outline-none text-sm cursor-pointer min-w-[200px]"
                >
                  <option value="">All Services</option>
                  {uniqueServices.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
                <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
              </div>

              <button
                onClick={fetchBookings}
                disabled={fetchLoading}
                className="bg-[#1D3557] hover:bg-[#457B9D] text-white px-4 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 disabled:opacity-75"
              >
                {fetchLoading ? 'Refreshing...' : 'Refresh'}
              </button>
            </div>
          </div>

          {/* Bookings Table / List */}
          {fetchLoading && bookings.length === 0 ? (
            <div className="text-center py-20">
              <Loader2 className="w-8 h-8 animate-spin text-[#457B9D] mx-auto mb-4" />
              <p className="text-gray-400 text-sm">Loading bookings from database...</p>
            </div>
          ) : filteredBookings.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-gray-400 text-base mb-2">No bookings found</p>
              <p className="text-gray-400 text-xs">Try adjusting your filters or search terms</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#F8FAFC] border-b border-[#E2E8F0] text-gray-500 text-xs font-semibold uppercase tracking-wider">
                    <th className="px-6 py-4">Client</th>
                    <th className="px-6 py-4">Contact</th>
                    <th className="px-6 py-4">Service Details</th>
                    <th className="px-6 py-4">Estimated Budget</th>
                    <th className="px-6 py-4">Deadline</th>
                    <th className="px-6 py-4">Date Submitted</th>
                    <th className="px-6 py-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E2E8F0] text-sm">
                  {filteredBookings.map((booking) => (
                    <tr key={booking.id} className="hover:bg-[#F8FAFC] transition-colors cursor-pointer group" onClick={() => setSelectedBooking(booking)}>
                      <td className="px-6 py-4 font-semibold text-[#1D3557]">
                        <div className="flex items-center gap-2.5">
                          <div className="w-8 h-8 rounded-full bg-blue-50 text-[#457B9D] flex items-center justify-center font-bold text-xs uppercase">
                            {booking.full_name.charAt(0)}
                          </div>
                          <span>{booking.full_name}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-gray-600">
                        <a
                          href={`tel:${booking.phone}`}
                          onClick={(e) => e.stopPropagation()}
                          className="flex items-center gap-1.5 hover:text-[#457B9D]"
                        >
                          <Phone size={14} className="text-gray-400" />
                          {booking.phone}
                        </a>
                      </td>
                      <td className="px-6 py-4">
                        <span className="inline-block bg-[#E2E8F0]/65 text-[#1D3557] px-2.5 py-1 rounded-md text-xs font-semibold mb-1">
                          {booking.service}
                        </span>
                        <p className="text-gray-400 text-xs truncate max-w-[200px]">{booking.description}</p>
                      </td>
                      <td className="px-6 py-4 text-gray-600 font-medium">
                        {booking.budget ? (
                          <div className="flex items-center gap-1">
                            <DollarSign size={14} className="text-green-500" />
                            {booking.budget}
                          </div>
                        ) : (
                          <span className="text-gray-400 text-xs">Not specified</span>
                        )}
                      </td>
                      <td className="px-6 py-4 text-gray-600">
                        {booking.deadline ? (
                          <div className="flex items-center gap-1 text-xs">
                            <Clock size={12} className="text-gray-400" />
                            {booking.deadline}
                          </div>
                        ) : (
                          <span className="text-gray-400 text-xs">No deadline</span>
                        )}
                      </td>
                      <td className="px-6 py-4 text-gray-500 text-xs">
                        {formatDate(booking.created_at)}
                      </td>
                      <td className="px-6 py-4 text-right" onClick={(e) => e.stopPropagation()}>
                        <div className="flex items-center justify-end gap-2">
                          <button
                            onClick={() => setSelectedBooking(booking)}
                            className="p-1.5 rounded-lg text-gray-400 hover:text-[#457B9D] hover:bg-[#F1F5F9] transition-all"
                            title="View details"
                          >
                            <Info size={16} />
                          </button>
                          
                          {deleteConfirmId === booking.id ? (
                            <div className="flex items-center gap-1">
                              <button
                                onClick={() => handleDeleteBooking(booking.id)}
                                disabled={deleteLoading}
                                className="bg-red-600 hover:bg-red-700 text-white px-2 py-1 rounded text-xs font-semibold"
                              >
                                {deleteLoading ? '...' : 'Yes'}
                              </button>
                              <button
                                onClick={() => setDeleteConfirmId(null)}
                                className="bg-gray-200 text-gray-700 px-2 py-1 rounded text-xs font-semibold"
                              >
                                No
                              </button>
                            </div>
                          ) : (
                            <button
                              onClick={() => setDeleteConfirmId(booking.id)}
                              className="p-1.5 rounded-lg text-gray-400 hover:text-red-600 hover:bg-red-50 transition-all"
                              title="Delete booking"
                            >
                              <Trash2 size={16} />
                            </button>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </main>

      {/* Booking Details Drawer/Modal */}
      {selectedBooking && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex justify-end">
          <div className="w-full max-w-2xl bg-white h-full shadow-2xl flex flex-col transform transition-transform duration-300">
            {/* Modal Header */}
            <div className="px-6 py-5 border-b border-[#E2E8F0] flex items-center justify-between bg-[#F8FAFC]">
              <div>
                <h3 className="text-lg font-bold text-[#1D3557]">Booking details</h3>
                <p className="text-xs text-gray-400">ID: {selectedBooking.id}</p>
              </div>
              <button
                onClick={() => setSelectedBooking(null)}
                className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100 transition-all"
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-6 flex-1 overflow-y-auto">
              
              {/* Client Profile Card */}
              <div className="bg-[#F0F7F9] p-5 rounded-2xl space-y-3.5">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-[#457B9D]/15 text-[#457B9D] flex items-center justify-center font-bold text-lg uppercase">
                    {selectedBooking.full_name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-[#1D3557]">{selectedBooking.full_name}</h4>
                    <p className="text-xs text-gray-500">Submitted on {formatDate(selectedBooking.created_at)}</p>
                  </div>
                </div>

                <div className="border-t border-[#D0E1E6]/60 pt-3.5 grid sm:grid-cols-2 gap-4">
                  <div className="flex items-center gap-2">
                    <Phone size={16} className="text-[#457B9D]" />
                    <div>
                      <p className="text-xs font-semibold text-gray-400">Phone number</p>
                      <a href={`tel:${selectedBooking.phone}`} className="text-sm font-semibold text-[#1D3557] hover:underline">
                        {selectedBooking.phone}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar size={16} className="text-[#457B9D]" />
                    <div>
                      <p className="text-xs font-semibold text-gray-400">Requested date</p>
                      <span className="text-sm font-semibold text-[#1D3557]">
                        {selectedBooking.deadline || 'No specific date'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Service & Budget Details */}
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="border border-[#E2E8F0] p-4 rounded-xl">
                  <span className="text-xs font-bold text-gray-400 block mb-1">Service requested</span>
                  <div className="flex items-center gap-2 text-[#1D3557] font-semibold">
                    <Tag size={16} className="text-[#457B9D]" />
                    <span>{selectedBooking.service}</span>
                  </div>
                </div>
                <div className="border border-[#E2E8F0] p-4 rounded-xl">
                  <span className="text-xs font-bold text-gray-400 block mb-1">Proposed budget</span>
                  <div className="flex items-center gap-2 text-[#1D3557] font-semibold">
                    <DollarSign size={16} className="text-green-500" />
                    <span>{selectedBooking.budget || 'Not specified'}</span>
                  </div>
                </div>
              </div>

              {/* Project Description */}
              <div className="space-y-2">
                <span className="text-xs font-bold text-gray-400 block">Project description & instructions</span>
                <div className="bg-slate-50 border border-slate-100 p-5 rounded-2xl text-gray-700 text-sm leading-relaxed whitespace-pre-wrap font-medium">
                  {selectedBooking.description}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-6 border-t border-[#E2E8F0] flex items-center justify-between bg-[#F8FAFC]">
              <a
                href={`https://wa.me/${selectedBooking.phone.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200"
              >
                Chat on WhatsApp <ExternalLink size={14} />
              </a>

              <div className="flex gap-3">
                {deleteConfirmId === selectedBooking.id ? (
                  <div className="flex items-center gap-2 bg-red-50 p-1.5 rounded-lg border border-red-200">
                    <span className="text-xs font-semibold text-red-600 px-2">Sure?</span>
                    <button
                      onClick={() => handleDeleteBooking(selectedBooking.id)}
                      disabled={deleteLoading}
                      className="bg-red-600 hover:bg-red-700 text-white px-3 py-1.5 rounded text-xs font-semibold"
                    >
                      {deleteLoading ? '...' : 'Yes'}
                    </button>
                    <button
                      onClick={() => setDeleteConfirmId(null)}
                      className="bg-white border border-gray-300 text-gray-700 px-3 py-1.5 rounded text-xs font-semibold"
                    >
                      No
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => setDeleteConfirmId(selectedBooking.id)}
                    className="flex items-center gap-2 bg-red-50 hover:bg-red-600 text-red-600 hover:text-white px-4 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200"
                  >
                    <Trash2 size={16} /> Delete Booking
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
