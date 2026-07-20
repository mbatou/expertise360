import type { Metadata, Viewport } from "next";
import { Fraunces, Inter } from "next/font/google";
import { seo, site } from "@/content/site";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["600", "700"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: seo.title,
  description: seo.description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "fr_SN",
    url: site.url,
    siteName: site.name,
    title: seo.title,
    description: seo.description,
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
  },
};

export const viewport: Viewport = {
  themeColor: "#0A1F44",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FinancialService",
  name: site.name,
  description: seo.description,
  url: site.url,
  email: site.email,
  areaServed: site.areaServed,
  address: {
    "@type": "PostalAddress",
    addressLocality: site.address.city,
    addressCountry: "SN",
  },
  founder: {
    "@type": "Person",
    name: site.founder,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${fraunces.variable} ${inter.variable} antialiased`}>
      <body className="flex min-h-svh flex-col">
        <a
          href="#main"
          className="sr-only z-100 rounded-lg bg-gold px-4 py-2 font-semibold text-navy-deep focus:not-sr-only focus:absolute focus:top-3 focus:left-3"
        >
          Aller au contenu principal
        </a>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
