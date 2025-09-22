import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2D3748', // Deep slate/navy
          light: '#3D4A5C',   // Lighter slate for cards
          dark: '#1A202C',    // Darker slate for footer
        },
        accent: {
          sage: '#7D9D9C',    // Soft sage green
          clay: '#C17C74',    // Muted terracotta/clay
          coral: '#FF6B6B',   // Coral red for experience
          teal: '#4ECDC4',    // Teal for certifications
        },
        background: '#F7F4ED', // Soft cream/off-white
        text: '#1E293B',       // Dark charcoal
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        body: ['var(--font-roboto)'],
      },
      container: {
        center: true,
        padding: '1.5rem',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'draw-line': 'draw-line 2s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'draw-line': {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
      },
    },
  },
  plugins: [],
};

export default config; 