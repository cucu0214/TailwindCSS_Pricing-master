module.exports = {
  mode: 'jit',
  purge: {
    content: [
      './src/**/*.html',
      './src/**/*.js',
    ],
    safelist: []
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'primary': '#4f3cc9',
        'primary-dark': '#4232aa',
        'secondary': '#ffffff'
      },
      screens: {
        'xx': '1000px'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}