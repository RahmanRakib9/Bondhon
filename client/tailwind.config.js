/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#719663', // Background primary
        secondary: '#BDD17F', // Background secondary
        textPrimary: '#FFFFFF', // Text primary
        textSecondary: '#2D415D', // Text secondary
        textAccent: '#556270', // Accent color
      },
    },
  },
  plugins: [require('daisyui')],
};
