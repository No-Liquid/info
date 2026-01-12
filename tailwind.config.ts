import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ['JetBrains Mono', 'JetBrains Mono Fallback', 'monospace'],
      },
      colors: {
        'bg-white': '#ffffff',
        'text-black': '#000000',
        'border-color': '#e0e0e0',
        'hover-bg': '#f5f5f5',
      },
    },
  },
  plugins: [],
}
export default config
