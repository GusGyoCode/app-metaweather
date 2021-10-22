module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'morado-azulado': '#1E213A',
        'morado-oscuro': '#100E1D',
        'gray-bg': '#ECF1F4',
        'blue-oscuro': '#2B353B',
        'blue-light': '#00C4F5',
        'blue-light-hover': '#54DDFF'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
