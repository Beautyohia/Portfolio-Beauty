/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        Sofia300: ["Sofia-300"],
        Sofia400: ["Sofia-400"],
        Sofia500: ["Sofia-500"],
        Sofia600: ["Sofia-600"],
        Lota300: ["Lota-300"],
        Lota400: ["Lota-400"],
        Lota600: ["Lota-600"],
      },
    },
  },
  plugins: [],
}


// use this when starting the project 'npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch' for live sync
