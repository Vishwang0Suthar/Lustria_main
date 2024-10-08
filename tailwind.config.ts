import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      spacing: {
				container: `max(
			  0.75rem,
			  calc((100vw - calc(1280px - 1rem * 2)) / 2)
			)`,
				"sm-container": `max(
			  1rem,
			  calc((100vw - calc(550px - 1rem * 2)) / 2)
			)`,
			},
    },
  },
  plugins: [],
}
export default config
