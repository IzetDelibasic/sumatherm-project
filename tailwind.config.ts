import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        hyellow: {
          100: '#ffd43e',
        },
        hgray: {
          50: '#f4f4f4',
          100: '#939393'
        }
      },
      fontFamily: {
        subtitle: ['Outfit'],
        title: ['Bebas Neue'],
        about: ['Work Sans']
      }
    },
  },
  plugins: [],
}
export default config
