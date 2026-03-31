"use client";

import { motion } from "framer-motion";
import MangaPanel from "./MangaPanel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faExternalLinkAlt,
  faFlask,
  faCube,
  faUsers,
  faGamepad,
} from "@fortawesome/free-solid-svg-icons";

const experiments = [
  {
    title: "Stranger Things: Multiplayer Exploration",
    subtitle: "Three.js · Experimental",
    description:
      "A 3D multiplayer exploration game built with Three.js, inspired by the Stranger Things universe. Features real-time multiplayer with Google sign-in, a first-person perspective, and a dual-world environment — the Normal World and the Upside Down.",
    tech: ["Three.js", "WebGL", "Firebase", "Google Auth", "Next.js"],
    liveUrl: "https://strangerthings-rho.vercel.app/",
    highlights: [
      "Real-time multiplayer exploration",
      "First-person 3D controls (FPS)",
      "Google sign-in & progress saving",
      "Normal World & Upside Down environments",
    ],
  },
];

export default function GameDev() {
  return (
    <section
      id="game-dev"
      className="py-20 px-4 relative overflow-hidden bg-gradient-to-b from-warm-beige to-cream"
    >
      <div className="absolute inset-0 dot-pattern opacity-30" />

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-warm-yellow/20 text-soft-orange font-anime text-sm font-semibold mb-4">
            <FontAwesomeIcon icon={faFlask} />
            Experimental Lab
          </div>
          <h2 className="font-anime text-5xl md:text-7xl font-bold gradient-text mb-4">
            Game Dev
          </h2>
          <p className="text-text-gray text-lg font-anime">
            Where code meets creativity — pushing the limits of the web.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-10">
          {experiments.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <MangaPanel variant="glass">
                <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
                  {/* Left: Preview */}
                  <div className="w-full lg:w-1/2 flex-shrink-0">
                    <div className="rounded-2xl overflow-hidden border-2 border-warm-yellow/30 shadow-xl">
                      {/* Browser bar */}
                      <div className="bg-text-dark px-3 py-2 flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                        <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                        <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
                        <div className="flex-1 mx-2 bg-white/10 rounded-full px-2 py-1 text-xs text-white/70 font-mono truncate">
                          {exp.liveUrl}
                        </div>
                      </div>
                      {/* Iframe */}
                      <div className="relative w-full h-48 sm:h-64 lg:h-80">
                        <iframe
                          src={exp.liveUrl}
                          title={exp.title}
                          className="absolute inset-0 w-full h-full border-0"
                          loading="lazy"
                          sandbox="allow-scripts allow-same-origin"
                          style={{ pointerEvents: "none" }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Right: Info */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      {/* Icon + title */}
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 sm:w-14 sm:h-14 flex-shrink-0 rounded-2xl bg-gradient-to-br from-warm-yellow to-soft-orange flex items-center justify-center">
                          <FontAwesomeIcon
                            icon={faCube}
                            className="text-white text-xl sm:text-2xl"
                          />
                        </div>
                        <div className="min-w-0">
                          <h3 className="font-anime text-xl sm:text-2xl font-bold text-text-dark leading-tight">
                            {exp.title}
                          </h3>
                          <span className="flex items-center gap-1 text-soft-orange text-sm font-anime">
                            <FontAwesomeIcon
                              icon={faGamepad}
                              className="text-xs"
                            />
                            {exp.subtitle}
                          </span>
                        </div>
                      </div>

                      <p className="text-text-gray text-sm sm:text-base leading-relaxed mb-5">
                        {exp.description}
                      </p>

                      {/* Highlights */}
                      <ul className="mb-5 space-y-1">
                        {exp.highlights.map((item) => (
                          <li
                            key={item}
                            className="flex items-center gap-2 text-text-dark text-sm font-anime"
                          >
                            <FontAwesomeIcon
                              icon={faUsers}
                              className="text-warm-yellow text-xs flex-shrink-0"
                            />
                            {item}
                          </li>
                        ))}
                      </ul>

                      {/* Tech tags */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {exp.tech.map((t) => (
                          <span
                            key={t}
                            className="px-4 py-2 bg-warm-yellow/20 rounded-full text-text-dark text-sm font-anime font-medium"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* CTA */}
                    <motion.a
                      href={exp.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      className="inline-flex items-center gap-2 px-6 py-3 sm:px-8 sm:py-4 rounded-3xl bg-gradient-to-r from-warm-yellow to-soft-orange text-white font-anime font-semibold soft-shadow hover:shadow-xl transition-all w-full sm:w-fit justify-center sm:justify-start"
                    >
                      <FontAwesomeIcon icon={faExternalLinkAlt} />
                      Play Live
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
