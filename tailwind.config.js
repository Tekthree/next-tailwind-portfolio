const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.js", "./components/**/*.js"],
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        mortendbold: ["mortendbold", "sans-serif"],
        plusJakartaSans: ["PlusJakartaSans", "sans-serif"],
      },
      colors: {
        primary: {
          DEFAULT: "#c0b3cb",
          light: "#e4d4f1",
          dark: "#9b90a4",
        },
        secondary: {
          DEFAULT: "#291f70",
          200: "#645AAA",
          400: "#40358c",
          600: "#191151",
          800: "#0E092B",
        },
        orange: {
          DEFAULT: "#A1461F",
          200: "#f5a074",
          400: "#CB6B3D",
          600: "#732b0d",
          800: "#3b1906",
        },
        green: {
          DEFAULT: "#276b4e",
          200: "#58a388",
          400: "#398667",
          600: "#1a4e37",
          800: "#0E2A1F",
        },
        yellow: {
          DEFAULT: "#a58723",
          200: "#fadf76",
          400: "#cfb140",
          600: "#765F12",
          800: "#3d3209",
        },

        purple: "#2b1e7b",
        bar: "#b7abc1",
        darkPurple: "#0e072d",
      },
    },
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
  ],
};
