/** @type {import('tailwindcss').Config} */
export default {
  // Iska matlab hai Tailwind in tamam files mein check karega
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  // Dark mode toggle handle karne ke liye
  darkMode: 'class', 
  theme: {
    extend: {
      colors: {
        'lux-white': '#F1F1F1',
        'lux-gold': '#E9C46A',
        'lux-tan': '#C08552',
        'lux-brown': '#5E4433',
        'lux-black': '#212121',
      },
      // Luxury look ke liye fonts setup
      fontFamily: {
        'premium': ['Playfair Display', 'serif'],
        'body': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}