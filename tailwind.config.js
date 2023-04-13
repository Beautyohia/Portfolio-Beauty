/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Sofia300: ["Sofia-300"],
        Sofia400: ["Sofia-400"],
        Sofia500: ["Sofia-500"],
        Sofia600: ["Sofia-600"],
        Lota250: ["Lota-250"],
        Lota300: ["Lota-300"],
        Lota400: ["Lota-400"],
        Lota600: ["Lota-600"],
      },
      fontSize: {
        h1: "80px",
      },
      colors: {
        bgblack: "#1e1e1e",
        active: "#2A95AB",
        orange: "#F25F11",
      },
      gridTemplateColumns: {
        menu: "200px 190px",
      },
    },
  },
  plugins: [],
};

// use this when starting the project 'npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch' for live sync
