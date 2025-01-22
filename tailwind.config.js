/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        park: ["Kulim Park"],
        inter: ["Inter"],
      },
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
      },
      screens: {
        "3xl": "1600px",
        sm2: "460px",
        sm3: "338px",
      },
      boxShadow: {
        mdButCenter: "0px 0px 5px 2px rgba(0,0,0,0.10) ",
        innerxl: "0px 0px 5px 2px rgba(0,0,0,0.35) inset",
        xxl: "0px 4px 8px -1px rgba(0,0,0,0.54);",
        special: "1px 1px 10px 0px rgba(0,0,0,0.6);",
        special2: "1px 1px 29px 0px rgba(0,0,0,0.6);",
      },
    },
  },
  plugins: [],
};
