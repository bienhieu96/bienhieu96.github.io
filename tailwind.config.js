/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#283046",
      },
      backgroundColor: {
        primary: {
          default: "#283046",
          600: "#282C38",
        },
      },
      gridRow: {
        12: "grid-template-rows: repeat(6, minmax(0, 1fr))",
      },
    },
  },
  plugins: [],
};
