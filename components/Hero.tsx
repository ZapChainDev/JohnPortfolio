"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import MangaPanel from "./MangaPanel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  faLightbulb,
  faBriefcase,
  faEnvelope,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";

export default function Hero() {
  const [text, setText] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const fullText =
    "Hi, I'm John Mark — Full Stack Dev, Automation Specialist & Technical VA.";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 50);

    return () => clearInterval(timer);
  }, []);

  const navItems = [
    { id: "hero", icon: faHome, label: "Home" },
    { id: "about", icon: faUser, label: "About" },
    { id: "skills", icon: faLightbulb, label: "Skills" },
    { id: "projects", icon: faBriefcase, label: "Projects" },
    { id: "contact", icon: faEnvelope, label: "Contact" },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      window.history.replaceState(null, "", window.location.pathname);
    }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const query = searchQuery.toLowerCase().trim();

    if (!query) return;

    // Search keywords mapping
    const searchMap: { [key: string]: string } = {
      about: "about",
      skills: "skills",
      projects: "projects",
      experience: "experience",
      contact: "contact",
      home: "hero",
      web: "skills",
      development: "skills",
      wordpress: "skills",
      stripe: "skills",
      firebase: "skills",
      ai: "skills",
      work: "experience",
      portfolio: "projects",
      email: "contact",
      github: "contact",
      linkedin: "contact",
    };

    // Find matching section
    for (const [keyword, section] of Object.entries(searchMap)) {
      if (query.includes(keyword)) {
        scrollToSection(section);
        setSearchQuery("");
        return;
      }
    }

    // Default to projects if no match
    scrollToSection("projects");
    setSearchQuery("");
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col relative overflow-hidden px-4"
    >
      {/* Floating circles decoration */}
      <div className="absolute inset-0 dot-pattern opacity-40" />

      {/* Search Bar - Top */}
      <motion.div
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="relative z-20 pt-8 pb-4"
      >
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSearch} className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search portfolio... (e.g., skills, projects, contact)"
              className="w-full px-6 py-4 pl-14 rounded-full bg-white/90 backdrop-blur-sm border-2 border-gray-200 text-dark-gray font-anime focus:border-warm-yellow focus:outline-none transition-all shadow-sm"
            />
            <button
              type="submit"
              className="absolute left-5 top-1/2 -translate-y-1/2"
            >
              <FontAwesomeIcon
                icon={faSearch}
                className="w-5 h-5 text-gray-400 hover:text-warm-yellow transition-colors"
              />
            </button>
          </form>
        </div>
      </motion.div>

      {/* Vertical Navigation - Left Side */}
      <motion.nav
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="fixed left-6 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-4"
      >
        {navItems.map((item, index) => (
          <motion.button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.6 + index * 0.1 }}
            whileHover={{ scale: 1.15, x: 5 }}
            whileTap={{ scale: 0.95 }}
            className={`group relative w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
              index === 0
                ? "bg-gradient-to-br from-warm-yellow to-soft-orange soft-shadow"
                : "bg-white/80 backdrop-blur-sm border-2 border-gray-200 hover:border-warm-yellow hover:bg-warm-yellow/10"
            }`}
            title={item.label}
          >
            <FontAwesomeIcon
              icon={item.icon}
              className={`w-4 h-4 ${
                index === 0
                  ? "text-white"
                  : "text-gray-400 group-hover:text-warm-yellow"
              } transition-colors`}
            />

            {/* Tooltip */}
            <span className="absolute left-full ml-4 px-3 py-1 rounded-full bg-white text-text-dark text-sm font-anime font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg border border-warm-yellow/20">
              {item.label}
            </span>
          </motion.button>
        ))}
      </motion.nav>

      {/* Floating elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0"
      >
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-16 h-16 rounded-full bg-gradient-to-br from-warm-yellow/20 to-soft-orange/10"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </motion.div>

      {/* Hero Content */}
      <div className="flex-1 flex items-center justify-center">
        <div className="relative z-10 w-full max-w-6xl">
          <MangaPanel variant="glass" className="p-10 md:p-16">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Text Content */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <motion.h1 className="font-anime text-4xl md:text-6xl mb-6 text-text-dark font-bold leading-tight">
                  {text}
                  <motion.span
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                    className="gradient-text"
                  >
                    |
                  </motion.span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 3 }}
                  className="text-lg md:text-xl text-text-gray font-anime mb-8"
                >
                  Building beautiful web experiences with clean code{" "}
                  <FontAwesomeIcon
                    icon={faLightbulb}
                    className="text-warm-yellow"
                  />
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 3.2 }}
                  className="flex flex-wrap gap-4 mt-8"
                >
                  <motion.a
                    href="#projects"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-8 py-4 rounded-3xl bg-gradient-to-r from-warm-yellow to-soft-orange text-white font-anime font-semibold text-lg soft-shadow hover:shadow-xl transition-all"
                  >
                    View Projects
                  </motion.a>

                  <motion.a
                    href="#contact"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-8 py-4 rounded-3xl bg-white/80 text-text-dark font-anime font-semibold text-lg soft-shadow hover:bg-white transition-all"
                  >
                    Let's Talk
                  </motion.a>
                </motion.div>
              </motion.div>

              {/* Hero Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="relative flex items-center justify-center"
              >
                <motion.div
                  animate={{ y: [0, -20, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="relative w-full max-w-md"
                >
                  <Image
                    src="/heropic/Heropic.png"
                    alt="John Mark - Full Stack Developer"
                    width={500}
                    height={500}
                    priority
                    className="w-full h-auto drop-shadow-2xl"
                  />

                  {/* Glow effect behind image */}
                  <div className="absolute inset-0 -z-10 blur-3xl opacity-30 bg-gradient-to-br from-warm-yellow via-soft-orange to-anime-gold rounded-full transform scale-75" />
                </motion.div>
              </motion.div>
            </div>
          </MangaPanel>
        </div>
      </div>
    </section>
  );
}
