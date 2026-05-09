export interface DigitalIP {
  slug: string;
  name: string;
  nameZh: string;
  title: string;
  description: string;
  personality: string;
  backstory: string;
  coverImage: string;
  order: number;
}

export const digitalIPs: DigitalIP[] = [
  {
    slug: "daoqing",
    name: "DaoQing",
    nameZh: "道清",
    title: "The Keeper of Ancient Wisdom",
    description:
      "DaoQing embodies the stillness of a mountain temple at dawn. She is the guardian of ancient Eastern wisdom — a bridge between millennia of contemplative tradition and the modern seeker of meaning.",
    personality:
      "Serene yet approachable. DaoQing speaks in metaphors drawn from nature — the patience of bamboo, the clarity of still water, the persistence of a mountain stream. She is the voice that reminds us that wisdom is not acquired, but remembered.",
    backstory:
      "Born from the convergence of Song Dynasty aesthetic philosophy and contemporary digital art, DaoQing emerged as DAO.top's first cultural ambassador. Her name — 道 (Dao/The Way) + 清 (Clarity/Purity) — encapsulates the brand's mission: to illuminate the Eastern Way of serene living with crystal clarity.\n\nHer visual design draws from Song Dynasty portrait traditions — flowing robes in muted celadon and ink tones, hair adorned with a single jade pin, eyes that hold the depth of a thousand years of philosophy. Yet she is unmistakably modern, existing at the intersection of heritage and innovation.",
    coverImage:
      "https://images.unsplash.com/photo-1536158856838-31f9da69e5a8?w=800&q=80",
    order: 1,
  },
  {
    slug: "xuanheng",
    name: "XuanHeng",
    nameZh: "玄珩",
    title: "The Artisan of Living Beauty",
    description:
      "XuanHeng represents the creative spirit of Eastern craftsmanship — the hands that shape beauty from raw nature, the eye that finds perfection in imperfection, the heart that infuses every creation with intention and soul.",
    personality:
      "Warm and inspiring. XuanHeng is the artist who sees poetry in a grain of wood, music in the curl of incense smoke, and stories in the pattern of jade veins. She doesn't just appreciate beauty — she creates it, teaches it, and shares it with the world.",
    backstory:
      "XuanHeng — 玄 (Mysterious/Profound) + 珩 (Top gem of a jade pendant) — was conceived as the creative counterpart to DaoQing's contemplative wisdom. Where DaoQing represents the philosophy of stillness, XuanHeng represents the artistry of expression.\n\nHer design vocabulary bridges Tang Dynasty vibrancy with contemporary minimalism — bolder in gesture, richer in texture, yet always guided by the Eastern principle of restraint. She is the spirit that animates every product in the DAO.top collection, the invisible hand behind every crafted object.",
    coverImage:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&q=80",
    order: 2,
  },
];

export function getDigitalIPBySlug(slug: string): DigitalIP | undefined {
  return digitalIPs.find((ip) => ip.slug === slug);
}
