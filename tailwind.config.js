/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: '#0B1C2E',
        'aviation-blue': '#176EA6',
        'sky-blue': '#E8F0FA',
        'light-sky': '#F2F8FC',
        gold: '#D4AF37',
        'gold-border': '#B99122',
        'gold-hover': '#B8983A',
        'off-white': '#F5F5F2',
        'muted-text': '#526579',
        'border-light': '#E1EAF2',
      },
      fontFamily: {
        sans: ['DM Sans', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
      }
    },
  },
  plugins: [],
}
