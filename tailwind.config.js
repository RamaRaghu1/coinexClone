/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "font1":["Manrope", "sans-serif"],
    },
    colors: {
      'light': '#E8F9F6',
      'dark':'#0EAD98',
      'grey':"#7d7f81",
      'light-grey':"#FAFBFC"
    },
     
    },
   
  plugins: [],
}

}