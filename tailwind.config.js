/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        instrument: ["'Instrument Serif'", "serif"],
      },
      colors: {
        chocolate: "rgb(210,180,140)", // Optional: name your brown color
      },
    },
  },
  plugins: [],
}



