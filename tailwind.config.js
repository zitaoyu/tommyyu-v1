/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        "dark-grey": "#1F2833",
        "dark-slate": "#94a3b8",
        slate: "#cbd5e1",
        cyan: "#66FCF1",
      },
      fontFamily: {
        robotomono: ["Roboto Mono", "monospace"],
        opensans: ["Open Sans", "sans-serif"],
      },
      animation: {
        "spin-slow": "spin 5s linear infinite",
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
