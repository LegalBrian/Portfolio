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
    extend: {
      colors: {
        "negro": "rgba(0,0,0,1)",
        "negro-t": "rgba(0,0,25,0.7)",
        "negro-azul": "rgba(0,0,25,1)",
        "azul-negro-o": "rgba(0,0,50,1)",
        "azul-negro" : "rgba(0,0,75,1)",
        "azul-oscuro": "rgba(0,0,100,1)",
        "azul-hover": "rgba(75,75,255,1)",
        "blanco": "rgba(255,255,255,1)",
        "rojo": "rgba(255,75,75,1)"
      }
    }
  },
  plugins: [],
}
