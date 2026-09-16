/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        huru: {
          orange: "#f26622",
          espresso: "#29130c",
          yellow: "#f7f195",
          grey: "#686363",
        },
      },
      fontFamily: {
        heading: ["GT Pressura Pro", "Georgia", "serif"],
        body: ["Satoshi", "Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
