"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface MangaPanelProps {
  children: ReactNode;
  className?: string;
  variant?: "glass" | "solid" | "gradient";
  dotPattern?: boolean;
  delay?: number;
}

export default function MangaPanel({
  children,
  className = "",
  variant = "glass",
  dotPattern = false,
  delay = 0,
}: MangaPanelProps) {
  const variantStyles = {
    glass: "glass-card",
    solid: "bg-white/90 soft-shadow",
    gradient: "bg-gradient-to-br from-white/90 to-soft-peach/50 soft-shadow",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className={`
        relative rounded-4xl p-8
        ${variantStyles[variant]}
        ${dotPattern ? "dot-pattern" : ""}
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
}
