"use client";

export default function NewsletterForm() {
  return (
    <form
      className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
      onSubmit={(e) => e.preventDefault()}
    >
      <input
        type="email"
        placeholder="Your email address"
        className="flex-1 px-4 py-3 bg-transparent border border-ink/15 text-sm text-ink placeholder:text-ink/30 focus:outline-none focus:border-ink/40 transition-colors"
      />
      <button
        type="submit"
        className="px-6 py-3 bg-ink text-rice text-xs tracking-[0.15em] uppercase hover:bg-ink/90 transition-colors"
      >
        Subscribe
      </button>
    </form>
  );
}
