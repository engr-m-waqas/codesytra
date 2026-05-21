import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-bg/80 backdrop-blur-xl border-b border-white/5 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-16 flex justify-between items-center h-14 md:h-20">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group shrink-0" onClick={() => setIsOpen(false)}>
          <img src="/images/Gemini_Generated_Image_b2301sb2301sb230.png" alt="CodeSyntra Logo" className="w-10 h-10 md:w-12 md:h-12 object-cover rounded-xl group-hover:scale-105 transition-transform" />
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
          <a href="mailto:codesyntraa@gmail.com" className="text-sm font-bold text-white block mb-4 hover:text-accent transition-colors">
            codesyntraa@gmail.com
          </a>
          <div className="flex justify-center gap-3">
            <a href="https://github.com/engr-m-waqas" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/20 transition-all">
              <img src="/images/github.png" alt="GitHub" className="w-4 h-4 opacity-70 hover:opacity-100" />
            </a>
            <a href="https://web.facebook.com/profile.php?id=61590206671999" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/20 transition-all">
              <img src="/images/facebook.png" alt="Facebook" className="w-4 h-4 opacity-70 hover:opacity-100" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
