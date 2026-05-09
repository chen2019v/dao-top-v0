import Link from "next/link";
import { footerLinks, SHOP_URL } from "@/data/navigation";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full bg-ink text-rice/70">
      {/* Main footer */}
      <div className="max-w-6xl mx-auto px-6 lg:px-10 py-16 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Brand column */}
        <div className="md:col-span-1">
          <Link href="/" className="font-heading text-xl tracking-[0.08em] text-rice">
            DAO<span className="text-rice/40">.top</span>
          </Link>
          <p className="text-xs leading-relaxed text-rice/40 mt-4 tracking-[0.02em]">
            The Eastern Way of Serene Living.
            <br />
            Oriental aesthetics for the modern world.
          </p>
          <a
            href={SHOP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 text-xs tracking-[0.15em] uppercase text-rice border border-rice/30 px-4 py-2 hover:bg-rice hover:text-ink transition-all duration-400"
          >
            Visit Shop
          </a>
        </div>

        {/* Explore */}
        <div>
          <h4 className="text-xs tracking-[0.2em] uppercase text-rice/50 mb-6">
            Explore
          </h4>
          <ul className="space-y-3">
            {footerLinks.explore.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-rice/50 hover:text-rice transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="text-xs tracking-[0.2em] uppercase text-rice/50 mb-6">
            Company
          </h4>
          <ul className="space-y-3">
            {footerLinks.company.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-rice/50 hover:text-rice transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="text-xs tracking-[0.2em] uppercase text-rice/50 mb-6">
            Support
          </h4>
          <ul className="space-y-3">
            {footerLinks.support.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-rice/50 hover:text-rice transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-rice/10">
        <div className="max-w-6xl mx-auto px-6 lg:px-10 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-xs text-rice/30 tracking-[0.05em]">
            © {year} DAO.top — All rights reserved
          </span>
          <div className="flex items-center gap-6 text-xs text-rice/30">
            <a href="#" className="hover:text-rice transition-colors">Instagram</a>
            <a href="#" className="hover:text-rice transition-colors">TikTok</a>
            <a href="#" className="hover:text-rice transition-colors">YouTube</a>
            <a href="#" className="hover:text-rice transition-colors">Pinterest</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
