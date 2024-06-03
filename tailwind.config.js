/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '430px',
        'xll': '926px',
        'mll': '750px',
        'sll': '550px',
        'xsll': '300px',
      },
    },
  },
  plugins: [],
}

