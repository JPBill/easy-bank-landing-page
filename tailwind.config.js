/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.{html,js}'],
  theme: {
    extend: {
      colors: {
        gray: '#9597A5',
        darkblue: '#2D314D',
        lime: '#30C88F',
        lightgray: '#FAFAFA',
        verylightblue: '#F4F5F7',
      },
    },
    fontFamily: {
      sans: ['Public Sans', 'sans-serif'],
    },
    backgroundImage: {
      'cyan-gradient': 'linear-gradient(135deg, #33D35E 0%, #2AB6D9 99.58%)',
      'intro-desktop': 'url("/public/bg-intro-desktop.svg")',
    },
    screens: {
      md: '768px',
      xl: '1110px',
    },
  },
  plugins: [],
};
