"use client";

import { motion } from "framer-motion";

export default function SocialProof() {
  return (
    <section id="social-proof" className="py-24 md:py-32 bg-[#050505] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-bold tracking-[0.2em] uppercase text-sm mb-4 block">Proof of Work</span>
          <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter">
            Don&apos;t Just <span className="text-gray-500">Take Our Word</span>.
          </h2>
        </motion.div>

        {/* Video / Testimonial Grid Placeholder */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {[1, 2, 3].map((item) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: item * 0.15 }}
              className="group aspect-[4/5] bg-[#0a0a0a] rounded-xl border border-white/10 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/80 z-10 opacity-80 group-hover:opacity-60 transition-opacity" />
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" 
                style={{ backgroundImage: `url('/placeholder-proof-${item}.jpg')`, backgroundColor: "#111" }} 
              />
              
              <div className="absolute bottom-6 left-6 right-6 z-20">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/30" />
                  <div>
                    <h4 className="text-white font-black tracking-widest uppercase text-sm">Student Name</h4>
                    <p className="text-primary text-xs font-bold uppercase tracking-widest">DJing Pro</p>
                  </div>
                </div>
                <p className="text-gray-300 text-sm font-medium italic leading-relaxed">
                  &quot;The structure and industry insights completely changed my approach. Pure performance focus.&quot;
                </p>
              </div>

              {/* Play Button Overlay */}
              <div className="absolute inset-0 z-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center backdrop-blur-md shadow-[0_0_30px_rgba(230,0,0,0.5)] transition-transform group-hover:scale-110">
                  <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[14px] border-l-white border-b-[8px] border-b-transparent ml-1" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
