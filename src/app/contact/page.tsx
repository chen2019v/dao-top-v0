import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact Us — DAO.top",
  description:
    "Get in touch with DAO.top. We welcome inquiries about our products, cultural collaborations, wholesale partnerships, and everything in between.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      <section className="px-6 pt-20 pb-12 text-center">
        <p className="text-xs tracking-[0.3em] uppercase text-ink/30 mb-4">
          Get in Touch
        </p>
        <h1 className="text-3xl md:text-4xl font-heading tracking-[0.03em] text-ink mb-4">
          Contact Us
        </h1>
        <p className="text-sm text-ink/50 max-w-md mx-auto">
          We would love to hear from you — whether it is a question about a
          product, a cultural collaboration, or simply a wish to say hello.
        </p>
        <div className="divider-wide mt-8" />
      </section>

      <section className="px-6 pb-24">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-16">
          {/* Contact Info */}
          <div className="w-full md:w-2/5">
            <h2 className="text-lg font-heading text-ink mb-6">
              How to Reach Us
            </h2>
            <div className="space-y-6 text-sm text-ink/60">
              <div>
                <p className="text-[10px] tracking-[0.2em] uppercase text-ink/30 mb-1">
                  Email
                </p>
                <a
                  href="mailto:hello@dao.top"
                  className="hover:text-ink transition-colors"
                >
                  hello@dao.top
                </a>
              </div>
              <div>
                <p className="text-[10px] tracking-[0.2em] uppercase text-ink/30 mb-1">
                  Partnerships & Wholesale
                </p>
                <a
                  href="mailto:partners@dao.top"
                  className="hover:text-ink transition-colors"
                >
                  partners@dao.top
                </a>
              </div>
              <div>
                <p className="text-[10px] tracking-[0.2em] uppercase text-ink/30 mb-1">
                  Shop Support
                </p>
                <p>
                  For order-related queries, please visit our{" "}
                  <a
                    href="https://shop.dao.top"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-ink transition-colors"
                  >
                    shop support portal
                  </a>
                  .
                </p>
              </div>
              <div>
                <p className="text-[10px] tracking-[0.2em] uppercase text-ink/30 mb-1">
                  Response Time
                </p>
                <p>We typically respond within 1–2 business days.</p>
              </div>
            </div>

            <div className="mt-10 pt-8 border-t border-ink/8">
              <p className="text-xs text-ink/30 mb-3">Follow Our Journey</p>
              <div className="flex gap-5 text-sm text-ink/40">
                {["Instagram", "TikTok", "Pinterest", "YouTube"].map((s) => (
                  <a
                    key={s}
                    href="#"
                    className="hover:text-ink transition-colors text-xs"
                  >
                    {s}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="w-full md:w-3/5">
            <h2 className="text-lg font-heading text-ink mb-6">
              Send a Message
            </h2>
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}
