"use client";

import { motion } from "framer-motion";
import MangaPanel from "./MangaPanel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faExternalLinkAlt,
  faUser,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

const clientProjects = [
  {
    clientName: "Virtually Hana",
    clientRole: "Social Media Manager",
    description:
      "Designed and developed a full portfolio website for Hana — a results-driven Social Media Manager. The site showcases her services, packages, client testimonials, and portfolio work with a modern, conversion-focused design.",
    services: ["Web Design", "Next.js", "Responsive Design", "UI/UX"],
    liveUrl: "https://hannah-porfolio.vercel.app/",
    highlights: [
      "Service & pricing showcase",
      "Client testimonials section",
      "Portfolio gallery",
      "Booking/contact integration",
    ],
    colorFrom: "from-warm-yellow",
    colorTo: "to-soft-orange",
    initials: "VH",
  },
  {
    clientName: "Better Man HQ",
    clientRole: "Men's Coaching & Mindset Platform",
    description:
      "Built a bold, high-impact website for Better Man HQ — a tough-love coaching platform for men focused on discipline, financial independence, and brotherhood. Designed to convert visitors into action-takers.",
    services: ["Web Development", "Next.js", "Copywriting Layout", "SEO"],
    liveUrl: "https://www.betterman-hq.com/",
    highlights: [
      "Strong brand identity & messaging",
      "Coaching services showcase",
      "Community & brotherhood section",
      "Lead generation & contact funnel",
    ],
    colorFrom: "from-soft-orange",
    colorTo: "to-anime-gold",
    initials: "BM",
  },
  {
    clientName: "Britannia Defender Group",
    clientRole: "Land Rover Restoration Company",
    description:
      "Developed a premium website for Britannia Defender Group — a specialist restorer of classic Land Rover Defenders based in London. The site blends timeless British aesthetics with a modern, performance-driven presentation.",
    services: ["Web Development", "Next.js", "Custom Theme", "UI/UX"],
    liveUrl: "https://www.britanniadefendergroup.com/",
    highlights: [
      "Premium restoration showcase",
      "Vehicle gallery & philosophy page",
      "British craftsmanship branding",
      "Contact & enquiry integration",
    ],
    colorFrom: "from-anime-gold",
    colorTo: "to-warm-yellow",
    initials: "BD",
  },
];

export default function ClientWork() {
  return (
    <section
      id="client-work"
      className="min-h-screen py-20 px-4 relative overflow-hidden bg-gradient-to-b from-cream to-warm-beige"
    >
      <div className="absolute inset-0 dot-pattern opacity-30" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-anime text-5xl md:text-7xl mb-4 font-bold gradient-text">
            Client Work
          </h2>
          <p className="text-text-gray text-lg font-anime">
            Real projects. Real results. Real clients.
          </p>
        </motion.div>

        <div className="grid gap-10">
          {clientProjects.map((project, index) => (
            <motion.div
              key={project.clientName}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <MangaPanel variant="glass">
                <div className="flex flex-col lg:flex-row gap-5 lg:gap-8">
                  {/* Left: Browser Preview */}
                  <div className="w-full lg:w-1/2 flex-shrink-0">
                    <div className="rounded-2xl overflow-hidden border-2 border-warm-yellow/30 shadow-xl">
                      {/* Browser bar */}
                      <div className="bg-text-dark px-2 py-1.5 sm:px-3 sm:py-2 flex items-center gap-1.5 sm:gap-2">
                        <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-red-400" />
                        <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-yellow-400" />
                        <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-green-400" />
                        <div className="flex-1 mx-1.5 sm:mx-2 bg-white/10 rounded-full px-2 py-0.5 text-[10px] sm:text-xs text-white/70 font-mono truncate">
                          {project.liveUrl}
                        </div>
                      </div>
                      {/* Iframe preview — renders at 2× then scales to 50% so desktop layout fits */}
                      <div
                        className="relative w-full overflow-hidden"
                        style={{ height: "200px" }}
                      >
                        <iframe
                          src={project.liveUrl}
                          title={`${project.clientName} preview`}
                          className="absolute top-0 left-0 border-0"
                          loading="lazy"
                          sandbox="allow-scripts allow-same-origin"
                          style={{
                            width: "200%",
                            height: "400px",
                            transform: "scale(0.5)",
                            transformOrigin: "0 0",
                            pointerEvents: "none",
                          }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Right: Info */}
                  <div className="flex-1 flex flex-col justify-between">
                    {/* Client badge */}
                    <div className="w-full">
                      <div className="flex flex-row items-center gap-3 mb-3 sm:mb-4">
                        <div
                          className={`w-11 h-11 sm:w-14 sm:h-14 flex-shrink-0 rounded-2xl bg-gradient-to-br ${project.colorFrom} ${project.colorTo} flex items-center justify-center text-white font-anime font-bold text-sm sm:text-lg`}
                        >
                          {project.initials}
                        </div>
                        <div className="min-w-0">
                          <h3 className="font-anime text-lg sm:text-2xl font-bold text-text-dark leading-tight">
                            {project.clientName}
                          </h3>
                          <span className="flex items-center gap-1 text-soft-orange text-xs sm:text-sm font-anime">
                            <FontAwesomeIcon
                              icon={faUser}
                              className="text-xs"
                            />
                            {project.clientRole}
                          </span>
                        </div>
                      </div>

                      <p className="text-text-gray text-sm leading-relaxed mb-4">
                        {project.description}
                      </p>

                      {/* Highlights */}
                      <ul className="mb-4 space-y-1">
                        {project.highlights.map((item) => (
                          <li
                            key={item}
                            className="flex items-center gap-2 text-text-dark text-sm font-anime"
                          >
                            <FontAwesomeIcon
                              icon={faStar}
                              className="text-warm-yellow text-xs flex-shrink-0"
                            />
                            {item}
                          </li>
                        ))}
                      </ul>

                      {/* Tech tags */}
                      <div className="flex flex-wrap gap-2 mb-5">
                        {project.services.map((service) => (
                          <span
                            key={service}
                            className="px-3 py-1.5 bg-warm-yellow/20 rounded-full text-text-dark text-xs sm:text-sm font-anime font-medium"
                          >
                            {service}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* CTA */}
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-3xl bg-gradient-to-r from-warm-yellow to-soft-orange text-white font-anime font-semibold soft-shadow hover:shadow-xl transition-all w-full sm:w-fit"
                    >
                      <FontAwesomeIcon icon={faExternalLinkAlt} />
                      Visit Live Site
                    </motion.a>
                  </div>
                </div>
              </MangaPanel>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
