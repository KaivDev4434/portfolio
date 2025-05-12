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
          DEFAULT: '#2A2D34', // Dark Navy
          light: '#3A3D44',   // Slightly lighter navy for cards
          dark: '#1A1D24',    // Darker navy for footer
        },
        accent: {
          teal: '#5F9EA0',    // Soft Teal
          coral: '#FF6B6B',   // Coral
        },
        background: '#F5F5F5', // Light Gray
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