"use client";

import { motion } from "framer-motion";
import MangaPanel from "./MangaPanel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faSearch,
  faCode,
} from "@fortawesome/free-solid-svg-icons";

const experiences = [
  {
    role: "Web Developer & Automation",
    company: "CBL Publish • North Carolina, US",
    period: "February 2025 - Present",
    responsibilities: [
      "WordPress development and customization",
      "Building automation workflows and integrations",
      "Full-stack web development solutions",
      "Technical consulting and implementation",
    ],
    color: "warm-yellow",
    icon: faCode,
  },
  {
    role: "Freelance Technical Virtual Assistant",
    company: "Sister Diamonds Support",
    period: "December 2024 - January 2025",
    responsibilities: [
      "Web development using Ontraport CRM platform",
      "Automation workflows with Zapier integration",
      "Technical support for US-based clients",
      "System optimization and maintenance",
    ],
    color: "soft-orange",
    icon: faBriefcase,
  },
  {
    role: "SEO Intern",
    company: "GoAbroad.com",
    period: "2022 - 2023",
    responsibilities: [
      "Fixed 404 errors and broken links",
      "Optimized internal link structure",
      "Compressed and optimized images",
      "Conducted data mining and analysis",
    ],
    color: "warm-yellow",
    icon: faSearch,
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="min-h-screen py-20 px-4 relative overflow-hidden"
    >
      <div className="absolute inset-0 dot-pattern opacity-30" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-anime text-5xl md:text-7xl mb-12 text-center font-bold gradient-text"
        >
          Experience
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <MangaPanel variant="glass" className="h-full">
                <div className="flex items-start gap-4 mb-6">
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${
                      exp.color === "warm-yellow"
                        ? "from-warm-yellow to-anime-gold"
                        : "from-soft-orange to-warm-yellow"
                    } flex items-center justify-center flex-shrink-0`}
                  >
                    <FontAwesomeIcon
                      icon={exp.icon}
                      className="text-white text-3xl"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="font-anime text-xl font-bold text-text-dark mb-2 leading-tight">
                      {exp.role}
                    </h3>
                    <div className="text-text-gray text-sm font-anime">
                      <div className="font-semibold">{exp.company}</div>
                      <div className="text-xs mt-1">{exp.period}</div>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  {exp.responsibilities.map((resp, respIndex) => (
                    <div key={respIndex} className="flex items-start gap-3">
                      <span
                        className={`mt-1.5 w-2 h-2 rounded-full ${
                          exp.color === "warm-yellow"
                            ? "bg-warm-yellow"
                            : "bg-soft-orange"
                        } flex-shrink-0`}
                      />
                      <p className="text-sm text-text-gray leading-relaxed">
                        {resp}
                      </p>
                    </div>
                  ))}
                </div>
              </MangaPanel>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
