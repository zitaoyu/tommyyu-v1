/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        bgc: "#171E26",
        "bgc-light": "#1F2833",
        primary: "#06C8EF",
        "primary-dark": "#02424F",
        secondary: "#06C8EF",
        slate: "#94a3b8",
        "light-slate": "#D8E0E9",
        // unused colors:
        gray: "#171E26",
        "light-gray": "#263240",
        navy: "#0a192f",
        cyan: "#64ffda",
        blue: "#06C8EF",
        "gray-transparent-blur": "rgba(23, 30, 38, 0.96)",
      },
      fontFamily: {
        robotomono: ["Roboto Mono", "monospace"],
        opensans: ["Open Sans", "sans-serif"],
      },
      animation: {
        "spin-slow": "spin 5s linear infinite",
        "pulse-slow": "pulse-slow 0.5s ease-in-out forwards alternate",
        "fade-in-7s": "fadein 7s linear",
        "fade-in-5s": "fadein 5s linear",
      },
      keyframes: {
        "pulse-slow": {
          to: { transform: "scale(0.95)" },
        },
        fadein: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
      },
      boxShadow: {
        "window-shadow": "0 6px 14px -4px black",
      },
      backgroundImage: {
        project_0: "url('./assets/dummy_project.jpg')",
        project_1: "url('./assets/dummy_project.jpg')",
        project_2: "url('./assets/dummy_project.jpg')",
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
      "xs-max-h": { raw: "(max-height: 480px)" },
      "ss-max-h": { raw: "(max-height: 680px)" },
    },
  },
  plugins: [
    plugin(({ matchUtilities, theme }) => {
      matchUtilities(
        {
          "animation-delay": (value) => {
            return {
              "animation-delay": value,
            };
          },
        },
        {
          values: theme("transitionDelay"),
        },
      );
    }),
  ],
};
