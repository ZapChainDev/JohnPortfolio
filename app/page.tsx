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
      jobTitle: "Growth Operations Specialist",
      description:
        "John Mark Papelirin is a Growth Operations Specialist helping US small businesses and agencies grow with web systems, lead generation, and marketing operations.",
      knowsAbout: [
        "Next.js",
        "React",
        "TypeScript",
        "WordPress",
        "Shopify",
        "Lead Generation",
        "Conversion Funnels",
        "Social Media Management",
        "TikTok Ads",
        "Marketing Operations",
        "CRM Automation",
        "Zapier",
        "Firebase",
        "Stripe",
        "Web Operations",
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
      name: "John Mark Papelirin — Growth Operations Specialist",
      description:
        "Portfolio of John Mark Papelirin — Growth Operations Specialist for US Small Businesses & Agencies.",
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
