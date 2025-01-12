/** @type {import('tailwindcss').Config} */
const nativewind = require("nativewind/tailwind/native");
module.exports = {
  content: ["./components/**/*.{js,jsx,ts,tsx}", "./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [nativewind()],
};
