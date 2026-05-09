export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export const navigation: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "The Four Daos", href: "/daos" },
  { label: "Digital IP", href: "/digital-ip" },
  { label: "Our Story", href: "/about" },
  { label: "Journal", href: "/journal" },
];

export const SHOP_URL = "https://shop.dao.top";

export const footerLinks = {
  explore: [
    { label: "Incense Dao", href: "/daos/incense" },
    { label: "Ornament Dao", href: "/daos/ornament" },
    { label: "Tea Dao", href: "/daos/tea" },
    { label: "Vessel Dao", href: "/daos/vessel" },
  ],
  company: [
    { label: "Our Story", href: "/about" },
    { label: "Journal", href: "/journal" },
    { label: "Digital IP", href: "/digital-ip" },
    { label: "Gift Guide", href: "/gift" },
  ],
  support: [
    { label: "FAQ", href: "/faq" },
    { label: "Shipping & Returns", href: "/shipping" },
    { label: "Contact", href: "/contact" },
    { label: "Privacy Policy", href: "/privacy" },
  ],
};
