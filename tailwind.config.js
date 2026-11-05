/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Direction artistique « Solaire & Méditerranéenne Moderne »
        travertine: '#FAF7F2',
        sand: '#F3EEE4',
        linen: '#E8DFCF',
        bronze: {
          DEFAULT: '#A8823F',
          light: '#C9A869',
          deep: '#8A6A2F',
        },
        ink: {
          DEFAULT: '#1C1A17',
          soft: '#57514A',
          muted: '#8A8279',
        },
        night: '#1A1814',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Baskerville', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(14px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeUp: 'fadeUp 0.9s cubic-bezier(0.22, 1, 0.36, 1) both',
      },
    },
  },
  plugins: [],
}
