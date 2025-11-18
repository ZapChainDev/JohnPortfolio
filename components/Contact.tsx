"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import MangaPanel from "./MangaPanel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPaperPlane,
  faUser,
  faAt,
  faMapMarkerAlt,
  faStar,
  faBriefcase,
  faCheck,
  faExclamationTriangle,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(
    null
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "1f240927-b340-4457-a45d-4ec6fab37ecd",
          name: formState.name,
          email: formState.email,
          message: formState.message,
          subject: `Portfolio Contact from ${formState.name}`,
          from_name: formState.name,
          redirect: "false",
        }),
      });

      const data = await response.json();
      console.log("Web3Forms response:", data);

      if (data.success) {
        setSubmitStatus("success");
        setFormState({ name: "", email: "", message: "" });
      } else {
        console.error("Web3Forms error:", data);
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen py-20 px-4 relative overflow-hidden"
    >
      <div className="absolute inset-0 dot-pattern opacity-30" />

      <div className="container mx-auto max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.h2
            className="font-anime text-5xl md:text-7xl mb-6 font-bold gradient-text"
            style={{
            textShadow: "2px 2px 0px #a78bfa, 4px 4px 0px #5eead4",
          }}
        >
          LET&apos;S TALK!
        </motion.h2>          {/* Speech bubble intro */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="speech-bubble inline-block font-anime text-lg mb-8"
          >
            <FontAwesomeIcon icon={faEnvelope} className="text-warm-yellow" />{" "}
            Ready to start your next project? Let&apos;s connect!{" "}
            <FontAwesomeIcon icon={faEnvelope} className="text-warm-yellow" />
          </motion.div>
        </motion.div>

        <MangaPanel variant="glass" dotPattern>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Input */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <label className="block font-anime text-warm-yellow text-lg mb-2 font-semibold">
                Your Name
              </label>
              <input
                type="text"
                value={formState.name}
                onChange={(e) =>
                  setFormState({ ...formState, name: e.target.value })
                }
                className="w-full px-5 py-3 rounded-3xl bg-white/10 backdrop-blur-sm border-2 border-warm-yellow/30 text-dark-gray font-anime focus:border-warm-yellow focus:bg-white/20 focus:outline-none transition-all"
                placeholder="Enter your name..."
                required
              />
            </motion.div>

            {/* Email Input */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <label className="block font-anime text-soft-orange text-lg mb-2 font-semibold">
                Email Address
              </label>
              <input
                type="email"
                value={formState.email}
                onChange={(e) =>
                  setFormState({ ...formState, email: e.target.value })
                }
                className="w-full px-5 py-3 rounded-3xl bg-white/10 backdrop-blur-sm border-2 border-soft-orange/30 text-dark-gray font-anime focus:border-soft-orange focus:bg-white/20 focus:outline-none transition-all"
                placeholder="your.email@example.com"
                required
              />
            </motion.div>

            {/* Message Input */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <label className="block font-anime text-warm-yellow text-lg mb-2 font-semibold">
                Your Message
              </label>
              <textarea
                value={formState.message}
                onChange={(e) =>
                  setFormState({ ...formState, message: e.target.value })
                }
                rows={6}
                className="w-full px-5 py-3 rounded-3xl bg-white/10 backdrop-blur-sm border-2 border-warm-yellow/30 text-dark-gray font-anime focus:border-warm-yellow focus:bg-white/20 focus:outline-none transition-all resize-none"
                placeholder="Tell me about your project..."
                required
              />
            </motion.div>

            {/* Status Messages */}
            {submitStatus === "success" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 rounded-2xl bg-green-500/20 border-2 border-green-500 text-green-700 font-anime text-center"
              >
                <FontAwesomeIcon icon={faCheck} className="mr-2" />
                Message sent successfully! I&apos;ll get back to you soon.
              </motion.div>
            )}

            {submitStatus === "error" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 rounded-2xl bg-red-500/20 border-2 border-red-500 text-red-700 font-anime text-center"
              >
                <FontAwesomeIcon
                  icon={faExclamationTriangle}
                  className="mr-2"
                />
                Failed to send message. Please try again or email me directly.
              </motion.div>
            )}

            {/* Submit Buttons with SFX style */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4 justify-center pt-4"
            >
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{
                  scale: isSubmitting ? 1 : 1.05,
                  y: isSubmitting ? 0 : -2,
                }}
                whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
                className={`px-10 py-4 rounded-full bg-gradient-to-r from-warm-yellow to-soft-orange text-dark-gray font-anime text-lg font-bold soft-shadow hover:shadow-lg transition-all ${
                  isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                }`}
              >
                {isSubmitting ? (
                  <>
                    <FontAwesomeIcon icon={faSpinner} spin className="mr-2" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message <FontAwesomeIcon icon={faPaperPlane} />
                  </>
                )}
              </motion.button>

              <motion.a
                href="mailto:papelirinjohnmarkdote@gmail.com"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 rounded-full border-2 border-soft-orange text-soft-orange font-anime text-lg font-semibold hover:bg-soft-orange/10 transition-all"
              >
                Email Me <FontAwesomeIcon icon={faAt} />
              </motion.a>

              <motion.a
                href="https://github.com/ZapChainDev"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 rounded-full border-2 border-anime-gold text-anime-gold font-anime text-lg font-semibold hover:bg-anime-gold/10 transition-all"
              >
                GitHub <FontAwesomeIcon icon={faGithub} />
              </motion.a>

              <motion.a
                href="https://www.linkedin.com/in/john-mark-papelirin-124085253/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 rounded-full border-2 border-warm-yellow text-warm-yellow font-anime text-lg font-semibold hover:bg-warm-yellow/10 transition-all"
              >
                LinkedIn <FontAwesomeIcon icon={faLinkedin} />
              </motion.a>

              <motion.a
                href="https://www.onlinejobs.ph/jobseekers/info/3781527"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 rounded-full border-2 border-soft-orange text-soft-orange font-anime text-lg font-semibold hover:bg-soft-orange/10 transition-all"
              >
                OnlineJobs.ph <FontAwesomeIcon icon={faBriefcase} />
              </motion.a>
            </motion.div>
          </form>

          {/* Additional contact info */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="mt-12 pt-8 border-t border-white/20"
          >
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <motion.div whileHover={{ y: -5 }}>
                <div className="font-anime font-bold text-warm-yellow text-lg mb-2">
                  <FontAwesomeIcon icon={faEnvelope} /> Email
                </div>
                <div className="font-anime text-sm text-dark-gray/80">
                  papelirinjohnmarkdote@gmail.com
                </div>
              </motion.div>

              <motion.div whileHover={{ y: -5 }}>
                <div className="font-anime font-bold text-soft-orange text-lg mb-2">
                  <FontAwesomeIcon icon={faMapMarkerAlt} /> Location
                </div>
                <div className="font-anime text-sm text-dark-gray/80">
                  Philippines
                </div>
              </motion.div>

              <motion.div whileHover={{ y: -5 }}>
                <div className="font-anime font-bold text-warm-yellow text-lg mb-2">
                  <FontAwesomeIcon icon={faStar} /> Availability
                </div>
                <div className="font-anime text-sm text-dark-gray/80">
                  Open to opportunities
                </div>
              </motion.div>
            </div>
          </motion.div>
        </MangaPanel>

        {/* Decorative floating circles */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 right-10 w-24 h-24 rounded-full bg-gradient-to-br from-warm-yellow/20 to-soft-orange/20 blur-xl"
        />

        <motion.div
          animate={{
            y: [0, 20, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute bottom-32 left-10 w-32 h-32 rounded-full bg-gradient-to-br from-soft-orange/20 to-anime-gold/20 blur-xl"
        />
      </div>
    </section>
  );
}
