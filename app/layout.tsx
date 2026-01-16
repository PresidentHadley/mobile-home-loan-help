import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import "@/app/globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Mobile Home Financing Help | Guides, Calculator, Options",
    template: "%s | MobileHomeLoanHelp"
  },
  description:
    "Educational resource for manufactured and mobile home financing. Learn about loan types, requirements, and connect with licensed brokers in your state.",
  openGraph: {
    type: "website",
    title: "Mobile Home Financing Help",
    description:
      "Educational resource for manufactured and mobile home financing. Learn about loan types, requirements, and connect with licensed brokers in your state.",
    url: siteUrl,
    siteName: "MobileHomeLoanHelp"
  },
  alternates: {
    canonical: "/"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-dvh bg-white text-gray-900">
        <Header />
        <main className="mx-auto max-w-6xl px-4 py-10">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}

