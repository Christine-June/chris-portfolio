/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'mimi-pink': '#ffd6ff',
        'mauve': '#e7c6ff',
        'mauve-2': '#c8b6ff',
        'periwinkle': '#b8c0ff',
        'periwinkle-2': '#bbd0ff',
      },
    },
  },
  plugins: [],
}
