/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1e293b", // Slate 800 (Dark/Black for text/buttons)
        secondary: "#8b5cf6", // Violet 500 (Gradient Card)
        accent: "#2dd4bf", // Teal 400 (Status Badge)
        dark: "#0f172a", // Slate 950
        light: "#ffffff", // Pure White
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        }
      }
    },
  },
  plugins: [],
}
