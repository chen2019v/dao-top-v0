"use client";

export default function ContactForm() {
  return (
    <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="text-[10px] tracking-[0.2em] uppercase text-ink/40 block mb-2">
            First Name
          </label>
          <input
            type="text"
            className="w-full px-4 py-3 bg-transparent border border-ink/15 text-sm text-ink placeholder:text-ink/25 focus:outline-none focus:border-ink/35 transition-colors"
            placeholder="Jane"
          />
        </div>
        <div>
          <label className="text-[10px] tracking-[0.2em] uppercase text-ink/40 block mb-2">
            Last Name
          </label>
          <input
            type="text"
            className="w-full px-4 py-3 bg-transparent border border-ink/15 text-sm text-ink placeholder:text-ink/25 focus:outline-none focus:border-ink/35 transition-colors"
            placeholder="Smith"
          />
        </div>
      </div>
      <div>
        <label className="text-[10px] tracking-[0.2em] uppercase text-ink/40 block mb-2">
          Email
        </label>
        <input
          type="email"
          className="w-full px-4 py-3 bg-transparent border border-ink/15 text-sm text-ink placeholder:text-ink/25 focus:outline-none focus:border-ink/35 transition-colors"
          placeholder="jane@example.com"
        />
      </div>
      <div>
        <label className="text-[10px] tracking-[0.2em] uppercase text-ink/40 block mb-2">
          Subject
        </label>
        <select className="w-full px-4 py-3 bg-rice border border-ink/15 text-sm text-ink focus:outline-none focus:border-ink/35 transition-colors appearance-none">
          <option value="">Select a topic...</option>
          <option>Product Question</option>
          <option>Order Support</option>
          <option>Wholesale Inquiry</option>
          <option>Cultural Collaboration</option>
          <option>Press & Media</option>
          <option>Other</option>
        </select>
      </div>
      <div>
        <label className="text-[10px] tracking-[0.2em] uppercase text-ink/40 block mb-2">
          Message
        </label>
        <textarea
          rows={5}
          className="w-full px-4 py-3 bg-transparent border border-ink/15 text-sm text-ink placeholder:text-ink/25 focus:outline-none focus:border-ink/35 transition-colors resize-none"
          placeholder="Tell us what is on your mind..."
        />
      </div>
      <button type="submit" className="shop-cta w-full sm:w-auto">
        Send Message
      </button>
    </form>
  );
}
