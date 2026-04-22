/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Heart,
  Star,
  Calendar,
  BookOpen,
  Lock,
  Sparkles,
  Instagram,
  Music,
  Plane,
} from "lucide-react";

const TARGET_DATE = new Date("2026-04-28T00:00:00").getTime();

export default function App() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = TARGET_DATE - now;

      if (distance < 0) {
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
        ),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const fadeUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 1.2, ease: [0.4, 0, 0.2, 1] },
  };

  return (
    <main className="min-h-screen relative overflow-x-hidden selection:bg-primary-container selection:text-primary">
      {/* Texture Overlay */}
      <div className="fixed inset-0 paper-texture pointer-events-none z-0"></div>

      {/* Hero Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24 flex flex-col md:flex-row items-center gap-12 md:gap-16">
        <motion.div className="flex-1 text-center md:text-left" {...fadeUp}>
          <div className="flex items-center justify-center md:justify-start gap-3 mb-8">
            <span className="w-12 h-px bg-secondary opacity-60"></span>
            <span className="font-sans text-[10px] md:text-xs font-semibold text-secondary tracking-[0.2em] uppercase">
              The Celebration Awaits
            </span>
          </div>

          <h1 className="font-serif text-5xl md:text-7xl text-primary mb-8 leading-[1.1] tracking-tight">
            Counting the moments until your day.
          </h1>

          <p className="font-sans text-lg md:text-xl text-on-surface-variant max-w-lg mb-12 italic leading-relaxed opacity-90 mx-auto md:mx-0">
            This is a private sanctuary built just for you. Every pixel and
            every word is a testament to the beautiful soul you are. We’re
            almost there.
          </p>

          <div className="inline-flex items-center gap-4 px-6 py-4 bg-white/40 backdrop-blur-md border border-white/40 rounded-2xl blush-shadow">
            <Lock className="w-4 h-4 text-secondary" strokeWidth={1.5} />
            <span className="font-sans text-[10px] font-bold text-primary tracking-widest uppercase">
              Private Access: For Her Eyes Only
            </span>
          </div>
        </motion.div>

        <motion.div
          className="flex-1 relative w-full"
          initial={{ opacity: 0, scale: 0.95, rotate: 2 }}
          animate={{ opacity: 1, scale: 1, rotate: 2 }}
          whileHover={{ rotate: 0 }}
          transition={{ duration: 1.5, ease: [0.4, 0, 0.2, 1] }}
        >
          <div className="absolute -top-12 -right-8 text-secondary/20 block">
            <Sparkles className="w-16 h-16 md:w-24 md:h-24" strokeWidth={1} />
          </div>

          <div className="relative z-10 p-4 bg-white blush-shadow rounded-3xl overflow-hidden group">
            <img
              src="picture.jpeg"
              alt="The Momo"
              className="w-full h-[500px] md:h-[650px] object-cover rounded-2xl grayscale-[30%] group-hover:grayscale-0 transition-all duration-1000 ease-out scale-105 group-hover:scale-100"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="absolute -bottom-10 -left-10 w-40 h-40 border border-secondary/10 rounded-full"></div>
        </motion.div>
      </section>

      {/* Countdown Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-32">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block p-4 rounded-full border border-secondary/20 mb-6"
          >
            <Calendar className="w-8 h-8 text-secondary" strokeWidth={1.5} />
          </motion.div>
          <h2 className="font-serif text-3xl md:text-5xl text-primary">
            The Final Countdown
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {[
            { label: "Days", value: timeLeft.days },
            { label: "Hours", value: timeLeft.hours },
            { label: "Minutes", value: timeLeft.minutes },
            { label: "Seconds", value: timeLeft.seconds },
          ].map((item, idx) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.8 }}
              className="bg-white/60 backdrop-blur-sm p-10 md:p-14 rounded-3xl border border-secondary/10 text-center blush-shadow group hover:bg-white transition-all duration-500 cursor-default"
            >
              <div className="font-serif text-5xl md:text-6xl text-secondary mb-4 group-hover:scale-110 transition-transform duration-700">
                {String(item.value).padStart(2, "0")}
              </div>
              <div className="font-sans text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-outline opacity-70">
                {item.label}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Quote Section */}
      <section className="relative z-10 bg-surface-container-low/50 py-24 md:py-40">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 flex justify-center"
          >
            <BookOpen
              className="w-12 h-12 text-secondary opacity-60"
              strokeWidth={1}
            />
          </motion.div>

          <motion.blockquote
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-serif text-2xl md:text-4xl text-primary italic leading-relaxed md:leading-snug mb-16 px-4"
          >
            "I’ve gathered our favorite memories, the songs that define us, and
            a gallery of moments where you shine the brightest. It’s all waiting
            for the clock to strike midnight."
          </motion.blockquote>

          <div className="flex flex-col md:flex-row justify-center gap-12 md:gap-20 items-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center group cursor-default"
            >
              <div className="w-16 h-16 rounded-full border border-secondary/20 flex items-center justify-center mb-4 group-hover:bg-primary-container/20 transition-colors duration-500">
                <Heart
                  className="w-6 h-6 text-secondary group-hover:fill-secondary/20 transition-all"
                  strokeWidth={1.5}
                />
              </div>
              <span className="font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-outline italic">
                Curated with Love
              </span>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center group cursor-default"
            >
              <div className="w-16 h-16 rounded-full border border-secondary/20 flex items-center justify-center mb-4 group-hover:bg-primary-container/20 transition-colors duration-500">
                <Star
                  className="w-6 h-6 text-secondary group-hover:fill-secondary/20 transition-all"
                  strokeWidth={1.5}
                />
              </div>
              <span className="font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-outline italic">
                Milestone Moments
              </span>
            </motion.div>
          </div>
        </div>
      </section>

      <footer className="relative z-10 w-full py-12 md:py-16 border-t border-secondary/10 bg-background flex flex-col items-center justify-center text-center gap-4">
        <p className="font-serif text-sm md:text-base italic tracking-wide text-primary/60">
          Thank You
        </p>
        <p className="font-serif text-sm md:text-base italic tracking-wide text-[#b55409]">
          Always & Forever — Crafted with love for you.
        </p>
      </footer>
    </main>
  );
}
