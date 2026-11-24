import type { Metadata, Viewport } from "next";


const publicSiteUrl = process.env.NEXT_PUBLIC_SITE_URL;

export const metadata: Metadata = {
  title: "Shalin & Isha | Wedding Invitation",
  description:
    "With hearts full of happiness and gratitude, Shalin and Isha invite you to celebrate their wedding at Kesar Bagh Palace, Chittorgarh.",
  ...(publicSiteUrl ? { metadataBase: new URL(publicSiteUrl) } : {}),
  openGraph: {
    title: "Shalin & Isha | Wedding Invitation",
    description: "26–27 January 2027 · Kesar Bagh Palace, Chittorgarh",
    ...(publicSiteUrl ? { images: ["/images/shalin-isha-palace-illustration.webp"] } : {}),
  },
};

export const viewport: Viewport = {
  themeColor: "#eff0f4",
  viewportFit: "cover",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
