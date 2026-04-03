/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: '#0B1321', // Vrlo tamna plava iz slike
        cream: '#F9F8F6', // Topla krem bijela pozadina
        gold: '#D4AF37', // Elegantna zlatna
        goldHover: '#C4A030', // Tamnija zlatna za hover
        textDark: '#1E293B',
        paleRed: '#FEF2F2',
        paleGreen: '#F0FDF4',
        borderCream: '#E5E5E5',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      }
    },
  },
  plugins: [],
}
