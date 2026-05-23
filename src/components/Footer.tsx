import { Github, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-bg text-white pt-12 md:pt-16 pb-6 px-4 sm:px-6 md:px-16 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-10">
          {/* Brand */}
          <div className="sm:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-accent to-fuchsia-500 p-0.5 shadow-lg shadow-accent/20 shrink-0">
                <div className="w-full h-full bg-[#020617] rounded-[6px] flex items-center justify-center">
                  <svg className="w-4 h-4 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="16 18 22 12 16 6" />
                    <polyline points="8 6 2 12 8 18" />
                  </svg>
                </div>
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
              <p className="text-sm text-slate-400">Vehari, Pakistan</p>
              <a href="mailto:codesyntraa@gmail.com" className="text-sm text-slate-400 font-mono break-all hover:text-accent transition-colors block">
                codesyntraa@gmail.com
              </a>
              <div className="flex gap-4 pt-2">
                <a href="https://github.com/engr-m-waqas" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-slate-400 hover:text-white transition-colors">
                  <Github size={18} />
                </a>
                <a href="https://web.facebook.com/profile.php?id=61590206671999" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-slate-400 hover:text-white transition-colors">
                  <Facebook size={18} />
                </a>
                <a href="https://wa.me/923069377493?text=Hello%20CodeSyntra!%20I%20am%20interested%20in%20discussing%20a%20new%20project%20with%20your%20team.%20Could%20we%20connect%3F" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="text-slate-400 hover:text-accent transition-colors">
                  <svg className="w-[18px] h-[18px] fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.517 2.266 2.27 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.717-1.458L0 24zm6.26-3.774c1.666.988 3.396 1.48 5.155 1.482 5.515 0 10.002-4.485 10.005-9.998.002-2.673-1.04-5.184-2.93-7.078C16.6 2.734 14.093 1.69 11.42 1.69 5.908 1.69 1.42 6.177 1.417 11.69c-.001 1.83.499 3.618 1.447 5.19l-.995 3.637 3.733-.979zm11.236-7.859c-.3-.15-1.77-.874-2.043-.974-.274-.1-.474-.15-.674.15-.2.3-.77.974-.944 1.174-.174.2-.35.226-.65.076-1.168-.583-1.955-1.025-2.738-2.368-.2-.34.2-.315.571-1.058.075-.15.038-.282-.019-.382-.056-.1-.475-1.146-.65-1.567-.172-.412-.347-.357-.475-.362-.123-.005-.264-.006-.406-.006-.142 0-.374.053-.57.266-.197.213-.75.733-.75 1.788 0 1.054.767 2.072.873 2.213.106.142 1.51 2.305 3.659 3.23.511.22.91.352 1.22.45.513.163.98.14 1.35.084.412-.061 1.77-.723 2.02-1.388.25-.665.25-1.235.175-1.35-.075-.115-.275-.165-.575-.315z"/>
                  </svg>
                </a>
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
