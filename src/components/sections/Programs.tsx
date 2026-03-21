"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Programs() {
  const programs = [
    {
      title: "DJing Basic",
      duration: "1 Month",
      description: "Perfect for beginners. Learn the absolute fundamentals of beatmatching, phrasing, and modern DJ software.",
      features: ["Equipment Introduction", "Beatmatching & Sync", "Basic Transitions", "Library Management"],
      popular: false
    },
    {
      title: "DJing Pro",
      duration: "3 Months",
      description: "Take it to the stage. Advanced mixing, live performance techniques, and reading the crowd.",
      features: ["Advanced Transitions", "FX & Looping", "Harmonic Mixing", "Performance Recording"],
      popular: true
    },
    {
      title: "Music Production",
      duration: "6 Months",
      description: "From concept to final master. Build a professional track from scratch using industry-standard DAWs.",
      features: ["Sound Design", "Arrangement", "Mixing & Mastering", "Track Breakdown"],
      popular: false
    }
  ];

  return (
    <section id="programs" className="py-24 md:py-32 bg-black relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20 md:mb-24"
        >
          <span className="text-primary font-bold tracking-[0.2em] uppercase text-sm mb-4 block">Curriculum</span>
          <h2 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter">
            Choose Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-600">Path</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {programs.map((program, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className={`relative flex flex-col bg-[#050505] rounded-xl border ${program.popular ? 'border-primary shadow-[0_0_40px_rgba(230,0,0,0.15)] bg-gradient-to-b from-[#1a0000] to-[#050505]' : 'border-white/10'} p-8 md:p-10 transition-transform hover:-translate-y-2`}
            >
              {program.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-black uppercase tracking-widest py-1.5 px-6 rounded-sm">
                  Most Popular
                </div>
              )}
              
              <div className="mb-10">
                <h3 className="text-3xl font-black text-white uppercase tracking-tighter mb-3">{program.title}</h3>
                <div className="text-primary font-bold tracking-widest text-sm uppercase mb-5">{program.duration}</div>
                <p className="text-gray-400 font-medium leading-relaxed">{program.description}</p>
              </div>

              <div className="flex-1">
                <ul className="flex flex-col gap-5 mb-12">
                  {program.features.map((feat, idx) => (
                    <li key={idx} className="flex items-center gap-4">
                      <div className={`w-1.5 h-1.5 rounded-full ${program.popular ? 'bg-primary' : 'bg-gray-500'}`} />
                      <span className="text-sm font-bold text-gray-200 uppercase tracking-wider">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href={`#apply`}
                className={`w-full flex items-center justify-center gap-3 py-4 rounded-sm font-black uppercase tracking-widest transition-all ${
                  program.popular 
                    ? "bg-primary hover:bg-white hover:text-black text-white" 
                    : "bg-white/5 hover:bg-white hover:text-black text-white border border-white/10"
                }`}
              >
                Enroll Now
                <ArrowRight size={18} />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
