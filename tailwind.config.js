/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily:{
      bold: ["Hanken Grotesk","sans-serif"],
      medium: ["Hanken Grotesk","sans-serif"],
      extrabold:["Hanken Grotesk","sans-serif"],
    },
    colors: {
      'slateBlue':'#7857ff',
      'royalblue':'#2e2be9',
      'Violetblue':'rgba(78, 33, 202, 1)',
      'Persianblue':'rgba(36, 33, 202, 0)',
      'whitee': '#ffffff',
      'cobaltblue': '#1125d4',
      'lightred': '	#ff5757',
      'orangeYellow': '	#ffb01f',
      'tealgreen': '	#00bd91',
      'paleblue': '	#ebf1ff',
      'lightLavender': '	#c8c7ff',
      'darkGratBlue': '	#303b5a',

    }
  },
  plugins: [],
}