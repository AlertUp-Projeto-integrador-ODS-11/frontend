/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'primary': '#FF5B22',
        "secondary": "#FF9130",
        "tertiary": "#FECDA6",
        "quaternary": "#A9A9A9",
      },
    },
  },
  plugins: [],
}

