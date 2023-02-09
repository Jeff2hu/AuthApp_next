/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layout/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundSize: {
        'size-200': '200% 200%',
      },
      backgroundPosition: {
          'pos-0': '0% 0%',
          'pos-100': '100% 100%',
      },
      keyframes: {
        cloud1:{
          '0%':{transform: 'translateX(290%)'},
          '100%':{transform: 'translateX(-250%)'}
        },
        cloud2:{
          '0%':{transform: 'translateX(290%)'},
          '100%':{transform: 'translateX(-250%)'}
        }
      },
      animation: {
        cloud1: 'cloud1 18s linear infinite',
        cloud2: 'cloud1 5s linear infinite',
      }
    },
  },
  plugins: [],
}