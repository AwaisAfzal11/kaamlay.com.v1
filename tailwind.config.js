/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#F25F11', // Updated from #BD872E to your new brand color
      }
    },
  },
  plugins: [],
}