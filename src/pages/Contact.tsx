import { useState } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  Facebook,
  Instagram,
  Linkedin,
  Check,
} from 'lucide-react'

/* ─── Page Hero ─── */
function PageHero() {
  return (
    <section
      className="pt-[72px] relative flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: 'linear-gradient(135deg, rgba(29, 53, 87, 0.85) 0%, rgba(69, 123, 157, 0.85) 100%), url("/images/hero_contact us.jpg")',
        minHeight: '40vh',
      }}
    >
      <div className="text-center px-6 py-16 relative z-10">
        <h1
          className="text-4xl sm:text-5xl font-bold text-white mb-4"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          Contact Us
        </h1>
        <p className="text-white/80 text-lg max-w-xl mx-auto">
          We&apos;d love to hear from you. Reach out and let&apos;s start a conversation.
        </p>
      </div>
    </section>
  )
}

/* ─── Contact Info & Form ─── */
function ContactSection() {
  const { ref, isVisible } = useScrollAnimation()
  const [formData, setFormData] = useState({
    name: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (formData.name && formData.message) {
      const message = `Hello IMPACT GRAPHICS, I would like to get in touch.\n\nName: ${formData.name}\nSubject: ${formData.subject}\nMessage: ${formData.message}`
      const encoded = encodeURIComponent(message)
      window.open(`https://wa.me/237655316506?text=${encoded}`, '_blank')
      setSubmitted(true)
      setFormData({ name: '', subject: '', message: '' })
    }
  }

  return (
    <section ref={ref} className="bg-white py-24">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left: Contact Info */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-16'
            }`}
          >
            <h2
              className="text-3xl font-bold text-[#1D3557] mb-6"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Get In Touch
            </h2>
            <p className="text-[#4E6178] leading-relaxed mb-8">
              Whether you have a question about our services, need a custom quote, or want to
              discuss a project, our team is here to help. Reach out through any of the channels
              below.
            </p>

            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-[#457B9D]/10 flex items-center justify-center text-[#457B9D] shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="font-medium text-[#1D3557]">Phone / WhatsApp</p>
                  <p className="text-[#4E6178]">+237 6 55 31 65 06</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-[#457B9D]/10 flex items-center justify-center text-[#457B9D] shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="font-medium text-[#1D3557]">Email</p>
                  <p className="text-[#4E6178]">khadijenjoya03@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-[#457B9D]/10 flex items-center justify-center text-[#457B9D] shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="font-medium text-[#1D3557]">Address</p>
                  <p className="text-[#4E6178]">Akwa, Douala, Cameroon</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-[#457B9D]/10 flex items-center justify-center text-[#457B9D] shrink-0">
                  <Clock size={20} />
                </div>
                <div>
                  <p className="font-medium text-[#1D3557]">Working Hours</p>
                  <p className="text-[#4E6178]">Monday - Friday: 8:00 AM - 5:00 PM</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mb-8">
              <p className="font-medium text-[#1D3557] mb-3">Follow Us</p>
              <div className="flex gap-3">
                <a
                  href="https://facebook.com/impactgraphicsdouala"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-[#F0F7F9] flex items-center justify-center text-[#4E6178] hover:bg-[#457B9D] hover:text-white transition-colors"
                >
                  <Facebook size={18} />
                </a>
                <a
                  href="https://instagram.com/impactgraphicsdouala"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-[#F0F7F9] flex items-center justify-center text-[#4E6178] hover:bg-[#457B9D] hover:text-white transition-colors"
                >
                  <Instagram size={18} />
                </a>
                <a
                  href="https://linkedin.com/company/impact-graphics-son-sarl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-[#F0F7F9] flex items-center justify-center text-[#4E6178] hover:bg-[#457B9D] hover:text-white transition-colors"
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href="https://tiktok.com/@impactgraphicsdouala"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-[#F0F7F9] flex items-center justify-center text-[#4E6178] hover:bg-[#457B9D] hover:text-white transition-colors"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" /></svg>
                </a>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-16'
            }`}
          >
            {submitted ? (
              <div className="bg-[#F0F7F9] rounded-2xl p-10 text-center h-full flex flex-col items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-[#10B981]/10 flex items-center justify-center mb-5">
                  <Check size={32} className="text-[#10B981]" />
                </div>
                <h3 className="text-2xl font-bold text-[#1D3557] mb-3">Redirecting to WhatsApp...</h3>
                <p className="text-[#4E6178]">
                  We&apos;ve opened WhatsApp with your message. Our team will respond shortly!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-[#F0F7F9] rounded-2xl p-8 space-y-5">
                <h3 className="font-bold text-[#1D3557] text-lg mb-2">Send us a Message</h3>
                <div>
                  <label className="block text-sm font-medium text-[#1D3557] mb-2">
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-[#D0E1E6] bg-white focus:border-[#457B9D] focus:ring-2 focus:ring-[#457B9D]/10 outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#1D3557] mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-[#D0E1E6] bg-white focus:border-[#457B9D] focus:ring-2 focus:ring-[#457B9D]/10 outline-none transition-all"
                    placeholder="Project inquiry"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#1D3557] mb-2">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-[#D0E1E6] bg-white focus:border-[#457B9D] focus:ring-2 focus:ring-[#457B9D]/10 outline-none transition-all resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#457B9D] text-white py-3.5 rounded-lg font-semibold hover:bg-[#1D3557] transition-colors duration-200 flex items-center justify-center gap-2"
                >
                  <Send size={18} /> Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── Map Section ─── */
function MapSection() {
  return (
    <section className="bg-[#F0F7F9]">
      <div className="w-full h-[400px] relative">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.858627500292!2d9.7677!3d4.0511!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10610d8f1f5a1c6b%3A0x8e5a5c5c5c5c5c5c!2sAkwa%2C%20Douala%2C%20Cameroon!5e0!3m2!1sen!2scm!4v1700000000000!5m2!1sen!2scm"
          width="100%"
          height="100%"
          style={{ border: 0, filter: 'grayscale(30%) saturate(0.7)' }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="IMPACT GRAPHICS Location"
        />
      </div>
    </section>
  )
}

/* ─── Contact Page ─── */
export default function Contact() {
  return (
    <>
      <PageHero />
      <ContactSection />
      <MapSection />
    </>
  )
}
