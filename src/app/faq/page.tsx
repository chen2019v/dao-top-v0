import type { Metadata } from "next";
import Link from "next/link";
import { SHOP_URL } from "@/data/navigation";

export const metadata: Metadata = {
  title: "FAQ — Frequently Asked Questions",
  description:
    "Answers to common questions about DAO.top products, ordering, shipping, materials, and Eastern culture practices.",
};

const FAQS = [
  {
    category: "Products & Materials",
    items: [
      {
        q: "What makes DAO.top products different from other Eastern culture brands?",
        a: "DAO.top products are curated by a team with nearly two decades of direct experience in Eastern craftsmanship. We source from verified artisans who use traditional methods and natural materials — not mass-produced substitutes. Every piece is selected for authenticity, material quality, and cultural depth.",
      },
      {
        q: "Are the incense products all natural?",
        a: "Yes. All incense products in the DAO.top collection use 100% natural aromatic materials — agarwood (oud), sandalwood, and hand-blended herbal compositions. We do not carry synthetic fragrance products. Natural incense burns differently from synthetic: more subtly, with occasional variation between batches. This is a feature, not a flaw.",
      },
      {
        q: "What types of wood are used in the ornaments?",
        a: "Our ornament collection primarily features Indian sandalwood (Santalum album), African sandalwood, and red sandalwood (Pterocarpus santalinus). Each material is clearly identified in the product listing. We also carry jade pieces — please see each listing for the specific type and origin.",
      },
      {
        q: "How do I know the jade is genuine?",
        a: "All jade items in our collection are accompanied by authenticity documentation. We source predominantly from certified suppliers with traceable provenance. If you have a specific question about a piece's authenticity, please contact us at hello@dao.top before purchasing.",
      },
    ],
  },
  {
    category: "Ordering & Payment",
    items: [
      {
        q: "Where do I purchase DAO.top products?",
        a: "All purchases are made through our official shop at shop.dao.top. This site (dao.top) is our brand and cultural platform — for product discovery, articles, and inspiration. The shop is where transactions happen.",
      },
      {
        q: "What currencies and payment methods do you accept?",
        a: "Our shop accepts major credit cards (Visa, Mastercard, Amex), PayPal, and Apple Pay in GBP, USD, EUR, and other major currencies. Currency conversion is handled automatically at checkout.",
      },
      {
        q: "Can I change or cancel my order?",
        a: "Order changes and cancellations can be requested within 12 hours of placement. Please contact shop support at shop.dao.top or email orders@dao.top immediately. Once orders are dispatched, cancellation is no longer possible.",
      },
    ],
  },
  {
    category: "Shipping & Delivery",
    items: [
      {
        q: "Do you ship internationally?",
        a: "Yes — we ship to over 50 countries worldwide. Shipping costs and estimated delivery times are calculated at checkout. For detailed shipping information, please visit our Shipping & Returns page.",
      },
      {
        q: "How long does delivery take?",
        a: "UK orders typically arrive within 2–3 business days via our Manchester 3PL facility. European orders take 5–7 business days. International orders vary between 7–14 business days depending on destination and customs clearance.",
      },
      {
        q: "Do you offer gift wrapping?",
        a: "Yes. All DAO.top orders come in our signature rice paper packaging with a wax seal. For an additional gift message, select the gift option at checkout and add your personalised note.",
      },
    ],
  },
  {
    category: "Cultural Practice",
    items: [
      {
        q: "I am new to Eastern culture. Where should I start?",
        a: "We recommend starting with incense — it is the most accessible introduction to Eastern contemplative practice, and the daily ritual of lighting incense is a natural entry point to mindfulness. Our Journal article 'How Natural Incense Transforms Your Meditation Practice' is a good first read. Our Incense Starter Collection at the shop is curated specifically for newcomers.",
      },
      {
        q: "Do you offer guidance on how to use the products?",
        a: "Yes — our Journal contains detailed guides on incense practice, tea preparation, and the meaning of ornaments. We also include a brief printed guide with every purchase. For specific questions, our team is happy to advise via email.",
      },
      {
        q: "Is DAO.top connected to any particular religious tradition?",
        a: "No. While our products and philosophy draw from Daoist, Chan Buddhist, and Confucian aesthetic traditions, we are a secular cultural brand. Our products are for anyone who is drawn to Eastern beauty and the practice of mindful living, regardless of religious background.",
      },
    ],
  },
];

export default function FaqPage() {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="px-6 pt-20 pb-12 text-center">
        <p className="text-xs tracking-[0.3em] uppercase text-ink/30 mb-4">
          Help
        </p>
        <h1 className="text-3xl md:text-4xl font-heading tracking-[0.03em] text-ink mb-4">
          Frequently Asked Questions
        </h1>
        <p className="text-sm text-ink/50 max-w-md mx-auto">
          Answers to common questions about our products, practices, and
          philosophy. Not finding what you need?{" "}
          <Link href="/contact" className="underline hover:text-ink transition-colors">
            Contact us.
          </Link>
        </p>
        <div className="divider-wide mt-8" />
      </section>

      {/* FAQs */}
      <section className="px-6 pb-24">
        <div className="max-w-3xl mx-auto space-y-16">
          {FAQS.map((section) => (
            <div key={section.category}>
              <h2 className="text-sm tracking-[0.2em] uppercase text-ink/40 mb-8 border-b border-ink/8 pb-3">
                {section.category}
              </h2>
              <div className="space-y-8">
                {section.items.map((item, i) => (
                  <div key={i} className="group">
                    <p className="text-base font-heading text-ink mb-2 leading-snug">
                      {item.q}
                    </p>
                    <p className="text-sm text-ink/55 leading-[1.9]">{item.a}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Still need help */}
      <section className="px-6 py-16 bg-ink/[0.02] border-t border-ink/5 text-center">
        <h2 className="text-lg font-heading text-ink mb-3">
          Still have questions?
        </h2>
        <p className="text-sm text-ink/40 mb-6">
          Our team is happy to help. Reach out and we will get back to you
          within 1–2 business days.
        </p>
        <Link href="/contact" className="seal-btn">
          Contact Us
        </Link>
      </section>
    </div>
  );
}
