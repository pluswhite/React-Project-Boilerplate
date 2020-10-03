const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: [
    'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
    './src/index.tsx',
  ],
  output: {
    filename: '[id].[hash:8].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    hot: true,
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      '@root': path.resolve(__dirname, 'src'),
      '@components': path.resolve(__dirname, 'src/components/'),
      '@store': path.resolve(__dirname, 'src/store/'),
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.s?[c]ss/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'React Project Boilerplate',
      template: './public/index.html',
    }),
  ],
};
