import React from "react";
import { motion } from "motion/react";
import TechIcon from "./TechIcon";

interface Specialty { icon: string; label: string; color: string; }

interface TeamMemberProps {
  id: string; name: string; role: string; exp: string;
  avatar: string; avatarImg?: string; desc: string;
  skills: string[]; specialties: Specialty[];
  themeColor: string; number: string;
  key?: React.Key;
}

export default function TeamMember({ name, role, exp, avatar, avatarImg, desc, skills, themeColor }: TeamMemberProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group p-4 sm:p-6 md:p-8 bg-white/5 border border-white/5 rounded-xl md:rounded-2xl hover:border-accent/40 hover:shadow-xl transition-all"
    >
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 items-center sm:items-start text-center sm:text-left">
        {/* Avatar */}
        <div className="relative shrink-0">
          {avatarImg ? (
            <div
              className="w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-xl md:rounded-2xl overflow-hidden shadow-lg group-hover:rotate-2 transition-transform border-2 border-white/10"
              style={{ backgroundColor: themeColor }}
            >
              <img src={avatarImg} alt={name} className="w-full h-full object-cover" loading="lazy" />
            </div>
          ) : (
            <div
              className="w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-xl md:rounded-2xl flex items-center justify-center text-2xl md:text-3xl font-bold text-white shadow-lg group-hover:rotate-2 transition-transform"
              style={{ backgroundColor: themeColor }}
            >
              {avatar}
            </div>
          )}
          <div className="absolute -bottom-1.5 -right-1.5 md:-bottom-2 md:-right-2 bg-accent text-black px-2 py-0.5 md:px-2.5 md:py-1 text-[8px] md:text-[9px] font-bold uppercase tracking-wider rounded-md md:rounded-lg shadow-md whitespace-nowrap">
            {exp}
          </div>
        </div>

        {/* Info */}
        <div className="flex-1 min-w-0">
          <div className="mb-4">
            <h3 className="text-lg md:text-2xl font-bold text-white mb-0.5 md:mb-1 group-hover:text-accent transition-colors">
              {name}
            </h3>
            <p className="text-accent font-bold text-[10px] md:text-sm uppercase tracking-widest leading-snug">
              {role}
            </p>
          </div>

          <p className="text-slate-400 text-[12px] md:text-[15px] leading-relaxed mb-3 md:mb-5 max-w-3xl">
            {desc}
          </p>

          {/* Skills */}
          <div className="flex flex-wrap justify-center sm:justify-start gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="flex items-center gap-1 md:gap-1.5 px-2 md:px-3 py-1 md:py-1.5 bg-white/5 text-slate-300 text-[9px] md:text-[10px] font-bold uppercase tracking-wider rounded-lg md:rounded-xl border border-white/5 group-hover:border-accent/30 hover:bg-white/10 hover:scale-105 transition-all"
              >
                <TechIcon name={skill} size={14} />
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
