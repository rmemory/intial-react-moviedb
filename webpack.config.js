const path = require('path');

/* HtmlWebPagePlugin create the index.html file */
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
	// Primary entry point for react application
	entry: './src/index.js',

	// Output of build from webpack
	output: {
		// Put output into the dist folder
		path: path.join(__dirname, '/dist'),

		// output will be in a file name index_bundle.js
		filename: 'index_bundle.js'
	},

	// Rules for loader. 
	module: {
		rules: [
			{
				// Do build the .jsx files
				test: /\.js|.jsx?$/,

				// Don't build the node_modules directory
				exclude: /node_modules/,

				// Use the babel-loader
				use: {
					loader: "babel-loader"
				}
			}
		]
	},
	// This creates the index.html, using the ./src/index.html as a 
	// starting template
	plugins: [
		new HtmlWebPackPlugin({
			// With no arg, it would attempt to create its own HTML file, 
			// but we specify a template instead
			template: './src/index.html'
		})
	]
}