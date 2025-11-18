"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import MangaPanel from "./MangaPanel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faBlog,
  faRobot,
  faCreditCard,
  faFire,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const skillCategories = [
  {
    title: "Web Development",
    icon: faCode,
    color: "from-warm-yellow to-soft-orange",
    description: "React, Next.js, TypeScript",
    details: ["Responsive Design", "Modern Frameworks", "Clean Code"],
  },
  {
    title: "WordPress",
    icon: faBlog,
    color: "from-soft-orange to-anime-gold",
    description: "CMS Development",
    details: ["Custom Themes", "Plugin Integration", "SEO Optimization"],
  },
  {
    title: "Stripe Payment",
    icon: faCreditCard,
    color: "from-anime-gold to-warm-yellow",
    description: "Payment Integration",
    details: ["Secure Checkout", "Subscriptions", "Webhooks"],
  },
  {
    title: "Firebase",
    icon: faFire,
    color: "from-warm-yellow to-soft-orange",
    description: "Backend Services",
    details: ["Authentication", "Real-time DB", "Cloud Functions"],
  },
  {
    title: "AI Tools",
    icon: faRobot,
    color: "from-soft-orange to-anime-gold",
    description: "Development Assistants",
    details: ["Replit", "Bolt", "GitHub Copilot"],
  },
];

export default function Skills() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % skillCategories.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % skillCategories.length);
  };

  const prevSlide = () => {
    setIsAutoPlaying(false);
    setCurrentIndex(
      (prev) => (prev - 1 + skillCategories.length) % skillCategories.length
    );
  };

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  return (
    <section
      id="skills"
      className="min-h-screen py-20 px-4 relative bg-gradient-to-b from-warm-beige to-cream overflow-hidden"
    >
      <div className="absolute inset-0 dot-pattern opacity-30" />

      <div className="container mx-auto max-w-4xl relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-anime text-5xl md:text-7xl mb-16 text-center font-bold gradient-text"
        >
          My Skills
        </motion.h2>

        {/* Carousel Container */}
        <div className="relative px-12">
          {/* Previous Button */}
          <motion.button
            onClick={prevSlide}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-gradient-to-br from-warm-yellow to-soft-orange text-white flex items-center justify-center shadow-lg"
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </motion.button>

          {/* Carousel Slides */}
          <div className="overflow-hidden">
            <motion.div
              className="flex"
              animate={{ x: `-${currentIndex * 100}%` }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {skillCategories.map((skill, index) => (
                <div key={skill.title} className="min-w-full px-2">
                  <MangaPanel variant="glass">
                    <div className="p-8 relative overflow-hidden">
                      {/* Animated background glow */}
                      <motion.div
                        className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-10`}
                        animate={{ opacity: [0.05, 0.15, 0.05] }}
                        transition={{ duration: 3, repeat: Infinity }}
                      />

                      {/* Icon */}
                      <div className="flex items-start gap-6 mb-6 relative z-10">
                        <motion.div
                          animate={{ rotate: [0, 360] }}
                          transition={{
                            duration: 20,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                          className={`flex-shrink-0 w-20 h-20 rounded-2xl bg-gradient-to-br ${skill.color} flex items-center justify-center shadow-lg`}
                        >
                          <FontAwesomeIcon
                            icon={skill.icon}
                            className="text-white text-3xl"
                          />
                        </motion.div>

                        <div className="flex-1">
                          <h3 className="font-anime text-3xl font-bold gradient-text mb-2">
                            {skill.title}
                          </h3>
                          <p className="font-anime text-lg text-text-gray/80">
                            {skill.description}
                          </p>
                        </div>
                      </div>

                      {/* Details list */}
                      <div className="space-y-3 relative z-10 mt-6">
                        {skill.details.map((detail, idx) => (
                          <motion.div
                            key={detail}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className="flex items-center gap-3"
                          >
                            <div
                              className={`w-2 h-2 rounded-full bg-gradient-to-r ${skill.color}`}
                            />
                            <span className="font-anime text-base text-text-gray">
                              {detail}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </MangaPanel>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Next Button */}
          <motion.button
            onClick={nextSlide}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-gradient-to-br from-warm-yellow to-soft-orange text-white flex items-center justify-center shadow-lg"
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </motion.button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {skillCategories.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-gradient-to-r from-warm-yellow to-soft-orange w-8"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
