/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'primary': '#F95D0C',
        "secondary": "#5F268B",
        "tertiary": "#FCFAF6",
        "quaternary": "#A9A9A9",
      },
    },
  },
  plugins: [],
}

