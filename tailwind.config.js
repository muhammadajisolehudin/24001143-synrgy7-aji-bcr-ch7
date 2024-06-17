/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0D28A6',
        secondary: '#CFD4ED',
        danger: '#CFD4ED'
      },
    },
  },
  plugins: [],
}