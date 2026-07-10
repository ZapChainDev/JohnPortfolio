import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import ClientWork from "@/components/ClientWork";
import GameDev from "@/components/GameDev";
import WorkFlow from "@/components/WorkFlow";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://johnmarkpapelirin.live";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: "John Mark Papelirin",
      alternateName: [
        "John Mark",
        "John Mark Dote Papelirin",
        "John Mark Dote",
        "Dote Papelirin",
      ],
      url: siteUrl,
      jobTitle: "Full Stack Developer",
      description:
        "John Mark Papelirin is a Full Stack Developer specializing in Next.js, React, WordPress custom themes, Shopify, and Lead Generation.",
      knowsAbout: [
        "Next.js",
        "React",
        "TypeScript",
        "Node.js",
        "WordPress",
        "Shopify",
        "Lead Generation",
        "Social Media Management",
        "TikTok Ads Creation",
        "Firebase",
        "Three.js",
        "Stripe",
      ],
      sameAs: [
        "https://www.linkedin.com/in/john-mark-papelirin-124085253/",
        "https://github.com/ZapChainDev",
        "https://www.facebook.com/johnmark.papiliren.3/",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "John Mark Papelirin — Full Stack Developer",
      description:
        "Portfolio of John Mark Papelirin — Full Stack Developer & Web Specialist.",
      author: { "@id": `${siteUrl}/#person` },
    },
    {
      "@type": "ProfilePage",
      "@id": `${siteUrl}/#profilepage`,
      url: siteUrl,
      name: "John Mark Dote Papelirin — Full Stack Developer Portfolio",
      description:
        "Portfolio and profile of John Mark Dote Papelirin, Full Stack Developer specializing in Next.js, React, WordPress, Shopify, and Lead Generation.",
      mainEntity: { "@id": `${siteUrl}/#person` },
    },
  ],
};

export default function Home() {
  return (
    <main className="relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <ClientWork />
      <GameDev />
      <WorkFlow />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}
