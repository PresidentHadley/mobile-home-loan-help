import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import "@/app/globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
const siteName = "MobileHomeLoanHelp";
const siteDescription =
  "Educational resource for manufactured and mobile home financing. Learn about loan types, requirements, and connect with licensed brokers in your state.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Mobile Home Financing Help | Guides, Calculator, Options",
    template: `%s | ${siteName}`
  },
  description: siteDescription,
  openGraph: {
    type: "website",
    title: "Mobile Home Financing Help",
    description: siteDescription,
    url: siteUrl,
    siteName
  },
  twitter: {
    card: "summary_large_image",
    title: "Mobile Home Financing Help",
    description: siteDescription
  },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }]
  },
  applicationName: siteName,
  category: "finance",
  robots: {
    index: true,
    follow: true
  },
  alternates: {
    canonical: "/"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Momentum Growth Partners LLC",
    url: siteUrl,
    brand: {
      "@type": "Brand",
      name: siteName
    }
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteName,
    url: siteUrl,
    description: siteDescription
  };

  return (
    <html lang="en">
      <body className="min-h-dvh bg-white text-gray-900">
        <Header />
        <main className="mx-auto max-w-6xl px-4 py-10">{children}</main>
        <Footer />
        <Analytics />
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </body>
    </html>
  );
}

