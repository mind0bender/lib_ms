/** @type {import('tailwindcss').Config} */
import { blue, indigo } from "tailwindcss/colors";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: indigo,
        secondary: blue,
      },
    },
  },
  plugins: [],
};
