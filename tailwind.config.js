/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: { 50:'#f3f1ff',100:'#e9e5ff',200:'#d5cdff',300:'#b7a6ff',400:'#9575ff',500:'#7c4dff',600:'#6b32f5',700:'#5b23d8',800:'#4c1eb0',900:'#3f1c8e',950:'#260f60' },
        ink: { 50:'#f7f7f8',100:'#eeeef1',200:'#d9d9e0',300:'#b8b8c4',400:'#9191a3',500:'#737388',600:'#5c5c70',700:'#4a4a5a',800:'#3f3f4c',900:'#1a1a24',950:'#0d0d14' }
      },
      fontFamily: {
        sans: ['Cairo', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'system-ui', 'sans-serif'],
      },
      screens: { 'xs':'375px','sm':'640px','md':'768px','lg':'1024px','xl':'1280px','2xl':'1536px','3xl':'1920px','4xl':'2560px' },
      animation: { 'float': 'float 6s ease-in-out infinite' },
      keyframes: { float: { '0%,100%':{transform:'translateY(0px)'},'50%':{transform:'translateY(-20px)'} } },
    },
  },
  plugins: [],
};
