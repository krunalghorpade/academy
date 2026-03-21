"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] w-full flex items-center justify-center overflow-hidden">
      {/* Background with Dark Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/placeholder-studio.jpg')" }} // Placeholder until real imagery is provided
      >
        <div className="absolute inset-0 bg-black/70 bg-gradient-to-t from-black via-black/50 to-black/80" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center text-center mt-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs md:text-sm mb-6 block">
            Welcome to Kratex Music Academy
          </span>
          <h1 className="text-6xl md:text-8xl lg:text-[7rem] font-black text-white uppercase tracking-tighter leading-[0.9] mb-8">
            Build For
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-gray-600">
              The Stage
            </span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-300 font-medium mb-12">
            This is not just another course. It&apos;s a structured path from listener to performer. Transform your ambition into an absolute artist identity.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 w-full sm:w-auto">
            <Link
              href="#apply"
              className="w-full sm:w-auto bg-primary hover:bg-white hover:text-black text-white px-10 py-4 rounded-sm font-black uppercase tracking-widest transition-all hover:scale-105 shadow-[0_0_20px_rgba(230,0,0,0.3)]"
            >
              Apply Now
            </Link>
            <Link
              href="#visit"
              className="w-full sm:w-auto bg-black/50 backdrop-blur-sm border border-white/30 hover:bg-white hover:text-black text-white px-10 py-4 rounded-sm font-black uppercase tracking-widest transition-all"
            >
              Visit Academy
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-gray-500 font-bold">Scroll</span>
        <div className="w-[1px] h-16 bg-white/20 relative overflow-hidden">
          <motion.div 
            className="w-full h-1/2 bg-white absolute top-0"
            animate={{ y: [0, 64] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
