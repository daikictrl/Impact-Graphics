import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router'
import { Menu, X, MessageCircle } from 'lucide-react'

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    window.scrollTo(0, 0)
  }, [location.pathname])

  const isHome = location.pathname === '/'

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || !isHome
          ? 'bg-white/95 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      }`}
      style={{ height: 72 }}
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-12 h-full flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center h-full py-3.5">
          <img
            src="/images/logo.png"
            alt="IMPACT GRAPHICS"
            className="h-full w-auto object-contain max-h-[44px]"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-sm font-medium transition-colors duration-200 ${
                location.pathname === link.path
                  ? 'text-[#457B9D]'
                  : 'text-[#4E6178] hover:text-[#457B9D]'
              }`}
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
            to="/booking"
            className="bg-[#457B9D] text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-[#1D3557] transition-colors duration-200"
          >
            Request a Quote
          </Link>
          <a
            href="https://wa.me/237655316506"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-lg bg-[#25D366] flex items-center justify-center text-white hover:bg-[#128C7E] transition-colors duration-200"
          >
            <MessageCircle size={18} />
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-[#1D3557] p-2 hover:bg-slate-100 rounded-lg transition-colors focus:outline-none"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="px-6 py-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-base font-medium py-2 ${
                  location.pathname === link.path
                    ? 'text-[#457B9D]'
                    : 'text-[#4E6178]'
                }`}
                onClick={() => setMobileOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/booking"
              className="bg-[#457B9D] text-white px-6 py-3 rounded-lg text-sm font-medium text-center mt-2 hover:bg-[#1D3557] transition-colors duration-200"
              onClick={() => setMobileOpen(false)}
            >
              Request a Quote
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
