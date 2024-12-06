/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        sen: ['Sen', 'serif'],
      },
      colors: {
        Dark_black: "#232536",
        Yellow: "#FFD050",
        Purple: "#592EA9",
        Light_Pink: "#F4F4F4",
        Pink: "#F4F0F8",
        Light_Yellow: "#FBF6EA",
      }
    },
  },
  plugins: [],
}

