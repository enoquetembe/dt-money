/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        'gray-100': '#E1E1E1',
        'gray-300': '#C4C4C4',
        'gray-400': '#8D8D99',
        'gray-500': '#7C7C8A',
        'gray-600': '#323238',
        'gray-700': '#29292E',
        'gray-800': '#202014',
        'gray-900': '#121214',

        'green-300': '#00B37E',
        'green-500': '#00B75F',
        'green-700': '#015F43',

        'red-300': '#F75A68',
        'red-500': '#AB222E',
        'red-700': '#7A1921',
      },
    },
  },
  plugins: [],
}
