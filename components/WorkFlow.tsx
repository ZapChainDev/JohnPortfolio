"use client";

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faMobileAlt,
  faVial,
  faCodeBranch,
  faRocket,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const steps = [
  {
    step: "01",
    icon: faCode,
    title: "Code in VS Code",
    description:
      "Most projects start from scratch — no page builders, no drag-and-drop. Clean, handwritten code in VS Code using Next.js, React, and TypeScript for full control over performance and design.",
    tags: ["VS Code", "Next.js", "TypeScript", "Tailwind CSS"],
    color: "from-warm-yellow to-soft-orange",
  },
  {
    step: "02",
    icon: faMobileAlt,
    title: "Responsive Testing",
    description:
      "Every layout is tested across mobile, tablet, and desktop viewports using browser DevTools and real devices to make sure it looks sharp on every screen.",
    tags: ["DevTools", "Mobile-first", "Cross-browser", "Viewport Testing"],
    color: "from-soft-orange to-anime-gold",
  },
  {
    step: "03",
    icon: faVial,
    title: "Unit Testing",
    description:
      "Core components and logic are covered with unit tests to catch bugs early and keep the codebase reliable as the project grows.",
    tags: ["Jest", "React Testing Library", "QA"],
    color: "from-anime-gold to-warm-yellow",
  },
  {
    step: "04",
    icon: faGithub,
    title: "Push to GitHub",
    description:
      "Code is version-controlled and pushed to GitHub with a clean commit history. Branching keeps features isolated and the main branch always deployable.",
    tags: ["Git", "GitHub", "Version Control", "Branching"],
    color: "from-warm-yellow to-soft-orange",
  },
  {
    step: "05",
    icon: faRocket,
    title: "Deploy to Vercel",
    description:
      "Deployment is seamless via Vercel — automatic CI/CD on every push, instant preview URLs for client review, and lightning-fast global CDN delivery.",
    tags: ["Vercel", "CI/CD", "Auto Deploy", "Preview URLs"],
    color: "from-soft-orange to-anime-gold",
  },
  {
    step: "06",
    icon: faGlobe,
    title: "Domain Setup",
    description:
      "Domain config depends on the client. GoDaddy, Namecheap, Google Domains — whatever they have, I handle the DNS setup and get the site live with SSL.",
    tags: ["GoDaddy", "Namecheap", "DNS Config", "SSL / HTTPS"],
    color: "from-anime-gold to-warm-yellow",
  },
];

export default function WorkFlow() {
  return (
    <section
      id="workflow"
      className="py-20 px-4 relative overflow-hidden bg-gradient-to-b from-cream to-warm-beige"
    >
      <div className="absolute inset-0 dot-pattern opacity-30" />

      <div className="container mx-auto max-w-5xl relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-warm-yellow/20 text-soft-orange font-anime text-sm font-semibold mb-4">
            <FontAwesomeIcon icon={faCodeBranch} />
            Mostly Custom. Always Handcrafted.
          </div>
          <h2 className="font-anime text-5xl md:text-7xl font-bold gradient-text mb-4">
            My Process
          </h2>
          <p className="text-text-gray text-lg font-anime max-w-xl mx-auto">
            Most projects I build are coded from scratch — here&apos;s how it
            goes.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center spine — desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-gradient-to-b from-warm-yellow/10 via-warm-yellow/40 to-warm-yellow/10" />

          <div className="flex flex-col gap-0">
            {steps.map((step, index) => {
              const isLeft = index % 2 === 0;
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: index * 0.1 }}
                  className={`relative flex items-center gap-0 mb-8 md:mb-6 ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  } flex-row`}
                >
                  {/* Content panel */}
                  <div className="flex-1 md:px-10 px-0">
                    <div
                      className={`relative glass-card rounded-3xl p-6 overflow-hidden group hover:shadow-2xl transition-shadow duration-300 ${
                        isLeft ? "md:ml-0 md:mr-4" : "md:ml-4 md:mr-0"
                      } ml-12 md:ml-0`}
                    >
                      {/* Ghost step number */}
                      <span
                        className={`absolute -top-4 pointer-events-none select-none font-anime font-black text-8xl text-warm-yellow/10 leading-none ${
                          isLeft ? "right-4" : "left-4"
                        }`}
                      >
                        {step.step}
                      </span>

                      {/* Icon + title row */}
                      <div className="flex items-center gap-3 mb-3 relative z-10">
                        <div
                          className={`w-10 h-10 flex-shrink-0 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-md`}
                        >
                          <FontAwesomeIcon
                            icon={step.icon}
                            className="text-white text-sm"
                          />
                        </div>
                        <h3 className="font-anime text-base sm:text-lg font-bold text-text-dark leading-tight">
                          {step.title}
                        </h3>
                      </div>

                      <p className="text-text-gray text-sm leading-relaxed mb-4 relative z-10">
                        {step.description}
                      </p>

                      <div className="flex flex-wrap gap-2 relative z-10">
                        {step.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 bg-warm-yellow/15 rounded-full text-text-dark text-xs font-anime font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Accent bar */}
                      <div
                        className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${step.color} opacity-60 rounded-b-3xl`}
                      />
                    </div>
                  </div>

                  {/* Center node — desktop */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 z-20 flex-col items-center">
                    <div
                      className={`w-12 h-12 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg ring-4 ring-cream`}
                    >
                      <span className="font-anime font-black text-white text-xs">
                        {step.step}
                      </span>
                    </div>
                  </div>

                  {/* Mobile left rail node */}
                  <div className="md:hidden absolute left-0 top-6 flex flex-col items-center z-20">
                    <div
                      className={`w-9 h-9 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center shadow-md ring-2 ring-cream`}
                    >
                      <span className="font-anime font-black text-white text-[10px]">
                        {step.step}
                      </span>
                    </div>
                    {index < steps.length - 1 && (
                      <div className="w-px flex-1 min-h-[2rem] bg-warm-yellow/30 mt-1" />
                    )}
                  </div>

                  {/* Empty spacer — opposite side on desktop */}
                  <div className="hidden md:block flex-1" />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center text-text-gray text-sm font-anime mt-10"
        >
          Most sites I build are custom — no page builders, no shortcuts. Just
          clean code that performs.
        </motion.p>
      </div>
    </section>
  );
}
