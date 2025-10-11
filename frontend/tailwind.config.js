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
        primary: {
          light: '#3b82f6', // light mode blue
          dark: '#2563eb',  // dark mode blue
        },
        secondary: {
          light: '#22c55e',
          dark: '#16a34a',
        },
        danger: {
          light: '#ef4444',
          dark: '#b91c1c',
        },
        neutral: {
          light: '#9ca3af',
          dark: '#6b7280',
        },
      }
    },
  },
  plugins: [],
}

