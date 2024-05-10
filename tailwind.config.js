/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js'
  ],
  theme: {
    extend: {
      fontFamily:{
        poppins:"'Poppins', sans-serif",
        roboto:"'Roboto', sans-serif",
        montserrat:"'Montserrat', sans-serif"
      }
    },
  },
  plugins: [
    require('daisyui'),
    require('flowbite/plugin'),
  ],
  daisyui: {
    themes: ["light", "synthwave"],
  },
}

