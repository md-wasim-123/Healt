/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'k':{'min': '200px','max':'640px'}
      },
    },
  },
  plugins: [],
}

