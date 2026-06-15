import { MessageCircle } from 'lucide-react'

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/237655316506"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
      style={{
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
