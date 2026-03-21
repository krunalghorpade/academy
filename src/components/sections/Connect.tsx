"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Loader2, CheckCircle } from "lucide-react";

export default function Connect() {
  const [formData, setFormData] = useState({ name: "", phone: "", interest: "DJing Basic" });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const mapIframe = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15126.28620995241!2d73.7868!3d18.5823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b80000000001%3A0x7d00000000000000!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin";

  return (
    <section id="visit" className="py-24 md:py-32 bg-[#050505] border-t border-white/5 relative">
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Info & Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary font-bold tracking-[0.2em] uppercase text-sm mb-4 block">Visit Us</span>
            <h2 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter mb-8 leading-[0.9]">
              Step <br className="hidden md:block"/> Into The <span className="text-primary">Studio.</span>
            </h2>
            <p className="text-gray-400 text-lg md:text-xl mb-10 font-medium max-w-lg">
              Experience the gear, meet the mentors, and see where artists are made.
            </p>

            <div className="flex flex-col gap-8 mb-12">
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 bg-black border border-white/10 rounded-full flex items-center justify-center shrink-0">
                  <MapPin className="text-primary w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-black uppercase tracking-widest text-sm mb-2">Location</h4>
                  <p className="text-gray-400 font-medium">Pune, Maharashtra, India<br/><span className="text-sm opacity-70">(Full address provided upon inquiry)</span></p>
                </div>
              </div>
              
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 bg-black border border-white/10 rounded-full flex items-center justify-center shrink-0">
                  <Phone className="text-primary w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-black uppercase tracking-widest text-sm mb-2">Call / WhatsApp</h4>
                  <p className="text-gray-400 font-medium">+91 (Placeholder)</p>
                </div>
              </div>
            </div>

            <div className="w-full aspect-video bg-[#111] border border-white/10 rounded-xl overflow-hidden relative shadow-2xl">
              <iframe 
                src={mapIframe} 
                className="w-full h-full border-0 grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500" 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>

          {/* Inquiry Form */}
          <motion.div
            id="apply"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-[#0a0a0a] border border-white/10 rounded-xl p-8 md:p-14 relative overflow-hidden flex flex-col justify-center shadow-2xl"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[80px] rounded-full pointer-events-none" />
            
            {status === "success" ? (
              <div className="text-center py-12 relative z-10 flex flex-col items-center">
                <CheckCircle className="w-24 h-24 text-green-500 mb-8 mx-auto" strokeWidth={1.5} />
                <h3 className="text-3xl font-black text-white uppercase tracking-tighter mb-4">Application Received</h3>
                <p className="text-gray-400 mb-10 font-medium max-w-xs mx-auto text-lg">
                  We&apos;ll be in touch shortly. For immediate response, message us directly.
                </p>
                <a
                  href={`https://wa.me/placeholder?text=Hi!%20I%20just%20submitted%20an%20inquiry%20for%20${encodeURIComponent(formData.interest)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#25D366] hover:bg-[#20bd5a] text-white px-8 py-5 rounded-sm font-black uppercase tracking-widest transition-all shadow-[0_0_20px_rgba(37,211,102,0.3)] w-full block text-center"
                >
                  Continue on WhatsApp
                </a>
              </div>
            ) : (
              <div className="relative z-10">
                <h3 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mb-4">Apply Now</h3>
                <p className="text-gray-400 mb-10 font-medium text-lg">Take the first step towards the stage.</p>
                
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  <div className="flex flex-col gap-3">
                    <label htmlFor="name" className="text-xs font-bold text-gray-500 uppercase tracking-widest">Full Name</label>
                    <input 
                      type="text" 
                      id="name"
                      required
                      className="bg-[#050505] border border-white/10 rounded-sm px-5 py-4 text-white focus:outline-none focus:border-primary transition-colors font-medium"
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  
                  <div className="flex flex-col gap-3">
                    <label htmlFor="phone" className="text-xs font-bold text-gray-500 uppercase tracking-widest">Phone Number</label>
                    <input 
                      type="tel" 
                      id="phone"
                      required
                      className="bg-[#050505] border border-white/10 rounded-sm px-5 py-4 text-white focus:outline-none focus:border-primary transition-colors font-medium"
                      value={formData.phone}
                      onChange={e => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                  
                  <div className="flex flex-col gap-3">
                    <label htmlFor="interest" className="text-xs font-bold text-gray-500 uppercase tracking-widest">Area of Interest</label>
                    <select
                      id="interest"
                      className="bg-[#050505] border border-white/10 rounded-sm px-5 py-4 text-white focus:outline-none focus:border-primary transition-colors appearance-none font-medium"
                      value={formData.interest}
                      onChange={e => setFormData({ ...formData, interest: e.target.value })}
                    >
                      <option value="DJing Basic">DJing Basic</option>
                      <option value="DJing Pro">DJing Pro</option>
                      <option value="Music Production">Music Production</option>
                      <option value="Both DJing & Production">Both DJing & Production</option>
                    </select>
                  </div>
                  
                  {status === "error" && (
                    <p className="text-red-500 text-sm font-bold bg-red-500/10 p-4 rounded-sm border border-red-500/20">Something went wrong. Please try again or contact via WhatsApp.</p>
                  )}
                  
                  <button 
                    type="submit" 
                    disabled={status === "submitting"}
                    className="mt-6 bg-white text-black hover:bg-primary hover:text-white px-8 py-5 rounded-sm font-black uppercase tracking-widest transition-all disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center text-lg shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-primary/40"
                  >
                    {status === "submitting" ? <Loader2 className="animate-spin" /> : "Submit Application"}
                  </button>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
