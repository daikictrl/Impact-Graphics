import { useState } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { Clock, ArrowRight, X } from 'lucide-react'
import { Dialog, DialogContent, DialogTitle, DialogClose } from '../components/ui/dialog'

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
    content: (
      <div className="space-y-6 text-base md:text-[17px] text-[#475569] leading-relaxed">
        <p>
          Your logo is the face of your brand, often serving as the first point of contact for potential customers. A truly effective business logo must go far beyond just looking pretty—it needs to communicate key messages about your business in a fraction of a second. Here are the five essential messages every effective logo should convey:
        </p>
        
        <h4 className="text-xl font-bold text-[#0F172A] mt-8 mb-3">1. Who You Are & What You Do</h4>
        <p>
          While a logo doesn't need to literally show your product (e.g., Apple doesn't sell apples), it must fit the tone and category of your industry. A tech logo should feel forward-thinking, while a lawyer's logo should convey trust and security.
        </p>
        
        <h4 className="text-xl font-bold text-[#0F172A] mt-8 mb-3">2. Your Level of Professionalism</h4>
        <p>
          A poorly aligned, amateurishly designed logo signals that your business might cut corners elsewhere. A polished, custom logo shows that you value quality and take your business seriously, instilling immediate confidence in potential clients.
        </p>
        
        <h4 className="text-xl font-bold text-[#0F172A] mt-8 mb-3">3. Your Core Values & Brand Personality</h4>
        <p>
          Through deliberate color choices, typography, and iconography, your logo communicates your brand's personality. Is your company playful and approachable, or high-end and exclusive? A well-planned logo aligns visual cues with brand culture.
        </p>
        
        <h4 className="text-xl font-bold text-[#0F172A] mt-8 mb-3">4. Memorable Distinction</h4>
        <p>
          A great logo is simple enough to be recognized and remembered instantly, even in crowded marketplaces. If it is too complex or looks like a generic online template, it will blend into the background.
        </p>
        
        <h4 className="text-xl font-bold text-[#0F172A] mt-8 mb-3">5. Adaptability Across Mediums</h4>
        <p>
          Your logo needs to communicate its message whether it is printed on a tiny business card, embroidered on a polo shirt, or scaled up on a massive billboard. Versatility is key to consistent recognition.
        </p>
      </div>
    )
  },
  {
    title: 'Why Quality Printing Matters for Your Brand',
    excerpt: 'In the digital age, tangible marketing materials still hold immense power. Learn why investing in quality printing elevates your brand perception.',
    image: '/images/blog-2.jpg',
    category: 'Printing',
    readTime: '4 min read',
    date: 'May 28, 2026',
    content: (
      <div className="space-y-6 text-base md:text-[17px] text-[#475569] leading-relaxed">
        <p>
          In our hyper-digital age, tangible marketing materials still hold immense power. From business cards and brochures to product packaging and banners, physical touchpoints leave a lasting physical imprint that digital screens simply cannot match. Here is why investing in quality printing is vital:
        </p>
        
        <h4 className="text-xl font-bold text-[#0F172A] mt-8 mb-3">1. Physical Tangibility & Trust</h4>
        <p>
          Holding a heavy, textured card or reading a beautifully bound brochure creates a psychological sense of security and permanence. It shows your company is established, reliable, and invested in its physical presence.
        </p>
        
        <h4 className="text-xl font-bold text-[#0F172A] mt-8 mb-3">2. Tactile First Impressions</h4>
        <p>
          The sense of touch is highly linked to emotional memory. When someone touches paper with premium finishes—like spot UV, embossing, or soft-touch lamination—they instantly associate your brand with high value and luxury.
        </p>
        
        <h4 className="text-xl font-bold text-[#0F172A] mt-8 mb-3">3. Flawless Visual Accuracy</h4>
        <p>
          Low-quality printing often results in blurry text, washed-out colors, or visible pixels. This cheapens your brand. Premium printing ensures sharp details and color accuracy, matching your branding exactly.
        </p>
        
        <h4 className="text-xl font-bold text-[#0F172A] mt-8 mb-3">4. Higher Engagement Rates</h4>
        <p>
          People spend more time reviewing physical printed advertisements compared to digital ones, which are often dismissed or closed in seconds. Quality brochures and catalogs get kept on tables, continuing to advertise for weeks.
        </p>
      </div>
    )
  },
  {
    title: 'Branding vs Marketing: Understanding the Difference',
    excerpt: 'Many confuse branding with marketing. While related, they serve different purposes. Learn how to leverage both for maximum business impact.',
    image: '/images/blog-3.jpg',
    category: 'Strategy',
    readTime: '6 min read',
    date: 'May 20, 2026',
    content: (
      <div className="space-y-6 text-base md:text-[17px] text-[#475569] leading-relaxed">
        <p>
          Many business owners confuse branding with marketing, using the terms interchangeably. While they are deeply interconnected and support one another, they serve completely different purposes in your growth strategy. Understanding the distinction is key to building an impactful business.
        </p>
        
        <h4 className="text-xl font-bold text-[#0F172A] mt-8 mb-3">What is Branding?</h4>
        <p>
          Branding is who you are. It is your identity, your values, your core mission, your design language, and the emotional connection people feel when they interact with your business. Branding is your foundation; it defines the personality and standards that dictate everything your business does.
        </p>
        
        <h4 className="text-xl font-bold text-[#0F172A] mt-8 mb-3">What is Marketing?</h4>
        <p>
          Marketing is how you raise awareness and drive sales. It consists of the tools, campaigns, and tactics you use to deliver your brand message to the public. Marketing includes SEO, paid advertisements, social media posts, email outreach, flyers, and sales events.
        </p>
        
        <h4 className="text-xl font-bold text-[#0F172A] mt-8 mb-3">The Interplay: Brand First, Then Market</h4>
        <p>
          Marketing gets people to look at you, but branding gets them to stay. If you market a business with weak or confusing branding, you will waste money driving traffic that does not convert because they don't understand or trust who you are. Establishing a solid brand identity is the prerequisite to running successful marketing campaigns.
        </p>
      </div>
    )
  },
  {
    title: 'Designing Effective Flyers That Convert',
    excerpt: 'A well-designed flyer can drive significant results. Discover the key design principles and strategies for creating flyers that grab attention and drive action.',
    image: '/images/blog-4.jpg',
    category: 'Design',
    readTime: '5 min read',
    date: 'May 15, 2026',
    content: (
      <div className="space-y-6 text-base md:text-[17px] text-[#475569] leading-relaxed">
        <p>
          Flyers remain one of the most cost-effective local marketing tools available. However, a flyer is only useful if it actually gets read and drives action. Too many flyers end up straight in the recycle bin because they are cluttered or lack focus. Here is how to design flyers that convert:
        </p>
        
        <h4 className="text-xl font-bold text-[#0F172A] mt-8 mb-3">1. The Bold Headline Hook</h4>
        <p>
          Your headline must be the largest element and explain the core benefit to the reader within one second. Avoid generic titles like "Our Services." Instead, use active hooks like "Get 20% Off Your Next Print Order."
        </p>
        
        <h4 className="text-xl font-bold text-[#0F172A] mt-8 mb-3">2. Clear Visual Hierarchy</h4>
        <p>
          Organize information using clear sizing differences. Use high-quality imagery to draw the eye, followed by short, bulleted selling points. Avoid dense paragraphs; keep copy brief and punchy.
        </p>
        
        <h4 className="text-xl font-bold text-[#0F172A] mt-8 mb-3">3. An Irresistible Call-to-Action (CTA)</h4>
        <p>
          Tell the reader exactly what to do next. Whether it is scanning a QR code, visiting a website, or calling a number, the CTA should stand out visually with contrasting colors and clear instructions.
        </p>
        
        <h4 className="text-xl font-bold text-[#0F172A] mt-8 mb-3">4. Quality Paper and Finish</h4>
        <p>
          A flimsy, poorly printed flyer conveys an unstable business. Printing your flyer on premium stock card with a professional matte or glossy finish increases the likelihood that recipients will save it.
        </p>
      </div>
    )
  },
  {
    title: 'Building Brand Consistency Across All Channels',
    excerpt: 'Consistency is key to brand recognition. Learn how to maintain a cohesive brand identity across digital, print, and physical touchpoints.',
    image: '/images/blog-5.jpg',
    category: 'Branding',
    readTime: '7 min read',
    date: 'May 8, 2026',
    content: (
      <div className="space-y-6 text-base md:text-[17px] text-[#475569] leading-relaxed">
        <p>
          Consistent brands are worth up to 20% more than inconsistent ones. When your business looks and feels the same across your website, social media, printed invoices, storefront, and advertising, you build familiarity, which leads to trust and customer loyalty.
        </p>
        
        <h4 className="text-xl font-bold text-[#0F172A] mt-8 mb-3">1. Create Unified Visual Standards</h4>
        <p>
          Define your brand assets clearly: your logo layout variations, typography pairs, and color codes (HEX, RGB, CMYK). Ensure that these exact rules are enforced whether design work is done for digital screens or physical print presses.
        </p>
        
        <h4 className="text-xl font-bold text-[#0F172A] mt-8 mb-3">2. Standardize Your Brand Voice</h4>
        <p>
          Consistency is not just visual; it is also about communication. Determine how your brand sounds. Are you professional and authoritative, or casual and friendly? Use this tone in all captions, customer service emails, and printed copy.
        </p>
        
        <h4 className="text-xl font-bold text-[#0F172A] mt-8 mb-3">3. Establish a Brand Style Guide</h4>
        <p>
          Document all your design guidelines and rules in a single PDF. Having a clear reference manual ensures that internal team members and external freelancers will produce work that aligns with your brand standards.
        </p>
        
        <h4 className="text-xl font-bold text-[#0F172A] mt-8 mb-3">4. Perform Regular Brand Audits</h4>
        <p>
          Periodically review all active marketing materials. Check your website, social banners, signage, and packaging side-by-side to catch outdated logos or inconsistent color variations, keeping your brand presentation crisp and professional.
        </p>
      </div>
    )
  },
  {
    title: 'Signage That Attracts Customers',
    excerpt: 'Your storefront signage is often the first impression customers have of your business. Explore design tips for creating signs that draw people in.',
    image: '/images/blog-6.jpg',
    category: 'Signage',
    readTime: '4 min read',
    date: 'May 1, 2026',
    content: (
      <div className="space-y-6 text-base md:text-[17px] text-[#475569] leading-relaxed">
        <p>
          Your physical storefront signage serves as a silent salesperson, working 24/7 to capture attention and draw foot traffic. A study showed that 76% of consumers entered a store they had never visited before based solely on its sign. Here is how to make your signage stand out:
        </p>
        
        <h4 className="text-xl font-bold text-[#0F172A] mt-8 mb-3">1. Contrast and Legibility</h4>
        <p>
          If your sign is hard to read from a distance or when moving quickly in a car, it has failed. Use high-contrast color pairings (like black on yellow or white on navy) and bold, simple sans-serif fonts that can be read instantly.
        </p>
        
        <h4 className="text-xl font-bold text-[#0F172A] mt-8 mb-3">2. Proper Scale and Placement</h4>
        <p>
          Ensure your signage fits the environment. Calculate font sizing based on reading distance: a good rule of thumb is 1 inch of letter height per 10 feet of readability. Install your signage where it won't be blocked by street trees or neighboring buildings.
        </p>
        
        <h4 className="text-xl font-bold text-[#0F172A] mt-8 mb-3">3. Simplified Message Delivery</h4>
        <p>
          Passersby only have a few seconds to process your sign. Keep text minimal: your business name, logo, and a very short tagline (or just your service category, like "Print & Graphics").
        </p>
        
        <h4 className="text-xl font-bold text-[#0F172A] mt-8 mb-3">4. Durable Materials and Lighting</h4>
        <p>
          A faded, broken, or unlit sign sends a signal that your business is neglected. Invest in weather-resistant materials (acrylic, aluminum, or composite) and consider illuminated signs (LED backlighting) for high visibility after dark.
        </p>
      </div>
    )
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
  const [selectedPost, setSelectedPost] = useState<typeof blogPosts[0] | null>(null)

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
              className="group rounded-2xl overflow-hidden border border-[#E2E8F0] hover:shadow-lg transition-all duration-300 flex flex-col h-full"
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <div 
                className="overflow-hidden cursor-pointer"
                onClick={() => setSelectedPost(post)}
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full aspect-[16/9] object-cover group-hover:scale-[1.03] transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-3 mb-3">
                  <span className={`${categoryColors[post.category] || 'bg-[#1E40AF]'} text-white text-xs font-medium px-2.5 py-1 rounded-full`}>
                    {post.category}
                  </span>
                  <span className="text-xs text-[#475569] flex items-center gap-1">
                    <Clock size={12} /> {post.readTime}
                  </span>
                </div>
                <h3 
                  className="font-semibold text-[#0F172A] mb-2 group-hover:text-[#1E40AF] transition-colors duration-200 leading-snug cursor-pointer flex-grow"
                  onClick={() => setSelectedPost(post)}
                >
                  {post.title}
                </h3>
                <p className="text-sm text-[#475569] leading-relaxed mb-4">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-[#F1F5F9]">
                  <span className="text-xs text-[#94A3B8]">{post.date}</span>
                  <span 
                    onClick={() => setSelectedPost(post)}
                    className="text-sm font-medium text-[#1E40AF] flex items-center gap-1 group-hover:gap-2 transition-all duration-200 cursor-pointer select-none"
                  >
                    Read More <ArrowRight size={14} />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {selectedPost && (
        <Dialog open={!!selectedPost} onOpenChange={(open) => !open && setSelectedPost(null)}>
          <DialogContent 
            showCloseButton={false}
            className="sm:max-w-[95vw] md:max-w-[90vw] lg:max-w-5xl xl:max-w-5xl w-full h-[90vh] md:h-[85vh] p-0 rounded-3xl border-none shadow-2xl bg-white focus:outline-none overflow-hidden flex flex-col md:grid md:grid-cols-12"
          >
            {/* Left Column - Image */}
            <div className="h-48 sm:h-64 md:h-full md:col-span-5 relative shrink-0">
              <img
                src={selectedPost.image}
                alt={selectedPost.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4">
                <span className={`${categoryColors[selectedPost.category] || 'bg-[#1E40AF]'} text-white text-xs font-semibold tracking-wider uppercase px-3.5 py-1.5 rounded-full shadow-md`}>
                  {selectedPost.category}
                </span>
              </div>
            </div>
            
            {/* Right Column - Content */}
            <div className="flex-grow flex-shrink md:col-span-7 p-8 sm:p-10 md:p-12 lg:p-14 overflow-y-auto flex flex-col relative min-h-0">
              {/* Custom circular close button */}
              <DialogClose className="absolute top-5 right-5 z-50 p-2 bg-white hover:bg-[#F1F5F9] text-[#64748B] hover:text-[#0F172A] rounded-full border border-[#E2E8F0] shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-[#1E40AF]">
                <X size={16} />
              </DialogClose>

              {/* Category label - Bird style */}
              <span className="text-[11px] font-extrabold tracking-widest text-[#1E40AF] uppercase mb-2 self-start">
                {selectedPost.category} Article
              </span>
              
              {/* Title */}
              <DialogTitle className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0F172A] leading-tight font-sans tracking-tight mb-4 pr-8">
                {selectedPost.title}
              </DialogTitle>

              {/* Date & Reading time */}
              <div className="flex items-center gap-4 text-xs sm:text-sm text-[#64748B] font-medium mb-6">
                <span>{selectedPost.date}</span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Clock size={14} /> {selectedPost.readTime}
                </span>
              </div>

              {/* Separator line */}
              <hr className="border-[#E2E8F0] mb-8" />
              
              {/* Body content */}
              <div className="mt-2 text-[#475569] leading-relaxed">
                {selectedPost.content}
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
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
