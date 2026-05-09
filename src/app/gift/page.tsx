import type { Metadata } from "next";
import Link from "next/link";
import { SHOP_URL } from "@/data/navigation";

export const metadata: Metadata = {
  title: "Gift Guide — Meaningful Eastern Gifts for Every Occasion",
  description:
    "DAO.top gift guide — curated Eastern culture gifts for meditation practitioners, tea lovers, design enthusiasts, and everyone who values thoughtful beauty.",
};

const GIFT_COLLECTIONS = [
  {
    tag: "For the Seeker of Stillness",
    title: "Incense & Meditation",
    description:
      "For the person who has everything — give them a moment of nothing. Our incense collections are perfect for anyone who meditates, practices yoga, or simply wishes to transform the quality of a room.",
    recommendation: "Agarwood Incense Set",
    recommendedFor: "Meditation practitioners, yoga enthusiasts, anyone seeking calm",
    priceRange: "£28 – £180",
    img: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=800&q=80",
    shopSlug: "incense",
  },
  {
    tag: "For the Keeper of Tradition",
    title: "Ornaments & Jewellery",
    description:
      "A piece of jade, a sandalwood bracelet, a carved amulet — each one a wearable story. These gifts carry meaning across generations, making them ideal for milestone occasions.",
    recommendation: "Jade Pendant or Sandalwood Mala Bracelet",
    recommendedFor: "Milestone birthdays, new beginnings, mindfulness practitioners",
    priceRange: "£35 – £250",
    img: "https://images.unsplash.com/photo-1515562141589-67f0d569b6f2?w=800&q=80",
    shopSlug: "ornament",
  },
  {
    tag: "For the Curious Palate",
    title: "Tea & Tea Ceremony",
    description:
      "The art of tea is the art of attention. A gift of fine Eastern tea — paired with a simple vessel — is an invitation to slow down. Ideal for the host who values quality over quantity.",
    recommendation: "Aged Pu-erh or White Peony Tea Gift Set",
    recommendedFor: "Tea lovers, dinner hosts, mindful living enthusiasts",
    priceRange: "£25 – £120",
    img: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=800&q=80",
    shopSlug: "tea",
  },
  {
    tag: "For the Design Connoisseur",
    title: "Vessels & Ceramics",
    description:
      "For those who believe objects should be beautiful. Our ceramic collection brings Song Dynasty elegance to contemporary homes — celadon glazes, tea bowls, and incense burners that are works of art as much as functional pieces.",
    recommendation: "Celadon Incense Burner or Tea Bowl",
    recommendedFor: "Interiors enthusiasts, ceramics admirers, lifestyle aesthetes",
    priceRange: "£45 – £320",
    img: "https://images.unsplash.com/photo-1563218648-7a68c1a67e55?w=800&q=80",
    shopSlug: "vessel",
  },
];

export default function GiftPage() {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="px-6 pt-20 pb-16 text-center">
        <p className="text-xs tracking-[0.3em] uppercase text-ink/30 mb-4">
          Thoughtful Giving
        </p>
        <h1 className="text-3xl md:text-5xl font-heading tracking-[0.03em] text-ink mb-5">
          The Art of Meaningful Gifts
        </h1>
        <p className="text-sm text-ink/50 leading-relaxed max-w-xl mx-auto">
          In the Eastern tradition, the best gifts are those that speak of the
          giver&apos;s attention — objects chosen for their meaning, not their
          price. Every DAO.top piece carries centuries of considered beauty.
        </p>
        <div className="divider-wide mt-8" />
      </section>

      {/* Why Eastern Gifts */}
      <section className="px-6 pb-20">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm text-ink/50 leading-[1.9]">
            Unlike many modern gifts, Eastern cultural objects carry layered
            meaning. A piece of jade embodies virtues — five of them, according
            to classical Chinese philosophy: benevolence, wisdom, courage,
            justice, and purity. A string of sandalwood beads is not just
            jewellery; it is a daily mindfulness tool. A hand-thrown tea bowl
            holds within its form the entire aesthetic philosophy of a dynasty.
          </p>
          <p className="text-sm text-ink/50 leading-[1.9] mt-4">
            These are gifts that grow richer with time — that reward the
            recipient every time they are encountered, not just on the day of
            giving.
          </p>
        </div>
      </section>

      {/* Gift Collections */}
      <section className="px-6 pb-24 bg-ink/[0.015] pt-14">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs tracking-[0.2em] uppercase text-ink/30 mb-12 text-center">
            Curated By Occasion
          </p>
          <div className="flex flex-col gap-20">
            {GIFT_COLLECTIONS.map((gift, index) => (
              <div
                key={gift.shopSlug}
                className={`flex flex-col md:flex-row ${
                  index % 2 !== 0 ? "md:flex-row-reverse" : ""
                } gap-12 items-center`}
              >
                {/* Image */}
                <div className="w-full md:w-5/12">
                  <div className="aspect-[4/3] overflow-hidden bg-ink/5 img-zoom">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={gift.img}
                      alt={gift.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="w-full md:w-7/12">
                  <p className="text-[10px] tracking-[0.25em] uppercase text-ink/30 mb-2">
                    {gift.tag}
                  </p>
                  <h2 className="text-2xl font-heading tracking-[0.02em] text-ink mb-4">
                    {gift.title}
                  </h2>
                  <p className="text-sm text-ink/55 leading-[1.9] mb-5">
                    {gift.description}
                  </p>

                  {/* Recommendation card */}
                  <div className="border border-ink/8 p-5 mb-6 bg-ink/[0.015]">
                    <p className="text-[10px] tracking-[0.15em] uppercase text-ink/30 mb-1">
                      Our Recommendation
                    </p>
                    <p className="text-sm font-heading text-ink mb-1">
                      {gift.recommendation}
                    </p>
                    <p className="text-xs text-ink/40 mb-1">
                      For: {gift.recommendedFor}
                    </p>
                    <p className="text-xs text-ink/40">
                      Price range: {gift.priceRange}
                    </p>
                  </div>

                  <a
                    href={`${SHOP_URL}/collections/${gift.shopSlug}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shop-cta"
                  >
                    Shop {gift.title}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gift Packaging */}
      <section className="px-6 py-20 bg-ink text-rice">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-xl font-heading tracking-[0.02em] text-rice mb-4">
            Signature Gift Packaging
          </h2>
          <p className="text-sm text-rice/50 leading-relaxed mb-4">
            Every DAO.top order arrives in our signature rice paper wrapping,
            tied with natural jute, and sealed with our wax stamp. Add a
            personalised message at checkout — printed on a handmade card.
          </p>
          <p className="text-sm text-rice/40 mb-6">
            Need same-day or next-day delivery? Select express shipping at
            checkout (UK only).
          </p>
          <a
            href={SHOP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 border border-rice/30 text-xs tracking-[0.15em] uppercase text-rice hover:bg-rice hover:text-ink transition-all duration-400"
          >
            Shop All Gifts
          </a>
        </div>
      </section>

      {/* Unsure CTA */}
      <section className="px-6 py-16 text-center">
        <p className="text-sm text-ink/40 mb-4">
          Not sure which collection is right? Our team can help you choose.
        </p>
        <Link href="/contact" className="seal-btn">
          Ask for Guidance
        </Link>
      </section>
    </div>
  );
}
