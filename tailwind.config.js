/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        linen: '#F9F7F2',
        umber: '#2D2A26',
        sage: '#2D8659',
        ochre: '#1B7A4E',
      },
      fontFamily: {
        heading: ['"Instrument Serif"', 'Georgia', 'serif'],
        body: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
