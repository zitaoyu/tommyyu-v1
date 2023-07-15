/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        navy: "#0a192f",
        "dark-slate": "#94a3b8",
        slate: "#cbd5e1",
        cyan: "#64ffda",
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
