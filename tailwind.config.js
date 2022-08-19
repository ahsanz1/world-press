/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "black-bg": "#333",
        "light-grey": "#f0f0f0",
        "lightest-grey-bg": "#f5f5f5",
        "custom-orange": "#e09d37",
      },
      letterSpacing: {
        "custom-widest": "0.6em",
      },
      textColor: {
        "text-light-grey-cm": "#c5c5c5",
      },
      width: {
        "30pc-cm": "30%",
      },
    },
  },
  plugins: [],
};
