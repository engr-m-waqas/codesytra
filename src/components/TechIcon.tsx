// SVG Tech Icons - inline SVGs for common tech stacks
import React, { memo } from "react";

interface TechIconProps {
  name: string;
  size?: number;
}

const icons: Record<string, React.ReactElement> = {
  // JavaScript
  "JavaScript": (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="32" height="32" rx="4" fill="#F7DF1E"/>
      <path d="M10.5 23.5c.4.7 1 1.2 2 1.2 1.1 0 1.8-.55 1.8-1.65V17h2.1v6.1c0 2.7-1.58 3.9-3.9 3.9-2.1 0-3.3-1.1-3.9-2.4l1.9-1.1zm7.5.2c.5.85 1.2 1.45 2.4 1.45 1 0 1.65-.5 1.65-1.2 0-.83-.66-1.12-1.77-1.6l-.61-.26c-1.75-.75-2.92-1.68-2.92-3.66 0-1.82 1.39-3.2 3.55-3.2 1.54 0 2.65.54 3.44 1.94l-1.88 1.2c-.42-.74-.87-1.03-1.56-1.03-.71 0-1.16.45-1.16 1.03 0 .72.45 1.01 1.49 1.46l.61.26c2.06.88 3.23 1.78 3.23 3.8 0 2.18-1.71 3.38-4.01 3.38-2.25 0-3.7-1.07-4.41-2.48l1.95-1.09z" fill="#000"/>
    </svg>
  ),
  "JS": (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="32" height="32" rx="4" fill="#F7DF1E"/>
      <path d="M10.5 23.5c.4.7 1 1.2 2 1.2 1.1 0 1.8-.55 1.8-1.65V17h2.1v6.1c0 2.7-1.58 3.9-3.9 3.9-2.1 0-3.3-1.1-3.9-2.4l1.9-1.1zm7.5.2c.5.85 1.2 1.45 2.4 1.45 1 0 1.65-.5 1.65-1.2 0-.83-.66-1.12-1.77-1.6l-.61-.26c-1.75-.75-2.92-1.68-2.92-3.66 0-1.82 1.39-3.2 3.55-3.2 1.54 0 2.65.54 3.44 1.94l-1.88 1.2c-.42-.74-.87-1.03-1.56-1.03-.71 0-1.16.45-1.16 1.03 0 .72.45 1.01 1.49 1.46l.61.26c2.06.88 3.23 1.78 3.23 3.8 0 2.18-1.71 3.38-4.01 3.38-2.25 0-3.7-1.07-4.41-2.48l1.95-1.09z" fill="#000"/>
    </svg>
  ),
  // React
  "React.js": (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="16" r="3" fill="#61DAFB"/>
      <ellipse cx="16" cy="16" rx="14" ry="5.5" stroke="#61DAFB" strokeWidth="1.5" fill="none"/>
      <ellipse cx="16" cy="16" rx="14" ry="5.5" stroke="#61DAFB" strokeWidth="1.5" fill="none" transform="rotate(60 16 16)"/>
      <ellipse cx="16" cy="16" rx="14" ry="5.5" stroke="#61DAFB" strokeWidth="1.5" fill="none" transform="rotate(120 16 16)"/>
    </svg>
  ),
  // TypeScript
  "TypeScript": (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="32" height="32" rx="4" fill="#3178C6"/>
      <path d="M18 18v-2.5h5V18h-1.5v6H20v-6H18zm-8 0h3v1.2h-1V24H10.5v-4.8H9.5L9 18h1z" fill="white"/>
      <path d="M14 20.5c0-2 1.5-2.5 2.5-2.5V20c-.8 0-1 .3-1 .5V24H14v-3.5z" fill="white"/>
    </svg>
  ),
  // Tailwind CSS
  "Tailwind CSS": (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 8c-4 0-6.5 2-7.5 6 1.5-2 3.25-2.75 5.25-2.25 1.14.285 1.955 1.113 2.856 2.03C18.084 15.346 19.623 17 23 17c4 0 6.5-2 7.5-6-1.5 2-3.25 2.75-5.25 2.25-1.14-.285-1.955-1.113-2.856-2.03C20.916 9.654 19.377 8 16 8zM8.5 17c-4 0-6.5 2-7.5 6 1.5-2 3.25-2.75 5.25-2.25 1.14.285 1.955 1.113 2.856 2.03C10.584 24.346 12.123 26 15.5 26c4 0 6.5-2 7.5-6-1.5 2-3.25 2.75-5.25 2.25-1.14-.285-1.955-1.113-2.856-2.03C13.416 18.654 11.877 17 8.5 17z" fill="#06B6D4"/>
    </svg>
  ),
  // HTML5
  "HTML5": (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 3l2 22 10 3 10-3 2-22H4zm21.5 4.5l-.5 4.5H10l.5 4.5h14l-1 9-7.5 2.5L8.5 25l-.5-3.5h4.5l.5 1.5 3 .5 3-.5.5-3.5H9L8 7.5h17.5z" fill="#E34F26"/>
    </svg>
  ),
  // CSS3
  "CSS3": (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 3l2 22 10 3 10-3 2-22H4zm21.5 4.5l-.5 4.5H15l-.5 4.5h10.5l-1 9-7.5 2.5L8.5 25l-.5-3.5h4.5l.5 1.5 3 .5 3-.5.5-3.5H10l-.5-4.5h15l.5-4.5z" fill="#1572B6"/>
    </svg>
  ),
  // Redux
  "Redux": (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20.5 7.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM10 24.5c0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2-2 .9-2 2zM24 22.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z" fill="#764ABC"/>
      <path d="M22.2 9c-.5-1.8-2.1-3-4-3-1.3 0-2.4.5-3.3 1.4L10 13c-.8.8-1.2 1.8-1.2 2.9 0 1.5.8 2.9 2 3.6-.3.7-.4 1.4-.3 2.2.4 2.1 2.3 3.8 4.5 3.8h.5l5.5-1.5c1-.3 1.9-.9 2.5-1.7.6-.8.9-1.8.8-2.8 1.2-.7 2-2 2-3.5 0-1.1-.4-2.1-1.1-2.9L22.2 9z" stroke="#764ABC" strokeWidth="1.5" fill="none"/>
    </svg>
  ),
  // Node.js
  "Node.js": (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 3L3 10.5v11L16 29l13-7.5v-11L16 3z" fill="#339933" opacity="0.15"/>
      <path d="M16 3L3 10.5v11L16 29l13-7.5v-11L16 3z" stroke="#339933" strokeWidth="1.5" fill="none"/>
      <text x="16" y="20" textAnchor="middle" fill="#339933" fontSize="8" fontWeight="bold" fontFamily="monospace">Node</text>
    </svg>
  ),
  // Express
  "Express": (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <text x="16" y="22" textAnchor="middle" fill="#333" fontSize="18" fontWeight="normal" fontFamily="Arial, sans-serif">ex</text>
    </svg>
  ),
  // MongoDB
  "MongoDB": (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 4C16 4 10 12 10 18a6 6 0 0012 0c0-6-6-14-6-14z" fill="#47A248"/>
      <line x1="16" y1="24" x2="16" y2="28" stroke="#47A248" strokeWidth="2"/>
    </svg>
  ),
  // Mongoose
  "Mongoose": (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="16" r="14" fill="#880000"/>
      <path d="M16 4 C22 4 26 8 26 14 C26 20 22 24 16 24 C10 24 6 20 6 14 C6 8 10 4 16 4 Z" fill="none" stroke="white" strokeWidth="2.5" />
      <circle cx="12" cy="14" r="2" fill="white" />
      <circle cx="20" cy="14" r="2" fill="white" />
    </svg>
  ),
  // GitHub
  "GitHub": (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M16 3C9.373 3 4 8.373 4 15c0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.333-1.754-1.333-1.754-1.087-.743.083-.728.083-.728 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.31.468-2.382 1.235-3.22-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.3 1.23a11.51 11.51 0 013.006-.404c1.02.005 2.047.138 3.006.404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.838 1.233 1.91 1.233 3.22 0 4.61-2.807 5.624-5.48 5.921.43.372.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.286 0 .32.216.694.825.576C24.565 24.796 28 20.3 28 15c0-6.627-5.373-12-12-12z" fill="#ccc"/>
    </svg>
  ),
  // SEO
  "SEO": (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Magnifying glass */}
      <circle cx="14" cy="14" r="9" stroke="#4b5563" strokeWidth="3" fill="#60a5fa"/>
      <line x1="20" y1="20" x2="27" y2="27" stroke="#4b5563" strokeWidth="4" strokeLinecap="round"/>
      {/* Trend Arrow */}
      <path d="M8 17l4-4 3 3 5-6" stroke="#ff7f00" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      <path d="M16 10h4v4" stroke="#ff7f00" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    </svg>
  ),
  // Flutter
  "Flutter": (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14 4l-10 10 3 3 13-13H14z" fill="#54C5F8"/>
      <path d="M14 14l-7 7 7 7h6l-7-7 7-7H14z" fill="#54C5F8"/>
      <path d="M20 21l-6 6h6l3-3-3-3z" fill="#01579B"/>
      <path d="M20 21l-3 3 3 3 7-6-7 0z" fill="#29B6F6" opacity="0.6"/>
    </svg>
  ),
  // Dart
  "Dart": (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15.5 3L3.5 15l10.5 10.5h14.5L15.5 3z" fill="#01579B"/>
      <path d="M15.5 3L3.5 15l7 7 11.5-11.5L15.5 3z" fill="#29B6F6"/>
      <path d="M10.5 22l3.5 3.5h14.5L10.5 22z" fill="#81D4FA"/>
    </svg>
  ),
  // Android
  "Android": (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 16h12v8a2 2 0 01-2 2H12a2 2 0 01-2-2v-8z" fill="#3DDC84"/>
      <rect x="10" y="11" width="12" height="5" rx="2" fill="#3DDC84"/>
      <circle cx="13.5" cy="13.5" r="1" fill="white"/>
      <circle cx="18.5" cy="13.5" r="1" fill="white"/>
      <line x1="7" y1="13" x2="9" y2="13" stroke="#3DDC84" strokeWidth="2" strokeLinecap="round"/>
      <line x1="23" y1="13" x2="25" y2="13" stroke="#3DDC84" strokeWidth="2" strokeLinecap="round"/>
      <path d="M12 9l-2-4M20 9l2-4" stroke="#3DDC84" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
  // Firebase
  "Firebase": (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 24L12 6l4 8 2-4 6 14H8z" fill="#FFA000"/>
      <path d="M8 24l4-10 4 10H8z" fill="#F57F17"/>
      <path d="M16 14l-4 10h12L16 14z" fill="#FFCA28"/>
    </svg>
  ),
  // Figma
  "Figma": (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="4" width="6" height="6" rx="3" fill="#F24E1E"/>
      <rect x="16" y="4" width="6" height="6" rx="3" fill="#FF7262"/>
      <rect x="10" y="10" width="6" height="6" fill="#A259FF"/>
      <rect x="10" y="16" width="6" height="6" rx="3" fill="#0ACF83"/>
      <circle cx="19" cy="13" r="3" fill="#1ABCFE"/>
    </svg>
  ),
  // Adobe XD
  "Adobe XD": (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="32" height="32" rx="6" fill="#2D0038"/>
      <text x="16" y="22" textAnchor="middle" fill="#FF2BC2" fontSize="13" fontWeight="bold" fontFamily="Arial, sans-serif">Xd</text>
    </svg>
  ),
  // Photoshop
  "Photoshop": (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="32" height="32" rx="6" fill="#001D34"/>
      <text x="16" y="22" textAnchor="middle" fill="#31A8FF" fontSize="13" fontWeight="bold" fontFamily="Arial, sans-serif">Ps</text>
    </svg>
  ),
  // Next.js
  "Next.js": (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="16" r="14" fill="white"/>
      <path d="M21 24.5L12.5 12h-2v11h2v-8l7.5 11 1-1.5z" fill="black"/>
      <path d="M20 12h2v11h-2V12z" fill="black"/>
    </svg>
  ),
  // Affinity Designer
  "Affinity Designer": (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="32" height="32" rx="8" fill="#1B5EC4"/>
      <path d="M16 6L7 20h18L16 6z" fill="none" stroke="#52C1FF" strokeWidth="2" strokeLinejoin="round"/>
      <path d="M10 20l6-10 6 10" fill="none" stroke="#52C1FF" strokeWidth="1.5" strokeLinejoin="round"/>
      <path d="M11.5 17h9" stroke="#52C1FF" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M7 20h18" stroke="#52C1FF" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
  // UI/UX
  "UIUX": (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="uiux-grad" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#8A2BE2" />
          <stop offset="50%" stopColor="#FF1493" />
          <stop offset="100%" stopColor="#FF8C00" />
        </linearGradient>
      </defs>
      {/* Laptop Screen */}
      <rect x="4" y="4" width="24" height="18" rx="4" stroke="url(#uiux-grad)" strokeWidth="2.5" fill="none" />
      {/* Laptop Base */}
      <path d="M2 24h11v2h6v-2h11c1.1 0 2 .9 2 2v2c0 1.1-.9 2-2 2H2c-1.1 0-2-.9-2-2v-2c0-1.1.9-2 2-2z" fill="url(#uiux-grad)" />
      {/* UI/UX Text */}
      <text x="16" y="17" textAnchor="middle" fill="url(#uiux-grad)" fontSize="8" fontWeight="bold" fontFamily="sans-serif">UI/UX</text>
      {/* Lines above text */}
      <line x1="8" y1="9" x2="24" y2="9" stroke="url(#uiux-grad)" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="8" y1="12" x2="24" y2="12" stroke="url(#uiux-grad)" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
};

// Fallback icon with first letter
function FallbackIcon({ name, color }: { name: string; color: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="32" height="32" rx="6" fill={color} fillOpacity="0.2"/>
      <rect width="32" height="32" rx="6" stroke={color} strokeWidth="1" fill="none" opacity="0.4"/>
      <text x="16" y="21" textAnchor="middle" fill={color} fontSize="13" fontWeight="bold" fontFamily="system-ui">
        {name.charAt(0)}
      </text>
    </svg>
  );
}

const TechIcon = memo(({ name, size = 28 }: TechIconProps) => {
  const icon = icons[name];
  return (
    <span
      title={name}
      style={{ width: size, height: size, display: "inline-flex", flexShrink: 0 }}
    >
      {icon ?? <FallbackIcon name={name} color="#64748b" />}
    </span>
  );
}
