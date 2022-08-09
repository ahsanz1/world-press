/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "black-bg": "#333",
        "light-grey": "#f5f5f5",
      },
      letterSpacing: {
        "custom-widest": "0.6em",
      },
      textColor: {
        "text-light-grey-cm": "#c5c5c5",
      },
    },
  },
  plugins: [],
};
