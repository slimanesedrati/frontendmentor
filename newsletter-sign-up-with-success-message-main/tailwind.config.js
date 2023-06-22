/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '400px',
      md: '768px',
      lg: '1020px',
      xl: '1440px',
    },
    extend: {
      colors: {
        tomato: 'hsl(4, 100%, 67%)',
        dark_slate_grey: 'hsl(234, 29%, 20%)',
        charcoal_grey: 'hsl(235, 18%, 26%)',
        grey: 'hsl(231, 7%, 60%)',
        white: 'hsl(0, 0%, 100%)'
      },
      fontFamily: {
        sans: ['Roboto' , 'sans-serif']
      }
    },
  },
  plugins: [],
}

