/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{html,js,svelte,ts}',
    './node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}',
  ],
  plugins: [require('@tailwindcss/typography'), require('flowbite/plugin')],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // flowbite-svelte
        primary: {
          50: '#FFF5F2',
          100: '#FFF1EE',
          200: '#FFE4DE',
          300: '#FFD5CC',
          400: '#FFBCAD',
          500: '#FE795D',
          600: '#EF562F',
          700: '#EB4F27',
          800: '#CC4522',
          900: '#A5371B',
        },
      },
      screens: {
        '-sm': { max: '639px' },
        '-md': { max: '767px' },
        '-lg': { max: '1023px' },
        '-xl': { max: '1279px' },
        '-2xl': { max: '1535px' },
      },
      fontFamily: {
        notoSans: ['Noto Sans KR', 'sans-serif', 'serif'],
        oswald: ['Oswald', 'NotoSans KR', 'sans-serif', 'serif'],
        blackSans: ['Black Han Sans', 'Nanum Myeongjo', 'sans-serif', 'serif'],
      },
      boxShadow: {
        400: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
        '400-white': 'rgba(255, 255, 255, 0.35) 0px 5px 15px',
      },
    },
  },
  corePlugins: {
    // preflight: false
  },
  safelist: [
    'text-xs',
    'text-sm',
    'text-base',
    'text-lg',
    {
      pattern: /(bg|text|border)-./,
    },
  ],
};
