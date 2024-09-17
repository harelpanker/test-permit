const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      fontFamily: {
        inter: ['var(--font-inter)'],
        poppins: ['var(--font-poppins)'],
        ibm: ['var(--font-ibm)'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      spacing: {
        '100dvh': '100dvh',
      },
      colors: {
        transparent: 'transparent',

        theme_purple: '#974EF2',
        theme_yellow: '#FFB171',
        theme_gray: '#EFF1F4',
        theme_white: '#FDFCFC',
        theme_black: '#1F1206',
        theme_black2: '#451E11',
        theme_bronze_7: '#D1B9B0',
        theme_bronze_11: '#846358',
        theme_orange_dark_2: '#2B1400',
        theme_orange_12: '#451E11',

        slate: colors.slate,
        black: colors.black,
        white: colors.white,
        purple: colors.purple,
        pink: colors.pink,
      },
      boxShadow: {
        video: '0px 4px 40px rgba(113, 81, 221, 0.2)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
        animatedgradient: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
      backgroundSize: {
        '300%': '300%',
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        gradient: 'animatedgradient 6s ease infinite alternate',
      },
    },
  },
  plugins: [require('tailwindcss-animate'), require('@tailwindcss/typography')],
};
