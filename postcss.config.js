const tailwindcss = require('tailwindcss');
const path = require('path');
const autoprefixer = require('autoprefixer');

module.exports = {
  plugins: [
    // ...
    tailwindcss(path.resolve(__dirname, 'tailwind.js')),
    autoprefixer,
  ],
};
