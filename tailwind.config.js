/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          light: '#fbf0d4',
          DEFAULT: '#c29a52',
          glow: '#f4dfa5',
          deep: '#987543',
          border: 'rgba(241, 210, 145, 0.45)',
        },
        prestige: {
          dark: '#15262c',
          night: '#0d181c',
          brown: '#34271e',
          sand: '#f7f0e3',
          cream: '#fbf6eb',
          lagoon: '#7fd2dc',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Baskerville', 'Georgia', 'serif'],
        display: ['"Cormorant Garamond"', 'Baskerville', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      backgroundImage: {
        'gold-shimmer': 'linear-gradient(110deg, #f4dfa5 0%, #c29a52 45%, #f0d28c 100%)',
        'gold-text': 'linear-gradient(135deg, #fff2ce 0%, #dfb86c 50%, #f7dfa5 100%)',
      },
      keyframes: {
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(200%)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
          '50%': { opacity: '0.9', transform: 'scale(1.05)' },
        }
      },
      animation: {
        shimmer: 'shimmer 2.8s infinite',
        pulseGlow: 'pulseGlow 3s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}
