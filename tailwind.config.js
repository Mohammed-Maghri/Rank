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
      keyframes: {
        fadeout: {
          '0%': { opacity: '1' }, // Start fully opaque
          '100%': { opacity: '0' }, // End fully transparent
        },
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

