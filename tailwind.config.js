/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html',
    './src/**/*.css',
  ],
  theme: {
    extend: {
      fontFamily: {
        'bars': ['Poppins', 'sans-serif'],
        'bars2': ['Chakra Petch', 'sans-serif'],
        'bars3': ['Space Grotesk', 'sans-serif'],
        'bars4': ['Sankofa Display', 'sans-serif'],
      },
      screens: {
        'xs' : '250px',
        'xm' : '300px',
        'xf' : '400px',
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

