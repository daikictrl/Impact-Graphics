import { useState } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

/* ─── Page Hero ─── */
function PageHero() {
  return (
    <section
      className="pt-[72px] relative flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: 'linear-gradient(135deg, rgba(30, 64, 175, 0.85) 0%, rgba(13, 148, 136, 0.85) 100%), url("/images/hero_portfolio.jpg")',
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
  Branding: 'bg-[#1E40AF]',
  Printing: 'bg-[#F97316]',
  Signage: 'bg-[#0D9488]',
  'Digital Design': 'bg-[#8B5CF6]',
  Photography: 'bg-[#EC4899]',
  Events: 'bg-[#F59E0B]',
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
                  ? 'bg-[#1E40AF] text-white shadow-md'
                  : 'bg-[#F8FAFC] text-[#475569] hover:bg-[#E2E8F0]'
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
                <div className="absolute inset-0 bg-[#1E40AF]/85 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center">
                  <span className={`${categoryColors[project.category] || 'bg-[#1E40AF]'} text-white text-xs font-medium px-3 py-1 rounded-full mb-3`}>
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

/* ─── Portfolio Page ─── */
export default function Portfolio() {
  return (
    <>
      <PageHero />
      <PortfolioGallery />
    </>
  )
}
