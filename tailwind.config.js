/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'smartphone': '320px',
      'smartphone-r': '480px',
      'tablet': '768px',
      'laptop': '1024px',
      'desktop': '1280px',
    },
  },
  plugins: [],
}
