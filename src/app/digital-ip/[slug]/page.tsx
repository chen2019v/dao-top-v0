import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getDigitalIPBySlug, digitalIPs } from "@/data/digital-ips";
import { SHOP_URL } from "@/data/navigation";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return digitalIPs.map((ip) => ({ slug: ip.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const ip = getDigitalIPBySlug(slug);
  if (!ip) return {};
  return {
    title: `${ip.name} (${ip.nameZh}) — ${ip.title}`,
    description: ip.description,
  };
}

export default async function DigitalIPDetailPage({ params }: Props) {
  const { slug } = await params;
  const ip = getDigitalIPBySlug(slug);
  if (!ip) notFound();

  const backstoryParagraphs = ip.backstory.split("\n\n").filter(Boolean);
  const others = digitalIPs.filter((d) => d.slug !== slug);

  return (
    <article className="flex flex-col">
      {/* Hero */}
      <section className="relative min-h-[55vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={ip.coverImage}
            alt={ip.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-ink/15 to-transparent" />
        </div>
        <div className="relative z-10 px-6 pb-14 md:px-16">
          <p className="text-[10px] tracking-[0.3em] uppercase text-rice/50 mb-2">
            DAO.top Digital IP / {ip.nameZh}
          </p>
          <h1 className="text-3xl md:text-5xl font-heading text-rice tracking-[0.04em] mb-2">
            {ip.name}
          </h1>
          <p className="text-sm font-heading italic text-rice/60">{ip.title}</p>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="px-6 py-5 border-b border-ink/5">
        <nav className="max-w-3xl mx-auto text-[10px] tracking-[0.15em] uppercase text-ink/30">
          <Link href="/" className="hover:text-ink transition-colors">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link href="/digital-ip" className="hover:text-ink transition-colors">
            Digital IP
          </Link>
          <span className="mx-2">/</span>
          <span className="text-ink/60">{ip.name}</span>
        </nav>
      </div>

      {/* Main content */}
      <section className="px-6 py-16 md:py-24">
        <div className="max-w-3xl mx-auto">
          {/* Personality */}
          <div className="mb-12 p-8 border border-ink/5 bg-ink/[0.015]">
            <p className="text-[10px] tracking-[0.2em] uppercase text-ink/30 mb-3">
              Character Essence
            </p>
            <p className="text-lg font-heading italic text-ink/60 leading-relaxed">
              &ldquo;{ip.personality}&rdquo;
            </p>
          </div>

          <div className="divider-wide" />

          {/* Backstory */}
          <div className="mt-12">
            <h2 className="text-xl font-heading tracking-[0.03em] text-ink mb-6">
              Origin Story
            </h2>
            <div className="space-y-5">
              {backstoryParagraphs.map((para, i) => (
                <p key={i} className="text-sm text-ink/60 leading-[1.9]">
                  {para}
                </p>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 pt-12 border-t border-ink/8">
            <p className="text-sm text-ink/40 mb-5">
              Experience the world {ip.name} embodies — explore our Eastern
              culture collections.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={SHOP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="shop-cta"
              >
                Visit Shop
              </a>
              <Link href="/daos" className="seal-btn">
                Explore The Daos
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Other Characters */}
      {others.length > 0 && (
        <section className="px-6 py-16 bg-ink/[0.02] border-t border-ink/5">
          <div className="max-w-4xl mx-auto">
            <p className="text-xs tracking-[0.2em] uppercase text-ink/30 mb-8 text-center">
              Meet Our Other Ambassador
            </p>
            <div className="flex flex-col sm:flex-row gap-8">
              {others.map((other) => (
                <Link
                  key={other.slug}
                  href={`/digital-ip/${other.slug}`}
                  className="group flex gap-5 items-center flex-1"
                >
                  <div className="w-20 h-20 overflow-hidden bg-ink/5 img-zoom flex-shrink-0">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={other.coverImage}
                      alt={other.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-[10px] tracking-[0.15em] uppercase text-ink/30">
                      {other.nameZh}
                    </p>
                    <h3 className="text-base font-heading text-ink group-hover:text-ink/60 transition-colors">
                      {other.name}
                    </h3>
                    <p className="text-xs text-ink/40 italic">{other.title}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </article>
  );
}
