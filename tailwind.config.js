/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
    screens: {
      xs: '300px',
      sm: '768px',
      md: '992px',
      lg: '1200px',
      xl: '1536px'
    },
  },
  plugins: [],
}
