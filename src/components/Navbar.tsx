import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-bg/80 backdrop-blur-xl border-b border-white/5 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-16 flex justify-between items-center h-14 md:h-20">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group shrink-0" onClick={() => setIsOpen(false)}>
          <div className="w-8 h-8 md:w-9 md:h-9 bg-accent rounded-lg md:rounded-xl flex items-center justify-center rotate-3 group-hover:rotate-0 transition-transform">
            <span className="text-black text-xs md:text-sm font-black italic">CS</span>
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-base md:text-lg font-black text-white tracking-tighter">CodeSyntra</span>
            <span className="text-[8px] md:text-[9px] font-bold text-accent uppercase tracking-widest">Agency</span>
          </div>
        </a>
        
        {/* Desktop Links */}
        <ul className="hidden md:flex gap-8 text-[11px] font-black uppercase tracking-widest text-slate-400">
          <li><a href="#services" className="hover:text-accent transition-colors">Services</a></li>
          <li><a href="#team" className="hover:text-accent transition-colors">Collective</a></li>
          <li><a href="#why-choose-us" className="hover:text-accent transition-colors">Why Us</a></li>
          <li><a href="#process" className="hover:text-accent transition-colors">Process</a></li>
        </ul>
 
        {/* Desktop CTA & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden sm:flex px-5 py-2.5 bg-white/5 border border-white/10 text-white text-[11px] font-black uppercase tracking-widest rounded-xl hover:bg-accent hover:text-black transition-all whitespace-nowrap"
          >
            Get Quote
          </a>
 
          {/* Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white hover:text-accent transition-colors focus:outline-none p-1"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>
 
      <div
        className={`absolute top-full left-0 right-0 bg-[#020617]/95 backdrop-blur-2xl border-b border-white/10 transition-all duration-300 ease-in-out md:hidden flex flex-col px-6 sm:px-8 z-40 overflow-hidden ${
          isOpen ? "max-h-[80vh] py-5 opacity-100 pointer-events-auto" : "max-h-0 py-0 opacity-0 pointer-events-none"
        }`}
      >
        {/* Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-72 h-72 bg-accent/10 rounded-full blur-[100px] pointer-events-none" />
 
        <ul className="flex flex-col relative z-10 mt-2 flex-1">
          {[
            { label: "Services", href: "#services" },
            { label: "Collective", href: "#team" },
            { label: "Why Us", href: "#why-choose-us" },
            { label: "Process", href: "#process" },
          ].map((link, idx) => (
            <li 
              key={link.href}
              className="border-b border-white/5"
              style={{ transitionDelay: `${idx * 50}ms` }}
            >
              <a
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-center py-3.5 text-base font-black uppercase tracking-widest text-slate-300 hover:text-white transition-all active:scale-95"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="pt-5">
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center py-3 bg-accent text-black font-black uppercase tracking-widest rounded-xl hover:bg-white hover:scale-102 transition-all shadow-lg shadow-accent/20 text-xs"
            >
              Start Your Project
            </a>
          </li>
        </ul>
 
        {/* Mobile Menu Footer */}
        <div className="relative z-10 mt-auto pt-6 pb-2 flex flex-col items-center text-center">
          <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-1">Get in touch</p>
          <a href="mailto:hello@codesyntra.pk" className="text-sm font-bold text-white block mb-4 hover:text-accent transition-colors">
            hello@codesyntra.pk
          </a>
          <div className="flex justify-center gap-3">
            <a href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-accent hover:text-black transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-accent hover:text-black transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-accent hover:text-black transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
