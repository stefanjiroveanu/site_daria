/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,html}"],
  theme: {
    extend: {},
    screens: {
      'phone': {'raw': '(max-width: 600px)'},
    },
  },
  plugins: [],
}