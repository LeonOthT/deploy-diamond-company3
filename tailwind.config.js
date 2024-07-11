/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#140d21",
        search: "#1a151c",
        box: "#1F1C22",
        unit: "#888689",
      },
    },
  },
  plugins: [],
};
