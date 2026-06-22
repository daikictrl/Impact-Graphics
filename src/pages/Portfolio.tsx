import { useState } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

/* ─── Page Hero ─── */
function PageHero() {
  return (
    <section
      className="pt-[72px] relative flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: 'linear-gradient(135deg, rgba(29, 53, 87, 0.85) 0%, rgba(69, 123, 157, 0.85) 100%), url("/images/hero_portfolio.jpg")',
        minHeight: '45vh',
      }}
    >
      <div className="text-center px-6 py-20 relative z-10">
        <h1
          className="text-4xl sm:text-5xl font-bold text-white mb-4"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          Our Portfolio
        </h1>
        <p className="text-white/80 text-lg max-w-xl mx-auto">
          Showcasing our best creative work across branding, printing, signage, and digital design
        </p>
      </div>
    </section>
  )
}

/* ─── Portfolio Gallery ─── */
const categories = ['All', 'Branding', 'Printing', 'Signage', 'Digital Design', 'Photography', 'Events']

const projects = [
  { image: '/images/portfolio-branding-1.jpeg', title: 'ARABICA Coffee Brand Identity', category: 'Branding', height: 'tall' },
  { image: '/images/portfolio-branding-2.jpg', title: 'AURUM Financial Stationery', category: 'Branding', height: 'normal' },
  { image: '/images/portfolio-printing-1.jpg', title: 'Oceanview Real Estate Flyers', category: 'Printing', height: 'normal' },
  { image: '/images/portfolio-printing-2.jpg', title: 'Flora Beauty Packaging', category: 'Printing', height: 'tall' },
  { image: '/images/portfolio-signage-1.jpg', title: 'Flame Grill Restaurant Sign', category: 'Signage', height: 'normal' },
  { image: '/images/portfolio-signage-2.jpg', title: 'Corporate Wayfinding System', category: 'Signage', height: 'tall' },
  { image: '/images/portfolio-digital-1.jpg', title: 'Golden Sanctuary Hotel Website', category: 'Digital Design', height: 'normal' },
  { image: '/images/portfolio-digital-2.jpg', title: 'Fitness Fusion Social Media', category: 'Digital Design', height: 'normal' },
  { image: '/images/portfolio-photo-1.jpg', title: 'Luxury Watch Product Shoot', category: 'Photography', height: 'tall' },
  { image: '/images/portfolio-event-1.jpg', title: 'Innovate Global Summit Branding', category: 'Events', height: 'normal' },
  { image: '/images/hero-collage-3.jpg', title: 'Tri-Solutions Corporate Brochure', category: 'Printing', height: 'normal' },
  { image: '/images/hero-collage-5.jpg', title: 'Annual Summit 2024 Roll-up', category: 'Events', height: 'tall' },
]

const categoryColors: Record<string, string> = {
  Branding: 'bg-[#457B9D] text-white',
  Printing: 'bg-[#E63946] text-white',
  Signage: 'bg-[#1D3557] text-white',
  'Digital Design': 'bg-[#A8DADC] text-[#1D3557]',
  Photography: 'bg-[#4E6178] text-white',
  Events: 'bg-[#457B9D] text-white',
}

function PortfolioGallery() {
  const [activeCategory, setActiveCategory] = useState('All')
  const { ref, isVisible } = useScrollAnimation()

  const filtered = activeCategory === 'All'
    ? projects
    : projects.filter((p) => p.category === activeCategory)

  return (
    <section ref={ref} className="bg-white py-24">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        {/* Filter Bar */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-[#457B9D] text-white shadow-md'
                  : 'bg-[#F0F7F9] text-[#4E6178] hover:bg-[#D0E1E6]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <div
          className={`columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6 transition-all duration-500 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {filtered.map((project) => (
            <div
              key={project.title}
              className="break-inside-avoid group rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className={`w-full object-cover group-hover:scale-105 transition-transform duration-500 ${
                    project.height === 'tall' ? 'h-[400px]' : 'h-[280px]'
                  }`}
                  loading="lazy"
                />
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-[#1D3557]/85 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center">
                  <span className={`${categoryColors[project.category] || 'bg-[#457B9D] text-white'} text-xs font-medium px-3 py-1 rounded-full mb-3`}>
                    {project.category}
                  </span>
                  <h3 className="text-white font-semibold text-lg">
                    {project.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Trusted Clients Section ─── */
function TrustedClientsSection() {
  const { ref, isVisible } = useScrollAnimation()
  const clientImages = Array.from({ length: 19 }, (_, i) => `/images/clients (${i + 1}).jpeg`)

  return (
    <section ref={ref} className="bg-[#F0F7F9] py-24 border-t border-[#D0E1E6]/30">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2
            className="text-3xl sm:text-4xl font-bold text-[#1D3557] mb-4"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Clients We've Satisfied
          </h2>
          <div className="w-12 h-[3px] bg-[#E63946] mx-auto mb-4" />
          <p className="text-[#4E6178] max-w-xl mx-auto">
            We've had the pleasure of partnering with outstanding businesses and organizations to deliver custom branding, printing, and design services.
          </p>
        </div>

        <div
          className={`grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          {clientImages.map((src, index) => (
            <div
              key={index}
              className="bg-white border border-[#D0E1E6]/30 p-4 rounded-2xl flex items-center justify-center aspect-square shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300 group cursor-pointer"
            >
              <img
                src={src}
                alt={`Satisfied Client Brand ${index + 1}`}
                className="w-full h-full object-contain rounded-xl select-none pointer-events-none"
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Portfolio Page ─── */
export default function Portfolio() {
  return (
    <>
      <PageHero />
      <PortfolioGallery />
      <TrustedClientsSection />
    </>
  )
}
