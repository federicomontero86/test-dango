/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        "3xl": "0 0 60px -15px rgba(0, 0, 0, 0.3)",
      },
      lineHeight: {
        topbar: "13.31px",
        heroTitle: "41.5px",
      },
    },
    colors: {
      green: "#7AA65A",
      lightGreen: "rgba(122, 166, 90, 0.58)",
      white: "#FFFFFF",
    },
  },
  plugins: [],
};
