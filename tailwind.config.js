module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      fontFamily: {
        Rubik: ['Rubik', 'sans-serif'],
      },
      colors: {
        hijauTua: '#8BAC3E',
        shadowTua: '#F0FEEB',

        info: '#40A2B1',
        shadowInfo: '#E6F3F5',

        blue: '#405EB6',
        shadowBlue: '#EAEEFA',

        magenta: '#B23F74',
        shadowMagenta: '#F9EEF3',

        hijauMuda: '#A4B441',
        shadowMuda: '#F3F7D9'
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ]
}