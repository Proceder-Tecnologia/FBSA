/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        accent: {
          light: "#33BBFF",
          base: "#0077B2",
          dark: "#246B8F",
          darkest: "#1C3B4A",
        },
        primary: {
          light: "#6666FF",
          base: "#5252E0",
          dark: "#4040BF",
          darkest: "#1C1C4A",
        },
        dark: {
          title: "#F1F5F9",
          paragraph: "#CBD5E1",
          fill: "#0F172A",
          foregroundFill: "#1E293B",
          navbarFill: "#334155",
          footerFill: "#334155",
        },
        light: {
          title: "#1E293B",
          paragraph: "#475569",
          fill: "#E2E8F0",
          foregroundFill: "#F1F5F9",
          navbarFill: "#F8FAFC",
          footerFill: "#F8FAFC",
        },
      },
      fontFamily: {
        display: ["Poppins", "Arial", "sans-serif"],
        body: ["Montserrat", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};
