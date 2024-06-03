/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', "sans-serif"],
        worksans: ['Work Sans', 'sans-serif'],
      },
      colors: {
        green: 'var(--green-color)',
        secondary: 'var(--secondary-color)',
        white: 'var(--white-color)',
        dark: 'var(--dark)',
        'earthy-brown': 'var(--earthy-brown)',
        'sky-blue': 'var(--sky-blue)',
        'sunshine-yellow': 'var(--sunshine-yellow)',
        'soft-gray': 'var(--soft-gray)',
        'black-text': 'var(--black-text)',
      },
      gridTemplateColumns: {
        '3f': 'repeat(3, 1fr)',
        '2f': 'repeat(2,1fr)',
        '1f': 'repeat(1,1fr)',
      },
      screens: {
        'xsm': '462px',

        'mdd': '862px',
        'xll': '1362px',
        'xlg': '1162px',
        'xlb': '1280px',
        'ssm': '310px',
      },
    },
  },
  plugins: [require("daisyui")],
}

