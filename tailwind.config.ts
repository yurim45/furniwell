import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // 브랜드 색상
        primary: {
          50: '#f7f8f6',
          100: '#eef0ec',
          200: '#dce0d8',
          300: '#c3c9bd',
          400: '#a3ac9a',
          500: '#8a9477',
          600: '#7a8466',
          700: '#6a7458',
          800: '#5a614a',
          900: '#4a513d',
          950: '#181C14', // primary
        },
        secondary: {
          50: '#f8f8f7',
          100: '#f0f0ee',
          200: '#e2e2df',
          300: '#cbcbc7',
          400: '#a8a8a2',
          500: '#8a8a82',
          600: '#6f6f67',
          700: '#5a5a53',
          800: '#4a4a44',
          900: '#3f3f3a',
          950: '#3C3D37', // secondary
        },
        tertiary: {
          50: '#f6f7f5',
          100: '#ecefed',
          200: '#d8dcd6',
          300: '#bcc3b8',
          400: '#9aa395',
          500: '#7d8776',
          600: '#697565', // tertiary
          700: '#565e4f',
          800: '#474d40',
          900: '#3c4136',
          950: '#2a2e25',
        },
        quaternary: {
          50: '#fefdfb',
          100: '#fdfaf5',
          200: '#faf3e8',
          300: '#f5e8d3',
          400: '#eed8b8',
          500: '#e6c79a',
          600: '#dbb47a',
          700: '#cfa05e',
          800: '#b88a4a',
          900: '#96723e',
          950: '#ECDFCC', // quaternary
        },
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
      },
    },
  },
  plugins: [],
};

export default config;
