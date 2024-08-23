/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#f58c0b",
        secondary: "#5c371b",
        secondaryDark: "rgb(64, 34, 12)"
      },
    },
  },
  plugins: [],
};
