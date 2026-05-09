import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getJournalPostBySlug, journalPosts } from "@/data/journal";
import { SHOP_URL } from "@/data/navigation";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return journalPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getJournalPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
  };
}

// Expanded body content for each article (static content map)
const articleBody: Record<string, string> = {
  "philosophy-of-dao": `The word "Dao" (道) defies simple translation. It has been rendered as "The Way," "The Path," "The Principle," and even "The Method" — yet none quite captures its full meaning. For the ancient Chinese philosophers, Dao was not a concept to be understood through words but through lived experience.

In the Tao Te Ching, Laozi famously begins: "The Dao that can be named is not the eternal Dao." This paradox — using language to gesture at something beyond language — is itself a teaching. Dao is the underlying pattern of reality, the silent rhythm beneath all things.

In daily Eastern life, Dao manifests in the particular way a craftsman approaches their work — not as a task to be completed, but as a practice to be inhabited. The calligrapher doesn't just write characters; they enter into a meditative relationship with ink, paper, and breath. The tea master doesn't just prepare tea; they create a momentary world of attention and hospitality.

This philosophy has profound implications for modern life. In an age of productivity optimization and life hacking, the Daoist perspective offers a radical alternative: that excellence comes not from forcing, but from aligning — wu wei (无为), "non-forcing action," becoming effortless and natural through deep practice and presence.

At DAO.top, we find that every product we curate embodies this philosophy. A stick of quality incense doesn't just smell nice — it creates a ritual container for stillness. A hand-thrown tea bowl doesn't just hold tea — it shapes the quality of attention brought to every sip. This is the Dao in objects: meaning accumulated through mindful making and mindful use.`,

  "agarwood-vs-sandalwood": `Before we can compare agarwood and sandalwood, we must understand that we are not comparing two products — we are comparing two philosophies, two different expressions of nature's capacity for depth and beauty.

**Agarwood (Oud / 沉香 Chenxiang)** is perhaps nature's most extraordinary creation. It forms only in Aquilaria trees as a defensive response to fungal infection or injury. The tree's heartwood slowly saturates with aromatic resin over decades — sometimes centuries. The result is a material of extraordinary complexity, with a fragrance profile that shifts and evolves over hours of burning. Agarwood from different regions has dramatically different characters: Vietnamese oud tends toward sweet and fruity, Cambodian toward deep and green, Indian oud toward barnyard complexity, Indonesian toward earthy depth.

Because of its rarity and the decades required for its formation, high-quality agarwood (particularly Vietnamese and Cambodian grades) commands prices comparable to gold. A single gram of the finest "Kyara" grade Japanese oud can exceed $10,000.

**Sandalwood (檀香 Tanxiang)** is more accessible, but no less worthy of reverence. Indian sandalwood (Santalum album) has been treasured in Eastern traditions for over 4,000 years. Unlike agarwood's mercurial complexity, sandalwood offers a quality of sustained, creamy warmth — a "base note" that grounds the spirit and calms the mind.

Research has begun to validate what practitioners have long known: sandalol, the key compound in sandalwood, appears to interact with olfactory receptors in ways that promote calmness and even measurable reductions in stress hormones. It is the scientifically-backed incense of meditation.

For those new to Eastern incense practice, sandalwood offers an ideal beginning — approachable, unmistakably beautiful, and deeply grounding. For those ready to explore further, agarwood offers a lifetime of discovery.`,

  "sandalwood-bracelet-meaning": `In the West, a bracelet is primarily aesthetic — it looks beautiful, it signals taste or status, perhaps it holds sentimental value. In the Eastern tradition, a sandalwood bracelet is something altogether different: it is a tool for presence.

The practice of mala beads — strings of 108 beads used for mantra counting in Buddhist and Hindu practice — has deep roots in Indian and Tibetan traditions. But in Chinese culture, the practice evolved into something more intimate and personal. The 108-bead mala became the 108-bead hand string (手串, shǒuchuàn), worn not just for formal practice but as a companion throughout the day.

The number 108 carries profound meaning in Eastern philosophy. It represents the 108 defilements of the mind in Buddhist teaching, the 108 acupuncture points in Chinese medicine, and the 108 names of sacred deities in Hindu tradition. Wearing a string of 108 beads is thus a quiet reminder of the wholeness of existence.

Sandalwood's specific properties make it particularly suited for this practice. Its natural fragrance — released gently by body heat — acts as an olfactory anchor to the present moment. Unlike the sharp, attention-demanding smell of many modern fragrances, sandalwood has a quality of quiet persistence: it rewards those who slow down enough to notice it.

The practice is simple: as you go about your day, take a moment to roll a bead between your fingers, breathe in the warmth of the wood, and return for a moment to awareness. One breath. One bead. One moment of presence.`,

  "zen-corner-home": `You do not need a monastery, a meditation room, or even a quiet neighborhood to create a sanctuary of calm. What you need is attention, intention, and a small corner of floor.

The Zen corner principle is ancient in its roots but practical in application. In Japanese tradition, the "tokonoma" (床の間) — an alcove in a traditional room — typically contains a single hanging scroll, a simple vase with one flower, perhaps a small sculpture. Nothing more. The tokonoma is not decoration; it is a focal point for presence, a visual invitation to arrive.

Begin with the principle of reduction. Ask not "what should I add?" but "what can I remove?" A corner that functions as a sanctuary needs: one surface (a small shelf, a corner of a low table, a wooden board on the floor), one object that calls you to stillness (a small incense holder, a stone, a simple ceramic), and space. The space is not empty — it is full of potential attention.

If you choose incense, a simple stick or cone holder is enough. The ritual of lighting incense — striking the match, watching the flame take, blowing it to a glowing ember, placing it carefully, stepping back to observe the first thread of smoke — is itself a meditation. No special technique required.

If you choose a tea corner, a single teapot, two cups, and your chosen tea are sufficient. The act of boiling water, warming the pot, measuring the leaves, pouring the first steep — these ordinary actions become extraordinary when performed with full attention.

The Zen corner does not accumulate. When objects lose their meaning, release them. The practice is not collection but attention — the discipline of seeing the extraordinary in the simple.`,

  "song-dynasty-aesthetics": `When Western minimalism emerged in the mid-20th century, it positioned itself as revolutionary, radical, modern. Yet a thousand years earlier, in the Song Dynasty of China (960-1279 CE), artists, craftsmen, scholars, and emperors had already developed a sophisticated aesthetic philosophy of elegant simplicity that would remain unmatched.

The Song Dynasty is often described as the high point of Chinese civilization — not for its military power (it was repeatedly pushed around by its northern neighbors) but for its cultural flowering: landscape painting, ceramics, poetry, garden design, and philosophy reached heights of refinement that continue to define Eastern aesthetics.

What made Song aesthetics distinctive was its philosophical foundation. Where previous dynasties favored grandeur and ornament, Song taste cultivated "qingya" (清雅) — a quality that might be translated as "pure elegance" or "refined simplicity." The Song scholar-aesthetic ideal held that beauty emerged not from addition but from removal — from finding the essence of a thing and presenting it with clarity and restraint.

This philosophy manifested most purely in Song ceramics. The Five Great Kilns — Ru, Ding, Jun, Guan, and Ge — produced vessels of such subtle, understated beauty that they have been revered ever since. Ru ware's legendary "sky-blue" glaze (the exact color of sky after rain, described by Emperor Huizong as his ideal) was achieved through iron reduction firing in sealed kilns — a process so difficult that only 90 authentic pieces are known to survive today.

Song ink painting — particularly landscape painting — developed the concept of "留白" (liú bái), the art of "leaving white," where empty space is as important as painted content. A mountain range suggested by a few strokes of ink, the rest left to the imagination; a boat on a vast lake, small and alone in white paper mist. The viewer completes the work. This is the Song insight: the audience is not passive but active, and the highest art invites participation.

DAO.top's aesthetic philosophy draws directly from this Song tradition. We are not interested in products that shout. We curate things that whisper — things that reward attention, that reveal more the longer you live with them.`,

  "incense-meditation": `For practitioners of meditation, there is a moment familiar across traditions — the moment when the thinking mind, which has been commenting on and narrating the meditation practice ("Am I doing this right? My back hurts. What am I making for dinner?"), suddenly quiets, and presence arrives. What bridges that transition?

Ancient practitioners in India, China, Tibet, and Japan independently discovered that aromatic plants could support this transition. The ritualistic burning of incense before meditation is found in virtually every major contemplative tradition — not as superstition, but as practical technology.

The science is now beginning to catch up. In 2008, a team of international researchers published a study demonstrating that incensole acetate — a key compound in frankincense (boswellic acid) — directly activates ion channels in the brain associated with warm and elevated feelings. The researchers concluded it may represent "a new class of anxiolytic" compounds.

Research on sandalol (the primary aromatic compound in sandalwood) suggests it interacts with olfactory receptors linked to sympathetic nervous system regulation — essentially, that breathing sandalwood may measurably reduce stress responses.

Beyond the biochemistry, there is the phenomenological fact: smell is the only sense with a direct pathway to the limbic system (the brain's emotional center), bypassing the cortical (thinking) brain. A smell can return you to a specific moment of childhood before your thinking mind has time to form a word. This is why smell is so evocative of memory, and why ritual smell — the same incense used in the same way, day after day — can function as a powerful cue for the meditative state.

The practice is simple: choose a high-quality natural incense (avoid synthetic fragrances, which may irritate rather than soothe), light it before your meditation begins, and allow the scent to be your anchor. When you notice you have been thinking rather than meditating, you will often find that returning attention to the scent — taking a deliberate breath and receiving the fragrance — provides a gentle return to presence.`,
};

