/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");


export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}', './node_modules/astro-payload-lexical-renderer/src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Libre Baskerville", ...defaultTheme.fontFamily.sans],
				display: ["Libre Baskerville", ...defaultTheme.fontFamily.serif],
				serif: ["Libre Baskerville", ...defaultTheme.fontFamily.serif],
			},
			transitionProperty: {
				'blur': 'blur',
			},
			scale: {
				'200': '2.0',
				'250': '2.5',
				'300': '3.0',
			},
		},
	},
	plugins: [],
}
