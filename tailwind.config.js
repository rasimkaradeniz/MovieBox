/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],

  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url('./img/Poster.png')",
        'shadow-img' : "linear-gradient(to right, rgba(255,255,255,0) 0%, #fff 100%)",
      }

    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('flowbite/plugin')


  ],
}
