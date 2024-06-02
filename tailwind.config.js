module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'base': '#fdfffc',
      'orange': '#fe9000',
      'navajo': '#FFE0B1',
      'light': '#FCF2E4',
      'gray': '#3E3E3E',
      'black': '#0b0500'
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}