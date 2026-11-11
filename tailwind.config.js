/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#0a0a0a',
        surface: {
          50: '#1a1a1a',
          100: '#141414',
          200: '#0d0d0d',
          300: '#0a0a0a',
        },
        border: {
          subtle: 'rgba(255, 255, 255, 0.08)',
          glow: 'rgba(255, 255, 255, 0.16)',
        },
        brand: {
          violet: '#6369ff',
          deepViolet: '#4f1ad6',
          neon: '#1aff75',
          neonDim: 'rgba(26, 255, 117, 0.15)',
        },
        text: {
          primary: '#f5f5f8',
          muted: '#8e8e93',
          dim: '#636366',
        }
      },
      fontFamily: {
        sans: ['"DM Sans"', 'Inter', 'sans-serif'],
        serif: ['"Instrument Serif"', 'Georgia', 'serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      animation: {
        'marquee': 'marquee 25s linear infinite',
        'pulse-subtle': 'pulseGlow 4s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        }
      }
    },
  },
  plugins: [],
}
