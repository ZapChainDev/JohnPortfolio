"use client";

import { motion } from "framer-motion";
import MangaPanel from "./MangaPanel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLightbulb,
  faTruck,
  faComments,
  faHammer,
} from "@fortawesome/free-solid-svg-icons";

const projects = [
  {
    title: "SharingEdge",
    description: "GPT-powered idea evaluator with Stripe payment integration",
    tech: ["Next.js", "OpenAI", "Stripe", "PostgreSQL"],
    link: "https://sharingedge.com/",
    icon: faLightbulb,
  },
  {
    title: "YouTubeTruckers",
    description: "Interactive voting system with YouTube API integration",
    tech: ["WordPress", "YouTube API", "Custom Plugins"],
    link: "https://youtubetruckers.com/",
    icon: faTruck,
  },
  {
    title: "Best Carpet Installers Near Me",
    description:
      "Local service directory with search and booking functionality",
    tech: ["WordPress", "SEO", "Local Business"],
    link: "https://bestcarpetinstallersnearme.com/",
    icon: faHammer,
  },
  {
    title: "Cross-Cultural Chat",
    description: "Real-time chat application with Firebase backend (Ongoing)",
    tech: ["Node.js", "Firebase", "Real-time DB", "Authentication"],
    link: "#",
    icon: faComments,
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
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
          Featured Projects
        </motion.h2>

        <div className="grid md:grid-cols-1 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <MangaPanel variant="glass">
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Project Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-warm-yellow to-soft-orange flex items-center justify-center">
                      <FontAwesomeIcon
                        icon={project.icon}
                        className="text-white text-4xl"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="font-anime text-3xl font-bold text-text-dark mb-3">
                      {project.title}
                    </h3>

                    <p className="text-text-gray mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-4 py-2 bg-warm-yellow/20 rounded-full text-text-dark text-sm font-anime font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action button */}
                    <motion.a
                      href={project.link}
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      className="inline-block px-8 py-4 rounded-3xl bg-gradient-to-r from-warm-yellow to-soft-orange text-white font-anime font-semibold soft-shadow hover:shadow-xl transition-all"
                    >
                      View Project →
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
