import type { Metadata } from "next";
import "./globals.css";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.johnmarkpapelirin.live";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "John Mark Papelirin | Full Stack Developer & Web Specialist",
    template: "%s | John Mark Papelirin",
  },
  description:
    "John Mark Papelirin is a Full Stack Developer specializing in Next.js, React, WordPress custom themes, Shopify, and Lead Generation. Building fast, modern, and conversion-focused websites.",
  keywords: [
    "John Mark Papelirin",
    "John Mark",
    "Papelirin",
    "John Mark Papelirin portfolio",
    "John Mark Papelirin developer",
    "Full Stack Developer",
    "Web Developer",
    "Next.js Developer",
    "React Developer",
    "WordPress Developer",
    "Custom WordPress Theme",
    "Shopify Developer",
    "Lead Generation",
    "Technical VA",
    "Virtual Assistant",
    "Node.js",
    "TypeScript",
    "Stripe Integration",
    "Firebase Developer",
    "Three.js",
    "Portfolio",
    "Freelance Developer",
    "Web Design",
    "SEO",
  ],
  authors: [{ name: "John Mark Papelirin" }],
  creator: "John Mark Papelirin",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "John Mark Papelirin — Full Stack Developer",
    title: "John Mark Papelirin | Full Stack Developer & Web Specialist",
    description:
      "John Mark Papelirin — Full Stack Developer specializing in Next.js, React, WordPress custom themes, Shopify, and Lead Generation. Let's build something great.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "John Mark Papelirin — Full Stack Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "John Mark Papelirin | Full Stack Developer & Web Specialist",
    description:
      "John Mark Papelirin — Full Stack Developer specializing in Next.js, React, WordPress, Shopify, and Lead Generation.",
    images: ["/og-image.png"],
  },
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
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#F5C842" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="font-mono antialiased">{children}</body>
    </html>
  );
}
