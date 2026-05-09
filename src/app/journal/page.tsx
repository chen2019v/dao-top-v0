import type { Metadata } from "next";
import Link from "next/link";
import { journalPosts } from "@/data/journal";

export const metadata: Metadata = {
  title: "Journal — Stories, Culture & Eastern Wisdom",
  description:
    "Explore DAO.top Journal — in-depth articles on Eastern culture, incense traditions, tea philosophy, ornament meanings, and the art of serene living.",
};

const CATEGORIES = ["all", "culture", "incense", "ornament", "tea", "lifestyle"] as const;

export default function JournalPage() {
  const featured = journalPosts[0];
  const rest = journalPosts.slice(1);

  return (
    <div className="flex flex-col">
      {/* Page Header */}
      <section className="px-6 pt-20 pb-12 text-center">
        <p className="text-xs tracking-[0.3em] uppercase text-ink/30 mb-4">
          Writings
        </p>
        <h1 className="text-3xl md:text-5xl font-heading tracking-[0.03em] text-ink mb-4">
          The Journal
        </h1>
        <p className="text-sm text-ink/50 leading-relaxed max-w-xl mx-auto">
          Insights on Eastern philosophy, culture, and the art of mindful living.
          Stories that illuminate the wisdom behind every Dao.
        </p>
        <div className="divider-wide mt-8" />
      </section>

      {/* Featured Article */}
      <section className="px-6 pb-16">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs tracking-[0.2em] uppercase text-ink/30 mb-6">
            Featured
          </p>
          <Link href={`/journal/${featured.slug}`} className="group block">
            <div className="flex flex-col md:flex-row gap-10 items-center">
              <div className="w-full md:w-3/5 aspect-[16/9] overflow-hidden bg-ink/5 img-zoom">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={featured.coverImage}
                  alt={featured.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-full md:w-2/5">
                <p className="text-[10px] tracking-[0.2em] uppercase text-ink/30 mb-3">
                  {featured.category} &middot; {featured.readTime} &middot;{" "}
                  {new Date(featured.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
                <h2 className="text-xl md:text-2xl font-heading tracking-[0.02em] text-ink mb-4 leading-snug group-hover:text-ink/70 transition-colors">
                  {featured.title}
                </h2>
                <p className="text-sm text-ink/50 leading-relaxed mb-6">
                  {featured.excerpt}
                </p>
                <span className="text-xs tracking-[0.15em] uppercase text-ink/40 group-hover:text-ink transition-colors">
                  Read Article &rarr;
                </span>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="px-6 pb-24 bg-ink/[0.015] pt-14">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs tracking-[0.2em] uppercase text-ink/30 mb-10">
            Latest Articles
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {rest.map((post) => (
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
                <p className="text-[10px] text-ink/25 mt-3">
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
