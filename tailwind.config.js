import {heroui} from "@heroui/theme"

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './layouts/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#000000", // Soft turquoise for a modern, airy vibe
        foreground: "#FFFFFF", // Darker slate for readability and contrast
        primary: {
          light: "#FF39DE",  // Light turquoise for highlights
          DEFAULT: "#FF39DE", // Bold turquoise blue for primary elements
          dark: "#F002C8",    // Deeper turquoise for strong CTAs
        },
        secondary: {
          light: "#FFFFFF",   // Soft pinkish-red for secondary highlights
          DEFAULT: "#FFFFFF", // Bright coral for secondary buttons/links
          dark: "#FFFFFF",    // Deep coral for contrast
        },
        success: {
          light: "#B8EEDC",   // Soft mint green for success feedback
          DEFAULT: "#4ADE80", // Bright green for success states (likes, matches)
          dark: "#199948",    // Deep forest green for positive emphasis
        },
        warning: {
          light: "#FFE6A3",   // Pale yellow for subtle warnings
          DEFAULT: "#F59E0B", // Bright amber for warnings and alerts
          dark: "#B7791F",    // Deep gold for critical warnings
        },
        error: {
          light: "#FCA5A5",   // Soft pinkish-red for gentle errors
          DEFAULT: "#EF4444", // Bright red for error notifications
          dark: "#B91C1C",    // Deep red for urgent error highlights
        },
        info: {
          light: "#BFDBFE",   // Soft sky blue for informational elements
          DEFAULT: "#3B82F6", // Bright blue for info popups and notifications
          dark: "#1E40AF",    // Deep blue for important info sections
        },
        neutral: {
          light: "#E2E8F0",   // Light gray for neutral backgrounds
          DEFAULT: "#94A3B8", // Mid gray for inactive elements
          dark: "#475569",    // Darker gray for text and icons
        },
        focus: '#33C2BA',
      },

      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
    },
  },
  darkMode: "class",
  plugins: [heroui()],
}
