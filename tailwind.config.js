/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#fd5402', // Official NodeBricks Orange
          600: '#ea4500',
          700: '#c23500',
          800: '#9a2c00',
          900: '#7c2500',
        },
        surface: {
          light: '#ffffff',
          'light-subtle': '#f8fafc',
          'light-border': '#e2e8f0',
          dark: '#0c0f14',
          'dark-card': '#121721',
          'dark-subtle': '#181e2b',
          'dark-border': '#1f2737',
        }
      },
      fontFamily: {
        sans: [
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'sans-serif',
        ],
        heading: [
          'Manrope',
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          'sans-serif',
        ],
      },
      boxShadow: {
        'glass-light': '0 8px 32px 0 rgba(0, 0, 0, 0.04), 0 1px 2px 0 rgba(0, 0, 0, 0.02)',
        'glass-dark': '0 8px 32px 0 rgba(0, 0, 0, 0.4), 0 1px 2px 0 rgba(255, 255, 255, 0.03)',
        'subtle-card': '0 1px 3px 0 rgba(0, 0, 0, 0.03), 0 1px 2px -1px rgba(0, 0, 0, 0.03)',
      },
    },
  },
  plugins: [],
}

