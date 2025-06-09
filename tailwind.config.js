/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}', './content/**/*.{mdx,md}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: '#6366F1',
        highlight: '#22D3EE',
        accent: '#0EA5E9',
        neutral: '#F8FAFC',
        surface: '#FFFFFF',
      },
      fontFamily: {
        sans: ['Geist', 'Inter', 'IBM Plex Sans', 'sans-serif'],
        mono: ['Geist Mono', 'IBM Plex Mono', 'monospace'],
      },
      typography: {
        DEFAULT: {
          css: {
            a: { color: '#22D3EE', textDecoration: 'none' },
            h1: { fontWeight: '700' },
            code: { backgroundColor: '#f1f5f9', padding: '0.2em 0.4em', borderRadius: '4px' }
          }
        }
      }
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
