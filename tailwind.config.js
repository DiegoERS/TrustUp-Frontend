/** @type {import('tailwindcss').Config} */
const appColors = require('./theme/colors.json');

module.exports = {
  content: ['./App.{js,ts,tsx}', './components/**/*.{js,ts,tsx}'],

  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: appColors,
    },
  },
  plugins: [],
};
