/** @type {import('tailwindcss').Config} */
export default {
  content: [   "./index.html","./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        park: ["Kulim Park"],
        inter: ["Inter"]

      },
      colors: {
        primary: "#953735",
        secondary: "#FBEEE4"
      },
    },
  },
  plugins: [],
}

