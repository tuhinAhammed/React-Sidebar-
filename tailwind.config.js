/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        theme : "#7367F0",
        primary : "#fff",
        secondary : "#444050",
        tertiary : "#EFEEF0"
      }
    },
  },
  plugins: [],
}