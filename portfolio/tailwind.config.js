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
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
      },
      screens: {
        '3xl': '1600px',
      }
    },
  },
  plugins: [],
}

