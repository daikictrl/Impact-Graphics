import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import CountUp from 'react-countup'
import FUITestimonialWithSlide from '@/components/ui/sliding-testimonial'
import {
  Palette,
  PenTool,
  Printer,
  Maximize,
  PartyPopper,
  Globe,
  Share2,
  Camera,
  Video,
  Sparkles,
  Megaphone,
  Monitor,
  Check,
  Star,
  ArrowRight,
  Clock,
  Users,
  Award,
  MessageCircle,
} from 'lucide-react'

/* ─── Hero Section ─── */
function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const hero = heroRef.current
    if (!hero) return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = hero.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      hero.style.setProperty('--mouse-x', `${x}px`)
      hero.style.setProperty('--mouse-y', `${y}px`)
    }

    const handleMouseEnter = () => {
      hero.style.setProperty('--mouse-opacity', '1')
    }

    const handleMouseLeave = () => {
      hero.style.setProperty('--mouse-opacity', '0')
    }

    let lastClientX = 0
    let lastClientY = 0

    const handleGlobalMouseMove = (e: MouseEvent) => {
      lastClientX = e.clientX
      lastClientY = e.clientY
    }

    const handleScroll = () => {
      const rect = hero.getBoundingClientRect()
      if (
        lastClientY >= rect.top &&
        lastClientY <= rect.bottom &&
        lastClientX >= rect.left &&
        lastClientX <= rect.right
      ) {
        const x = lastClientX - rect.left
        const y = lastClientY - rect.top
        hero.style.setProperty('--mouse-x', `${x}px`)
        hero.style.setProperty('--mouse-y', `${y}px`)
        hero.style.setProperty('--mouse-opacity', '1')
      } else {
        hero.style.setProperty('--mouse-opacity', '0')
      }
    }

    window.addEventListener('mousemove', handleGlobalMouseMove)
    hero.addEventListener('mousemove', handleMouseMove)
    hero.addEventListener('mouseenter', handleMouseEnter)
    hero.addEventListener('mouseleave', handleMouseLeave)
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('mousemove', handleGlobalMouseMove)
      hero.removeEventListener('mousemove', handleMouseMove)
      hero.removeEventListener('mouseenter', handleMouseEnter)
      hero.removeEventListener('mouseleave', handleMouseLeave)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <section ref={heroRef} className="min-h-screen bg-white pt-[72px] relative overflow-hidden">
      {/* Background Animated Gradient Orbs following cursor */}
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        style={{
          opacity: 'var(--mouse-opacity, 0)',
          transition: 'opacity 0.6s ease',
        }}
      >
        <div
          className="absolute rounded-full bg-gradient-to-br from-blue-400 to-indigo-600 opacity-30 filter blur-[80px] sm:blur-[120px]"
          style={{
            width: '600px',
            height: '600px',
            left: 'var(--mouse-x, 0px)',
            top: 'var(--mouse-y, 0px)',
            transform: 'translate(-50%, -50%)',
            transition: 'transform 0.1s cubic-bezier(0.25, 1, 0.5, 1)',
          }}
        />
        <div
          className="absolute rounded-full bg-gradient-to-br from-teal-400 to-emerald-600 opacity-25 filter blur-[80px] sm:blur-[120px]"
          style={{
            width: '650px',
            height: '650px',
            left: 'var(--mouse-x, 0px)',
            top: 'var(--mouse-y, 0px)',
            transform: 'translate(-40%, -60%)',
            transition: 'transform 0.15s cubic-bezier(0.25, 1, 0.5, 1)',
          }}
        />
        <div
          className="absolute rounded-full bg-gradient-to-br from-orange-300 to-amber-500 opacity-20 filter blur-[60px] sm:blur-[90px]"
          style={{
            width: '450px',
            height: '450px',
            left: 'var(--mouse-x, 0px)',
            top: 'var(--mouse-y, 0px)',
            transform: 'translate(-60%, -40%)',
            transition: 'transform 0.2s cubic-bezier(0.25, 1, 0.5, 1)',
          }}
        />
      </div>

      <div className="max-w-[1200px] mx-auto px-6 lg:px-12 py-16 lg:py-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Column */}
          <div className="space-y-8">
            <span className="inline-block text-[13px] font-semibold uppercase tracking-[0.08em] text-[#F97316]">
              Creative Branding Agency
            </span>
            <h1
              className="text-4xl sm:text-5xl lg:text-[52px] font-bold text-[#0F172A] leading-[1.1]"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              We Design Your Brand. We Build Your Presence.
            </h1>
            <p className="text-lg text-[#475569] max-w-[520px] leading-relaxed">
              Creative branding, premium printing, digital marketing, and visual
              solutions that help businesses stand out and grow.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/portfolio"
                className="bg-[#1E40AF] text-white px-8 py-3.5 rounded-lg font-medium hover:bg-[#1E3A8A] transition-colors duration-200"
              >
                View Portfolio
              </Link>
              <Link
                to="/booking"
                className="border-2 border-[#1E40AF] text-[#1E40AF] px-8 py-3.5 rounded-lg font-medium hover:bg-[#1E40AF] hover:text-white transition-colors duration-200"
              >
                Request A Quote
              </Link>
            </div>
            {/* Trust Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
              {[
                { icon: <Clock size={20} />, label: '10+ Years' },
                { icon: <Award size={20} />, label: '500+ Projects' },
                { icon: <Users size={20} />, label: '200+ Clients' },
                { icon: <Star size={20} />, label: '98% Satisfaction' },
              ].map((badge) => (
                <div key={badge.label} className="flex items-center gap-2 text-[#475569]">
                  <span className="text-[#1E40AF]">{badge.icon}</span>
                  <span className="text-sm font-medium">{badge.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Image Collage */}
          <div className="grid grid-cols-2 gap-3 lg:gap-4">
            {[
              '/images/hero-collage-1.jpg',
              '/images/hero-collage-2.jpg',
              '/images/hero-collage-3.jpg',
              '/images/hero-collage-4.jpg',
              '/images/hero-collage-5.jpg',
              '/images/hero-collage-6.jpg',
            ].map((src, i) => (
              <div
                key={i}
                className="rounded-xl overflow-hidden shadow-md"
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <img
                  src={src}
                  alt={`Creative work ${i + 1}`}
                  className="w-full h-[140px] sm:h-[160px] lg:h-[180px] object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-b from-transparent to-[#F8FAFC]" />
    </section>
  )
}

/* ─── Stats Section ─── */
function StatsSection() {
  const { ref, isVisible } = useScrollAnimation()
  const stats = [
    { value: 10, suffix: '+', label: 'Years of Experience' },
    { value: 500, suffix: '+', label: 'Projects Completed' },
    { value: 200, suffix: '+', label: 'Happy Clients' },
    { value: 98, suffix: '%', label: 'Client Satisfaction' },
  ]

  return (
    <section ref={ref} className="bg-[#F8FAFC] py-20">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-white rounded-2xl p-8 sm:p-10 text-center shadow-sm border border-gray-100"
            >
              <div className="text-4xl sm:text-5xl font-bold mb-2 bg-gradient-to-r from-[#1E40AF] to-[#0D9488] bg-clip-text text-transparent">
                {isVisible ? (
                  <CountUp end={stat.value} duration={2.5} suffix={stat.suffix} />
                ) : (
                  `0${stat.suffix}`
                )}
              </div>
              <p className="text-sm text-[#475569]">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Services Section ─── */
function ServicesSection() {
  const { ref, isVisible } = useScrollAnimation()
  const services = [
    { icon: <Palette size={28} />, title: 'Logo & Brand Identity', desc: 'Unique logos and complete brand identity systems that make your business memorable.' },
    { icon: <PenTool size={28} />, title: 'Graphic Design', desc: 'Stunning visuals for print and digital including flyers, brochures, and posters.' },
    { icon: <Printer size={28} />, title: 'Printing Solutions', desc: 'High-quality business cards, letterheads, and marketing materials.' },
    { icon: <Maximize size={28} />, title: 'Large Format Printing', desc: 'Banners, billboards, vehicle wraps, and building signage.' },
    { icon: <PartyPopper size={28} />, title: 'Event Branding', desc: 'Complete event branding from backdrops to promotional items.' },
    { icon: <Globe size={28} />, title: 'Website Design', desc: 'Responsive, modern websites that convert visitors into customers.' },
    { icon: <Share2 size={28} />, title: 'Social Media Management', desc: 'Strategic content creation and community management.' },
    { icon: <Camera size={28} />, title: 'Photography', desc: 'Professional product, corporate, and event photography.' },
    { icon: <Video size={28} />, title: 'Video Production', desc: 'Corporate videos, commercials, and event coverage.' },
    { icon: <Sparkles size={28} />, title: 'Motion Graphics', desc: 'Animated logos, explainer videos, and social media animations.' },
    { icon: <Megaphone size={28} />, title: 'Communication Management', desc: 'Strategic brand messaging and media relations.' },
    { icon: <Monitor size={28} />, title: 'IT Services', desc: 'Technical support, network solutions, and software services.' },
  ]

  return (
    <section ref={ref} className="bg-white py-24">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        <div className="text-center mb-14">
          <h2
            className="text-3xl sm:text-4xl font-bold text-[#0F172A] mb-4"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Our Services
          </h2>
          <div className="w-10 h-[3px] bg-[#F97316] mx-auto mb-4" />
          <p className="text-[#475569] max-w-xl mx-auto">
            Everything your brand needs to stand out, grow, and succeed
          </p>
        </div>
        <div
          className={`grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {services.map((service, i) => (
            <Link
              to="/services"
              key={service.title}
              className="group border border-[#E2E8F0] rounded-2xl p-8 hover:shadow-[0_12px_40px_rgba(30,64,175,0.12)] hover:border-[#1E40AF] transition-all duration-300"
              style={{ transitionDelay: `${i * 0.05}s` }}
            >
              <div className="text-[#1E40AF] mb-4 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="font-semibold text-[#0F172A] mb-2">{service.title}</h3>
              <p className="text-sm text-[#475569] leading-relaxed mb-4">
                {service.desc}
              </p>
              <span className="text-sm font-medium text-[#1E40AF] flex items-center gap-1 group-hover:gap-2 transition-all duration-200">
                Learn More <ArrowRight size={14} />
              </span>
            </Link>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-[#1E40AF] font-medium hover:underline"
          >
            View All 13 Services <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  )
}

/* ─── Why Choose Us Section ─── */
function WhyChooseSection() {
  const features = [
    {
      title: 'Personalized Service',
      desc: 'Every project is unique. We take time to understand your brand, goals, and audience before crafting tailored solutions that truly represent your vision.',
      image: '/images/why-us-1.jpg',
      points: ['Dedicated project manager', 'Custom design approach', 'Regular progress updates'],
    },
    {
      title: 'Local Expertise, Global Standards',
      desc: 'Based in Douala with international-quality output. We combine deep understanding of the local market with world-class design standards.',
      image: '/images/why-us-2.jpg',
      points: ['Douala-based team', 'International design trends', 'Local market insights'],
    },
    {
      title: 'End-to-End Solutions',
      desc: 'From concept to completion, we handle every aspect of your branding journey. One partner for all your visual communication needs.',
      image: '/images/why-us-3.jpg',
      points: ['Design to delivery', 'In-house production', 'Quality control at every step'],
    },
    {
      title: 'Fast Turnaround & Quality',
      desc: 'We understand business timelines. Our efficient processes ensure you get premium quality deliverables within your deadline.',
      image: '/images/why-us-4.jpg',
      points: ['Quick delivery times', 'Rush order available', 'No compromise on quality'],
    },
  ]

  return (
    <section className="bg-[#F8FAFC] py-24">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        <h2
          className="text-3xl sm:text-4xl font-bold text-[#0F172A] mb-14"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          Why Choose IMPACT GRAPHICS
        </h2>
        <div className="space-y-20">
          {features.map((feature, i) => {
            const { ref, isVisible } = useScrollAnimation()
            const isReversed = i % 2 !== 0
            return (
              <div
                key={feature.title}
                ref={ref}
                className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center transition-all duration-700 ${
                  isVisible
                    ? 'opacity-100 translate-x-0'
                    : `opacity-0 ${isReversed ? 'translate-x-16' : '-translate-x-16'}`
                }`}
              >
                <div className={isReversed ? 'lg:order-2' : ''}>
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full rounded-2xl shadow-lg object-cover aspect-[4/3]"
                    loading="lazy"
                  />
                </div>
                <div className={isReversed ? 'lg:order-1' : ''}>
                  <h3
                    className="text-2xl font-bold text-[#0F172A] mb-4"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
                    {feature.title}
                  </h3>
                  <p className="text-[#475569] leading-relaxed mb-6">
                    {feature.desc}
                  </p>
                  <ul className="space-y-3">
                    {feature.points.map((point) => (
                      <li key={point} className="flex items-center gap-3">
                        <span className="w-5 h-5 rounded-full bg-[#10B981]/10 flex items-center justify-center shrink-0">
                          <Check size={12} className="text-[#10B981]" />
                        </span>
                        <span className="text-sm text-[#475569]">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/* ─── Portfolio Preview Section ─── */
function PortfolioPreview() {
  const { ref, isVisible } = useScrollAnimation()
  const projects = [
    { image: '/images/portfolio-branding-1.jpeg', category: 'Branding', title: 'ARABICA Coffee Brand Identity' },
    { image: '/images/portfolio-branding-2.jpg', category: 'Branding', title: 'AURUM Financial Stationery' },
    { image: '/images/portfolio-printing-1.jpg', category: 'Printing', title: 'Oceanview Real Estate Flyers' },
    { image: '/images/portfolio-printing-2.jpg', category: 'Printing', title: 'Flora Beauty Packaging' },
    { image: '/images/portfolio-signage-1.jpg', category: 'Signage', title: 'Flame Grill Restaurant Sign' },
    { image: '/images/portfolio-digital-1.jpg', category: 'Digital Design', title: 'Golden Sanctuary Hotel Website' },
  ]

  const categoryColors: Record<string, string> = {
    Branding: 'bg-[#1E40AF]',
    Printing: 'bg-[#F97316]',
    Signage: 'bg-[#0D9488]',
    'Digital Design': 'bg-[#8B5CF6]',
  }

  return (
    <section ref={ref} className="bg-white py-24">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <h2
              className="text-3xl sm:text-4xl font-bold text-[#0F172A] mb-2"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Our Portfolio
            </h2>
            <p className="text-[#475569]">Showcasing our best creative work</p>
          </div>
          <Link
            to="/portfolio"
            className="text-[#1E40AF] font-medium flex items-center gap-1 hover:underline"
          >
            View All Projects <ArrowRight size={16} />
          </Link>
        </div>
        <div
          className={`grid sm:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {projects.map((project, i) => (
            <Link
              to="/portfolio"
              key={project.title}
              className="group rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                  <div>
                    <span className={`${categoryColors[project.category] || 'bg-[#1E40AF]'} text-white text-xs font-medium px-2.5 py-1 rounded-full mb-2 inline-block`}>
                      {project.category}
                    </span>
                    <p className="text-white font-medium text-sm">{project.title}</p>
                  </div>
                </div>
              </div>
              <div className="p-4 bg-white">
                <span className={`${categoryColors[project.category] || 'bg-[#1E40AF]'} text-white text-xs font-medium px-2.5 py-1 rounded-full`}>
                  {project.category}
                </span>
                <h3 className="font-medium text-[#0F172A] mt-2">{project.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Testimonials Section ─── */
function TestimonialsSection() {
  return <FUITestimonialWithSlide />
}

/* ─── Promotions Section ─── */
function PromotionsSection() {
  const { ref, isVisible } = useScrollAnimation()
  const promos = [
    {
      title: '10% Off Business Card Printing',
      desc: 'Premium business cards at unbeatable prices. Valid for all card types and finishes.',
      code: 'CARDS10',
      expires: 'June 30, 2026',
      bg: 'bg-[#FFF7ED]',
      border: 'border-[#F97316]',
      btn: 'bg-[#F97316] hover:bg-[#EA580C]',
    },
    {
      title: 'Free Brand Consultation',
      desc: 'Book a 30-minute brand strategy session with our experts absolutely free.',
      code: 'FREECONSL',
      expires: 'July 15, 2026',
      bg: 'bg-[#DBEAFE]',
      border: 'border-[#1E40AF]',
      btn: 'bg-[#1E40AF] hover:bg-[#1E3A8A]',
    },
    {
      title: 'Referral Rewards Program',
      desc: 'Refer a friend and earn 15% off your next project when they book with us.',
      code: 'REFER15',
      expires: 'Ongoing',
      bg: 'bg-[#CCFBF1]',
      border: 'border-[#0D9488]',
      btn: 'bg-[#0D9488] hover:bg-[#0F766E]',
    },
  ]

  return (
    <section ref={ref} className="bg-white py-24">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        <div className="text-center mb-14">
          <h2
            className="text-3xl sm:text-4xl font-bold text-[#0F172A]"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Current Promotions
          </h2>
        </div>
        <div
          className={`grid md:grid-cols-3 gap-6 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {promos.map((promo, i) => (
            <div
              key={promo.title}
              className={`${promo.bg} border-2 ${promo.border} rounded-2xl p-8 hover:scale-[1.02] hover:shadow-lg transition-all duration-300`}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <h3 className="font-bold text-[#0F172A] text-lg mb-3">{promo.title}</h3>
              <p className="text-[#475569] text-sm mb-4">{promo.desc}</p>
              <div className="inline-block bg-white/80 px-3 py-1.5 rounded-lg text-xs font-mono font-semibold text-[#0F172A] mb-4">
                Code: {promo.code}
              </div>
              <p className="text-xs text-[#475569] mb-5">Expires: {promo.expires}</p>
              <Link
                to="/booking"
                className={`${promo.btn} text-white px-6 py-2.5 rounded-lg text-sm font-medium inline-block transition-colors duration-200`}
              >
                Claim Offer
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Newsletter Section ─── */
function NewsletterSection() {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (name && phone) {
      const message = `Hello IMPACT GRAPHICS, I would like to download the free branding checklist.\n\nName: ${name}\nPhone: ${phone}`
      const encoded = encodeURIComponent(message)
      window.open(`https://wa.me/237655316506?text=${encoded}`, '_blank')
      setSubmitted(true)
      setName('')
      setPhone('')
    }
  }

  return (
    <section className="bg-[#0F172A] py-20">
      <div className="max-w-[600px] mx-auto px-6 lg:px-12 text-center">
        <h2
          className="text-3xl sm:text-4xl font-bold text-white mb-4"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          Get Our Free Branding Checklist on WhatsApp
        </h2>
        <p className="text-[#94A3B8] mb-8">
          Request the essential guide to building a brand that stands out, delivered straight to your WhatsApp
        </p>
        {submitted ? (
          <div className="bg-white/10 rounded-xl p-6">
            <Check size={32} className="text-[#10B981] mx-auto mb-3" />
            <p className="text-white font-medium">Thank you! Redirecting to WhatsApp to send your checklist.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-4 py-3.5 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-[#F97316] focus:ring-2 focus:ring-[#F97316]/20"
            />
            <input
              type="tel"
              placeholder="Your WhatsApp Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              className="w-full px-4 py-3.5 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-[#F97316] focus:ring-2 focus:ring-[#F97316]/20"
            />
            <button
              type="submit"
              className="w-full bg-[#F97316] text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-[#EA580C] transition-colors duration-200"
            >
              Get Checklist on WhatsApp
            </button>
          </form>
        )}
        <p className="text-[#94A3B8] text-xs mt-4">
          Join 500+ business owners who&apos;ve improved their branding
        </p>
      </div>
    </section>
  )
}

/* ─── Final CTA Section ─── */
function FinalCTA() {
  return (
    <section
      className="py-24 text-center"
      style={{
        background: 'linear-gradient(135deg, #1E40AF 0%, #0D9488 100%)',
      }}
    >
      <div className="max-w-[700px] mx-auto px-6 lg:px-12">
        <h2
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          Ready to Transform Your Brand?
        </h2>
        <p className="text-white/80 text-lg mb-10">
          Let&apos;s create something amazing together. Get a free quote today.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            to="/booking"
            className="bg-white text-[#1E40AF] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
          >
            Request a Quote
          </Link>
          <a
            href="https://wa.me/237655316506"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#25D366] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#128C7E] transition-colors duration-200 flex items-center gap-2"
          >
            <MessageCircle size={18} /> Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}

/* ─── Home Page ─── */
export default function Home() {
  const [NewsletterSectionComponent, setNewsletterSectionComponent] = useState<typeof NewsletterSection | null>(null)

  // Lazy load newsletter for client-side only
  useEffect(() => {
    setNewsletterSectionComponent(() => NewsletterSection)
  }, [])

  return (
    <>
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <WhyChooseSection />
      <PortfolioPreview />
      <TestimonialsSection />
      <PromotionsSection />
      {NewsletterSectionComponent ? <NewsletterSectionComponent /> : <div className="bg-[#0F172A] py-20" />}
      <FinalCTA />
    </>
  )
}
