import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: [
    './src/**/*.{astro,html,js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Press Start 2P"', 'ui-monospace', 'monospace'],
      },
      colors: {
        nes: {
          bg: '#0D1B2A',
          primary: '#E0A96D',
          accent: '#D62828',
          muted: '#778DA9',
          text: '#F0F6FC'
        }
      }
    }
  },
  darkMode: 'class',
} satisfies Config;