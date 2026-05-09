import type { Metadata } from "next";
import Link from "next/link";
import { digitalIPs } from "@/data/digital-ips";

export const metadata: Metadata = {
  title: "Digital IP Characters — DaoQing & XuanHeng",
  description:
    "Meet DAO.top's cultural ambassadors — DaoQing and XuanHeng. Two digital IP characters born from Song Dynasty aesthetics to guide the modern seeker of Eastern wisdom.",
};

export default function DigitalIPPage() {
  return (
    <div className="flex flex-col">
      {/* Page Header */}
      <section className="px-6 pt-20 pb-16 text-center">
        <p className="text-xs tracking-[0.3em] uppercase text-ink/30 mb-4">
          Cultural Ambassadors
        </p>
        <h1 className="text-3xl md:text-5xl font-heading tracking-[0.03em] text-ink mb-4">
          Digital IP
        </h1>
        <p className="text-sm text-ink/50 leading-relaxed max-w-xl mx-auto">
          Born from the convergence of ancient wisdom and contemporary digital
          art, our IP characters are living bridges between Eastern heritage and
          the modern world.
        </p>
        <div className="divider-wide mt-8" />
      </section>

      {/* Characters */}
      <section className="px-6 pb-24">
        <div className="max-w-5xl mx-auto flex flex-col gap-24">
          {digitalIPs.map((char, index) => (
            <div
              key={char.slug}
              className={`flex flex-col md:flex-row ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              } gap-14 items-center`}
            >
              {/* Image */}
              <div className="w-full md:w-5/12">
                <div className="aspect-square overflow-hidden bg-ink/5 img-zoom">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={char.coverImage}
                    alt={char.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="w-full md:w-7/12">
                <p className="text-xs tracking-[0.2em] uppercase text-ink/30 mb-1">
                  {char.nameZh} — Digital IP
                </p>
                <h2 className="text-2xl md:text-3xl font-heading tracking-[0.03em] text-ink mb-1">
                  {char.name}
                </h2>
                <p className="text-sm font-heading italic text-ink/40 mb-6">
                  {char.title}
                </p>
                <p className="text-sm text-ink/55 leading-[1.9] mb-4">
                  {char.description}
                </p>
                <p className="text-sm text-ink/45 leading-[1.9] mb-8">
                  {char.personality}
                </p>
                <Link
                  href={`/digital-ip/${char.slug}`}
                  className="seal-btn"
                >
                  Full Story
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Origin Story Banner */}
      <section className="px-6 py-20 bg-ink/[0.02] border-t border-ink/5">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-xl font-heading tracking-[0.03em] text-ink mb-4">
            Born From Tradition, Speaking to the Present
          </h2>
          <p className="text-sm text-ink/50 leading-relaxed">
            DaoQing and XuanHeng represent two facets of Eastern wisdom —
            contemplative stillness and creative artistry. Together, they embody
            the DAO.top philosophy: ancient truth expressed through contemporary
            beauty.
          </p>
        </div>
      </section>
    </div>
  );
}
