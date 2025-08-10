/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      spacing: {
        'navbar': '4rem' // 64px to match the navbar height
      }
    }
  },
  plugins: []
}