module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'roboto': ['Roboto'],
        'tajawal': ['Tajawal'],
        'almarai': ['Almarai'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
