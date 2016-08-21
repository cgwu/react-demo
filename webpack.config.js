var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	//devtool: 'source-map',
	devtool: 'eval-source-map',
	entry: __dirname + "/app/main.js",
	output: {
		path: __dirname + "/public",
		filename: "bundle.js"
	},

	module: {
		loaders: [
			{
				test: /\.json$/,
				loader: 'json'
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel',
				/*
				query: {
					presets: ['es2015','react']
				}
				*/
			},
			{
		        test: /\.css$/,
		        loader: 'style!css?modules'
		    }
		]
	},
	plugins: [
		new webpack.BannerPlugin("Copyright@2016 Flying Unicorns inc."),
		
		new HtmlWebpackPlugin({
	      template: __dirname + "/app/index.tmpl.html"
	    }),
	    
	    new webpack.HotModuleReplacementPlugin(),
	],
	devServer: {
		contentBase: "./public",
		colors: true,
		historyApiFallback: true,
		inline: true,
		hot: true,		// HotModuleReplacementPlugin
		host: '192.168.5.110',
		port: 8080
	}
}
