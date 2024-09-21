/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js}', // Adjust paths according to your project
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        'noto-sans-bengali': ['Noto Sans Bengali UI', 'sans-serif'],
        corporate: ['Corporate', 'sans-serif'],
      },
      fontSize: {
        base: '14px',
      },
      lineHeight: {
        'custom': '1.42857143',
      },
      colors: {
        'bg-color': '#e8eff3',
        'text-color': '#fff',
      },
      minHeight: {
        '64': '64px',
      },
      padding: {
        'custom': '10px 0',
      },
    },
  },
  plugins: [],
}
