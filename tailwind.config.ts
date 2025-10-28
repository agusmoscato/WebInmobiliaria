import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './data/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1E88E5',
          dark: '#1565C0',
          light: '#64B5F6'
        },
        accent: '#2E7D32'
      },
      backgroundImage: {
        'gradient-overlay': 'linear-gradient(135deg, rgba(18,18,18,0.75), rgba(30,136,229,0.35))'
      }
    }
  },
  plugins: []
};

export default config;
