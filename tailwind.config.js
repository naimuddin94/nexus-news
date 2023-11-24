/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#364F6B",
        secondary: "#FC5185",
        third: "#3FC1C9",
        neutral: "#F5F5F5",
        text: "#353b48",
      },
    },
    fontFamily: {
      inconsolata: ["'Inconsolata', monospace"],
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["cmyk"],
  },
};
