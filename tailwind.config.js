module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'morado-azulado': '#1E213A',
        'morado-oscuro': '#100E1D'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
