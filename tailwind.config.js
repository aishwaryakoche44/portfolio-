/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        float: {
          "0%, 100%": {
            transform: "translateY(0px) translateX(0px)",
          },
          "50%": {
            transform: "translateY(-40px) translateX(30px)",
          },
        },
      },
      animation: {
        float: "float 12s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};