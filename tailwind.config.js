/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      animation: {
        'slide': 'slide 1s linear forwards',
        'gradient-spin': 'gradient-spin 5s linear infinite'
      },
      keyframes: {
        slide: {
          '0%': { width: '0px' },
          '100%': { width: 'auto' }
        },
        'gradient-spin': {
          'from': { transform: 'scale3d(2,2,1) rotateZ(0deg)' },
          'to': { transform: 'scale3d(2,2,1) rotateZ(360deg)' }
        }
      },
    },
    fontFamily: {
      'inter': ['Inter', 'system-ui'],
      'cabin': ['Cabin', 'sans-serif'],
      'nanum': ['Nanum\ Gothic', 'sans-serif'],
      'prompt': ['Prompt', 'sans-serif'],
      'playfair': ['Playfair Display', 'sans-serif'],
    }
  },
  plugins: [],
};
