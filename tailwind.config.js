/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.{html,js}'],
  theme: {
    extend: {
      fontFamily:{
        'display' : ['Poppins','sans-serif'],
      },
      colors:{
        "fe-primary":"#252431",
        "fe-secondary":"#F18260",
        "fe-dark":"#121212",
        "fe-anti-flash-white":"#F2F2F2",
        "fe-red":"#E23B3B",
        "fe-green":"#46BD32",
        "fe-anti_flash_white":"#f0f1f2",
        "fe-yellow":"#F39430",
        "fe-gray":"#BFBFBF",
      },
      fontSize:{
        'sm':['0.875rem','1.5rem'],
        '14':['0.875rem','1rem'],
        'base':['1rem','1.625rem'],
        'lg':['1.125rem','1.75rem'],
        'xl':['1.25rem','1.875rem'],
        '22':['1.375rem','2rem'],
        '2xl':['1.5rem','2.125rem'],
        '26':['1.625rem','2.25rem'],
        '28':['1.75rem','2.375rem'],
        '32':['2rem','2.625rem'],
        '40':['2.5rem','3.125rem'],
      },
      screens: {
        'sm': '640px',
        // => @media (min-width: 640px) { ... }
        'md': '768px',
        // => @media (min-width: 768px) { ... }
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
        '3xl':'1680px'
      },
      padding:{
        '15':'.9375rem',
        '4.5':'1.125rem',
      },
      boxShadow:{
        'one':' 0 0 0 0.2rem rgba(43, 72, 110,0.5)',
        'two':'0 0 16px 0 rgba(0, 0, 0, 0.1)'
      },
      borderRadius:{
        '10':'0.625rem',
        '4.5':'1.125rem',
        '20':'1.25rem'
      },
      letterSpacing:{
        '2%':'0.3px',
        '3%':'0.5px'
      }
    },
  },
  plugins: [],
}

