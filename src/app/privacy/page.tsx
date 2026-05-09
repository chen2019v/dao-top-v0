import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — DAO.top",
  description: "DAO.top privacy policy — how we collect, use, and protect your personal information.",
};

export default function PrivacyPage() {
  return (
    <div className="flex flex-col">
      <section className="px-6 pt-20 pb-12 text-center">
        <p className="text-xs tracking-[0.3em] uppercase text-ink/30 mb-4">Legal</p>
        <h1 className="text-3xl md:text-4xl font-heading tracking-[0.03em] text-ink mb-4">
          Privacy Policy
        </h1>
        <p className="text-sm text-ink/40">Last updated: May 2026</p>
        <div className="divider-wide mt-6" />
      </section>

      <section className="px-6 pb-24">
        <div className="max-w-3xl mx-auto space-y-10 text-sm text-ink/60 leading-[1.9]">
          <div>
            <h2 className="text-base font-heading text-ink mb-3">1. Overview</h2>
            <p>
              DAO.top (&ldquo;we,&rdquo; &ldquo;our,&rdquo; &ldquo;us&rdquo;) is committed to protecting your personal information. This Privacy Policy explains what data we collect, why we collect it, how we use and protect it, and your rights in relation to it. This policy applies to dao.top and shop.dao.top.
            </p>
          </div>

          <div>
            <h2 className="text-base font-heading text-ink mb-3">2. Data We Collect</h2>
            <p className="mb-3">We collect information in the following ways:</p>
            <ul className="list-none space-y-2 pl-4">
              {[
                "Information you provide directly: name, email address, shipping address, payment information (processed securely via our payment providers, not stored by us), and any messages you send us.",
                "Information collected automatically: IP address, browser type, pages visited, time spent on pages (via analytics cookies), and referring URL.",
                "Order information: products purchased, order value, delivery address, and transaction history.",
              ].map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-ink/20 flex-shrink-0">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-base font-heading text-ink mb-3">3. How We Use Your Data</h2>
            <ul className="list-none space-y-2 pl-4">
              {[
                "Processing and fulfilling your orders.",
                "Sending order confirmations and shipping notifications.",
                "Responding to your inquiries and support requests.",
                "Sending marketing emails (only with your explicit consent; you may unsubscribe at any time).",
                "Improving our website and services through anonymized analytics.",
                "Complying with legal obligations.",
              ].map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-ink/20 flex-shrink-0">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-base font-heading text-ink mb-3">4. Data Sharing</h2>
            <p>
              We do not sell your personal data. We share data only with trusted third-party service providers necessary to operate our business — including payment processors (Stripe), shipping carriers, and analytics providers (all bound by data processing agreements). We may disclose information if required by law.
            </p>
          </div>

          <div>
            <h2 className="text-base font-heading text-ink mb-3">5. Cookies</h2>
            <p>
              We use essential cookies (required for site function) and optional analytics cookies (to understand how visitors use our site). You may decline analytics cookies without affecting core functionality. A cookie banner on first visit allows you to set your preferences.
            </p>
          </div>

          <div>
            <h2 className="text-base font-heading text-ink mb-3">6. Data Retention</h2>
            <p>
              We retain personal data for as long as necessary to fulfill the purposes outlined in this policy, or as required by law. Order data is retained for 7 years for tax and accounting purposes. Marketing consent records are retained for 3 years after last interaction.
            </p>
          </div>

          <div>
            <h2 className="text-base font-heading text-ink mb-3">7. Your Rights</h2>
            <p className="mb-3">Under GDPR and UK data protection law, you have the right to:</p>
            <ul className="list-none space-y-2 pl-4">
              {[
                "Access the personal data we hold about you.",
                "Request correction of inaccurate data.",
                "Request deletion of your data (where we have no legal obligation to retain it).",
                "Object to or restrict certain processing.",
                "Data portability — receive your data in a structured, commonly used format.",
                "Withdraw consent for marketing communications at any time.",
              ].map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-ink/20 flex-shrink-0">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-3">
              To exercise any of these rights, please email{" "}
              <a href="mailto:privacy@dao.top" className="underline hover:text-ink transition-colors">
                privacy@dao.top
              </a>
              .
            </p>
          </div>

          <div>
            <h2 className="text-base font-heading text-ink mb-3">8. Contact</h2>
            <p>
              For any privacy-related questions or concerns, please contact our Data Controller at{" "}
              <a href="mailto:privacy@dao.top" className="underline hover:text-ink transition-colors">
                privacy@dao.top
              </a>
              . You also have the right to lodge a complaint with the UK Information Commissioner&apos;s Office (ICO) at ico.org.uk.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
