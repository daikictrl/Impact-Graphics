import { useScrollAnimation } from '../hooks/useScrollAnimation'
import CountUp from 'react-countup'
import {
  Lightbulb,
  Target,
  Eye,
  Heart,
  Shield,
  Users,
  Rocket,
  Award,
} from 'lucide-react'

/* ─── Page Hero ─── */
function PageHero() {
  return (
    <section
      className="pt-[72px] relative flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: 'linear-gradient(135deg, rgba(29, 53, 87, 0.85) 0%, rgba(69, 123, 157, 0.85) 100%), url("/images/hero_about-us.jpg")',
        minHeight: '50vh',
      }}
    >
      <div className="text-center px-6 py-20 relative z-10">
        <div className="text-white/60 text-sm mb-3">Home / About</div>
        <h1
          className="text-4xl sm:text-5xl font-bold text-white mb-4"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          About IMPACT GRAPHICS
        </h1>
        <p className="text-white/80 text-lg max-w-xl mx-auto">
          Your creative branding and visual communication partner in Douala, Cameroon
        </p>
      </div>
    </section>
  )
}

/* ─── Company Story ─── */
function CompanyStory() {
  const { ref, isVisible } = useScrollAnimation()
  const milestones = [
    { year: '2014', title: 'Founded in Douala', desc: 'Started as a small design studio with a vision to transform business branding in Cameroon.' },
    { year: '2018', title: 'Expanded Services', desc: 'Added digital marketing, web design, and large format printing to our offerings.' },
    { year: '2024', title: '500+ Projects Milestone', desc: 'Celebrated completing over 500 projects for clients across Cameroon and beyond.' },
  ]

  return (
    <section ref={ref} className="bg-white py-24">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div
            className={`transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-16'
            }`}
          >
            <span className="text-[13px] font-semibold uppercase tracking-[0.08em] text-[#E63946] mb-3 block">
              Our Story
            </span>
            <h2
              className="text-3xl sm:text-4xl font-bold text-[#1D3557] mb-6"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Bridging Creative Design & Business Branding
            </h2>
            <p className="text-[#4E6178] leading-relaxed mb-8">
              IMPACT GRAPHICS & SON SARL was founded in Douala, Cameroon with a simple
              but powerful vision: to bridge the gap between creative design and practical
              business branding. We believe every business, regardless of size, deserves
              professional-quality visual identity that helps them stand out in a
              competitive marketplace.
            </p>

            {/* Timeline */}
            <div className="relative pl-8 border-l-2 border-[#D0E1E6] space-y-8">
              {milestones.map((m) => (
                <div key={m.year} className="relative">
                  <span className="absolute -left-[41px] w-5 h-5 rounded-full bg-[#457B9D] border-4 border-white shadow" />
                  <span className="text-sm font-bold text-[#457B9D]">{m.year}</span>
                  <h4 className="font-semibold text-[#1D3557] mt-1">{m.title}</h4>
                  <p className="text-sm text-[#4E6178] mt-1">{m.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div
            className={`transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-16'
            }`}
          >
            <img
              src="/images/about-story.jpg"
              alt="IMPACT GRAPHICS Office"
              className="w-full rounded-2xl shadow-lg object-cover aspect-[4/3]"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── Mission & Vision ─── */
function MissionVision() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section ref={ref} className="bg-[#F0F7F9] py-24">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        <div
          className={`grid md:grid-cols-2 gap-8 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="bg-white rounded-2xl p-10 border-l-4 border-[#457B9D] shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-[#457B9D]/10 flex items-center justify-center text-[#457B9D] mb-5">
              <Target size={24} />
            </div>
            <h3
              className="text-2xl font-bold text-[#1D3557] mb-4"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Our Mission
            </h3>
            <p className="text-[#4E6178] leading-relaxed">
              To empower businesses and individuals with impactful visual identities and
              high-quality print and design solutions that drive growth, build recognition,
              and create lasting impressions in their markets.
            </p>
          </div>
          <div className="bg-white rounded-2xl p-10 border-l-4 border-[#E63946] shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-[#E63946]/10 flex items-center justify-center text-[#E63946] mb-5">
              <Eye size={24} />
            </div>
            <h3
              className="text-2xl font-bold text-[#1D3557] mb-4"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Our Vision
            </h3>
            <p className="text-[#4E6178] leading-relaxed">
              &ldquo;We Design Your Brand. We Build Your Presence.&rdquo; To become the leading
              creative branding and visual communication agency in Central Africa, recognized
              for innovation, quality, and transformative brand experiences.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── Core Values ─── */
function CoreValues() {
  const { ref, isVisible } = useScrollAnimation()
  const values = [
    { icon: <Lightbulb size={28} />, title: 'Creativity', desc: 'We push boundaries and think outside the box to deliver unique solutions.', color: 'border-t-[#E63946]' },
    { icon: <Award size={28} />, title: 'Quality', desc: 'Excellence is our standard. Every project receives meticulous attention.', color: 'border-t-[#457B9D]' },
    { icon: <Shield size={28} />, title: 'Integrity', desc: 'Honest communication, transparent pricing, and ethical business practices.', color: 'border-t-[#1D3557]' },
    { icon: <Heart size={28} />, title: 'Client-Centered', desc: 'Your success is our success. We listen, adapt, and deliver beyond expectations.', color: 'border-t-[#A8DADC]' },
    { icon: <Rocket size={28} />, title: 'Innovation', desc: 'We embrace new technologies and trends to keep your brand ahead.', color: 'border-t-[#E63946]' },
    { icon: <Users size={28} />, title: 'Professionalism', desc: 'Timely delivery, clear communication, and respectful collaboration always.', color: 'border-t-[#457B9D]' },
  ]

  return (
    <section ref={ref} className="bg-white py-24">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        <div className="text-center mb-14">
          <h2
            className="text-3xl sm:text-4xl font-bold text-[#1D3557]"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Our Core Values
          </h2>
        </div>
        <div
          className={`grid sm:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {values.map((v, i) => (
            <div
              key={v.title}
              className={`bg-white rounded-2xl p-8 shadow-sm border border-gray-100 ${v.color} border-t-4 hover:shadow-md hover:-translate-y-1 transition-all duration-300`}
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <div className="text-[#457B9D] mb-4 hover:rotate-[10deg] transition-transform duration-300">
                {v.icon}
              </div>
              <h3 className="font-bold text-[#1D3557] mb-2">{v.title}</h3>
              <p className="text-sm text-[#4E6178] leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Why Clients Choose Us ─── */
function WhyClientsChoose() {
  const { ref, isVisible } = useScrollAnimation()
  const stats = [
    { value: 10, suffix: '+', label: 'Years Experience' },
    { value: 500, suffix: '+', label: 'Projects Delivered' },
    { value: 200, suffix: '+', label: 'Satisfied Clients' },
    { value: 13, suffix: '', label: 'Services Offered' },
  ]

  return (
    <section ref={ref} className="bg-[#F0F7F9] py-24">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        <h2
          className="text-3xl sm:text-4xl font-bold text-[#1D3557] mb-14 text-center"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          Why Clients Choose Us
        </h2>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div
            className={`transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-16'
            }`}
          >
            <img
              src="/images/why-us-1.jpg"
              alt="Our Team"
              className="w-full rounded-2xl shadow-lg object-cover aspect-[4/3]"
            />
          </div>
          <div
            className={`transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-16'
            }`}
          >
            <p className="text-[#4E6178] leading-relaxed mb-8">
              At IMPACT GRAPHICS, we don&apos;t just create designs &mdash; we build brand
              experiences that resonate with your audience. Our team combines creative
              excellence with strategic thinking to deliver solutions that drive real
              business results. From startups to established enterprises, we partner with
              clients who are ready to make an impact.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div key={stat.label} className="bg-white rounded-xl p-5 text-center shadow-sm">
                  <div className="text-2xl sm:text-3xl font-bold text-[#457B9D]">
                    {isVisible ? (
                      <CountUp end={stat.value} duration={2} suffix={stat.suffix} />
                    ) : (
                      `0${stat.suffix}`
                    )}
                  </div>
                  <p className="text-xs text-[#4E6178] mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── About Page ─── */
export default function About() {
  return (
    <>
      <PageHero />
      <CompanyStory />
      <MissionVision />
      <CoreValues />
      <WhyClientsChoose />
    </>
  )
}
