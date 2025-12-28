/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0F766E",     // Islamtec teal
        primaryDark: "#115E59",
        accent: "#D97706",      // Warm accent
        muted: "#F1F5F9",
        textDark: "#0F172A",
        textLight: "#475569",
      },
    },
  },
  plugins: [],
};
