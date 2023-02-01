/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        "grey-1": "#F5F7FA",
        "grey-2": "#CBD2D9",
        "grey-3": "#7B8794",
        "grey-4": "52606D",
        "grey-5": "#1F2933",
        "primary-1": "#E0E8F9",
        "primary-2": "#98AEEB",
        "primary-3": "#647ACB",
        "primary-4": "#4055A8",
        "primary-5": "#19216C"

      },
      fontFamily: {
        'lato': "'Lato', sans-serif"
      }
    },
  },
  plugins: [],
}
