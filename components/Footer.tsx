"use client";

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faBolt, faLink } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-16 px-4 overflow-hidden bg-cream/50">
      {/* Subtle dot pattern */}
      <div className="absolute inset-0 dot-pattern opacity-20" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          {/* About Me */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-3"
          >
            <h3 className="font-anime font-bold text-xl text-warm-yellow mb-3">
              <FontAwesomeIcon icon={faUser} /> About Me
            </h3>
            <div className="font-anime text-sm text-dark-gray/80 space-y-1">
              <p>● Full Stack Developer</p>
              <p>● Technical VA</p>
              <p>● Automation Specialist</p>
              <p>● Problem Solver</p>
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="space-y-3"
          >
            <h3 className="font-anime font-bold text-xl text-soft-orange mb-3">
              <FontAwesomeIcon icon={faBolt} /> Tech Stack
            </h3>
            <div className="font-anime text-sm text-dark-gray/80 space-y-1">
              <p>● React.js & Next.js</p>
              <p>● Node.js & Express</p>
              <p>● TypeScript</p>
              <p>● Tailwind CSS</p>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="space-y-3"
          >
            <h3 className="font-anime font-bold text-xl text-warm-yellow mb-3">
              <FontAwesomeIcon icon={faLink} /> Connect
            </h3>
            <div className="space-y-2">
              <motion.a
                href="https://github.com/ZapChainDev"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 5, scale: 1.02 }}
                className="block font-anime text-sm text-dark-gray/80 hover:text-soft-orange transition-colors"
              >
                → GitHub
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/john-mark-papelirin-124085253/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 5, scale: 1.02 }}
                className="block font-anime text-sm text-dark-gray/80 hover:text-soft-orange transition-colors"
              >
                → LinkedIn
              </motion.a>
              <motion.a
                href="https://www.onlinejobs.ph/jobseekers/info/3781527"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 5, scale: 1.02 }}
                className="block font-anime text-sm text-dark-gray/80 hover:text-soft-orange transition-colors"
              >
                → OnlineJobs.ph
              </motion.a>
              <motion.a
                href="mailto:papelirinjohnmarkdote@gmail.com"
                whileHover={{ x: 5, scale: 1.02 }}
                className="block font-anime text-sm text-dark-gray/80 hover:text-soft-orange transition-colors"
              >
                → Email Me
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="h-px bg-gradient-to-r from-transparent via-warm-yellow to-transparent mb-8"
        />

        {/* Copyright section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center space-y-3"
        >
          <p className="font-anime text-sm text-dark-gray/70">
            © {currentYear} John Mark. All rights reserved.
          </p>
          <motion.div
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="inline-flex items-center gap-3 font-anime text-xs text-dark-gray/60"
          >
            <FontAwesomeIcon icon={faBolt} className="text-warm-yellow" />
            <span>Built with Next.js, Tailwind & Framer Motion</span>
            <FontAwesomeIcon icon={faBolt} className="text-soft-orange" />
          </motion.div>
        </motion.div>
      </div>

      {/* Floating decorative circles */}
      <motion.div
        animate={{
          x: [0, 30, 0],
          y: [0, -20, 0],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-10 right-20 w-20 h-20 rounded-full bg-gradient-to-br from-warm-yellow/10 to-soft-orange/10 blur-2xl"
      />
      <motion.div
        animate={{
          x: [0, -20, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute bottom-10 left-20 w-32 h-32 rounded-full bg-gradient-to-br from-soft-orange/10 to-anime-gold/10 blur-2xl"
      />
    </footer>
  );
}
