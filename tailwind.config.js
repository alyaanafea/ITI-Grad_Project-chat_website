/* eslint-disable no-dupe-keys */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/daisyui/dist/**/*.js",
    "node_modules/react-daisyui/dist/**/*.js",
  ],
  theme: {
    fontFamily: {
      sans: ['Montserrat', 'sans-serif'],
    },
    extend: {
      colors: {
        mytheme: {
          white: "#FFFFFF",

          grad_Color: "bg-gradient-to-r from-blue-700 to-purple-800",
        },
        gray: { 50: "#fffafa" },
      },
      backgroundImage: {
        "grad-color": "linear-gradient(90deg, #041AD8 0%, #B012AA 78.84%)",

      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          white: "#FFFFFF",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["mytheme", "light"],
    extend: {
      colors: {
        "grad-color": "var(--gradient-color)", // Define as a CSS variable
      },
    },
  },
};
