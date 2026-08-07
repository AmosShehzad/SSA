/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dev: {
          bg: '#0b0f19',        // Deep Slate Dark
          card: '#111827',      // Clean Dark Card
          border: 'rgba(255, 255, 255, 0.08)',
          cyan: '#00E5FF',      // Crisp Electric Cyan Accent
          blue: '#2563EB',      // Primary Blue
          text: '#9CA3AF',      // Muted Subtitle Gray
        }
      },
      fontFamily: {
        sora: ['Sora', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}