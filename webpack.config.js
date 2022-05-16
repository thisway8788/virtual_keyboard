const path = require('path');
const TerserWebpackPlugin = require('terser-webpack-plugin');

module.exports = {
  entry: './src/js/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist'),
    clean: true,
  },

  devtool: 'source-map',
  mode: 'development',
  optimization: {
    minimizer: [new TerserWebpackPlugin()],
  },
};
