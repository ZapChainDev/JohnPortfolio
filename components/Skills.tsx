"use client";

import { motion } from "framer-motion";
import MangaPanel from "./MangaPanel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faBlog,
  faRobot,
  faCreditCard,
  faFire,
  faBullseye,
  faStore,
  faPaintBrush,
  faBullhorn,
  faVideo,
  faGlobe,
  faChartLine,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";

const serviceGroups = [
  {
    group: "Web Operations",
    icon: faCode,
    color: "from-warm-yellow to-soft-orange",
    tagline: "Fast, conversion-ready web infrastructure",
    skills: [
      { name: "Next.js & React Apps", icon: faCode },
      { name: "WordPress Custom Themes", icon: faBlog },
      { name: "Shopify E-Commerce Stores", icon: faStore },
      { name: "Stripe Payment Integration", icon: faCreditCard },
      { name: "Firebase Backend & Auth", icon: faFire },
      { name: "Zapier & CRM Automation", icon: faRobot },
    ],
  },
  {
    group: "Lead Gen & Outreach",
    icon: faBullseye,
    color: "from-soft-orange to-anime-gold",
    tagline: "Qualified pipelines for US small businesses",
    skills: [
      { name: "Prospect List Building", icon: faBullseye },
      { name: "Google Maps & Directory Research", icon: faGlobe },
      { name: "Contact Verification", icon: faCheck },
      { name: "Landing Pages & Lead Capture", icon: faPaintBrush },
      { name: "Conversion Funnel Setup", icon: faChartLine },
      { name: "Outreach Campaign Support", icon: faBullhorn },
    ],
  },
  {
    group: "Marketing Operations",
    icon: faBullhorn,
    color: "from-anime-gold to-warm-yellow",
    tagline: "Content and campaigns that build authority",
    skills: [
      { name: "Social Media Management", icon: faBullhorn },
      { name: "TikTok Ads & Short-Form Video", icon: faVideo },
      { name: "Content Strategy & Scheduling", icon: faBlog },
      { name: "Analytics & Performance Reports", icon: faChartLine },
      { name: "AI-Assisted Content Workflows", icon: faRobot },
      { name: "Brand Consistency & Messaging", icon: faPaintBrush },
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen py-20 px-4 relative bg-gradient-to-b from-warm-beige to-cream overflow-hidden"
    >
      <div className="absolute inset-0 dot-pattern opacity-30" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          <motion.h2 className="font-anime text-5xl md:text-7xl mb-4 font-bold gradient-text">
            What I Do
          </motion.h2>
          <p className="font-anime text-lg text-text-gray max-w-xl mx-auto">
            Three service areas, one operator. Built for US small businesses and
            agencies.
          </p>
        </motion.div>

        {/* 3-Pillar Grid */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {serviceGroups.map((group, groupIndex) => (
            <motion.div
              key={group.group}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: groupIndex * 0.15 }}
              whileHover={{ y: -6, scale: 1.02 }}
            >
              <MangaPanel variant="glass">
                <div className="p-6 relative overflow-hidden h-full">
                  {/* Background glow */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${group.color} opacity-5`}
                    animate={{ opacity: [0.04, 0.1, 0.04] }}
                    transition={{ duration: 4, repeat: Infinity }}
                  />

                  {/* Group header */}
                  <div className="flex items-center gap-4 mb-2 relative z-10">
                    <div
                      className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${group.color} flex items-center justify-center shadow-md flex-shrink-0`}
                    >
                      <FontAwesomeIcon
                        icon={group.icon}
                        className="text-white text-2xl"
                      />
                    </div>
                    <div>
                      <h3 className="font-anime text-xl font-bold gradient-text leading-tight">
                        {group.group}
                      </h3>
                    </div>
                  </div>

                  <p className="font-anime text-sm text-text-gray/80 mb-5 relative z-10">
                    {group.tagline}
                  </p>

                  {/* Divider */}
                  <div
                    className={`h-px bg-gradient-to-r ${group.color} opacity-30 mb-5`}
                  />

                  {/* Skills list */}
                  <ul className="space-y-3 relative z-10">
                    {group.skills.map((skill, skillIndex) => (
                      <motion.li
                        key={skill.name}
                        initial={{ opacity: 0, x: -16 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          delay: groupIndex * 0.15 + skillIndex * 0.06,
                        }}
                        className="flex items-center gap-3"
                      >
                        <div
                          className={`w-6 h-6 rounded-lg bg-gradient-to-br ${group.color} flex items-center justify-center flex-shrink-0 opacity-80`}
                        >
                          <FontAwesomeIcon
                            icon={skill.icon}
                            className="text-white text-xs"
                          />
                        </div>
                        <span className="font-anime text-sm text-text-gray">
                          {skill.name}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </MangaPanel>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
