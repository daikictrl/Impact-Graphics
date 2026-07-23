import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import {
  Phone,
  Mail,
  Clock,
  Send,
  Check,
  Loader2,
  Lock,
  User,
  LogOut,
  X,
} from 'lucide-react'
import { supabase } from '../lib/supabase'
import { toast } from 'sonner'

/* ─── Page Hero ─── */
function PageHero() {
  return (
    <section
      className="pt-[72px] relative flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: 'linear-gradient(135deg, rgba(29, 53, 87, 0.85) 0%, rgba(69, 123, 157, 0.85) 100%), url("/images/hero_Book-service.jpg")',
        minHeight: '40vh',
      }}
    >
      <div className="text-center px-6 py-16 relative z-10">
        <h1
          className="text-4xl sm:text-5xl font-bold text-white mb-4"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          Book a Service
        </h1>
        <p className="text-white/80 text-lg max-w-xl mx-auto">
          Schedule your project with us and let&apos;s bring your vision to life
        </p>
      </div>
    </section>
  )
}

const servicesList = [
  'Logo & Brand Identity',
  'Graphic Design',
  'Printing Solutions',
  'Large Format Printing',
  'Event Branding',
  'Website Design',
  'Social Media Management',
  'Photography',
  'Video Production',
  'Motion Graphics',
  'Communication Management',
  'IT Services',
  'Professional Training',
]

const budgetRanges = [
  'Under XAF 100,000',
  'XAF 100,000 - 500,000',
  'XAF 500,000 - 1,000,000',
  'XAF 1,000,000 - 5,000,000',
  'Above XAF 5,000,000',
  'Not Sure / Need Quote',
]

/* ─── Booking Form ─── */
interface BookingFormProps {
  session: any
  handleLogout: () => Promise<void>
}

