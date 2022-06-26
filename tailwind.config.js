/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
    },
    fontFamily: {
      'inter': ['Inter', 'system-ui'],
      'cabin': ['Cabin', 'sans-serif'],
      'nanum': ['Nanum\ Gothic', 'sans-serif'],
      'prompt': ['Prompt', 'sans-serif'],
    }
  },
  plugins: [],
};
