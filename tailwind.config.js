module.exports = {
	purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			fontFamily: {
				sans: [
					"Helvetica Neue",
					"Helvetica",
					"Hiragino Sans",
					"Hiragino Kaku Gothic ProN",
					"Arial",
					"Yu Gothic",
					"Meiryo",
					"sans-serif",
				],
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