export default async function JournalArticlePage({ params }: Props) {
  const { slug } = await params;
  const post = getJournalPostBySlug(slug);
  if (!post) notFound();

  const body = articleBody[slug];
  const currentIndex = journalPosts.findIndex((p) => p.slug === slug);
  const prevPost = currentIndex > 0 ? journalPosts[currentIndex - 1] : null;
  const nextPost =
    currentIndex < journalPosts.length - 1
      ? journalPosts[currentIndex + 1]
      : null;

  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  // Split body paragraphs for rendering
  const bodyParagraphs = body ? body.split("\n\n").filter(Boolean) : [];

  return (
    <article className="flex flex-col">
      {/* Hero Image */}
      <section className="relative w-full h-[50vh] overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={post.coverImage}
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/50 to-transparent" />
      </section>

      {/* Article Header */}
      <section className="px-6 py-12 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-[10px] tracking-[0.3em] uppercase text-ink/30 mb-4">
            {post.category} &middot; {post.readTime} &middot; {formattedDate}
          </p>
          <h1 className="text-2xl md:text-4xl font-heading tracking-[0.02em] text-ink leading-tight mb-6">
            {post.title}
          </h1>
          <p className="text-base font-heading italic text-ink/50 leading-relaxed">
            {post.excerpt}
          </p>
          <div className="divider-wide mt-8" />
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="px-6 pb-6">
        <nav className="max-w-3xl mx-auto text-[10px] tracking-[0.15em] uppercase text-ink/30">
          <Link href="/" className="hover:text-ink transition-colors">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link href="/journal" className="hover:text-ink transition-colors">
            Journal
          </Link>
          <span className="mx-2">/</span>
          <span className="text-ink/60 truncate">{post.title}</span>
        </nav>
      </div>

      {/* Article Body */}
      <section className="px-6 pb-20">
        <div className="max-w-3xl mx-auto prose-like">
          {bodyParagraphs.length > 0 ? (
            <div className="space-y-5">
              {bodyParagraphs.map((para, i) => {
                // Handle bold headers (lines starting with **)
                if (para.startsWith("**")) {
                  const parts = para.split("**").filter(Boolean);
                  return (
                    <div key={i}>
                      <h3 className="text-base font-heading text-ink mb-2">
                        {parts[0]}
                      </h3>
                      {parts[1] && (
                        <p className="text-sm text-ink/60 leading-[1.9]">
                          {parts[1].trim()}
                        </p>
                      )}
                    </div>
                  );
                }
                return (
                  <p key={i} className="text-sm text-ink/60 leading-[1.9]">
                    {para}
                  </p>
                );
              })}
            </div>
          ) : (
            <p className="text-sm text-ink/40 italic">
              Full article coming soon.
            </p>
          )}
        </div>
      </section>

      {/* Shop CTA */}
      <section className="px-6 py-12 bg-ink/[0.02] border-t border-ink/5">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-xs tracking-[0.2em] uppercase text-ink/30 mb-3">
            Explore Related Products
          </p>
          <p className="text-sm text-ink/50 mb-5">
            Bring the wisdom of this article into your daily life with our
            curated Eastern collections.
          </p>
          <a
            href={SHOP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="shop-cta"
          >
            Visit Our Shop
          </a>
        </div>
      </section>

      {/* Article Navigation */}
      <section className="px-6 py-12 border-t border-ink/5">
        <div className="max-w-3xl mx-auto flex justify-between items-start">
          {prevPost ? (
            <Link
              href={`/journal/${prevPost.slug}`}
              className="group max-w-[45%]"
            >
              <span className="text-[10px] tracking-[0.2em] uppercase text-ink/30 block mb-1">
                &larr; Previous
              </span>
              <span className="text-sm font-heading text-ink group-hover:text-ink/60 transition-colors leading-snug">
                {prevPost.title}
              </span>
            </Link>
          ) : (
            <div />
          )}

          <Link
            href="/journal"
            className="text-[10px] tracking-[0.2em] uppercase text-ink/30 hover:text-ink transition-colors"
          >
            All Articles
          </Link>

          {nextPost ? (
            <Link
              href={`/journal/${nextPost.slug}`}
              className="group text-right max-w-[45%]"
            >
              <span className="text-[10px] tracking-[0.2em] uppercase text-ink/30 block mb-1">
                Next &rarr;
              </span>
              <span className="text-sm font-heading text-ink group-hover:text-ink/60 transition-colors leading-snug">
                {nextPost.title}
              </span>
            </Link>
          ) : (
            <div />
          )}
        </div>
      </section>
    </article>
  );
}
