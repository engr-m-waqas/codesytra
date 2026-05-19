import React from "react";
import { motion } from "motion/react";
import TechIcon from "./TechIcon";

const iconAutoAnimation = {
  x: [0, 6, -6, 0],
  transition: {
    duration: 2.4,
    repeat: Infinity,
    ease: "easeInOut"
  }
};

export default function ServiceCard({ icon, name, desc, ownerName, ownerColor }: {
  icon: string; name: string; desc: string; ownerName: string; ownerColor: string;
  key?: React.Key;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group p-4 md:p-8 bg-white/5 rounded-xl md:rounded-2xl border border-white/5 hover:border-accent/40 hover:shadow-xl transition-all flex flex-col h-full"
    >
      <div className="w-10 h-10 md:w-14 md:h-14 rounded-lg md:rounded-xl bg-accent/10 flex items-center justify-center text-xl md:text-3xl mb-3 md:mb-5 shrink-0 overflow-hidden">
        <motion.div 
          animate={iconAutoAnimation}
          className="flex items-center justify-center"
        >
          {icon.length > 2 ? <TechIcon name={icon} size={28} /> : icon}
        </motion.div>
      </div>
      
      <h3 className="text-sm md:text-xl font-bold text-white mb-1.5 md:mb-3 tracking-tight leading-snug">
        {name}
      </h3>
      
      <p className="text-slate-400 text-[11px] md:text-[15px] leading-relaxed mb-3 md:mb-5 flex-1">
        {desc}
      </p>
      
      <div className="flex items-center gap-2 md:gap-3 pt-3 md:pt-4 border-t border-white/5 mt-auto">
        <div className="w-5 h-5 md:w-7 md:h-7 rounded-full bg-accent/20 flex items-center justify-center text-[8px] md:text-[10px] font-bold text-accent shrink-0">
          {ownerName.split(' ')[0][0]}
        </div>
        <span className="text-[9px] md:text-[11px] font-bold uppercase tracking-wider text-slate-500 leading-tight mt-0.5">
          Specialist: <br className="sm:hidden" /><span className="text-white">{ownerName}</span>
        </span>
      </div>
    </motion.div>
  );
}
