/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "background": "E2E9DD",
        "dark-font": "1D1D1B",
        "purple-accent": "9E7DE5",
        "green-accent": "00B59C",
        "yellow-accent": "FFC100",
        "blue-accent": "4090E0",
        "pink-accent": "CC53C7",
      },
      fontFamily: {
        header: ["Rubik Mono One", "sans-serif"],
        paragraph: ["Rounded Mplus 1c Bold", "sans-serif"],
      },
    },
    screen: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
    },
  },
  plugins: [],
}
