/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#525CEB",
        secondary: "#BFCFE7",
        bg: "#F7F7F7",
        text: "#1E1E1E"
      },
      fontFamily: {
        poppins: ["poppins"],
        barlow: ["barlow"]
      }
    },
  },
  plugins: [],
}