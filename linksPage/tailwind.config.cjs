/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{js,ts,jsx,tsx,html}"],
  theme: {
    fontFamily: {
      roboto: ["Roboto Mono", "monospace"],
      code: ["Source Code Pro", "monospace"],
    },
    backgroundImage: {
      gradient: "radial-gradient(at 100% top,#33204D,#1A1720,#17141D)",
    },
    boxShadow: {
      custom: "#7e57bb 0px 0px 150px -60px",
    },
    extend: {},
  },
  plugins: [],
};
