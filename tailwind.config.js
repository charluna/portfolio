/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1F1F1F",
        secondary: "#FF69B4",
        accent: "#FF1493",
        background: "#FFF0F5",
        "background-alt": "#FFE4E1",
        "dark-pink": "#C71585",
        "light-pink": "#FFB6C1",
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
} 