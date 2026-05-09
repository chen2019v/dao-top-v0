import type { Metadata } from "next";
import Link from "next/link";
import { getPublishedDaos } from "@/data/daos";
import { SHOP_URL } from "@/data/navigation";

export const metadata: Metadata = {
  title: "The Eastern Daos — Paths to Serene Living",
  description:
    "Explore the Four Daos of DAO.top — Incense, Ornament, Tea, and Vessel. Each is a centuries-old Eastern practice, curated for modern life.",
};

export default function DaosPage() {
  const daos = getPublishedDaos();

  return (
    <div className="flex flex-col">
      {/* Page Header */}
      <section className="px-6 pt-20 pb-16 text-center">
        <p className="text-xs tracking-[0.3em] uppercase text-ink/30 mb-4">
          Eastern Ways
        </p>
        <h1 className="text-3xl md:text-5xl font-heading tracking-[0.03em] text-ink mb-4">
          The Eastern Daos
        </h1>
        <p className="text-sm text-ink/50 leading-relaxed max-w-xl mx-auto">
          Each Dao is a path — a philosophy of living that elevates the everyday
          into the sacred. Rooted in millennia of Eastern tradition, curated for
          your modern life.
        </p>
        <div className="divider-wide mt-8" />
      </section>

      {/* Daos Grid */}
      <section className="px-6 pb-20 md:pb-32">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col gap-20 md:gap-28">
            {daos.map((dao, index) => (
              <div
                key={dao.slug}
                className={`flex flex-col md:flex-row ${
                  index % 2 !== 0 ? "md:flex-row-reverse" : ""
                } gap-12 items-center`}
              >
                {/* Image */}
                <div className="w-full md:w-1/2">
                  <div className="aspect-[4/3] overflow-hidden bg-ink/5 img-zoom">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={dao.coverImage}
                      alt={dao.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="w-full md:w-1/2 max-w-sm">
                  <p className="text-[10px] tracking-[0.3em] uppercase text-ink/30 mb-3">
                    {String(index + 1).padStart(2, "0")} / {String(daos.length).padStart(2, "0")}
                  </p>
                  <h2 className="text-2xl md:text-3xl font-heading tracking-[0.03em] text-ink mb-2">
                    {dao.name}
                  </h2>
                  <p className="text-sm font-heading italic text-ink/40 mb-5">
                    {dao.tagline}
                  </p>
                  <p className="text-sm text-ink/55 leading-relaxed mb-8">
                    {dao.description}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link href={`/daos/${dao.slug}`} className="seal-btn">
                      Read Heritage
                    </Link>
                    <a
                      href={`${SHOP_URL}/collections/${dao.slug}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shop-cta"
                    >
                      Shop {dao.name}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="px-6 py-20 bg-ink/[0.02] text-center">
        <p className="text-xs tracking-[0.3em] uppercase text-ink/30 mb-3">
          Not sure where to begin?
        </p>
        <h2 className="text-xl font-heading text-ink mb-4">
          Discover Your Dao
        </h2>
        <p className="text-sm text-ink/40 max-w-sm mx-auto mb-6">
          Browse our Gift Guide for curated selections, or visit the shop to
          explore our full collection.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/gift" className="seal-btn">
            Gift Guide
          </Link>
          <a
            href={SHOP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="shop-cta"
          >
            Visit Shop
          </a>
        </div>
      </section>
    </div>
  );
}
