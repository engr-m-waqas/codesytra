import { motion } from "framer-motion";

export default function SectionDivider() {
  return (
    <div className="w-full flex justify-center py-2 bg-transparent overflow-hidden">
      <motion.div 
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="w-full max-w-7xl px-6 md:px-16"
      >
        <div className="animated-divider" />
      </motion.div>
    </div>
  );
}
