/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        main: ['IranSans'],
      },
      transitionProperty: {
        height: 'height',
      },
      boxShadow: {
        '3xl': '#c4ffb6 0px 1px 2px 0px, #c4ffb6 0px 2px 6px 2px;',
        '4xl': '0 0 2px 1px #efefef;',
        '5xl':
          'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px',
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
};

