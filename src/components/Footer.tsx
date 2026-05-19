import { Github, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-bg text-white pt-12 md:pt-16 pb-6 px-4 sm:px-6 md:px-16 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-10">
          {/* Brand */}
          <div className="sm:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center shrink-0">
                <span className="text-black text-xs font-black">C</span>
              </div>
              <span className="text-xl font-bold tracking-tight text-white">CodeSyntra</span>
            </div>
            <p className="text-slate-400 max-w-sm leading-relaxed text-sm">
              A premium digital production studio dedicated to excellence in engineering and design. We build tools that empower the modern web.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-accent mb-4">Navigation</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><a href="#services" className="hover:text-accent transition-colors">Services</a></li>
              <li><a href="#team" className="hover:text-accent transition-colors">Collective</a></li>
              <li><a href="#why-choose-us" className="hover:text-accent transition-colors">Why Us</a></li>
              <li><a href="#process" className="hover:text-accent transition-colors">Process</a></li>
              <li><a href="#contact" className="hover:text-accent transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-accent mb-4">Connect</h4>
            <div className="space-y-3">
              <p className="text-sm text-slate-400">Lahore, Pakistan</p>
              <p className="text-sm text-slate-400 font-mono break-all">hello@codesyntra.pk</p>
              <div className="flex gap-4 pt-2">
                <Github size={18} className="text-slate-500 hover:text-accent cursor-pointer transition-colors" />
                <Twitter size={18} className="text-slate-500 hover:text-accent cursor-pointer transition-colors" />
                <Linkedin size={18} className="text-slate-500 hover:text-accent cursor-pointer transition-colors" />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-xs font-medium text-slate-500 text-center sm:text-left">
            © 2026 CodeSyntra Studio. All Rights Reserved.
          </div>
          <div className="flex gap-6 text-xs font-medium text-slate-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
