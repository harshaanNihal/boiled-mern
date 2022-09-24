/* eslint-disable */
var webpack = require('webpack');
var path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  devtool: 'eval-source-map',
  entry: ['./client/src/index.jsx'],
  module: {
    rules: [
      {
        test: /\.(js|jsx|tx|tsx)?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          cacheDirectory: true,
          presets: ['@babel/preset-env', '@babel/preset-react'],
          plugins: [
            '@babel/plugin-proposal-class-properties',
            'react-hot-loader/babel',
          ],
        },
      },
      {
        test: /\.(scss|css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {},
          },
        ],
      },
    ],
  },
  output: {
    filename: 'bundle.js',
    path: __dirname + '/dist/bundle/',
    publicPath: '/static/',
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
      },
    }),
    new MiniCssExtractPlugin({
      filename: 'bundle.css',
    }),
  ],
};
