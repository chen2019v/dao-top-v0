import type { Metadata } from "next";
import { Playfair_Display, Inter, Noto_Serif_SC, Noto_Sans_SC } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

/* ===== Fonts — self-hosted via next/font, no CDN issues ===== */
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-sans",
  display: "swap",
});

const notoSerifSC = Noto_Serif_SC({
  weight: ["400", "600"],
  variable: "--font-noto-serif",
  display: "swap",
  preload: false,
});

const notoSansSC = Noto_Sans_SC({
  weight: ["300", "400", "500"],
  variable: "--font-noto-sans",
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  title: {
    default: "DAO.top — The Eastern Way of Serene Living",
    template: "%s | DAO.top",
  },
  description:
    "Discover authentic Eastern culture through curated incense, ornaments, tea, and vessels. DAO.top brings Song Dynasty aesthetics to the modern world — oriental heritage, timeless elegance.",
  keywords: [
    "Eastern culture",
    "Oriental aesthetics",
    "Chinese incense",
    "Song Dynasty",
    "Zen lifestyle",
    "natural incense",
    "sandalwood",
    "jade ornaments",
    "Chinese tea",
    "ceramic vessels",
    "DAO.top",
  ],
  metadataBase: new URL("https://dao.top"),
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "DAO.top",
    title: "DAO.top — The Eastern Way of Serene Living",
    description:
      "Authentic Eastern culture products — incense, ornaments, tea, and vessels with Song Dynasty aesthetics.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} ${notoSerifSC.variable} ${notoSansSC.variable}`}
    >
      <body className="min-h-screen flex flex-col bg-[#F5F3EF] antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
