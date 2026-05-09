import type { Metadata } from "next";
import Link from "next/link";
import { SHOP_URL } from "@/data/navigation";

export const metadata: Metadata = {
  title: "Our Story — DAO.top Brand Heritage",
  description:
    "Discover the DAO.top story — how a 19-year journey in Eastern craftsmanship became a global brand bringing Song Dynasty aesthetics to the modern world.",
};

const PILLARS = [
  {
    zh: "寻",
    pinyin: "Xún",
    title: "Seek",
    body:
      "Every DAO.top piece begins with a search — not in factories or wholesale markets, but in workshops, mountains, and heritage sites across East Asia. We seek craftsmen who still honor traditional methods: the incense master who blends by hand and nose, the ceramicist who fires in a wood kiln, the jade carver whose family has worked the same motifs for five generations. The seeking never ends, because tradition is alive and always finding new expression.",
  },
  {
    zh: "鉴",
    pinyin: "Jiàn",
    title: "Discern",
    body:
      "Not everything old is beautiful. Not everything handmade is worthy. The practice of discernment — jiàn, the connoisseur's art — is central to what we do. We bring nearly two decades of deep industry knowledge to every selection: understanding quality indicators that transcend price, recognizing the difference between genuine craft and its imitation, curating the products that carry real depth. When you choose a DAO.top piece, you are benefiting from years of patient discernment.",
  },
  {
    zh: "传",
    pinyin: "Chuán",
    title: "Transmit",
    body:
      "The greatest art is useless if it remains locked in a museum or warehouse. The final act is transmission — bringing these objects and the wisdom they carry into daily life across the world. DAO.top is a bridge: between East and West, between ancient and contemporary, between the maker and the person who lives with the object. Every product shipped, every article published, every IP character created is an act of cultural transmission.",
  },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="px-6 pt-20 pb-12 text-center">
        <p className="text-xs tracking-[0.3em] uppercase text-ink/30 mb-4">
          Our Story
        </p>
        <h1 className="text-3xl md:text-5xl font-heading tracking-[0.03em] text-ink mb-4">
          The Way We See Beauty
        </h1>
        <p className="text-sm text-ink/50 leading-relaxed max-w-xl mx-auto">
          DAO.top was born from a simple conviction: the aesthetic wisdom of the
          Eastern tradition deserves a place in the modern world — not as
          nostalgia, but as living practice.
        </p>
        <div className="divider-wide mt-8" />
      </section>

      {/* Founding Story */}
      <section className="px-6 py-16 md:py-24">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-14 items-start">
          <div className="w-full md:w-2/5 aspect-[3/4] overflow-hidden bg-ink/5">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80"
              alt="Eastern mountain landscape"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="w-full md:w-3/5 space-y-5">
            <p className="text-xs tracking-[0.2em] uppercase text-ink/30">
              Founded on 19 Years
            </p>
            <h2 className="text-2xl font-heading tracking-[0.02em] text-ink">
              From Workshop to World
            </h2>
            <p className="text-sm text-ink/60 leading-[1.9]">
              DAO.top was founded by people who have spent nearly two decades
              at the heart of Eastern craftsmanship — working directly with
              makers of incense, jade, ceramics, and handcrafted ornaments
              across China and East Asia. This is not a brand born in a
              marketing meeting. It grew from deep immersion in the traditions
              it serves.
            </p>
            <p className="text-sm text-ink/60 leading-[1.9]">
              We watched the world's appetite for authentic Eastern culture grow
              — and watched too many products fail to honor the depth of the
              traditions they claimed to represent. We built DAO.top to do it
              properly: with respect for heritage, transparency about materials
              and making, and a commitment to genuine quality over the
              performance of it.
            </p>
            <p className="text-sm text-ink/60 leading-[1.9]">
              Our name is our philosophy. Dao (道) — The Way — is not a
              destination but a practice of continuous refinement. The top of
              Dao is not a peak to be conquered but a direction to be followed,
              always further, always deeper.
            </p>
          </div>
        </div>
      </section>

      {/* Three Pillars */}
      <section className="px-6 py-20 bg-ink/[0.02]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.3em] uppercase text-ink/30 mb-3">
              Our Method
            </p>
            <h2 className="text-2xl md:text-3xl font-heading tracking-[0.03em] text-ink">
              Seek · Discern · Transmit
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {PILLARS.map((pillar) => (
              <div key={pillar.zh} className="text-center md:text-left">
                <div className="text-4xl font-heading text-ink/10 mb-3 leading-none">
                  {pillar.zh}
                </div>
                <p className="text-[10px] tracking-[0.2em] uppercase text-ink/30 mb-1">
                  {pillar.pinyin}
                </p>
                <h3 className="text-lg font-heading text-ink mb-4">
                  {pillar.title}
                </h3>
                <p className="text-sm text-ink/50 leading-[1.9]">
                  {pillar.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="px-6 py-20 md:py-28">
        <div className="max-w-2xl mx-auto text-center">
          <div className="divider-thin mb-8" />
          <p className="text-lg md:text-xl font-heading italic text-ink/60 leading-[1.8]">
            &ldquo;We exist to make the profound beauty of Eastern tradition
            accessible to everyone who seeks it — wherever they are, however
            they live.&rdquo;
          </p>
          <div className="divider-thin mt-8 mb-10" />
          <p className="text-sm text-ink/40 leading-relaxed">
            DAO.top operates across digital and physical channels, with our
            official shop serving customers in over 50 countries. Our brand site
            is a resource for cultural education and inspiration; our shop is
            where tradition becomes part of your daily life.
          </p>
        </div>
      </section>

      {/* Why Eastern Culture Now */}
      <section className="px-6 py-20 bg-ink text-rice">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-2xl font-heading tracking-[0.03em] text-rice mb-3">
              Why Eastern Culture, Why Now?
            </h2>
            <p className="text-sm text-rice/50 max-w-md mx-auto">
              We live in an age of overstimulation — of algorithmically
              optimized feeds, relentless notifications, and the constant
              pressure to produce and consume. The ancient wisdom of the East
              offers a counterweight.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {[
              {
                title: "The Art of Stillness",
                body: "Song Dynasty aesthetics were built around the cultivation of inner stillness (静). The incense master, the calligrapher, the tea host — each practiced bringing full attention to a single act, transforming it from task into meditation.",
              },
              {
                title: "Objects as Practice",
                body: "In the Eastern tradition, beautiful objects are not status symbols but practice tools — each one an invitation to slow down, pay attention, and cultivate the quality of awareness that the sages called 'clear seeing.'",
              },
              {
                title: "Heritage as Anchor",
                body: "In a world of constant change, connection to living traditions provides a sense of rootedness and continuity. These objects carry the accumulated wisdom of thousands of years of human attention.",
              },
              {
                title: "Global, Yet Rooted",
                body: "The wisdom traditions of East Asia — Daoism, Chan Buddhism, Confucian aesthetics — speak to universal human experiences of beauty, meaning, and the good life. They are not foreign; they are waiting to be recognized.",
              },
            ].map((item) => (
              <div key={item.title}>
                <h3 className="text-sm font-heading text-rice mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-rice/50 leading-[1.9]">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="px-6 py-20 text-center">
        <h2 className="text-xl font-heading text-ink mb-4">
          Begin Your Practice
        </h2>
        <p className="text-sm text-ink/40 max-w-sm mx-auto mb-8">
          Whether you are new to Eastern culture or returning to a practice you
          already love, DAO.top is here to support the journey.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={SHOP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="shop-cta"
          >
            Visit Shop
          </a>
          <Link href="/daos" className="seal-btn">
            Explore The Daos
          </Link>
        </div>
      </section>
    </div>
  );
}
