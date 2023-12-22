/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        button: "0px 8px 32px 0px rgba(102, 107, 226, 0.35)",
        card: "0px 11px 39px 0px rgba(0, 0, 0, 0.07)",
      },
      colors: {
        primary: "#8BAC3E",
        blur: "rgba(255, 255, 255, 0.74)",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/hero.png')",
      },
    },
  },
  plugins: [],
};
