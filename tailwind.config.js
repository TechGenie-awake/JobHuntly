/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "red-hat": ['"Red Hat Display"', "sans-serif"],
        bai: ['"Bai Jamjuree"', "sans-serif"],
        fahkwang: ['"Fahkwang"', "sans-serif"],
        epilogue: ['"Epilogue"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
