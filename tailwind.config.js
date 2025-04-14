/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Inter', 'sans-serif'],
        serif: ['"Playfair Display"', 'serif'],
      },
      colors: {
        'space-blue': '#0f172a',
        'glow-cyan': '#22d3ee',
        'deep-ocean': '#0b132b',
        'apple-blue': '#007aff',
      },
      animation: {
        'fade-in': 'fadeIn 1.5s ease-out forwards',
        'slide-up': 'slideUp 1.3s ease-out forwards',
        'typewriter': 'typing 2.5s steps(40, end) forwards',
        'blink': 'blink 1s step-end infinite',
        'bounce': 'bounce 2s infinite',
        'hola': 'hola 0.5s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(40px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        typing: {
          from: { width: '0' },
          to: { width: '100%' },
        },
        blink: {
          '50%': { borderColor: 'transparent' },
          '100%': { borderColor: 'white' },
        },
        hola: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      dropShadow: {
        glow: '0 0 10px rgba(0, 255, 255, 0.5)',
      },
    },
  },
  plugins: [],
}
