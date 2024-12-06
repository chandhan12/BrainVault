/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        gray:{
          100:"#eeeeef",
          200:"e6eded",
          600:"#95989c"
        },
        purple:{
          600:"#7164c0 ",
          500:"#9492db",
          200:"#d9ddee"
        }
      }
    },
  },
  plugins: [],
}