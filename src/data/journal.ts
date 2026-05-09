export interface JournalPost {
  slug: string;
  title: string;
  excerpt: string;
  category: "culture" | "incense" | "ornament" | "tea" | "lifestyle";
  readTime: string;
  date: string;
  coverImage: string;
}

export const journalPosts: JournalPost[] = [
  {
    slug: "philosophy-of-dao",
    title: "The Philosophy of Dao in Eastern Daily Life",
    excerpt:
      "Dao is not merely a philosophical concept — it is a living practice woven into the fabric of daily Eastern life. From the way tea is poured to the way a room is arranged, Dao reveals itself in the quiet details of existence.",
    category: "culture",
    readTime: "6 min read",
    date: "2026-05-01",
    coverImage:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
  },
  {
    slug: "agarwood-vs-sandalwood",
    title: "Agarwood vs. Sandalwood: Understanding Nature's Most Precious Incense",
    excerpt:
      "Two of the world's most revered aromatic materials, agarwood and sandalwood, have been used in Eastern contemplation for millennia. Yet their characters, origins, and effects are profoundly different.",
    category: "incense",
    readTime: "8 min read",
    date: "2026-04-24",
    coverImage:
      "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=800&q=80",
  },
  {
    slug: "sandalwood-bracelet-meaning",
    title: "Why Sandalwood Bracelets Are More Than Just Accessories",
    excerpt:
      "In Eastern tradition, wearing sandalwood is a practice of mindfulness — each bead a breath, each rotation a meditation. Discover the deeper meaning behind this ancient practice.",
    category: "ornament",
    readTime: "5 min read",
    date: "2026-04-17",
    coverImage:
      "https://images.unsplash.com/photo-1515562141589-67f0d569b6f2?w=800&q=80",
  },
  {
    slug: "zen-corner-home",
    title: "How to Create a Serene Zen Corner in Your Home",
    excerpt:
      "You don't need a temple to practice mindfulness. A small corner, thoughtfully arranged with a few meaningful objects, can become your personal sanctuary of calm.",
    category: "lifestyle",
    readTime: "4 min read",
    date: "2026-04-10",
    coverImage:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
  },
  {
    slug: "song-dynasty-aesthetics",
    title: "Song Dynasty Aesthetics: The Peak of Eastern Minimalism",
    excerpt:
      "A thousand years before the West discovered minimalism, Song Dynasty China had already perfected the art of elegant simplicity. This is the aesthetic philosophy that guides DAO.top.",
    category: "culture",
    readTime: "7 min read",
    date: "2026-04-03",
    coverImage:
      "https://images.unsplash.com/photo-1563218648-7a68c1a67e55?w=800&q=80",
  },
  {
    slug: "incense-meditation",
    title: "How Natural Incense Transforms Your Meditation Practice",
    excerpt:
      "Science is now confirming what Eastern practitioners have known for millennia: the ritual of burning natural incense can deepen meditation, reduce anxiety, and create a sacred space for inner work.",
    category: "incense",
    readTime: "6 min read",
    date: "2026-03-27",
    coverImage:
      "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=800&q=80",
  },
];

export function getLatestPosts(count: number = 3): JournalPost[] {
  return journalPosts.slice(0, count);
}

export function getJournalPostBySlug(slug: string): JournalPost | undefined {
  return journalPosts.find((p) => p.slug === slug);
}
