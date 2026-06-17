import { Link } from 'react-router'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
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
  GraduationCap,
  Check,
  ArrowRight,
  Clock,
  HelpCircle,
} from 'lucide-react'

/* ─── Page Hero ─── */
function PageHero() {
  return (
    <section
      className="pt-[72px] relative flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: 'linear-gradient(135deg, rgba(29, 53, 87, 0.85) 0%, rgba(69, 123, 157, 0.85) 100%), url("/images/hero_our-services.png")',
        minHeight: '45vh',
      }}
    >
      <div className="text-center px-6 py-20 relative z-10">
        <h1
          className="text-4xl sm:text-5xl font-bold text-white mb-4"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          Our Services
        </h1>
        <p className="text-white/80 text-lg max-w-xl mx-auto">
          Comprehensive branding, design, and marketing solutions for your business
        </p>
      </div>
    </section>
  )
}

/* ─── Services Grid ─── */
function ServicesGrid() {
  const { ref, isVisible } = useScrollAnimation()
  const services = [
    {
      icon: <Palette size={28} />,
      title: 'Logo & Brand Identity',
      desc: 'Custom logo design, brand guidelines, color palettes, typography systems, and complete visual identity packages that establish a cohesive brand presence.',
      image: '/images/service-branding.jpg',
      price: '150,000',
      turnaround: '5-10 business days',
    },
    {
      icon: <PenTool size={28} />,
      title: 'Graphic Design',
      desc: 'Professional design for flyers, brochures, posters, catalogs, annual reports, menus, and all marketing materials with print-ready output.',
      image: '/images/service-graphic-design.jpg',
      price: '25,000',
      turnaround: '2-5 business days',
    },
    {
      icon: <Printer size={28} />,
      title: 'Printing Solutions',
      desc: 'High-quality offset and digital printing for business cards, letterheads, envelopes, stickers, labels, and all corporate stationery needs.',
      image: '/images/service-printing.jpg',
      price: '15,000',
      turnaround: '1-3 business days',
    },
    {
      icon: <Maximize size={28} />,
      title: 'Large Format Printing',
      desc: 'Banners, billboards, vehicle wraps, window graphics, posters, canvas prints, and building signage with weather-resistant materials.',
      image: '/images/service-large-format.jpg',
      price: '75,000',
      turnaround: '3-5 business days',
    },
    {
      icon: <PartyPopper size={28} />,
      title: 'Event Branding',
      desc: 'Complete event branding solutions including backdrops, roll-up banners, podium branding, table covers, badges, and promotional items.',
      image: '/images/service-event-branding.jpg',
      price: '200,000',
      turnaround: '5-10 business days',
    },
    {
      icon: <Globe size={28} />,
      title: 'Website Design',
      desc: 'Responsive, modern websites with CMS integration, e-commerce functionality, SEO optimization, and ongoing maintenance support.',
      image: '/images/service-web-design.jpg',
      price: '350,000',
      turnaround: '2-4 weeks',
    },
    {
      icon: <Share2 size={28} />,
      title: 'Social Media Management',
      desc: 'Strategic content creation, scheduling, community management, analytics reporting, and paid advertising campaign management.',
      image: '/images/service-social-media.jpg',
      price: '150,000/mo',
      turnaround: 'Ongoing',
    },
    {
      icon: <Camera size={28} />,
      title: 'Photography',
      desc: 'Professional product photography, corporate portraits, event coverage, architectural photography, and photo editing/retouching.',
      image: '/images/service-photography.jpg',
      price: '100,000',
      turnaround: '3-7 business days',
    },
    {
      icon: <Video size={28} />,
      title: 'Video Production',
      desc: 'Corporate videos, promotional commercials, event coverage, product demos, interviews, and post-production editing services.',
      image: '/images/service-video.jpg',
      price: '250,000',
      turnaround: '1-2 weeks',
    },
    {
      icon: <Sparkles size={28} />,
      title: 'Motion Graphics',
      desc: 'Animated logos, explainer videos, social media animations, title sequences, and kinetic typography for digital platforms.',
      image: '/images/service-motion.jpg',
      price: '200,000',
      turnaround: '1-2 weeks',
    },
    {
      icon: <Megaphone size={28} />,
      title: 'Communication Management',
      desc: 'Strategic brand messaging, press release creation, media relations, crisis communication, and corporate communication strategies.',
      image: '/images/service-communication.jpg',
      price: '250,000/mo',
      turnaround: 'Ongoing',
    },
    {
      icon: <Monitor size={28} />,
      title: 'IT Services',
      desc: 'Technical support, network setup and management, software installation, hardware procurement, and IT consulting for businesses.',
      image: '/images/service-it.jpg',
      price: 'Custom',
      turnaround: 'Varies',
    },
    {
      icon: <GraduationCap size={28} />,
      title: 'Professional Training',
      desc: 'Workshops and training in graphic design software, branding strategy, digital marketing, and professional skills development.',
      image: '/images/service-training.jpg',
      price: '75,000',
      turnaround: '1-3 days',
    },
  ]

  return (
    <section ref={ref} className="bg-white py-24">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        <div
          className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {services.map((service, i) => (
            <div
              key={service.title}
              className="group border border-[#D0E1E6] rounded-2xl overflow-hidden hover:shadow-lg hover:border-[#457B9D]/30 transition-all duration-300"
              style={{ transitionDelay: `${i * 0.06}s` }}
            >
              <div className="overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full aspect-[16/9] object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-[#457B9D]">{service.icon}</span>
                  <h3 className="font-semibold text-[#1D3557]">{service.title}</h3>
                </div>
                <p className="text-sm text-[#4E6178] leading-relaxed mb-4">
                  {service.desc}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-[#4E6178]">
                    <Clock size={12} />
                    <span>{service.turnaround}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-[#D0E1E6]">
                  <span className="text-sm font-semibold text-[#1D3557]">
                    From XAF {service.price}
                  </span>
                  <Link
                    to="/booking"
                    className="text-sm font-medium text-[#457B9D] flex items-center gap-1 hover:gap-2 transition-all duration-200"
                  >
                    Request Quote <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Pricing Overview ─── */
function PricingOverview() {
  const { ref, isVisible } = useScrollAnimation()
  const tiers = [
    {
      name: 'Basic',
      price: '150,000',
      period: 'per project',
      description: 'Perfect for startups and small businesses',
      features: [
        'Logo Design (3 concepts)',
        'Business Card Design',
        'Letterhead Design',
        '2 Revision Rounds',
        'Print-Ready Files',
      ],
      highlighted: false,
      btnClass: 'border-2 border-[#457B9D] text-[#457B9D] hover:bg-[#457B9D] hover:text-white',
    },
    {
      name: 'Professional',
      price: '500,000',
      period: 'per project',
      description: 'Ideal for growing businesses',
      features: [
        'Complete Brand Identity',
        'Logo + Brand Guidelines',
        'Stationery Package',
        'Social Media Kit',
        'Unlimited Revisions',
        'Priority Support',
      ],
      highlighted: true,
      btnClass: 'bg-[#457B9D] text-white hover:bg-[#1D3557]',
    },
    {
      name: 'Enterprise',
      price: '1,500,000',
      period: 'per project',
      description: 'Full-service branding solution',
      features: [
        'Everything in Professional',
        'Website Design (5 pages)',
        'Marketing Collateral',
        'Brand Strategy Session',
        '3 Months Social Media',
        'Dedicated Account Manager',
      ],
      highlighted: false,
      btnClass: 'border-2 border-[#457B9D] text-[#457B9D] hover:bg-[#457B9D] hover:text-white',
    },
  ]

  return (
    <section ref={ref} className="bg-[#F0F7F9] py-24">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        <div className="text-center mb-14">
          <h2
            className="text-3xl sm:text-4xl font-bold text-[#1D3557] mb-4"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Branding Packages
          </h2>
          <p className="text-[#4E6178]">Choose the package that fits your business needs</p>
        </div>
        <div
          className={`grid md:grid-cols-3 gap-8 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`rounded-2xl p-8 ${
                tier.highlighted
                  ? 'bg-white border-2 border-[#457B9D] shadow-lg relative'
                  : 'bg-white border border-[#D0E1E6]'
              }`}
            >
              {tier.highlighted && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#457B9D] text-white text-xs font-semibold px-4 py-1 rounded-full">
                  Most Popular
                </span>
              )}
              <h3 className="font-semibold text-[#1D3557] text-lg">{tier.name}</h3>
              <div className="mt-4 mb-2">
                <span className="text-4xl font-bold text-[#1D3557]">XAF {tier.price}</span>
                <span className="text-sm text-[#4E6178] ml-1">{tier.period}</span>
              </div>
              <p className="text-sm text-[#4E6178] mb-6">{tier.description}</p>
              <ul className="space-y-3 mb-8">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-[#4E6178]">
                    <Check size={16} className="text-[#10B981] mt-0.5 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                to="/booking"
                className={`block text-center py-3 rounded-lg font-medium transition-colors duration-200 ${tier.btnClass}`}
              >
                Get Started
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Process Section ─── */
function ProcessSection() {
  const { ref, isVisible } = useScrollAnimation()
  const steps = [
    { num: '01', title: 'Consultation', desc: 'We discuss your goals, vision, and requirements to understand your brand needs.' },
    { num: '02', title: 'Design', desc: 'Our creative team develops concepts and refines designs based on your feedback.' },
    { num: '03', title: 'Production', desc: 'We produce your materials using premium equipment and quality materials.' },
    { num: '04', title: 'Delivery', desc: 'Final deliverables are handed over with full support and satisfaction guarantee.' },
  ]

  return (
    <section ref={ref} className="bg-white py-24">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        <div className="text-center mb-14">
          <h2
            className="text-3xl sm:text-4xl font-bold text-[#1D3557] mb-4"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Our Process
          </h2>
          <p className="text-[#4E6178]">How we bring your brand vision to life</p>
        </div>
        <div
          className={`grid sm:grid-cols-2 lg:grid-cols-4 gap-8 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {steps.map((step, i) => (
            <div key={step.num} className="relative text-center">
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-[60%] right-0 border-t-2 border-dashed border-[#D0E1E6]" />
              )}
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#1D3557] to-[#457B9D] flex items-center justify-center text-white font-bold text-lg mx-auto mb-5 shadow-lg">
                {step.num}
              </div>
              <h3 className="font-semibold text-[#1D3557] mb-2">{step.title}</h3>
              <p className="text-sm text-[#4E6178] leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── CTA Section ─── */
function CTASection() {
  return (
    <section
      className="py-20 text-center"
      style={{
        background: 'linear-gradient(135deg, #1D3557 0%, #457B9D 100%)',
      }}
    >
      <div className="max-w-[600px] mx-auto px-6">
        <HelpCircle size={40} className="text-white/60 mx-auto mb-4" />
        <h2
          className="text-3xl font-bold text-white mb-3"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          Not Sure What You Need?
        </h2>
        <p className="text-white/80 mb-8">
          Get a free consultation with our branding experts
        </p>
        <Link
          to="/booking"
          className="inline-block bg-white text-[#457B9D] px-8 py-3.5 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
        >
          Book a Free Consultation
        </Link>
      </div>
    </section>
  )
}

/* ─── Services Page ─── */
export default function Services() {
  return (
    <>
      <PageHero />
      <ServicesGrid />
      <PricingOverview />
      <ProcessSection />
      <CTASection />
    </>
  )
}
