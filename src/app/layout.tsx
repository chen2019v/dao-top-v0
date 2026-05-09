import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "DAO.top",
    title: "DAO.top — The Eastern Way of Serene Living",
    description:
      "Authentic Eastern culture products — incense, ornaments, tea, and vessels with Song Dynasty aesthetics.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500&family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col bg-rice-paper antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
