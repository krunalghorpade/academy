"use client";

import { motion } from "framer-motion";
import { Mic, Zap, Users, ShieldAlert } from "lucide-react";

export default function Differentiation() {
  const specs = [
    {
      icon: ShieldAlert,
      title: "Structured Learning",
      desc: "No scattered YouTube tutorials. Follow a rigid, proven timeline."
    },
    {
      icon: Zap,
      title: "Extensive Studio Access",
      desc: "Practice on club-standard equipment, not just entry-level controllers."
    },
    {
      icon: Mic,
      title: "Artist Branding",
      desc: "Learn to build your logo, EPK, and social media presence."
    },
    {
      icon: Users,
      title: "Industry Network",
      desc: "Get plugged into local gigs, promoters, and label networks."
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-[#020202] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter mb-8 leading-[0.9]">
              Built <br className="hidden md:block"/> <span className="text-primary">Different.</span>
            </h2>
            <p className="text-gray-400 text-lg md:text-xl font-medium leading-relaxed max-w-lg">
              We don&apos;t just teach you how to press play. We teach you how to command the room and build a sustainable career.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
            {specs.map((spec, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="bg-[#0a0a0a] border border-white/5 p-8 rounded-xl hover:border-primary/40 transition-colors group"
              >
                <div className="w-12 h-12 rounded-full bg-black border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <spec.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-black text-white uppercase tracking-wider mb-3">{spec.title}</h3>
                <p className="text-gray-400 font-medium leading-relaxed text-sm">
                  {spec.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
