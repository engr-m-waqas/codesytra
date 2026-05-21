// Performance fix: was importing from "framer-motion" while rest of the app
// uses "motion/react". Loading two animation libraries bloated the bundle
// significantly. Switched to a pure CSS divider — no JS animation needed here.
export default function SectionDivider() {
  return (
    <div className="w-full flex justify-center py-2 bg-transparent overflow-hidden">
      <div className="w-full max-w-7xl px-6 md:px-16">
        <div className="animated-divider" />
      </div>
    </div>
  );
}
