import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getDaoBySlug, getPublishedDaos } from "@/data/daos";
import { SHOP_URL } from "@/data/navigation";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getPublishedDaos().map((dao) => ({ slug: dao.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const dao = getDaoBySlug(slug);
  if (!dao) return {};
  return {
    title: `${dao.name} — Heritage & Philosophy`,
    description: dao.description,
  };
}

export default async function DaoPage({ params }: Props) {
  const { slug } = await params;
  const dao = getDaoBySlug(slug);
  if (!dao) notFound();

  const allDaos = getPublishedDaos();
  const currentIndex = allDaos.findIndex((d) => d.slug === dao.slug);
  const prevDao = currentIndex > 0 ? allDaos[currentIndex - 1] : null;
  const nextDao = currentIndex < allDaos.length - 1 ? allDaos[currentIndex + 1] : null;

  // Split heritage into paragraphs
  const heritageParagraphs = dao.heritage.split("\n\n").filter(Boolean);

  return (
    <article className="flex flex-col">
      {/* Hero */}
      <section className="relative w-full min-h-[60vh] flex flex-col items-center justify-end pb-16 text-center overflow-hidden">
        {/* Cover image */}
        <div className="absolute inset-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={dao.coverImage}
            alt={dao.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/20 to-transparent" />
        </div>

        {/* Content over image */}
        <div className="relative z-10">
          <p className="text-[10px] tracking-[0.3em] uppercase text-rice/50 mb-3">
            The Dao of
          </p>
          <h1 className="text-3xl md:text-5xl font-heading text-rice tracking-[0.04em] mb-3">
            {dao.name}
          </h1>
          <p className="text-base font-heading italic text-rice/60">
            {dao.tagline}
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="px-6 py-5 border-b border-ink/5">
        <div className="max-w-3xl mx-auto">
          <nav className="text-[10px] tracking-[0.15em] uppercase text-ink/30">
            <Link href="/" className="hover:text-ink transition-colors">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link href="/daos" className="hover:text-ink transition-colors">
              Daos
            </Link>
            <span className="mx-2">/</span>
            <span className="text-ink/60">{dao.name}</span>
          </nav>
        </div>
      </div>

      {/* Main content */}
      <section className="px-6 py-16 md:py-24">
        <div className="max-w-3xl mx-auto">
          {/* Lead paragraph */}
          <p className="text-lg md:text-xl font-heading italic text-ink/60 leading-relaxed mb-12 text-center max-w-2xl mx-auto">
            &ldquo;{dao.description}&rdquo;
          </p>

          <div className="divider-wide" />

          {/* Heritage story */}
          <div className="mt-12 space-y-6">
            <h2 className="text-xl font-heading tracking-[0.03em] text-ink mb-6">
              Heritage & Philosophy
            </h2>
            {heritageParagraphs.map((para, i) => (
              <p key={i} className="text-sm text-ink/60 leading-[1.9]">
                {para}
              </p>
            ))}
          </div>

          {/* Shop CTA */}
          <div className="mt-16 pt-12 border-t border-ink/8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <h3 className="text-lg font-heading text-ink mb-1">
                Experience {dao.name}
              </h3>
              <p className="text-sm text-ink/40">
                Browse our curated selection at our official shop.
              </p>
            </div>
            <a
              href={`${SHOP_URL}/collections/${dao.slug}`}
              target="_blank"
              rel="noopener noreferrer"
              className="shop-cta whitespace-nowrap"
            >
              Shop {dao.name} &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Related Daos Navigation */}
      <section className="px-6 py-12 bg-ink/[0.02] border-t border-ink/5">
        <div className="max-w-3xl mx-auto flex justify-between items-center">
          {prevDao ? (
            <Link
              href={`/daos/${prevDao.slug}`}
              className="group flex flex-col max-w-[40%]"
            >
              <span className="text-[10px] tracking-[0.2em] uppercase text-ink/30 mb-1">
                &larr; Previous
              </span>
              <span className="text-sm font-heading text-ink group-hover:text-ink/60 transition-colors">
                {prevDao.name}
              </span>
            </Link>
          ) : (
            <div />
          )}

          <Link
            href="/daos"
            className="text-[10px] tracking-[0.2em] uppercase text-ink/30 hover:text-ink transition-colors"
          >
            All Daos
          </Link>

          {nextDao ? (
            <Link
              href={`/daos/${nextDao.slug}`}
              className="group flex flex-col text-right max-w-[40%]"
            >
              <span className="text-[10px] tracking-[0.2em] uppercase text-ink/30 mb-1">
                Next &rarr;
              </span>
              <span className="text-sm font-heading text-ink group-hover:text-ink/60 transition-colors">
                {nextDao.name}
              </span>
            </Link>
          ) : (
            <div />
          )}
        </div>
      </section>
    </article>
  );
}
