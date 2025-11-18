"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import MangaPanel from "./MangaPanel";

export default function About() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentLevel, setCurrentLevel] = useState(0);

  return (
    <section
      id="about"
      className="min-h-screen py-20 px-4 relative overflow-hidden bg-gradient-to-b from-sky-200 to-green-200"
    >
      {/* Game UI - Score */}
      <div className="fixed top-24 right-8 z-50 glass-card px-6 py-3 rounded-3xl">
        <div className="font-anime font-bold text-warm-yellow text-2xl">
          ⭐ {coinsCollected} Coins
        </div>
      </div>

      {/* Game Instructions */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="absolute top-28 left-1/2 -translate-x-1/2 z-40 text-center"
      >
        <div className="glass-card px-6 py-3 rounded-full">
          <p className="font-anime text-sm text-dark-gray">
            Press <kbd className="px-2 py-1 bg-white/50 rounded">SPACE</kbd> to
            jump •<kbd className="px-2 py-1 bg-white/50 rounded mx-1">←</kbd>
            <kbd className="px-2 py-1 bg-white/50 rounded">→</kbd> to move
          </p>
        </div>
      </motion.div>

      {/* Clouds */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-6xl opacity-70"
          style={{
            top: `${20 + Math.random() * 30}%`,
            left: `${i * 25}%`,
          }}
          animate={{
            x: [0, -2000],
          }}
          transition={{
            duration: 30 + Math.random() * 10,
            repeat: Infinity,
            ease: "linear",
            delay: i * 2,
          }}
        >
          ☁️
        </motion.div>
      ))}

      {/* Game Ground */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-green-600 to-green-400" />

      {/* Pixel platforms */}
      <motion.div
        className="absolute bottom-32 h-4 bg-gradient-to-r from-amber-600 to-amber-700 rounded"
        style={{ left: "10%", width: "200px" }}
      />
      <motion.div
        className="absolute bottom-48 h-4 bg-gradient-to-r from-amber-600 to-amber-700 rounded"
        style={{ left: "35%", width: "200px" }}
      />
      <motion.div
        className="absolute bottom-40 h-4 bg-gradient-to-r from-amber-600 to-amber-700 rounded"
        style={{ left: "65%", width: "200px" }}
      />

      {/* Floating Coins */}
      {[150, 450, 750].map((pos, i) => (
        <motion.div
          key={i}
          className="absolute text-5xl cursor-pointer"
          style={{
            left: `${pos}px`,
            bottom: "250px",
          }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 360],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.3,
          }}
          whileHover={{ scale: 1.5 }}
          onClick={() => setCoinsCollected((prev) => prev + 10)}
        >
          🪙
        </motion.div>
      ))}

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Game Character */}
        <motion.div
          className="absolute text-7xl cursor-pointer"
          style={{
            left: `${characterPosition}px`,
            bottom: isJumping ? "300px" : "128px",
          }}
          animate={{
            bottom: isJumping ? "300px" : "128px",
          }}
          transition={{
            type: "spring",
            damping: 10,
            stiffness: 100,
          }}
        >
          🧑‍💻
        </motion.div>

        {/* Story Panels as Game Levels */}
        <div className="relative pt-32 pb-32 space-y-48">
          {/* Level 1: The Beginning */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", damping: 15 }}
            className="relative"
          >
            <div className="absolute -top-8 left-0 font-anime text-2xl font-bold text-warm-yellow">
              🎮 LEVEL 1
            </div>
            <MangaPanel variant="glass">
              <div className="relative">
                {/* Pixel art style border */}
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-warm-yellow rounded"></div>
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-soft-orange rounded"></div>
                <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-soft-orange rounded"></div>
                <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-warm-yellow rounded"></div>

                <div className="text-center space-y-4">
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="text-8xl"
                  >
                    📖
                  </motion.div>
                  <h3 className="font-anime text-4xl font-bold gradient-text">
                    The Beginning
                  </h3>
                  <p className="font-anime text-xl text-dark-gray leading-relaxed max-w-2xl mx-auto">
                    A young{" "}
                    <span className="font-bold text-warm-yellow">
                      Computer Engineering student
                    </span>{" "}
                    discovered the magic of creating things from code. The
                    adventure begins! 🚀
                  </p>
                  <div className="flex justify-center gap-4 pt-4">
                    {["Student", "Curious", "Eager"].map((tag) => (
                      <span
                        key={tag}
                        className="px-4 py-2 bg-gradient-to-r from-warm-yellow/30 to-soft-orange/30 rounded-full font-anime font-bold"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </MangaPanel>
          </motion.div>

          {/* Level 2: Power-Ups (Skills) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", damping: 15, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -top-8 left-0 font-anime text-2xl font-bold text-soft-orange">
              🎮 LEVEL 2
            </div>
            <MangaPanel variant="glass">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-soft-orange rounded"></div>
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-anime-gold rounded"></div>
                <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-anime-gold rounded"></div>
                <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-soft-orange rounded"></div>

                <div className="text-center space-y-6">
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="text-8xl"
                  >
                    ⚡
                  </motion.div>
                  <h3 className="font-anime text-4xl font-bold gradient-text">
                    Power-Up Collection!
                  </h3>
                  <p className="font-anime text-xl text-dark-gray leading-relaxed max-w-2xl mx-auto">
                    Collected powerful skills through training! Each one makes
                    you stronger! 💪
                  </p>
                  <div className="grid grid-cols-3 gap-4 pt-4">
                    {[
                      { skill: "JavaScript", icon: "🟨" },
                      { skill: "React", icon: "⚛️" },
                      { skill: "Next.js", icon: "▲" },
                      { skill: "Node.js", icon: "🟩" },
                      { skill: "TypeScript", icon: "🔷" },
                      { skill: "Express", icon: "🚂" },
                    ].map((item, index) => (
                      <motion.div
                        key={item.skill}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          type: "spring",
                          delay: 0.1 * index,
                          damping: 10,
                        }}
                        whileHover={{
                          scale: 1.2,
                          y: -10,
                          rotate: [0, -10, 10, 0],
                        }}
                        onClick={() => setCoinsCollected((prev) => prev + 5)}
                        className="glass-card px-4 py-3 rounded-2xl cursor-pointer hover:bg-gradient-to-r hover:from-warm-yellow hover:to-soft-orange transition-all"
                      >
                        <div className="text-4xl mb-2">{item.icon}</div>
                        <div className="font-anime font-bold text-sm">
                          {item.skill}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </MangaPanel>
          </motion.div>

          {/* Level 3: Boss Fight (Current Role) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", damping: 15, delay: 0.4 }}
            className="relative"
          >
            <div className="absolute -top-8 left-0 font-anime text-2xl font-bold text-anime-gold flex items-center gap-2">
              👑 BOSS LEVEL
            </div>
            <MangaPanel variant="gradient">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-yellow-400 rounded animate-pulse"></div>
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-yellow-400 rounded animate-pulse"></div>
                <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-yellow-400 rounded animate-pulse"></div>

                <div className="text-center space-y-6">
                  <motion.div
                    animate={{
                      y: [0, -30, 0],
                      rotate: [0, 360],
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="text-8xl"
                  >
                    🚀
                  </motion.div>
                  <h3 className="font-anime text-4xl font-bold text-white">
                    Current Quest
                  </h3>
                  <p className="font-anime text-xl text-white/90 leading-relaxed max-w-2xl mx-auto">
                    Fighting as a{" "}
                    <span className="font-bold text-yellow-300">
                      Technical Virtual Assistant
                    </span>{" "}
                    with 1+ years of battle experience! Mission: Automate
                    everything! 🎯
                  </p>
                  <div className="grid grid-cols-3 gap-4 pt-4">
                    {[
                      { icon: "⚙️", text: "Automation" },
                      { icon: "💻", text: "Full Stack" },
                      { icon: "🎯", text: "Problem Solver" },
                    ].map((item, index) => (
                      <motion.div
                        key={item.text}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          type: "spring",
                          delay: 0.2 * index,
                          damping: 10,
                        }}
                        whileHover={{ scale: 1.3, rotate: 360 }}
                        className="bg-white/20 backdrop-blur-sm px-4 py-3 rounded-2xl cursor-pointer"
                      >
                        <div className="text-5xl mb-2">{item.icon}</div>
                        <div className="font-anime font-bold text-white text-sm">
                          {item.text}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </MangaPanel>
          </motion.div>

          {/* Final Level: Game Over / Continue? */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", damping: 15, delay: 0.6 }}
            className="relative"
          >
            <div className="absolute -top-8 left-0 font-anime text-2xl font-bold gradient-text flex items-center gap-2 animate-pulse">
              🏆 GAME COMPLETE
            </div>
            <MangaPanel variant="glass">
              <div className="text-center space-y-8 py-8">
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 360],
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="text-9xl"
                >
                  🏆
                </motion.div>

                <div>
                  <h3 className="font-anime text-5xl font-bold gradient-text mb-4">
                    CONTINUE?
                  </h3>
                  <p className="font-anime text-2xl text-dark-gray mb-2">
                    The next level awaits with{" "}
                    <span className="font-bold text-warm-yellow">YOU</span>!
                  </p>
                  <p className="font-anime text-lg text-dark-gray/70">
                    Press START to begin our co-op adventure
                  </p>
                </div>

                {/* Arcade-style button */}
                <motion.div
                  whileHover={{
                    scale: 1.1,
                    y: -10,
                  }}
                  whileTap={{ scale: 0.9 }}
                  className="inline-block"
                >
                  <motion.a
                    href="#contact"
                    className="relative inline-flex items-center gap-4 px-12 py-6 rounded-2xl bg-gradient-to-r from-warm-yellow to-soft-orange text-white font-anime font-bold text-2xl shadow-2xl cursor-pointer overflow-hidden"
                    animate={{
                      boxShadow: [
                        "0 0 30px rgba(255, 217, 61, 0.5)",
                        "0 0 50px rgba(255, 184, 77, 0.8)",
                        "0 0 30px rgba(255, 217, 61, 0.5)",
                      ],
                    }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-white/20"
                      animate={{ x: ["-100%", "100%"] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    />
                    <span className="relative z-10">🎮 START GAME</span>
                    <motion.span
                      className="relative z-10 text-3xl"
                      animate={{ x: [0, 10, 0] }}
                      transition={{ duration: 0.8, repeat: Infinity }}
                    >
                      ▶
                    </motion.span>
                  </motion.a>
                </motion.div>

                {/* Insert Coin animation */}
                <motion.div
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="font-anime text-sm text-dark-gray/50"
                >
                  🪙 INSERT COIN TO CONTINUE 🪙
                </motion.div>
              </div>
            </MangaPanel>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
