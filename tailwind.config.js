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
        Lota300: ["Lota-300"],
        Lota400: ["Lota-400"],
        Lota600: ["Lota-600"],
      },
      fontSize: {
        sm: "0.8rem",
        base: "1rem",
        xl: "1.25rem",
        h1: "80px",
        "2xl": "24px",
        "3xl": "1.953rem",
        "4xl": "36px ",
        "5xl": "3.052rem",
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
