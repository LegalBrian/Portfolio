/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  "darkMode": "class",
  theme: {
    screens: {
      'smartphone': '320px',
      'smartphone-r': '480px',
      'tablet': '768px',
      'laptop': '1024px',
      'desktop': '1280px',
    },
    extend: {
      skew: {
        32: "32deg",
      },
      colors: {
        "negro": "rgba(0,0,0,1)",
        "negro-t": "rgba(0,0,25,0.7)",
        "azul-negro-o": "rgba(0,0,50,1)",
        "azul-negro" : "rgba(0,0,75,1)",
        
        "azul-hover": "rgba(5,180,250,1)",
        "element-dark": "rgba(0,0,25,1)",
        "element-light": "rgba(128,191,255,1)",
        "azul-oscuro": "rgba(5,5,60,1)",
        "azul": "rgba(5,90,245,1)",
        "blanco": "rgba(240,240,240,1)",
        "spain": "rgba(220,5,36,1)",
        "usa": "rgba(48,63,149,1)",
      }
    }
  },
  plugins: [],
}
