import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: "Marie Nkono",
    profession: "CEO, Elegant Homes Ltd",
    description: "IMPACT GRAPHICS transformed our brand completely. From logo design to our entire marketing collateral, the quality and creativity exceeded our expectations. Highly recommended!",
  },
  {
    name: "Jean-Pierre Fouda",
    profession: "Founder, TechStart Cameroon",
    description: "Working with this team has been incredible. They understood our vision from day one and delivered a brand identity that truly represents who we are. Professional, creative, and timely.",
  },
  {
    name: "Amina Diallo",
    profession: "Marketing Director, AfriEvents",
    description: "The printing quality is outstanding and the turnaround time is impressive. Our event branding was the talk of the conference. Thank you for making us look so good!",
  },
  {
    name: "Samuel Eto'o",
    profession: "Director, Sports Academy Douala",
    description: "For our large format banners and vehicle wraps, they are our go-to agency. Fast delivery, extreme professionalism, and output that is durable and visually striking.",
  },
  {
    name: "Christian Tchakounté",
    profession: "Manager, Bafoussam Tech Hub",
    description: "They built our brand guidelines and stationery from scratch. They are highly skilled, patient with revisions, and deliver top-notch international quality design work.",
  },
  {
    name: "Dr. Helen Ngo",
    profession: "Founder, Care & Cure Clinic Akwa",
    description: "From our corporate brochure printing to logo refinements, IMPACT GRAPHICS handled everything seamlessly. Their Douala team combines global design trends with excellent local execution.",
  },
]

const duplicatedTestimonials = [...testimonials, ...testimonials]

const FUITestimonialWithSlide = () => {
  return (
    <div className="w-full overflow-hidden py-10">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        <div className="text-center mb-14">
          <h2
            className="text-3xl sm:text-4xl font-bold text-[#0F172A] mb-4"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            What Our Clients Say
          </h2>
          <div className="w-10 h-[3px] bg-[#F97316] mx-auto mb-4" />
          <p className="text-[#475569] max-w-xl mx-auto">
            Read stories from businesses that have grown and succeeded with our branding and design solutions
          </p>
        </div>

        <div
          style={{
            maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
          }}
          className="flex relative overflow-hidden shrink-0 max-w-full"
        >
          <div className="flex animate-x-slider gap-5 w-max py-4">
            {duplicatedTestimonials.map((testimonial, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-col bg-white border border-[#E2E8F0] rounded-3xl shrink-0 grow-0 w-[450px] sm:w-[500px] h-full shadow-sm hover:shadow-md transition-shadow duration-300 relative p-8 border-blue-50/50"
                >
                  <Quote size={32} className="text-[#1E40AF]/10 mb-4 absolute top-6 right-6" />

                  <p className="text-[#1E293B] text-base sm:text-lg font-medium italic leading-relaxed mb-6">
                    &ldquo;{testimonial.description}&rdquo;
                  </p>

                  <div className="border-t border-[#E2E8F0] pt-5 w-full flex items-center justify-between mt-auto">
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#1E40AF] to-[#0D9488] flex items-center justify-center text-white font-bold text-sm shadow-sm">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div className="flex flex-col">
                        <h5 className="text-sm sm:text-base font-bold text-[#0F172A]">{testimonial.name}</h5>
                        <p className="text-xs text-[#64748B] font-medium">{testimonial.profession}</p>
                      </div>
                    </div>

                    <div className="flex gap-0.5 shrink-0 pl-4 border-l border-[#E2E8F0]">
                      {Array.from({ length: 5 }).map((_, j) => (
                        <Star key={j} size={14} className="text-[#F97316] fill-[#F97316]" />
                      ))}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default FUITestimonialWithSlide
