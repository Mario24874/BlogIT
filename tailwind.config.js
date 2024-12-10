/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'blue-900': '#1A365D', // Azul muy oscuro
        'blue-600': '#2563EB', // Azul medio
        'blue-500': '#3B82F6', // Azul claro
      },
    },
  },
  plugins: [],
}