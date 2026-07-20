"use client";

import { motion } from "framer-motion";
import MangaPanel from "./MangaPanel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faGraduationCap,
  faCode,
  faRocket,
  faLightbulb,
  faBriefcase,
} from "@fortawesome/free-solid-svg-icons";

export default function About() {
  const journey = [
    {
      icon: faGraduationCap,
      title: "The Foundation",
      description:
        "Computer Engineering background gives me the technical depth to build what most marketers can only describe — and understand what’s actually possible at the code level.",
      color: "from-warm-yellow to-soft-orange",
      stats: "BS Computer Engineering",
      highlight: "Tech-First",
    },
    {
      icon: faLightbulb,
      title: "The Shift",
      description:
        "Code alone doesn’t grow businesses. I combined full-stack development with marketing strategy to become a single operator who handles both sides of the growth equation.",
      color: "from-soft-orange to-anime-gold",
      stats: "Tech + Marketing",
      highlight: "Growth Focus",
    },
    {
      icon: faCode,
      title: "The Stack",
      description:
        "Next.js, WordPress, and Shopify for web. Lead pipelines, social media, and ad creation for acquisition. Everything a US small business or agency needs to grow — in one operator.",
      color: "from-anime-gold to-warm-yellow",
      stats: "Full-Stack + GTM",
      highlight: "Full-Funnel",
    },
    {
      icon: faBriefcase,
      title: "The Work",
      description:
        "Delivered web systems, lead generation pipelines, and marketing operations for US clients — saving time, cutting overhead, and generating qualified opportunities.",
      color: "from-warm-yellow to-soft-orange",
      stats: "US Clients",
      highlight: "Results Driven",
    },
    {
      icon: faRocket,
      title: "The Edge",
      description:
        "Small businesses and agencies get an operator who handles web, leads, and marketing as one unified system — not three separate vendors billing separately.",
      color: "from-soft-orange to-anime-gold",
      stats: "One Operator",
      highlight: "All-in-One",
    },
  ];

  return (
    <section
      id="about"
      className="min-h-screen py-20 px-4 relative overflow-hidden bg-gradient-to-b from-cream to-warm-beige"
    >
      {/* Floating background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-warm-yellow/20 rounded-full blur-3xl"
          animate={{ y: [0, 50, 0], x: [0, 30, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-40 h-40 bg-soft-orange/20 rounded-full blur-3xl"
          animate={{ y: [0, -40, 0], x: [0, -20, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-warm-yellow to-soft-orange mb-6 shadow-lg">
            <FontAwesomeIcon icon={faUser} className="text-white text-3xl" />
          </div>
          <h2 className="font-anime text-5xl md:text-6xl font-bold gradient-text mb-4">
            About Me
          </h2>
          <p className="font-anime text-lg font-semibold text-text-gray/80 mb-2">
            John Mark Dote Papelirin
          </p>
          <p className="font-anime text-xl text-text-gray max-w-2xl mx-auto">
            Bridging web technology and marketing operations to drive real
            business growth
          </p>
        </motion.div>

        {/* Journey Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {journey.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <MangaPanel variant="glass">
                <div className="p-6 relative overflow-hidden h-full">
                  {/* Animated background glow on hover */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0`}
                    whileHover={{ opacity: 0.1 }}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Icon and badge */}
                  <div className="flex items-start justify-between mb-4 relative z-10">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg`}
                    >
                      <FontAwesomeIcon
                        icon={item.icon}
                        className="text-white text-2xl"
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.2 }}
                      className={`px-3 py-1 rounded-full bg-gradient-to-r ${item.color} text-white text-xs font-anime font-bold shadow-md`}
                    >
                      {item.highlight}
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    <div className="flex items-baseline justify-between mb-3">
                      <h3 className="font-anime text-2xl font-bold gradient-text">
                        {item.title}
                      </h3>
                      <span className="font-anime text-sm text-text-gray/70 font-medium">
                        {item.stats}
                      </span>
                    </div>

                    <p className="font-anime text-base text-text-gray leading-relaxed mb-4">
                      {item.description}
                    </p>

                    {/* Decorative progress bar */}
                    <motion.div
                      className="h-1 bg-text-gray/10 rounded-full overflow-hidden"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                    >
                      <motion.div
                        className={`h-full bg-gradient-to-r ${item.color} rounded-full`}
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                      />
                    </motion.div>
                  </div>

                  {/* Corner decoration */}
                  <div
                    className={`absolute bottom-4 right-4 w-2 h-2 rounded-full bg-gradient-to-br ${item.color} opacity-30`}
                  />
                </div>
              </MangaPanel>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
