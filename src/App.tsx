import { motion, AnimatePresence, useScroll, useTransform } from "motion/react";
import Navbar from "./components/Navbar";
import TeamMember from "./components/TeamMember";
import ServiceCard from "./components/ServiceCard";
import Footer from "./components/Footer";
import SectionDivider from "./components/SectionDivider";
import TechIcon from "./components/TechIcon";
import { TEAM_MEMBERS, SERVICES } from "./constants";
import { MessageSquare, ArrowRight, Github, Twitter, Linkedin, Mail, Cpu, Layers, Search, Zap, Smartphone, Users, Loader2, ExternalLink, User, Briefcase, DollarSign, PenTool, ChevronDown, Phone } from "lucide-react";
import React, { useRef, useState } from "react";

export default function App() {
  const { scrollYProgress } = useScroll();
  const yParallax = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
    projectType: "",
    budgetRange: "",
    projectDetails: ""
  });
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState<{ type: 'success' | 'error', message: string; previewUrl?: string } | null>(null);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
    setOpenDropdown(null);
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setToast(null);

    // Validation
    const { name, email, whatsapp, projectType, budgetRange, projectDetails } = formData;
    if (!name.trim() || !email.trim() || !projectType || !budgetRange || !projectDetails.trim()) {
      setToast({ type: 'error', message: 'All fields are required.' });
      setLoading(false);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      setToast({ type: 'error', message: 'Please enter a valid email address.' });
      setLoading(false);
      return;
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          whatsapp: whatsapp.trim(),
          projectType,
          budgetRange,
          projectDetails: projectDetails.trim()
        })
      });

      const resData = await response.json();

      if (!response.ok) {
        throw new Error(resData.error || 'Failed to submit inquiry.');
      }

      setToast({ 
        type: 'success', 
        message: resData.message || 'Your message has been sent successfully. Our team will contact you soon.',
        previewUrl: resData.previewUrl
      });

      // Reset Form
      setFormData({
        name: "",
        email: "",
        whatsapp: "",
        projectType: "",
        budgetRange: "",
        projectDetails: ""
      });

      // Auto dismiss success toast in exactly 2 seconds
      setTimeout(() => {
        setToast(null);
      }, 2000);

    } catch (err: any) {
      console.error(err);
      setToast({ type: 'error', message: err.message || 'Failed to submit. Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen bg-animated-gradient selection:bg-accent selection:text-black overflow-x-hidden text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative flex flex-col justify-between pt-20 sm:pt-24 md:pt-36 overflow-hidden">
        {/* Background Glows */}
        <div className="absolute top-1/4 left-1/4 w-48 md:w-96 h-48 md:h-96 bg-accent/20 rounded-full blur-[80px] md:blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-48 md:w-96 h-48 md:h-96 bg-fuchsia-500/10 rounded-full blur-[80px] md:blur-[120px] animate-pulse delay-1000" />

        {/* Floating Background Labels */}
        <div className="absolute top-1/3 right-[10%] text-[10vw] font-black opacity-[0.03] select-none pointer-events-none rotate-12">HTML5</div>
        <div className="absolute bottom-1/4 left-[5%] text-[8vw] font-black opacity-[0.02] select-none pointer-events-none -rotate-12">REACH</div>
        <div className="absolute top-1/4 left-[40%] text-[5vw] font-black opacity-[0.04] select-none pointer-events-none">CSS3</div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-16 w-full grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-16 items-center relative z-10 pb-6 md:pb-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="pt-2 lg:pt-0"
          >

            <h1 className="mb-2 md:mb-3 text-white text-[22px] sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight glow-text">
              FROM IDEA TO IMPACT <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-fuchsia-400">WE BUILD DIGITAL PRODUCTS THAT SCALE</span>
            </h1>

            <p className="text-sm md:text-lg text-slate-400 mb-4 md:mb-8 max-w-xl leading-relaxed">
              We combine elite design, modern development, and powerful backend architecture to create experiences that drive growth.
            </p>

            <div className="hidden lg:flex flex-col sm:flex-row flex-wrap gap-2.5 md:gap-3 mb-6 md:mb-8">
              <a
                href="#contact"
                className="px-5 md:px-6 py-3 md:py-3.5 bg-accent text-black font-black rounded-xl hover:bg-white hover:scale-105 transition-all shadow-lg shadow-accent/10 flex items-center justify-center gap-2 uppercase tracking-wider text-xs md:text-sm"
              >
                Start Your Project <ArrowRight size={18} />
              </a>
              <a
                href="#services"
                className="px-5 md:px-6 py-3 md:py-3.5 bg-white/5 border border-white/10 text-white font-bold rounded-xl hover:bg-white/10 transition-all flex items-center justify-center uppercase tracking-wider text-xs md:text-sm"
              >
                Our Capabilities
              </a>
            </div>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="block relative w-full max-w-[280px] sm:max-w-md lg:max-w-none mx-auto mt-2 lg:mt-0"
          >
            <div className="relative z-10 floating">
              <div className="absolute -inset-6 md:-inset-20 bg-gradient-to-r from-accent to-fuchsia-900 rounded-[8rem] md:rounded-[15rem] blur opacity-15 group-hover:opacity-25 transition duration-1000"></div>
              <div className="relative bg-slate-900/80 rounded-[1.5rem] md:rounded-[2.5rem] p-0.5 border border-white/10 backdrop-blur-xl overflow-hidden shadow-2xl">
                <video
                  src="/images/hero_animation.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="rounded-[1.4rem] md:rounded-[2.4rem] w-full h-auto object-cover aspect-video sm:aspect-auto"
                />
              </div>
            </div>

            {/* Mobile-only CTA Buttons (shown below animation on smaller viewports) */}
            <div className="flex lg:hidden flex-col sm:flex-row flex-wrap gap-2.5 mt-4 w-full relative z-20">
              <a
                href="#contact"
                className="px-5 py-3 bg-accent text-black font-black rounded-xl hover:bg-white active:scale-95 transition-all shadow-lg shadow-accent/10 flex items-center justify-center gap-2 uppercase tracking-wider text-xs"
              >
                Start Your Project <ArrowRight size={16} />
              </a>
              <a
                href="#services"
                className="px-5 py-3 bg-white/5 border border-white/10 text-white font-bold rounded-xl hover:bg-white/10 active:scale-95 transition-all flex items-center justify-center uppercase tracking-wider text-xs"
              >
                Our Capabilities
              </a>
            </div>

            {/* Abstract Elements */}
            <div className="absolute -top-10 md:-top-20 -right-10 md:-right-20 w-48 md:w-64 h-48 md:h-64 bg-accent/20 rounded-full blur-[80px] md:blur-[100px] pointer-events-none" />
            <div className="absolute -bottom-10 md:-bottom-20 -left-10 md:-left-20 w-48 md:w-64 h-48 md:h-64 bg-fuchsia-200/20 rounded-full blur-[80px] md:blur-[100px] pointer-events-none" />
          </motion.div>
        </div>

        {/* Infinite scrolling marquee wrapper at the bottom of Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative w-full border-y border-white/5 bg-white/[0.01] backdrop-blur-sm py-4 z-20 mt-4 mb-6 md:mb-8 overflow-hidden"
        >
          {/* Subtle glow/blur background effect behind the technologies row */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-12 bg-accent/10 rounded-full blur-[80px] pointer-events-none" />
          
          <div className="relative z-10 w-full py-2">
            <div className="flex w-max items-center animate-marquee pause-on-hover">
              {(() => {
                const techs = [
                  "HTML5", "CSS3", "React.js", "Express", "MongoDB", "Node.js",
                  "Tailwind CSS", "Photoshop", "GitHub", "Figma", "Next.js"
                ];
                return [...techs, ...techs].map((tech, i) => (
                  <div
                    key={`${tech}-${i}`}
                    className="flex items-center gap-3 text-slate-400 font-bold uppercase tracking-wider text-xs md:text-sm cursor-default group transition-all duration-300 mx-5 md:mx-6 shrink-0"
                  >
                    <div className="transform group-hover:scale-125 group-hover:-translate-y-1 group-hover:rotate-3 transition-all duration-300 ease-out filter group-hover:drop-shadow-[0_0_8px_#38bdf8] group-hover:brightness-125">
                      <TechIcon name={tech} size={28} />
                    </div>
                    <span className="group-hover:text-white transition-colors duration-300">{tech}</span>
                  </div>
                ));
              })()}
            </div>
          </div>
        </motion.div>
      </section>

      <SectionDivider />

      {/* Services Section */}
      <section id="services" className="py-12 md:py-20 px-4 sm:px-6 md:px-16 bg-bg">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
            <span className="text-accent font-bold text-sm uppercase tracking-[0.2em] mb-3 block">What We Do</span>
            <h2 className="text-white mb-4">CodeSyntra Digital Solutions</h2>
            <p className="text-slate-400 text-sm md:text-base">Comprehensive services designed to scale your business and enhance your digital footprint.</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-8">
            {SERVICES.map((service, idx) => (
              <ServiceCard 
                key={idx} 
                icon={service.icon} 
                name={service.name} 
                desc={service.desc} 
                ownerName={service.ownerName} 
                ownerColor={service.ownerColor} 
              />
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Team Section */}
      <section id="team" className="section-padding bg-light">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 md:mb-12 gap-4">
            <div className="max-w-2xl">
              <span className="text-accent font-bold text-sm uppercase tracking-[0.2em] mb-3 block">Meet The Experts</span>
              <h2 className="text-white">The CodeSyntra Collective</h2>
            </div>
            <div className="flex gap-3 shrink-0">
              <div className="px-4 py-2.5 bg-white/5 rounded-full border border-white/10 text-xs sm:text-sm font-bold text-slate-400 whitespace-nowrap">4 Core Members</div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-5 md:gap-8">
            {TEAM_MEMBERS.map((member) => (
              <TeamMember 
                key={member.id} 
                id={member.id}
                name={member.name}
                role={member.role}
                exp={member.exp}
                avatar={member.avatar}
                avatarImg={member.avatarImg}
                desc={member.desc}
                skills={member.skills}
                specialties={member.specialties}
                themeColor={member.themeColor}
                number={member.number}
              />
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Why Choose CodeSyntra Section */}
      <section id="why-choose-us" className="section-padding bg-bg relative overflow-hidden">
        <div className="absolute top-1/2 left-1/4 w-80 h-80 bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-fuchsia-500/5 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
            <span className="text-accent font-bold text-sm uppercase tracking-[0.2em] mb-3 block">Why Choose Us</span>
            <h2 className="text-white mb-4">Why Brands Work With CodeSyntra</h2>
            <p className="text-slate-400">
              We combine elite design, modern development, and powerful architecture to build products that scale.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {[
              {
                icon: Cpu,
                title: "Modern & Scalable Development",
                desc: "Building resilient systems that handle massive traffic effortlessly with modern tech stacks."
              },
              {
                icon: Layers,
                title: "Clean UI/UX Focused Design",
                desc: "Crafting visually gorgeous, interactive, and high-conversion interfaces tailored to your audience."
              },
              {
                icon: Search,
                title: "SEO Optimized Architecture",
                desc: "Ensuring blazing fast speeds, high rankings, and maximum search visibility from day one."
              },
              {
                icon: Zap,
                title: "Fast Deployment Workflow",
                desc: "Agility-driven development processes that ship high-quality products on time, every time."
              },
              {
                icon: Smartphone,
                title: "Cross-Platform Solutions",
                desc: "Single-codebase responsive experiences across iOS, Android, and Web with flawless native feel."
              },
              {
                icon: Users,
                title: "Dedicated Team Collaboration",
                desc: "Direct integration with your internal teams for maximum synergy, transparency, and support."
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative p-5 md:p-8 rounded-2xl md:rounded-3xl border border-white/5 hover:border-accent/20 transition-all bg-white/[0.02] backdrop-blur-sm overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-accent mb-4 md:mb-6 group-hover:scale-110 group-hover:bg-accent/10 group-hover:border-accent/30 transition-all duration-300">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-base md:text-xl font-bold mb-2 md:mb-4 text-white group-hover:text-accent transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-slate-400 text-xs md:text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Our Process Section */}
      <section id="process" className="section-padding bg-light relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[30%] h-full bg-accent/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
            <span className="text-accent font-bold text-sm uppercase tracking-[0.2em] mb-3 block">Our Process</span>
            <h2 className="text-white mb-4">How We Build Exceptional Products</h2>
            <p className="text-slate-400 text-sm md:text-base">
              A structured, transparent, and quality-driven approach designed to turn your big ideas into high-impact digital solutions.
            </p>
          </div>

          <div className="relative w-full py-4">
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              {(() => {
                const steps = [
                  { num: "01", title: "Discovery & Planning", desc: "Understanding your business goals, target audience, and overall product vision." },
                  { num: "02", title: "UI/UX Design", desc: "Creating intuitive, interactive, and modern user experiences that match your brand identity." },
                  { num: "03", title: "Development", desc: "Building highly-scalable frontend, robust backend pipelines, and seamless mobile solutions." },
                  { num: "04", title: "Testing & Launch", desc: "Comprehensive performance optimization, rigorous QA testing, and secure production deployment." },
                  { num: "05", title: "Support & Growth", desc: "Delivering continuous updates, optimization, long-term scalability, and expert support." }
                ];
                return steps.map((step, idx) => (
                  <div
                    key={`${step.num}-${idx}`}
                    className="relative p-5 md:p-8 rounded-2xl md:rounded-3xl border border-white/5 bg-white/[0.02] transition-all flex flex-col justify-between w-full sm:w-[calc(50%-8px)] lg:w-[calc(33.333%-16px)]"
                  >
                    <div className="absolute top-0 right-0 p-6 text-7xl font-black text-white/[0.02] transition-colors duration-500 select-none">
                      {step.num}
                    </div>
                    
                    <div>
                      <div className="text-xs text-accent font-bold tracking-widest uppercase mb-4">
                        Step {step.num}
                      </div>
                      <h3 className="text-base md:text-xl font-bold mb-2 md:mb-4 text-white transition-colors duration-300">
                        {step.title}
                      </h3>
                    </div>
                    
                    <p className="text-slate-400 text-xs md:text-sm leading-relaxed relative z-10">
                      {step.desc}
                    </p>
                  </div>
                ));
              })()}
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Toast Notification Container */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: -50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="fixed top-24 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center max-w-md w-full px-6"
          >
            <div className={`w-full p-6 rounded-2xl border backdrop-blur-md shadow-2xl flex flex-col gap-3 ${
              toast.type === 'success' 
                ? 'bg-slate-900/90 border-emerald-500/20 text-white shadow-emerald-500/10' 
                : 'bg-slate-900/90 border-rose-500/20 text-white shadow-rose-500/10'
            }`}>
              <div className="flex items-start gap-4">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${
                  toast.type === 'success' ? 'bg-emerald-500/10 text-emerald-400' : 'bg-rose-500/10 text-rose-400'
                }`}>
                  {toast.type === 'success' ? (
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  ) : (
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                  )}
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-sm uppercase tracking-wider text-slate-400">
                    {toast.type === 'success' ? 'Inquiry Sent' : 'Submission Error'}
                  </h4>
                  <p className="text-sm mt-1 text-slate-200">{toast.message}</p>
                </div>
              </div>

              {/* Special Ethereal Inbox Preview Link for testing */}
              {toast.previewUrl && (
                <a 
                  href={toast.previewUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="mt-2 flex items-center justify-center gap-2 w-full py-2 bg-accent text-black font-bold text-xs uppercase tracking-widest rounded-xl hover:bg-accent-hover transition-colors"
                >
                  <ExternalLink size={14} />
                  Preview Sent Email (Inbox)
                </a>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Contact Section */}
      <section id="contact" className="section-padding bg-light text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[40%] h-full bg-accent/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-accent font-bold text-sm uppercase tracking-[0.2em] mb-3 block">Get In Touch</span>
              <h2 className="text-white mb-3 md:mb-5">Let's Discuss Your Next <br className="hidden sm:block" />Big Collaboration</h2>
              <p className="text-slate-400 text-xs md:text-base mb-4 md:mb-6 max-w-md">Our team is ready to help you navigate your digital journey. Reach out for a free consultation.</p>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-white/5 flex items-center justify-center text-accent border border-white/10 hover:bg-accent hover:text-black transition-colors cursor-pointer group">
                    <Mail size={20} className="group-hover:scale-110 transition-transform" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase font-black">Email Us</p>
                    <p className="text-sm md:text-lg font-bold break-all">hello@codesyntra.pk</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white/[0.02] p-6 sm:p-8 md:p-10 rounded-3xl text-white shadow-2xl border border-white/10 backdrop-blur-md relative overflow-hidden"
            >
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent/5 rounded-full blur-[80px] pointer-events-none" />
              
              <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-white tracking-wide">Start Your Project</h3>
              <form className="space-y-6" onSubmit={handleFormSubmit}>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                      <User size={14} className="text-accent" />
                      Full Name *
                    </label>
                    <div className="relative group">
                      <input 
                        type="text" 
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your Name" 
                        required
                        className="w-full bg-white/5 border border-white/10 p-3 md:p-4 pl-10 md:pl-12 rounded-xl focus:ring-2 focus:ring-accent focus:border-transparent outline-none text-xs md:text-sm text-white placeholder:text-slate-500 transition-all hover:bg-white/10" 
                      />
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-hover:text-accent transition-colors" size={18} />
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                      <Mail size={14} className="text-accent" />
                      Email Address *
                    </label>
                    <div className="relative group">
                      <input 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Email Address" 
                        required
                        className="w-full bg-white/5 border border-white/10 p-3 md:p-4 pl-10 md:pl-12 rounded-xl focus:ring-2 focus:ring-accent focus:border-transparent outline-none text-xs md:text-sm text-white placeholder:text-slate-500 transition-all hover:bg-white/10" 
                      />
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-hover:text-accent transition-colors" size={18} />
                    </div>
                  </div>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.35 }}
                  className="flex flex-col gap-2"
                >
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                    <Phone size={14} className="text-accent" />
                    WhatsApp Number (Optional)
                  </label>
                  <div className="relative group">
                    <input 
                      type="tel" 
                      name="whatsapp"
                      value={formData.whatsapp}
                      onChange={handleInputChange}
                      placeholder="WhatsApp Number (e.g. +92 300 1234567)" 
                      className="w-full bg-white/5 border border-white/10 p-3 md:p-4 pl-10 md:pl-12 rounded-xl focus:ring-2 focus:ring-accent focus:border-transparent outline-none text-xs md:text-sm text-white placeholder:text-slate-500 transition-all hover:bg-white/10" 
                    />
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-hover:text-accent transition-colors" size={18} />
                  </div>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                  <div className="flex flex-col gap-2 relative">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                      <Briefcase size={14} className="text-accent" />
                      Project Type *
                    </label>
                    <div className="relative group">
                      <div 
                        onClick={() => setOpenDropdown(openDropdown === 'projectType' ? null : 'projectType')}
                        className={`w-full bg-white/5 border ${openDropdown === 'projectType' ? 'border-accent ring-2 ring-accent/20' : 'border-white/10'} p-4 pl-12 pr-10 rounded-xl cursor-pointer transition-all hover:bg-white/10 flex items-center justify-between`}
                      >
                        <span className={`text-sm ${formData.projectType ? 'text-white' : 'text-slate-500'}`}>
                          {formData.projectType || "Select Project Type"}
                        </span>
                        <ChevronDown size={18} className={`text-slate-500 transition-transform ${openDropdown === 'projectType' ? 'rotate-180 text-accent' : ''}`} />
                      </div>
                      <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-hover:text-accent transition-colors pointer-events-none" size={18} />
                    </div>

                    <AnimatePresence>
                      {openDropdown === 'projectType' && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          transition={{ duration: 0.15 }}
                          className="absolute top-full left-0 w-full mt-2 bg-slate-900 border border-white/10 rounded-xl shadow-2xl overflow-hidden z-50"
                        >
                          {["Web Development", "Mobile App", "UI/UX Design", "Backend Development", "SEO Optimization", "Full Stack Project"].map((opt) => (
                            <div
                              key={opt}
                              onClick={() => handleSelectChange('projectType', opt)}
                              className="px-4 py-3 text-sm text-slate-300 hover:bg-white/10 hover:text-white cursor-pointer transition-colors"
                            >
                              {opt}
                            </div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <div className="flex flex-col gap-2 relative">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                      <DollarSign size={14} className="text-accent" />
                      Budget Range *
                    </label>
                    <div className="relative group">
                      <div 
                        onClick={() => setOpenDropdown(openDropdown === 'budgetRange' ? null : 'budgetRange')}
                        className={`w-full bg-white/5 border ${openDropdown === 'budgetRange' ? 'border-accent ring-2 ring-accent/20' : 'border-white/10'} p-4 pl-12 pr-10 rounded-xl cursor-pointer transition-all hover:bg-white/10 flex items-center justify-between`}
                      >
                        <span className={`text-sm ${formData.budgetRange ? 'text-white' : 'text-slate-500'}`}>
                          {formData.budgetRange || "Select Budget Range"}
                        </span>
                        <ChevronDown size={18} className={`text-slate-500 transition-transform ${openDropdown === 'budgetRange' ? 'rotate-180 text-accent' : ''}`} />
                      </div>
                      <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-hover:text-accent transition-colors pointer-events-none" size={18} />
                    </div>

                    <AnimatePresence>
                      {openDropdown === 'budgetRange' && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          transition={{ duration: 0.15 }}
                          className="absolute top-full left-0 w-full mt-2 bg-slate-900 border border-white/10 rounded-xl shadow-2xl overflow-hidden z-50"
                        >
                          {["$100 – $500", "$500 – $1000", "$1000 – $3000", "$3000+"].map((opt) => (
                            <div
                              key={opt}
                              onClick={() => handleSelectChange('budgetRange', opt)}
                              className="px-4 py-3 text-sm text-slate-300 hover:bg-white/10 hover:text-white cursor-pointer transition-colors"
                            >
                              {opt}
                            </div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="flex flex-col gap-2"
                >
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                    <PenTool size={14} className="text-accent" />
                    Project Details *
                  </label>
                  <div className="relative group">
                    <textarea 
                      name="projectDetails"
                      value={formData.projectDetails}
                      onChange={handleInputChange}
                      placeholder="Tell us about your project..." 
                      required
                      className="w-full bg-white/5 border border-white/10 p-3 md:p-4 pl-10 md:pl-12 rounded-xl min-h-[120px] md:min-h-[140px] focus:ring-2 focus:ring-accent focus:border-transparent outline-none text-xs md:text-sm text-white placeholder:text-slate-500 transition-all resize-none hover:bg-white/10" 
                    />
                    <PenTool className="absolute left-4 top-4 text-slate-500 group-hover:text-accent transition-colors" size={18} />
                  </div>
                </motion.div>

                <motion.button 
                  type="submit"
                  disabled={loading}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  whileHover={!loading ? { scale: 1.02 } : {}}
                  whileTap={!loading ? { scale: 0.98 } : {}}
                  className="w-full bg-accent text-black py-3 md:py-4 rounded-xl font-black hover:bg-accent-hover transition-all shadow-lg shadow-accent/20 uppercase tracking-widest text-[10px] md:text-xs flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>
                      <Loader2 className="animate-spin w-4 h-4" />
                      Sending...
                    </>
                  ) : (
                    "Start Your Project Now"
                  )}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Live Chat Trigger */}
      <motion.button
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 md:bottom-12 md:right-12 w-14 h-14 md:w-20 md:h-20 bg-accent text-black rounded-2xl md:rounded-[2rem] shadow-2xl flex items-center justify-center z-50 hover:bg-accent-hover transition-colors group"
      >
        <MessageSquare className="w-6 h-6 md:w-9 md:h-9 transition-transform" />
      </motion.button>

      <Footer />
    </div>
  );
}


