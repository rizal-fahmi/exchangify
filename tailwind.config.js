/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    screens: {
      xs: '360px', // Tambahkan breakpoint xs
      sm: '480px',
      md: '640px',
      lg: '1024px',
      xl: '1280px',
      xxl: '1536px',
    },
  },
  plugins: [],
};
