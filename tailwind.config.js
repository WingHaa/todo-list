/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/*.{html,js}",
    "./src/**/*.{html,js}",
    "./dist/*.{html,js}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        'menu-toggle': '56px minmax(min-content, 1fr)',
      },
      boxShadow: {
        //set checkbox's checked mark color
        'checkbox-high': 'inset 1em 1em #FF0000',
        'checkbox-med': 'inset 1em 1em #0000FF',
        'checkbox-low': 'inset 1em 1em #00FF00',
      },
      colors: {
        'top-bar': '#0b2239',
        'nav-side-bar': '#ebf8fe',
        'item-hover': '#b4e2f7',
        'priority-high': '#FF0000',
        'priority-med': '#0000FF',
        'priority-low': '#00FF00',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
  safelist: [{
    pattern: /(bg|text|border)-priority-(high|med|low)/
  },
  {
    pattern: /(shadow)-checkbox-(high|med|low)/,
    variants: ['before'],
  }
  ],
};