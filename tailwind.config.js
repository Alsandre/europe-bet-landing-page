/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    fontFamily: {
      montserat: ['Montserrat', 'sans-serif'],
      mtavruli: ['BPG Phone Sans', 'sans-serif']
    },
    extend: {
      colors: {
        'primary-dark': {
          500: '#171718',
          400: '#1C1D1E',
          300: '#1E2122',
          200: '#25292B',
          100: '#2C3234'
        },
        'primary-grey': {
          500: '#545758',
          400: '#00000091',
          300: '#7D7D7D',
          200: '#BBBBBB',
          100: '#00000029'
        },
        orange: {
          22: '#F05A22',
          '2A': '#EF602A',
          21: '#EF5A21',
          '1C': '#EF541C'
        }
      },
      fontSize: {
        10: '10px',
        11: '11px',
        12: '12px',
        13: '13px',
        14: '14px',
        15: '15px',
        16: '16px',
        17: '17px',
        18: '18px',
        19: '19px',
        20: '20px'
      },
      width: {
        mobile: '91.5%'
      },
      dropShadow: {
        '10px': '0 0 10px #EF5A21'
      }
    }
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ]
};
