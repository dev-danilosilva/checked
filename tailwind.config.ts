import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        navy:       '#0B1140',
        navy2:      '#111A52',
        blue:       '#0052FF',
        green:      '#00C48C',
        'green-dim':'rgba(0, 196, 140, 0.12)',
        ink:        '#0B0D1A',
        ink2:       '#3B4270',
        muted:      '#8A93BE',
        surface:    '#FFFFFF',
        background: '#F5F6FA',
        border:     '#E3E6F0',
      },
      fontFamily: {
        mono: ['var(--font-space-mono)', 'ui-monospace', 'monospace'],
      },
      letterSpacing: {
        widest2: '0.12em',
      },
    },
  },
  plugins: [],
};

export default config;
