export interface Dao {
  /** URL slug */
  slug: string;
  /** English name */
  name: string;
  /** Tagline — short poetic English */
  tagline: string;
  /** Full English description for culture page */
  description: string;
  /** Heritage story — 2-3 paragraphs */
  heritage: string;
  /** Brand color (Tailwind class) */
  color: string;
  /** Cover image URL */
  coverImage: string;
  /** Display order */
  order: number;
  /** Published */
  published: boolean;
  /** Is this a core dao (major focus)? */
  core: boolean;
}

export const daos: Dao[] = [
  {
    slug: "incense",
    name: "Incense Dao",
    tagline: "Where smoke meets stillness",
    description:
      "For over four millennia, the art of incense has been woven into the fabric of Eastern contemplation. From Buddhist temples to scholar's studies, the ritual of burning incense is a practice of mindfulness — a bridge between the material world and the infinite.",
    heritage:
      "The earliest records of incense in China date back to the Shang Dynasty (1600–1046 BCE), where aromatic herbs were burned in ritual offerings. By the Tang Dynasty, incense culture had evolved into a sophisticated art form, with scholars and monks alike dedicating years to mastering the subtle differences between agarwood, sandalwood, and blended compositions.\n\nIn the Song Dynasty — the golden age of Chinese aesthetics — the 'Incense Way' became one of the Four Arts of the Scholar. Incense appraisal gatherings, known as 'fragrance parties,' were elaborate social events where connoisseurs would compare and discuss rare varieties, much like wine tastings in the West.\n\nToday, the Incense Dao represents a timeless practice of finding stillness in motion. Whether used in meditation, yoga, or simply to transform the atmosphere of a room, natural incense carries the wisdom of centuries — a fragrant reminder to slow down, breathe deeply, and be present.",
    color: "incense",
    coverImage:
      "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=800&q=80",
    order: 1,
    published: true,
    core: true,
  },
  {
    slug: "ornament",
    name: "Ornament Dao",
    tagline: "Wearable wisdom, carried close",
    description:
      "In Eastern tradition, ornaments are never mere decoration — they are talismans of intention, carriers of blessing, and expressions of inner philosophy. Each piece tells a story of heritage, craftsmanship, and the eternal human desire to carry beauty with us.",
    heritage:
      "The practice of wearing meaningful ornaments in China stretches back over 5,000 years. Jade, revered as the 'Stone of Heaven,' was believed to possess protective and purifying properties. Emperors wore jade pendants as symbols of virtue, while scholars kept sandalwood combs and carved stones as reminders of their philosophical ideals.\n\nDuring the Ming and Qing Dynasties, personal ornaments reached extraordinary heights of artistry. Sandalwood prayer beads became essential companions for meditation, jade amulets were gifted at every life milestone, and intricate knotwork pendants carried hidden blessings in their patterns.\n\nThe Ornament Dao continues this tradition in a modern context. Each piece is selected not just for its beauty, but for its meaning — a sandalwood bracelet worn as a meditation aid, a jade pendant passed between generations, a carved charm that speaks of ancient wisdom made contemporary.",
    color: "ornament",
    coverImage:
      "https://images.unsplash.com/photo-1515562141589-67f0d569b6f2?w=800&q=80",
    order: 2,
    published: true,
    core: true,
  },
  {
    slug: "tea",
    name: "Tea Dao",
    tagline: "One cup, a thousand reflections",
    description:
      "Tea is the world's most ancient beverage, and in the East, it is far more than a drink — it is a philosophy of presence, a ritual of hospitality, and an art form that has shaped civilizations for over 4,000 years.",
    heritage:
      "Legend credits Emperor Shennong with the discovery of tea in 2737 BCE, when a leaf fell into his boiling water. From this serendipitous beginning, tea culture evolved through dynasties — from the compressed tea bricks of the Tang, to the whipped matcha of the Song, to the steeped leaves favored from the Ming onward.\n\nThe Song Dynasty elevated tea to its highest artistic expression through the 'tea competition' (Diancha), where participants whisked powdered tea into a perfect froth. The aesthetic principles governing these ceremonies — simplicity, naturalness, and restraint — became the foundation of Eastern aesthetic philosophy.\n\nThe Tea Dao invites us to experience this ancient practice in our daily lives. A single cup of carefully selected tea can transform a moment into a meditation — a practice of attention, gratitude, and connection to a tradition that spans millennia.",
    color: "tea",
    coverImage:
      "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=800&q=80",
    order: 3,
    published: true,
    core: false,
  },
  {
    slug: "vessel",
    name: "Vessel Dao",
    tagline: "Form follows a thousand years of feeling",
    description:
      "The vessel is the silent partner of every Dao — the bowl that holds the tea, the burner that cradles the incense, the vase that presents the flower. In Eastern philosophy, the usefulness of a vessel lies not in its walls, but in its emptiness.",
    heritage:
      "Chinese ceramics represent one of humanity's greatest artistic achievements. From the celadon mysteries of the Song Dynasty to the blue-and-white masterpieces of the Yuan and Ming, each era contributed innovations that would influence ceramic art across the world.\n\nThe Song Dynasty's 'Five Great Kilns' — Ru, Ding, Jun, Guan, and Ge — produced works of such refined beauty that they remain the benchmark for ceramic excellence. The Ru ware's elusive 'sky-blue' glaze, the Guan ware's subtle crackle pattern, the Ge ware's deliberate golden 'crab-claw' fractures — each embodied a philosophy of finding perfection in imperfection.\n\nThe Vessel Dao celebrates this heritage through carefully selected vessels that honor traditional forms while embracing contemporary life. Each piece is a conversation between past and present, function and beauty, the hand that made it and the hand that uses it.",
    color: "vessel",
    coverImage:
      "https://images.unsplash.com/photo-1563218648-7a68c1a67e55?w=800&q=80",
    order: 4,
    published: true,
    core: false,
  },
];

export function getPublishedDaos(): Dao[] {
  return daos.filter((d) => d.published).sort((a, b) => a.order - b.order);
}

export function getCoreDaos(): Dao[] {
  return getPublishedDaos().filter((d) => d.core);
}

export function getDaoBySlug(slug: string): Dao | undefined {
  return daos.find((d) => d.slug === slug);
}
