import { Link } from 'react-router'
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin, MessageCircle } from 'lucide-react'

const quickLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'Contact', path: '/contact' },
]

const services = [
  'Branding',
  'Printing',
  'Digital Marketing',
  'Web Design',
  'Photography',
]

export default function Footer() {
  return (
    <footer className="bg-[#1D3557] text-white">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12 pt-20 pb-10">
        {/* Top Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img
                src="/images/logo.png"
                alt="IMPACT GRAPHICS"
                className="h-10 w-auto object-contain"
              />
            </div>
            <p className="text-[#A8DADC]/90 text-sm leading-relaxed">
              Your creative branding and visual communication partner in Douala, Cameroon. We design brands that stand out.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-[#A8DADC] text-sm hover:text-[#E63946] transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-white mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Services
            </h4>
            <ul className="space-y-2.5">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="text-[#A8DADC] text-sm hover:text-[#E63946] transition-colors duration-200"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-white mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Contact Us
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <Phone size={16} className="text-[#E63946] mt-0.5 shrink-0" />
                <span className="text-[#A8DADC] text-sm">+237 6 55 31 65 06</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail size={16} className="text-[#E63946] mt-0.5 shrink-0" />
                <span className="text-[#A8DADC] text-sm">khadijenjoya03@gmail.com</span>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin size={16} className="text-[#E63946] mt-0.5 shrink-0" />
                <span className="text-[#A8DADC] text-sm">Akwa, Douala, Cameroon</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock size={16} className="text-[#E63946] mt-0.5 shrink-0" />
                <span className="text-[#A8DADC] text-sm">Mon-Fri: 8:00 AM - 5:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#A8DADC] text-sm">
            &copy; {new Date().getFullYear()} IMPACT GRAPHICS & SON SARL. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            <a
              href="https://facebook.com/impactgraphicsdouala"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-[#A8DADC] hover:bg-[#E63946] hover:text-white transition-all duration-200"
            >
              <Facebook size={16} />
            </a>
            <a
              href="https://instagram.com/impactgraphicsdouala"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-[#A8DADC] hover:bg-[#E63946] hover:text-white transition-all duration-200"
            >
              <Instagram size={16} />
            </a>
            <a
              href="https://linkedin.com/company/impact-graphics-son-sarl"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-[#A8DADC] hover:bg-[#E63946] hover:text-white transition-all duration-200"
            >
              <Linkedin size={16} />
            </a>
            <a
              href="https://tiktok.com/@impactgraphicsdouala"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-[#A8DADC] hover:bg-[#E63946] hover:text-white transition-all duration-200"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" /></svg>
            </a>
            <a
              href="https://wa.me/237655316506"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-[#A8DADC] hover:bg-[#25D366] hover:text-white transition-all duration-200"
            >
              <MessageCircle size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
