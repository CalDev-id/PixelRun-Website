/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*.html'],
  theme: {
    container: {
      center: true,
      padding: '16px'
    },
    extend: {
      fontFamily: {
        body: ['Poppins'],
     },
    },
    
  },
  daisyui: {
    themes: ["light", "dark", "cupcake", "bumblebee", "emerald", "corporate", "synthwave", "retro", "cyberpunk", "valentine", "halloween", "garden", "forest", "aqua", "lofi", "pastel", "fantasy", "wireframe", "black", "luxury", "dracula", "cmyk", "autumn", "business", "acid", "lemonade", "night", "coffee", "winter"],
  },
  
  plugins: [require("daisyui"),require('flowbite/plugin')],
}
