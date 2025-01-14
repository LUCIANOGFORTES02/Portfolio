/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blueDark: 'hsl(0, 0%, 74%)', // Nome personalizado para a cor
      },
    },
  },
  plugins: [],
}