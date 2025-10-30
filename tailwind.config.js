/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#fdf7ec',
          100: '#f9e8c8',
          200: '#f3d090',
          300: '#ecb963',
          400: '#e29f36',
          500: '#cc9933',
          600: '#ae7d22',
          700: '#8a601b',
          800: '#6c4b17',
          900: '#4a3210',
        },
        charcoal: '#333333',
        sand: '#f1f1f1',
      },
      boxShadow: {
        card: '0 24px 48px -12px rgba(51, 51, 51, 0.15)',
      },
      fontFamily: {
        sans: ['var(--font-primary)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
