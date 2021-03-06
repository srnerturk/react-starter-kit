/* eslint-disable import/no-extraneous-dependencies */
// eslint-disable-next-line import/no-extraneous-dependencies
const webpack = require('webpack');
const { merge } = require('webpack-merge');
const Dotenv = require('dotenv-webpack');
// eslint-disable-next-line import/no-extraneous-dependencies
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const common = require('./webpack.common.js');

const mapStyle = process.env.MAP_STYLE === 'true';
process.env.TORUS_NODE_ENV = 'development';
module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    port: 3042,
    historyApiFallback: true,
    overlay: true,
    open: true,
    stats: 'errors-only',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          { loader: mapStyle ? 'css-loader?sourceMap' : 'css-loader' },
        ],
      },
      {
        test: /\.s(a|c)ss$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'sass-loader' },
        ],
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        TORUS_ENV: JSON.stringify('development'),
      },
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
    new Dotenv({
      path: `./.env.production`,
    }),
  ],
});
