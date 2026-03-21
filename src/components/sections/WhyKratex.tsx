"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function WhyKratex() {
  const points = [
    "Industry-Driven Curriculum",
    "Curated by Kratex",
    "Hands-on Studio Experience",
    "Performance & Stage Training",
    "Artist Branding & Marketing",
    "Exclusive Workshops"
  ];

  return (
    <section id="why-kratex" className="py-24 md:py-32 bg-[#050505] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        <div className="flex-1 w-full order-2 lg:order-1 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full aspect-square max-w-[500px] mx-auto lg:max-w-none bg-[#111] rounded-xl overflow-hidden relative border border-white/10 shadow-2xl"
          >
            {/* Image Placeholder */}
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/placeholder-studio-2.jpg')" }}>
              <div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-black/20 to-transparent" />
            </div>
            
            {/* Floating Element */}
            <div className="absolute bottom-6 left-6 right-6 lg:bottom-10 lg:left-10 lg:right-10 bg-black/70 backdrop-blur-md border border-white/10 p-6 lg:p-8 rounded-xl">
              <p className="text-white font-black uppercase tracking-widest text-lg lg:text-xl">Learn from the best.</p>
              <p className="text-primary font-bold text-sm lg:text-base tracking-widest uppercase mt-2">Master the stage.</p>
            </div>
          </motion.div>
        </div>

        <div className="flex-1 w-full order-1 lg:order-2">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary font-bold tracking-[0.2em] uppercase text-sm mb-4 block">The Advantage</span>
            <h2 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter mb-8 leading-[0.9]">
              Why Kratex <br className="hidden md:block"/> Academy?
            </h2>
            <p className="text-gray-400 text-lg lg:text-xl mb-12 max-w-lg leading-relaxed font-medium">
              We go beyond turning knobs. Our ecosystem is designed to equip you with the exact tools, knowledge, and confidence needed to thrive in the modern music industry.
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
              {points.map((point, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center gap-4 group"
                >
                  <CheckCircle2 className="text-primary w-6 h-6 flex-shrink-0 group-hover:scale-125 transition-transform" />
                  <span className="text-white font-bold tracking-wide uppercase text-sm">{point}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
