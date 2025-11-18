import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "John Mark | Full Stack Developer & Automation Specialist",
  description:
    "Portfolio of John Mark - Full Stack Developer, Automation Specialist & Technical VA with expertise in React, Next.js, Node.js, and modern web technologies.",
  keywords: [
    "Full Stack Developer",
    "Web Developer",
    "Technical VA",
    "React",
    "Next.js",
    "Node.js",
    "Portfolio",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-mono antialiased">{children}</body>
    </html>
  );
}
