/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors : {
				"primary-color": "#5EB9F0",
				"heading-color": "#343F52",
				"paragraph-color": "#60697B",
				skyblue: "#E5F4FD",
				white: "#ffffff",
				"light-gray": "#f0f8fe",
				gray: "#fefefe",
			  }
		},
	},
	plugins: [],
}
