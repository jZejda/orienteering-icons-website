/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'orange-dark': '#DE751F',
        'grey-dark': '#6B7280',
        'grey-light': '#D1D5DB',
        'grey-lighter': '#F3F4F6',
        'grey-darkest': '#374151',
        'purple-white': '#FDFCFC',
        'smoke': '#E5E7EB',
      },
    },
  },
  plugins: [],
}
