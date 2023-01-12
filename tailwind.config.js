/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}


// use this when starting the project 'npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch' for live sync
