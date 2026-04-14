/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#fff8f0',
        tangerine: {
          50: '#fff4ec',
          100: '#ffe7d4',
          200: '#ffcda8',
          300: '#ffb074',
          400: '#ff9542',
          500: '#ff7a1a',
          600: '#f05d00',
          700: '#c44600',
          800: '#9a3600',
          900: '#7a2d00',
        },
        leaf: {
          50: '#f2fbf4',
          100: '#dff6e6',
          200: '#b9ebc8',
          300: '#8fdda7',
          400: '#5dca7d',
          500: '#35b45c',
          600: '#26934a',
          700: '#1f763d',
          800: '#195e33',
          900: '#134828',
        },
        sun: {
          50: '#fffbea',
          100: '#fff3c6',
          200: '#ffe68a',
          300: '#ffd451',
          400: '#ffc01f',
          500: '#f5a700',
          600: '#d27f00',
          700: '#aa5c02',
          800: '#8b4707',
          900: '#723a0a',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        body: ['"Work Sans"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 20px 50px -20px rgba(255, 122, 26, 0.45)',
        soft: '0 12px 30px -18px rgba(17, 24, 39, 0.35)',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        pulseSoft: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.03)' },
        },
      },
      animation: {
        'fade-up': 'fadeUp 0.9s ease-out both',
        'float-slow': 'floatSlow 6s ease-in-out infinite',
        'pulse-soft': 'pulseSoft 5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
