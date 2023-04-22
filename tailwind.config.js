/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,JSON,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'yellow':'#FFEC4F',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    // ...
  ],
}

