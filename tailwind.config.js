/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        gray: "#1f2833",
        navy: "#0a192f",
        "light-slate": "#D8E0E9",
        slate: "#94a3b8",
        cyan: "#64ffda",
        "gray-transparent-blur": "rgba(31, 40, 51, 0.96)",
      },
      fontFamily: {
        robotomono: ["Roboto Mono", "monospace"],
        opensans: ["Open Sans", "sans-serif"],
      },
      animation: {
        "spin-slow": "spin 5s linear infinite",
        "pulse-slow": "pulse-slow 0.5s ease-in-out forwards alternate",
      },
      keyframes: {
        "pulse-slow": {
          to: { transform: "scale(0.95)" },
        },
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
