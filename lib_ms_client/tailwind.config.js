/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#C5BAFF",
        secondary: "#C4D9FF",
        tertiary: "#E8F9FF",
      },
    },
  },
  plugins: [],
};
