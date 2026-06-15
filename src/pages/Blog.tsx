import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { Clock, ArrowRight } from 'lucide-react'

/* ─── Page Hero ─── */
function PageHero() {
  return (
    <section
      className="pt-[72px] relative flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: 'linear-gradient(135deg, rgba(30, 64, 175, 0.85) 0%, rgba(13, 148, 136, 0.85) 100%), url("/images/hero_blog.jpg")',
        minHeight: '40vh',
      }}
    >
      <div className="text-center px-6 py-16 relative z-10">
        <h1
          className="text-4xl sm:text-5xl font-bold text-white mb-4"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          Our Blog
        </h1>
        <p className="text-white/80 text-lg max-w-xl mx-auto">
          Insights on branding, design, and marketing to help your business grow
        </p>
      </div>
    </section>
  )
}

/* ─── Blog Posts ─── */
const blogPosts = [
  {
    title: '5 Things Your Business Logo Must Communicate',
    excerpt: 'Your logo is the face of your brand. Discover the five essential messages every effective business logo should convey to your audience.',
    image: '/images/blog-1.jpg',
    category: 'Branding',
    readTime: '5 min read',
    date: 'June 1, 2026',
  },
  {
    title: 'Why Quality Printing Matters for Your Brand',
    excerpt: 'In the digital age, tangible marketing materials still hold immense power. Learn why investing in quality printing elevates your brand perception.',
    image: '/images/blog-2.jpg',
    category: 'Printing',
    readTime: '4 min read',
    date: 'May 28, 2026',
  },
  {
    title: 'Branding vs Marketing: Understanding the Difference',
    excerpt: 'Many confuse branding with marketing. While related, they serve different purposes. Learn how to leverage both for maximum business impact.',
    image: '/images/blog-3.jpg',
    category: 'Strategy',
    readTime: '6 min read',
    date: 'May 20, 2026',
  },
  {
    title: 'Designing Effective Flyers That Convert',
    excerpt: 'A well-designed flyer can drive significant results. Discover the key design principles and strategies for creating flyers that grab attention and drive action.',
    image: '/images/blog-4.jpg',
    category: 'Design',
    readTime: '5 min read',
    date: 'May 15, 2026',
  },
  {
    title: 'Building Brand Consistency Across All Channels',
    excerpt: 'Consistency is key to brand recognition. Learn how to maintain a cohesive brand identity across digital, print, and physical touchpoints.',
    image: '/images/blog-5.jpg',
    category: 'Branding',
    readTime: '7 min read',
    date: 'May 8, 2026',
  },
  {
    title: 'Signage That Attracts Customers',
    excerpt: 'Your storefront signage is often the first impression customers have of your business. Explore design tips for creating signs that draw people in.',
    image: '/images/blog-6.jpg',
    category: 'Signage',
    readTime: '4 min read',
    date: 'May 1, 2026',
  },
]

const categoryColors: Record<string, string> = {
  Branding: 'bg-[#1E40AF]',
  Printing: 'bg-[#F97316]',
  Strategy: 'bg-[#0D9488]',
  Design: 'bg-[#8B5CF6]',
  Signage: 'bg-[#EC4899]',
}

function BlogGrid() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section ref={ref} className="bg-white py-24">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        <div
          className={`grid sm:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {blogPosts.map((post, i) => (
            <article
              key={post.title}
              className="group rounded-2xl overflow-hidden border border-[#E2E8F0] hover:shadow-lg transition-all duration-300"
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <div className="overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full aspect-[16/9] object-cover group-hover:scale-[1.03] transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className={`${categoryColors[post.category] || 'bg-[#1E40AF]'} text-white text-xs font-medium px-2.5 py-1 rounded-full`}>
                    {post.category}
                  </span>
                  <span className="text-xs text-[#475569] flex items-center gap-1">
                    <Clock size={12} /> {post.readTime}
                  </span>
                </div>
                <h3 className="font-semibold text-[#0F172A] mb-2 group-hover:text-[#1E40AF] transition-colors duration-200 leading-snug">
                  {post.title}
                </h3>
                <p className="text-sm text-[#475569] leading-relaxed mb-4">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-[#94A3B8]">{post.date}</span>
                  <span className="text-sm font-medium text-[#1E40AF] flex items-center gap-1 group-hover:gap-2 transition-all duration-200 cursor-pointer">
                    Read More <ArrowRight size={14} />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Blog Page ─── */
export default function Blog() {
  return (
    <>
      <PageHero />
      <BlogGrid />
    </>
  )
}
