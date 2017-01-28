const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  context: path.resolve(__dirname, './src'),
  entry: {
    app: './app.js',
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js',
  },
  module: {
    rules: [
      {
		  test: /\.(sass|scss)$/, 
		  loader: ExtractTextPlugin.extract({
		    fallbackLoader: "style-loader",
		    loader: "css-loader!sass-loader",
		  }),
      } 
    ]
  },
  plugins: [
  	new ExtractTextPlugin("styles.css"),
  ]
};