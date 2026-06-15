import { MessageCircle } from 'lucide-react'

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/237655316506"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed z-40 w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
      style={{
        bottom: 'calc(1.5rem + env(safe-area-inset-bottom))',
        right: 'calc(1.5rem + env(safe-area-inset-right))',
        animation: 'pulse-whatsapp 2s infinite',
      }}
    >
      <MessageCircle size={24} fill="white" />
      <style>{`
        @keyframes pulse-whatsapp {
          0%, 100% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.5); }
          50% { box-shadow: 0 0 0 12px rgba(37, 211, 102, 0); }
        }
      `}</style>
    </a>
  )
}
