/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1E3A8A',    // Deep blue for professional look
        secondary: '#14B8A6',  // Teal for accents
        accent: '#F59E0B',     // Amber for highlights
        background: '#F9FAFB', // Light gray for background
        card: '#FFFFFF',       // White for cards
      },
      backgroundImage: {
        'gradient-bg': 'linear-gradient(135deg, #1E3A8A 0%, #14B8A6 100%)',
      },
    },
  },
  plugins: [],
}