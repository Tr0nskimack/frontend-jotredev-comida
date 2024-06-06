/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        fondo: "#e9e8eb",
        bgBoton: "#65d66c",
        sombrabadget: "#f0fbf0"
      }
    },
  },
  plugins: [],
}