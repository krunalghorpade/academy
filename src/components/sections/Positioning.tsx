"use client";

import { motion } from "framer-motion";
import { Headphones, Disc3, Mic2 } from "lucide-react";

export default function Positioning() {
  return (
    <section className="py-24 md:py-32 bg-black border-y border-white/5 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-[400px] bg-primary/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-primary font-bold tracking-[0.2em] uppercase text-sm mb-4 block">The Journey</span>
          <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter">
            From Listener <br className="sm:hidden" /> to <span className="text-gray-400">Performer</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 relative">
          {/* Connector line on desktop */}
          <div className="hidden md:block absolute top-[40px] left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary/50 to-transparent -z-10" />

          {[
            {
              icon: Headphones,
              title: "Discover",
              desc: "Build your sonic identity and truly understand the mechanics of electronic music.",
              delay: 0
            },
            {
              icon: Disc3,
              title: "Master",
              desc: "Learn industry-standard gear, advanced mixing, and proven production techniques.",
              delay: 0.2
            },
            {
              icon: Mic2,
              title: "Perform",
              desc: "Command the stage, market yourself effectively, and launch your artist career.",
              delay: 0.4
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: item.delay }}
              className="flex flex-col items-center text-center p-8 bg-[#0a0a0a] rounded-xl border border-white/5 shadow-2xl relative group hover:border-primary/30 transition-colors"
            >
              <div className="w-20 h-20 rounded-full bg-black border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform group-hover:border-primary/50 relative">
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
                <item.icon className="w-8 h-8 text-primary relative z-10" />
              </div>
              <h3 className="text-2xl font-black text-white uppercase tracking-widest mb-4">{item.title}</h3>
              <p className="text-gray-400 leading-relaxed font-medium">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
