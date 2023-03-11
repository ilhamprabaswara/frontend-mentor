/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Manrope: ['Manrope', "sans-serif"],
        Fraunces: ['Manrope', "serif"],
        Montserrat: ['Montserrat', "sans-serif"]

      },
    },
  },
  plugins: [],
}
