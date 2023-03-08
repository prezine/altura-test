/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/components/home/**/*.{js,ts,jsx,tsx}",
    "./src/components/home/featured/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        brandNavy1x:'#031827'
      }
    },
  },
  plugins: [],
}