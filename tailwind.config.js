/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      animation: {
        'ping-slow': 'ping 6s linear infinite',
      }
    },
  },
  plugins: [],
}
