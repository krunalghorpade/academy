"use client";

import { motion } from "framer-motion";

export default function Hook() {
  const statements = [
    "You love music, but don't know where to start.",
    "You've watched countless tutorials, but still feel stuck.",
    "You know you have the ear, but lack the technical execution."
  ];

  return (
    <section className="py-24 md:py-32 bg-[#050505]">
      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.8 }}
        >
          <div className="flex flex-col gap-8 mb-16">
            {statements.map((stmt, i) => (
              <motion.p 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-500 tracking-tight uppercase"
              >
                {stmt}
              </motion.p>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="w-16 h-1 bg-primary mx-auto mb-10"
          />

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-tight"
          >
            It&apos;s time to stop consuming and<br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-500"> start creating.</span>
          </motion.h2>
        </motion.div>
      </div>
    </section>
  );
}
