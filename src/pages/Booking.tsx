import { useState } from 'react'
import { Link } from 'react-router'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import {
  Phone,
  Mail,
  Clock,
  Send,
  Check,
} from 'lucide-react'

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
function BookingForm() {
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const message = `Hello IMPACT GRAPHICS, I would like to request a quote.\n\nName: ${formData.fullName}\nService: ${formData.service}\nPhone: ${formData.phone}\nBudget: ${formData.budget}\nDeadline: ${formData.deadline}\nDescription: ${formData.description}`
    const encoded = encodeURIComponent(message)
    window.open(`https://wa.me/237655316506?text=${encoded}`, '_blank')
    setSubmitted(true)
  }

  return (
    <section ref={ref} className="bg-white py-24">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Form */}
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
                      className="w-full px-4 py-3.5 rounded-lg border border-[#D0E1E6] focus:border-[#457B9D] focus:ring-2 focus:ring-[#457B9D]/10 outline-none transition-all"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#1D3557] mb-2">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3.5 rounded-lg border border-[#D0E1E6] focus:border-[#457B9D] focus:ring-2 focus:ring-[#457B9D]/10 outline-none transition-all"
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
                    className="w-full px-4 py-3.5 rounded-lg border border-[#D0E1E6] focus:border-[#457B9D] focus:ring-2 focus:ring-[#457B9D]/10 outline-none transition-all bg-white"
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
                      className="w-full px-4 py-3.5 rounded-lg border border-[#D0E1E6] focus:border-[#457B9D] focus:ring-2 focus:ring-[#457B9D]/10 outline-none transition-all bg-white"
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
                      className="w-full px-4 py-3.5 rounded-lg border border-[#D0E1E6] focus:border-[#457B9D] focus:ring-2 focus:ring-[#457B9D]/10 outline-none transition-all"
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
                    className="w-full px-4 py-3.5 rounded-lg border border-[#D0E1E6] focus:border-[#457B9D] focus:ring-2 focus:ring-[#457B9D]/10 outline-none transition-all resize-none"
                    placeholder="Tell us about your project, requirements, and any specific ideas you have..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#457B9D] text-white py-4 rounded-lg font-semibold hover:bg-[#1D3557] transition-colors duration-200 flex items-center justify-center gap-2"
                >
                  <Send size={18} /> Send Booking Request
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
  return (
    <>
      <PageHero />
      <BookingForm />
    </>
  )
}
