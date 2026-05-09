import Link from "next/link";
import { getPublishedDaos, getCoreDaos } from "@/data/daos";
import { getLatestPosts } from "@/data/journal";
import { SHOP_URL } from "@/data/navigation";
import NewsletterForm from "@/components/NewsletterForm";

export default function HomePage() {
  const allDaos = getPublishedDaos();
  const coreDaos = getCoreDaos();
  const latestPosts = getLatestPosts(3);

  return (
    <div className="flex flex-col">
      {/* ===== 1. Hero Section ===== */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center px-6 text-center">
        {/* Subtle rice paper pattern */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h60v60H0z' fill='none'/%3E%3Ccircle cx='30' cy='30' r='1' fill='%23000'/%3E%3C/svg%3E\")",
          }}
        />

        {/* Brand name */}
        <p className="text-xs tracking-[0.4em] uppercase text-ink/40 mb-6">
          Est. 2024
        </p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-normal tracking-[0.05em] text-ink mb-6">
          DAO<span className="text-ink/30">.top</span>
        </h1>

        {/* Tagline */}
        <p className="text-base md:text-lg font-heading italic text-ink/60 tracking-[0.06em] mb-4">
          The Eastern Way of Serene Living
        </p>

        {/* Description */}
        <p className="max-w-lg text-sm text-ink/50 leading-relaxed tracking-[0.02em] mb-10">
          Authentic Eastern culture meets modern life. Discover curated incense,
          ornaments, tea, and vessels — each piece a bridge between millennia of
          tradition and your daily moments of calm.
        </p>

        {/* Dual CTA */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <a
            href={SHOP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="shop-cta"
          >
            Visit Our Shop
          </a>
          <Link href="/daos" className="seal-btn">
            Explore The Daos
          </Link>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-ink/20">
          <span className="text-[10px] tracking-[0.3em] uppercase">
            Discover
          </span>
          <div className="w-[1px] h-8 bg-ink/20 animate-bounce" />
        </div>
      </section>

      {/* ===== 2. Brand Philosophy ===== */}
      <section className="px-6 py-24 md:py-36 flex justify-center">
        <div className="max-w-2xl text-center">
          <div className="divider-thin mb-8" />
          <p className="text-xs tracking-[0.3em] uppercase text-ink/30 mb-6">
            Our Philosophy
          </p>
          <p className="text-base md:text-lg leading-[2] text-ink/60 tracking-[0.02em] font-heading italic">
            &ldquo;The beauty of the East lies in restraint.
            <br />
            Not in abundance, but in the space between things —
            <br />
            where meaning breathes and beauty resonates.&rdquo;
          </p>
          <p className="text-sm text-ink/40 mt-6 leading-relaxed max-w-md mx-auto">
            Inspired by Song Dynasty aesthetics, DAO.top curates products that
            embody the Eastern principle of finding the extraordinary within the
            ordinary.
          </p>
          <div className="divider-thin mt-8" />
        </div>
      </section>

      {/* ===== 3. Core Daos — Featured Categories ===== */}
      <section className="px-6 py-16 md:py-24 bg-ink/[0.02]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.3em] uppercase text-ink/30 mb-3">
              Explore
            </p>
            <h2 className="text-2xl md:text-3xl font-heading tracking-[0.03em] text-ink">
              The Four Daos
            </h2>
            <p className="text-sm text-ink/40 mt-3 max-w-md mx-auto">
              Four pillars of Eastern contemplation, each a path to presence and
              beauty.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreDaos.map((dao) => (
              <Link
                key={dao.slug}
                href={`/daos/${dao.slug}`}
                className="group block card-hover"
              >
                <div className="aspect-[3/4] overflow-hidden bg-ink/5 mb-5 img-zoom">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={dao.coverImage}
                    alt={dao.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-base font-heading tracking-[0.04em] text-ink mb-1">
                  {dao.name}
                </h3>
                <p className="text-xs text-ink/40 italic tracking-[0.02em]">
                  {dao.tagline}
                </p>
                <div className="w-4 h-[1px] bg-ink/20 mt-3 group-hover:w-10 transition-all duration-500" />
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/daos"
              className="text-xs tracking-[0.15em] uppercase text-ink/40 hover:text-ink transition-colors duration-300"
            >
              View All Categories &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* ===== 4. Trust Signals ===== */}
      <section className="px-6 py-20 md:py-28">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              {
                number: "4,000+",
                label: "Years of Heritage",
                desc: "Rooted in ancient Eastern traditions",
              },
              {
                number: "100%",
                label: "Natural Materials",
                desc: "Agarwood, sandalwood, jade, celadon",
              },
              {
                number: "50+",
                label: "Countries Shipped",
                desc: "Global delivery with care",
              },
              {
                number: "10K+",
                label: "Happy Customers",
                desc: "Trusted by mindfulness seekers",
              },
            ].map((stat) => (
              <div key={stat.label} className="px-4">
                <p className="text-2xl md:text-3xl font-heading text-ink mb-1">
                  {stat.number}
                </p>
                <p className="text-xs tracking-[0.15em] uppercase text-ink/60 mb-1">
                  {stat.label}
                </p>
                <p className="text-[11px] text-ink/30">{stat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 5. Digital IP Characters ===== */}
      <section className="px-6 py-16 md:py-24 bg-ink/[0.02]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs tracking-[0.3em] uppercase text-ink/30 mb-3">
              Our Ambassadors
            </p>
            <h2 className="text-2xl md:text-3xl font-heading tracking-[0.03em] text-ink">
              Meet Our Digital IPs
            </h2>
            <p className="text-sm text-ink/40 mt-3 max-w-md mx-auto">
              Two cultural ambassadors bridging ancient wisdom and modern life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {[
              {
                name: "DaoQing",
                nameZh: "道清",
                title: "The Keeper of Ancient Wisdom",
                desc: "Embodies the stillness of a mountain temple at dawn — the guardian of Eastern contemplation and the voice that reminds us wisdom is not acquired, but remembered.",
                img: "https://images.unsplash.com/photo-1536158856838-31f9da69e5a8?w=800&q=80",
                href: "/digital-ip/daoqing",
              },
              {
                name: "XuanHeng",
                nameZh: "玄珩",
                title: "The Artisan of Living Beauty",
                desc: "Represents the creative spirit of Eastern craftsmanship — the hands that shape beauty from raw nature, the eye that finds perfection in imperfection.",
                img: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&q=80",
                href: "/digital-ip/xuanheng",
              },
            ].map((char) => (
              <Link
                key={char.name}
                href={char.href}
                className="group flex flex-col sm:flex-row gap-6 items-start"
              >
                <div className="w-full sm:w-40 aspect-square overflow-hidden bg-ink/5 img-zoom flex-shrink-0">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={char.img}
                    alt={char.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <p className="text-[10px] tracking-[0.2em] uppercase text-ink/30 mb-1">
                    {char.nameZh}
                  </p>
                  <h3 className="text-lg font-heading tracking-[0.03em] text-ink mb-0.5">
                    {char.name}
                  </h3>
                  <p className="text-xs text-ink/40 italic mb-3">{char.title}</p>
                  <p className="text-sm text-ink/50 leading-relaxed">
                    {char.desc}
                  </p>
                  <span className="inline-block text-[10px] tracking-[0.15em] uppercase text-ink/30 mt-3 group-hover:text-ink/60 transition-colors">
                    Read Story &rarr;
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 6. Journal Preview ===== */}
      <section className="px-6 py-16 md:py-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs tracking-[0.3em] uppercase text-ink/30 mb-3">
              From Our Journal
            </p>
            <h2 className="text-2xl md:text-3xl font-heading tracking-[0.03em] text-ink">
              Stories & Insights
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {latestPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/journal/${post.slug}`}
                className="group block card-hover"
              >
                <div className="aspect-[4/3] overflow-hidden bg-ink/5 mb-5 img-zoom">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={post.coverImage}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-[10px] tracking-[0.2em] uppercase text-ink/30 mb-2">
                  {post.category} &middot; {post.readTime}
                </p>
                <h3 className="text-base font-heading tracking-[0.02em] text-ink leading-snug mb-2 group-hover:text-ink/70 transition-colors">
                  {post.title}
                </h3>
                <p className="text-xs text-ink/40 leading-relaxed line-clamp-2">
                  {post.excerpt}
                </p>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/journal"
              className="seal-btn"
            >
              View All Articles
            </Link>
          </div>
        </div>
      </section>

      {/* ===== 7. Gift Guide CTA ===== */}
      <section className="px-6 py-20 md:py-28 bg-ink text-rice">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-xs tracking-[0.3em] uppercase text-rice/30 mb-4">
            Thoughtful Gifting
          </p>
          <h2 className="text-2xl md:text-3xl font-heading tracking-[0.03em] text-rice mb-4">
            The Art of Meaningful Gifts
          </h2>
          <p className="text-sm text-rice/50 leading-relaxed mb-8 max-w-md mx-auto">
            Each DAO.top piece carries centuries of meaning — a gift that speaks
            of culture, intention, and timeless elegance. Let our guide help you
            choose the perfect gesture.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/gift"
              className="inline-block px-6 py-3 border border-rice/30 text-xs tracking-[0.15em] uppercase text-rice hover:bg-rice hover:text-ink transition-all duration-400"
            >
              Gift Guide
            </Link>
            <a
              href={SHOP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-rice text-ink text-xs tracking-[0.15em] uppercase hover:bg-rice/90 transition-colors"
            >
              Shop Now
            </a>
          </div>
        </div>
      </section>

      {/* ===== 8. Newsletter ===== */}
      <section className="px-6 py-20 md:py-24">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-xl font-heading tracking-[0.03em] text-ink mb-3">
            Join Our Community
          </h2>
          <p className="text-sm text-ink/40 leading-relaxed mb-6">
            Receive stories of Eastern culture, new collection previews, and
            exclusive offers. No spam — just serenity.
          </p>
          <NewsletterForm />
        </div>
      </section>
    </div>
  );
}
