  // tailwind.config.js
  module.exports = {

   purge: [

     './src/**/*.html',

     './src/**/*.js',
     './src/**/*.jsx',

   ],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {
        colors: {
          "primary-red": "#FF304F",
          "primary-blue": "#28C7FA",
          "secondary-green": "#4DE440",
          "primary-red-darker": "#F52E4C",
          "primary-blue-darker": "#28BFEF",
        }
      },
      fontFamily: {
        Poppins: ["Poppins, sans-serif"]
      },
      container: {
        center: true,
        padding: "1.5rem",
        screens: {
          lg: '1400px',
          xl: '1400px',
          "2xl": '1400px'
        }
      },
      fill: theme => ({
       'gray': theme('colors.gray.200'),
       'yellow': '#FFD037 !important',
       'red': '#FF304F !important',
       'blue': '#28C7FA !important',
     }),
      height: {
        xl: '400px',
       }
    },
    variants: {},
    plugins: [],
  }