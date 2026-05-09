import type { Metadata } from "next";
import Link from "next/link";
import { SHOP_URL } from "@/data/navigation";

export const metadata: Metadata = {
  title: "Shipping & Returns — DAO.top",
  description:
    "DAO.top shipping information, delivery times, returns policy, and international shipping details.",
};

export default function ShippingPage() {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="px-6 pt-20 pb-12 text-center">
        <p className="text-xs tracking-[0.3em] uppercase text-ink/30 mb-4">
          Policy
        </p>
        <h1 className="text-3xl md:text-4xl font-heading tracking-[0.03em] text-ink mb-4">
          Shipping & Returns
        </h1>
        <p className="text-sm text-ink/50 max-w-md mx-auto">
          We pack every order with care and ship from our UK facility to ensure
          your piece arrives perfectly. Here is everything you need to know.
        </p>
        <div className="divider-wide mt-8" />
      </section>

      {/* Content */}
      <section className="px-6 pb-24">
        <div className="max-w-3xl mx-auto space-y-12 text-sm text-ink/60">
          {/* Shipping */}
          <div>
            <h2 className="text-lg font-heading text-ink mb-5">
              Shipping Information
            </h2>
            <div className="space-y-4">
              <p>
                All orders are processed and dispatched from our Manchester,
                UK fulfilment centre. Orders placed before 2:00 PM GMT on
                business days are typically dispatched the same day.
              </p>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="border-b border-ink/10">
                      <th className="text-left py-3 pr-6 text-[10px] tracking-[0.15em] uppercase text-ink/40 font-normal">
                        Region
                      </th>
                      <th className="text-left py-3 pr-6 text-[10px] tracking-[0.15em] uppercase text-ink/40 font-normal">
                        Estimated Delivery
                      </th>
                      <th className="text-left py-3 text-[10px] tracking-[0.15em] uppercase text-ink/40 font-normal">
                        Cost
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-ink/5">
                    {[
                      ["United Kingdom", "2–3 business days", "£3.95 / Free over £50"],
                      ["Europe", "5–7 business days", "£7.95 / Free over £80"],
                      ["USA & Canada", "7–12 business days", "£9.95 / Free over £100"],
                      ["Australia & NZ", "10–14 business days", "£12.95 / Free over £120"],
                      ["Rest of World", "10–21 business days", "From £9.95"],
                    ].map(([region, time, cost]) => (
                      <tr key={region}>
                        <td className="py-3 pr-6 text-ink/60">{region}</td>
                        <td className="py-3 pr-6 text-ink/60">{time}</td>
                        <td className="py-3 text-ink/60">{cost}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p>
                All international shipments include tracking. Customs duties
                and taxes for international orders are the responsibility of the
                recipient and are calculated separately by your local customs
                authority.
              </p>
            </div>
          </div>

          <div className="divider-thin" />

          {/* Returns */}
          <div>
            <h2 className="text-lg font-heading text-ink mb-5">
              Returns & Exchanges
            </h2>
            <div className="space-y-4">
              <p>
                We want you to be completely satisfied with your purchase. If
                for any reason you are not, we accept returns within{" "}
                <strong className="text-ink">30 days</strong> of delivery for
                unused items in their original packaging.
              </p>
              <p>
                To initiate a return, please email us at{" "}
                <a
                  href="mailto:returns@dao.top"
                  className="underline hover:text-ink transition-colors"
                >
                  returns@dao.top
                </a>{" "}
                with your order number and reason for return. We will provide a
                return label for UK customers; international customers are
                responsible for return shipping costs.
              </p>
              <p>
                Refunds are processed within 5–7 business days of receiving the
                returned item. Exchanges for the same item (different variant)
                are processed free of charge for UK customers.
              </p>
              <p className="text-ink/40 text-xs">
                Please note: personalized or custom items, opened consumables
                (incense, tea), and final-sale items are not eligible for return
                unless defective.
              </p>
            </div>
          </div>

          <div className="divider-thin" />

          {/* Packaging */}
          <div>
            <h2 className="text-lg font-heading text-ink mb-5">
              Packaging
            </h2>
            <p>
              All DAO.top orders are carefully wrapped in our signature
              undyed rice paper, tied with natural jute string, and sealed
              with our wax stamp. Gift messaging is available at checkout.
              We are progressively moving toward fully recyclable packaging
              materials.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-16 bg-ink/[0.02] border-t border-ink/5 text-center">
        <p className="text-sm text-ink/40 mb-5">
          Ready to experience Eastern culture in your daily life?
        </p>
        <a
          href={SHOP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="shop-cta"
        >
          Visit Our Shop
        </a>
      </section>
    </div>
  );
}
