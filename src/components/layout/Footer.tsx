import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#020202] border-t border-white/10 pt-16 pb-28 md:pb-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center text-center">
        <h2 className="text-4xl font-black text-white tracking-tighter uppercase mb-6">
          <span className="text-primary">Kratex</span> Academy
        </h2>
        <p className="text-gray-400 max-w-md mx-auto mb-10 font-medium">
          Transforming listeners into performing artists. Industry-driven curriculum curated by Kratex.
        </p>
        
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12 mb-12">
          <Link href="#programs" className="text-sm font-bold text-gray-400 hover:text-white uppercase tracking-widest transition-colors">
            Programs
          </Link>
          <Link href="#why-kratex" className="text-sm font-bold text-gray-400 hover:text-white uppercase tracking-widest transition-colors">
            Why Kratex
          </Link>
          <Link href="#visit" className="text-sm font-bold text-gray-400 hover:text-white uppercase tracking-widest transition-colors">
            Visit Us
          </Link>
          <Link href="#apply" className="text-sm font-bold text-primary hover:text-white uppercase tracking-widest transition-colors">
            Apply Now
          </Link>
        </div>

        <div className="w-full h-[1px] bg-white/10 mb-8" />
        
        <p className="text-xs text-gray-600 font-semibold tracking-wider uppercase">
          © {new Date().getFullYear()} Kratex Music Academy. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
