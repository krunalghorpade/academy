"use client";

import { motion } from "framer-motion";

export default function Transformation() {
  return (
    <section className="py-24 md:py-32 bg-black relative border-t border-white/5">
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center opacity-10 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-br from-primary/10 via-[#0a0a0a] to-[#111] border border-primary/20 rounded-2xl p-10 md:p-16 text-center relative overflow-hidden shadow-2xl"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 blur-[100px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 blur-[100px] rounded-full pointer-events-none" />
          
          <div className="relative z-10 flex flex-col items-center">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white uppercase tracking-tighter mb-6 leading-[0.9]">
              Stop <span className="text-gray-600 line-through decoration-primary decoration-4">Wondering</span>.<br className="hidden md:block"/> Start <span className="text-primary">Headlining</span>.
            </h2>
            <p className="text-lg md:text-xl text-gray-400 font-medium max-w-2xl mx-auto mb-12">
              The gap between the crowd and the DJ booth isn&apos;t talent. It&apos;s structure, guidance, and fearless execution. 
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-2xl mb-12">
              <div className="bg-black/50 border border-white/10 p-8 rounded-xl flex flex-col items-center justify-center">
                <span className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-3">Before Kratex</span>
                <span className="text-2xl font-black text-gray-300 tracking-widest uppercase">Consumer</span>
              </div>
              <div className="bg-primary/5 border border-primary/40 p-8 rounded-xl flex flex-col items-center justify-center shadow-[0_0_20px_rgba(230,0,0,0.15)]">
                <span className="text-sm font-bold text-primary/80 uppercase tracking-widest mb-3">After Kratex</span>
                <span className="text-2xl font-black text-white tracking-widest uppercase shadow-primary">Creator</span>
              </div>
            </div>
            
            <a href="#apply" className="bg-primary hover:bg-white hover:text-black text-white px-12 py-5 rounded-sm font-black uppercase tracking-widest transition-all hover:scale-105 shadow-[0_0_30px_rgba(230,0,0,0.3)] text-lg inline-block">
              Secure Your Spot
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