/* ─── Booking Form ─── */
function BookingForm({ session, handleLogout }: BookingFormProps) {
  const { ref, isVisible } = useScrollAnimation()

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    service: '',
    budget: '',
    deadline: '',
    description: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Pre-fill name when session changes
  useEffect(() => {
    if (session?.user) {
      const name = session.user.user_metadata?.full_name || ''
      setFormData(prev => ({ ...prev, fullName: name }))
    } else {
      setFormData(prev => ({ ...prev, fullName: '' }))
    }
  }, [session])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const { error } = await supabase.from('bookings').insert([
        {
          full_name: formData.fullName,
          phone: formData.phone,
          service: formData.service,
          budget: formData.budget || null,
          deadline: formData.deadline || null,
          description: formData.description,
        },
      ])

      if (error) {
        throw error
      }

      toast.success('Booking saved successfully!')

      const message = `Hello IMPACT GRAPHICS, I would like to request a quote.\n\nName: ${formData.fullName}\nService: ${formData.service}\nPhone: ${formData.phone}\nBudget: ${formData.budget}\nDeadline: ${formData.deadline}\nDescription: ${formData.description}`
      const encoded = encodeURIComponent(message)
      window.open(`https://wa.me/237655316506?text=${encoded}`, '_blank')
      setSubmitted(true)
    } catch (error: any) {
      console.error('Error submitting booking:', error)
      toast.error(error.message || 'Failed to submit booking. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section ref={ref} className="bg-white py-24">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Form container */}
          <div
            className={`lg:col-span-3 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-16'
            }`}
          >
            {submitted ? (
              <div className="bg-[#F0F7F9] rounded-2xl p-10 text-center">
                <div className="w-16 h-16 rounded-full bg-[#10B981]/10 flex items-center justify-center mx-auto mb-5">
                  <Check size={32} className="text-[#10B981]" />
                </div>
                <h3 className="text-2xl font-bold text-[#1D3557] mb-3">Booking Request Sent!</h3>
                <p className="text-[#4E6178] mb-6">
                  We&apos;ve opened WhatsApp with your request. Our team will respond within 24 hours.
                </p>
                <Link
                  to="/"
                  className="bg-[#457B9D] text-white px-8 py-3 rounded-lg font-medium inline-block hover:bg-[#1D3557] transition-colors"
                >
                  Back to Home
                </Link>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* User Status Banner */}
                {session && (
                  <div className="bg-[#F0F7F9] border border-[#D0E1E6] rounded-xl p-4 flex flex-wrap items-center justify-between gap-3 shadow-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="text-sm text-[#1D3557]">
                        Logged in as <strong className="font-semibold">{session.user?.email}</strong>
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={handleLogout}
                      className="text-xs font-semibold text-[#E63946] hover:text-[#D62828] flex items-center gap-1 transition-colors"
                    >
                      <LogOut size={12} /> Log Out
                    </button>
                  </div>
                )}

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-[#1D3557] mb-2">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleChange}
                      className="w-full px-4 py-3.5 rounded-lg border border-[#D0E1E6] focus:border-[#457B9D] focus:ring-2 focus:ring-[#457B9D]/10 outline-none transition-all text-sm text-[#1D3557]"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#1D3557] mb-2">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3.5 rounded-lg border border-[#D0E1E6] focus:border-[#457B9D] focus:ring-2 focus:ring-[#457B9D]/10 outline-none transition-all text-sm text-[#1D3557]"
                      placeholder="+237 6 55 31 65 06"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#1D3557] mb-2">
                    Service Required <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 rounded-lg border border-[#D0E1E6] focus:border-[#457B9D] focus:ring-2 focus:ring-[#457B9D]/10 outline-none transition-all bg-white text-sm text-[#1D3557]"
                  >
                    <option value="">Select a service</option>
                    {servicesList.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-[#1D3557] mb-2">
                      Budget Range
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3.5 rounded-lg border border-[#D0E1E6] focus:border-[#457B9D] focus:ring-2 focus:ring-[#457B9D]/10 outline-none transition-all bg-white text-sm text-[#1D3557]"
                    >
                      <option value="">Select budget</option>
                      {budgetRanges.map((b) => (
                        <option key={b} value={b}>{b}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#1D3557] mb-2">
                      Preferred Deadline
                    </label>
                    <input
                      type="date"
                      name="deadline"
                      value={formData.deadline}
                      onChange={handleChange}
                      className="w-full px-4 py-3.5 rounded-lg border border-[#D0E1E6] focus:border-[#457B9D] focus:ring-2 focus:ring-[#457B9D]/10 outline-none transition-all text-sm text-[#1D3557]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#1D3557] mb-2">
                    Project Description <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="description"
                    required
                    rows={5}
                    value={formData.description}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 rounded-lg border border-[#D0E1E6] focus:border-[#457B9D] focus:ring-2 focus:ring-[#457B9D]/10 outline-none transition-all resize-none text-sm text-[#1D3557]"
                    placeholder="Tell us about your project, requirements, and any specific ideas you have..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#457B9D] text-white py-4 rounded-lg font-semibold hover:bg-[#1D3557] transition-colors duration-200 flex items-center justify-center gap-2 disabled:opacity-75 disabled:cursor-not-allowed shadow-sm"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={18} className="animate-spin" /> Submitting...
                    </>
                  ) : (
                    <>
                      <Send size={18} /> Send Booking Request
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Info Sidebar */}
          <div
            className={`lg:col-span-2 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-16'
            }`}
          >
            <div className="bg-[#F0F7F9] rounded-2xl p-8 space-y-6">
              <h3 className="font-bold text-[#1D3557] text-lg">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Phone size={18} className="text-[#457B9D] mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-[#1D3557]">Phone / WhatsApp</p>
                    <p className="text-sm text-[#4E6178]">+237 6 55 31 65 06</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail size={18} className="text-[#457B9D] mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-[#1D3557]">Email</p>
                    <p className="text-sm text-[#4E6178]">khadijenjoya03@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock size={18} className="text-[#457B9D] mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-[#1D3557]">Working Hours</p>
                    <p className="text-sm text-[#4E6178]">Mon-Fri: 8:00 AM - 5:00 PM</p>
                  </div>
                </div>
              </div>

              <div className="border-t border-[#D0E1E6] pt-6">
                <h3 className="font-bold text-[#1D3557] text-lg mb-3">Response Time</h3>
                <p className="text-sm text-[#4E6178]">
                  We typically respond within 24 hours during business days. Since bookings are submitted directly to our WhatsApp, you will receive a prompt reply!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── Booking Page ─── */
export default function Booking() {
  const navigate = useNavigate()

  // Auth state
  const [session, setSession] = useState<any>(null)
  const [authLoading, setAuthLoading] = useState(true)

  // Auth UI state
  const [isSignUp, setIsSignUp] = useState(false)
  const [authEmail, setAuthEmail] = useState('')
  const [authPassword, setAuthPassword] = useState('')
  const [authName, setAuthName] = useState('')
  const [authSubmitting, setAuthSubmitting] = useState(false)

  // Listen for auth state changes
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
      setAuthLoading(false)
    })

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
      setAuthLoading(false)
    })

    return () => {
      subscription.unsubscribe()
    }
  }, [])

  const handleAuthSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setAuthSubmitting(true)
    try {
      if (isSignUp) {
        const { data, error } = await supabase.auth.signUp({
          email: authEmail,
          password: authPassword,
          options: {
            data: {
              full_name: authName,
            },
          },
        })
        if (error) throw error
        if (data.session) {
          toast.success('Account created and logged in successfully!')
        } else {
          toast.success('Account created! Please check your email to confirm your account.')
        }
      } else {
        const { error } = await supabase.auth.signInWithPassword({
          email: authEmail,
          password: authPassword,
        })
        if (error) throw error
        toast.success('Logged in successfully!')
      }
    } catch (error: any) {
      console.error('Authentication error:', error)
      toast.error(error.message || 'Authentication failed. Please try again.')
    } finally {
      setAuthSubmitting(false)
    }
  }

  const handleLogout = async () => {
    try {
      const { error } = await supabase.auth.signOut()
      if (error) throw error
      toast.success('Logged out successfully.')
    } catch (error: any) {
      console.error('Error logging out:', error)
      toast.error('Failed to log out.')
    }
  }

  return (
    <div className="relative min-h-screen">
      {/* Page Content wrapper that blurs the ENTIRE page (Hero + Booking form) */}
      <div
        className={`transition-all duration-500 ${
          !session && !authLoading ? 'filter blur-[8px] pointer-events-none select-none opacity-60' : ''
        }`}
      >
        <PageHero />
        <BookingForm session={session} handleLogout={handleLogout} />
      </div>

      {/* Global Loader */}
      {authLoading && (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white/80 backdrop-blur-sm">
          <Loader2 size={48} className="animate-spin text-[#457B9D] mb-4" />
          <p className="text-[#1D3557] font-medium">Loading...</p>
        </div>
      )}

      {/* Full-Screen Pop-up Dialog */}
      {!session && !authLoading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-[3px] animate-in fade-in duration-300">
          <div className="bg-[#F0F7F9]/95 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-[#D0E1E6] shadow-2xl max-w-md w-full relative animate-in fade-in zoom-in-95 duration-300">
            {/* Close Button */}
            <button
              onClick={() => navigate('/')}
              className="absolute right-4 top-4 text-[#4E6178] hover:text-[#E63946] hover:bg-[#D0E1E6]/30 p-1.5 rounded-full transition-all duration-200"
              aria-label="Close and return to homepage"
            >
              <X size={20} />
            </button>

            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-[#1D3557] mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                {isSignUp ? 'Create an Account' : 'Sign In Required'}
              </h3>
              <p className="text-[#4E6178] text-sm">
                {isSignUp 
                  ? 'Register to book your service and track requests' 
                  : 'Please sign in to proceed with your booking request'}
              </p>
            </div>

            {/* Tabs */}
            <div className="flex border-b border-[#D0E1E6] mb-6">
              <button
                type="button"
                onClick={() => setIsSignUp(false)}
                className={`flex-1 pb-3 text-sm font-semibold transition-all border-b-2 ${
                  !isSignUp 
                    ? 'border-[#457B9D] text-[#457B9D]' 
                    : 'border-transparent text-[#4E6178] hover:text-[#1D3557]'
                }`}
              >
                Sign In
              </button>
              <button
                type="button"
                onClick={() => setIsSignUp(true)}
                className={`flex-1 pb-3 text-sm font-semibold transition-all border-b-2 ${
                  isSignUp 
                    ? 'border-[#457B9D] text-[#457B9D]' 
                    : 'border-transparent text-[#4E6178] hover:text-[#1D3557]'
                }`}
              >
                Register
              </button>
            </div>

            <form onSubmit={handleAuthSubmit} className="space-y-4">
              {isSignUp && (
                <div>
                  <label className="block text-xs font-medium text-[#1D3557] mb-1.5 uppercase tracking-wider">
                    Full Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-3.5 top-3.5 text-[#457B9D]" size={18} />
                    <input
                      type="text"
                      required
                      value={authName}
                      onChange={(e) => setAuthName(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 rounded-lg border border-[#D0E1E6] focus:border-[#457B9D] focus:ring-2 focus:ring-[#457B9D]/10 outline-none bg-white transition-all text-sm text-[#1D3557]"
                      placeholder="John Doe"
                    />
                  </div>
                </div>
              )}

              <div>
                <label className="block text-xs font-medium text-[#1D3557] mb-1.5 uppercase tracking-wider">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3.5 top-3.5 text-[#457B9D]" size={18} />
                  <input
                    type="email"
                    required
                    value={authEmail}
                    onChange={(e) => setAuthEmail(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-[#D0E1E6] focus:border-[#457B9D] focus:ring-2 focus:ring-[#457B9D]/10 outline-none bg-white transition-all text-sm text-[#1D3557]"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-[#1D3557] mb-1.5 uppercase tracking-wider">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3.5 top-3.5 text-[#457B9D]" size={18} />
                  <input
                    type="password"
                    required
                    value={authPassword}
                    onChange={(e) => setAuthPassword(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-[#D0E1E6] focus:border-[#457B9D] focus:ring-2 focus:ring-[#457B9D]/10 outline-none bg-white transition-all text-sm text-[#1D3557]"
                    placeholder="••••••••"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={authSubmitting}
                className="w-full bg-[#457B9D] text-white py-3.5 rounded-lg font-semibold hover:bg-[#1D3557] transition-colors duration-200 flex items-center justify-center gap-2 disabled:opacity-75 disabled:cursor-not-allowed mt-6 shadow-md"
              >
                {authSubmitting ? (
                  <>
                    <Loader2 size={16} className="animate-spin" /> Processing...
                  </>
                ) : isSignUp ? (
                  'Create Account'
                ) : (
                  'Sign In'
                )}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
