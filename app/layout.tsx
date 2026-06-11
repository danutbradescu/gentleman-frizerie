import type { Metadata } from "next";
import "./globals.css";

const BASE_URL = "https://gentlemanstudio.ro"; // ← schimbă cu domeniul tău real

export const metadata: Metadata = {
  // ── Titlu & Descriere ──
  title: {
    default: "Gentleman Salon Motru — Frizerie Premium",
    template: "%s | Gentleman Salon Motru",
  },
  description: "Cel mai bun salon de frizerie din Motru. Tuns, bărbierit și styling premium. Echipă cu formare de top, atmosferă autentică. Programează-te pe Mero.",

  // ── Cuvinte cheie ──
  keywords: [
    "frizer Motru", "frizerie Motru", "salon Motru", "tuns Motru",
    "bărbierit Motru", "Gentleman salon", "Gentleman Motru",
    "frizer Gorj", "barbershop Motru", "tuns bărbați Motru",
  ],

  // ── Autor & Generator ──
  authors: [{ name: "Gentleman Salon", url: BASE_URL }],
  creator: "Gentleman Salon",
  publisher: "Gentleman Salon",

  // ── Canonical URL ──
  metadataBase: new URL(BASE_URL),
  alternates: { canonical: "/" },

  // ── Open Graph (Facebook, WhatsApp, etc.) ──
  openGraph: {
    type: "website",
    locale: "ro_RO",
    url: BASE_URL,
    siteName: "Gentleman Salon Motru",
    title: "Gentleman Salon Motru — Frizerie Premium",
    description: "Cel mai bun salon de frizerie din Motru. Tuns, bărbierit și styling premium.",
    images: [
      {
        url: "/og-image.jpg", 
        width: 1200,
        height: 630,
        alt: "Gentleman Salon Motru",
      },
    ],
  },

  // ── Twitter / X Card ──
  twitter: {
    card: "summary_large_image",
    title: "Gentleman Salon Motru",
    description: "Frizerie premium în Motru. Tuns, bărbierit, styling.",
    images: ["/og-image.jpg"],
  },

  // ── Robots ──
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // ── Verificare Google Search Console ──
  // verification: { google: "CODUL_DE_VERIFICARE_DE_PE_SEARCH_CONSOLE" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ro">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=Barlow+Condensed:wght@300;400;600;700&display=swap" rel="stylesheet" />

        {/* Schema.org — date structurate pentru Google */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HairSalon",
              "name": "Gentleman Salon",
              "description": "Salon de frizerie premium în Motru, Gorj. Tuns, bărbierit și styling.",
              "url": BASE_URL,
              "telephone": "+40723924186",
              "email": "valeanuhairstyle@gmail.com",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Motru",
                "addressRegion": "Gorj",
                "addressCountry": "RO",
              },
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  "opens": "09:00",
                  "closes": "20:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": "Saturday",
                  "opens": "09:00",
                  "closes": "18:00",
                },
              ],
              "priceRange": "$$",
              "sameAs": [
                "https://mero.ro/p/gentlemanmotru",
              ],
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}