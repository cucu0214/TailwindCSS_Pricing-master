const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const webpack = require('webpack');
const CompressionPlugin = require("compression-webpack-plugin");
module.exports = {
  target: 'web',
  entry: './src/main.js',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.[fullhash].js',
    clean: true
  },
  module: {
    rules: [{
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              importLoaders: 1
            }
          },
          {
            loader: 'postcss-loader'
          }
        ]
      },
      {
        test: '/\.(gif|png)$/',
        type: 'asset/resource'
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[fullhash].css'
    }),
    new CopyPlugin({
      patterns: [{
        from: "./static",
        to: "./static"
      }, ],
    }),
    new webpack.DefinePlugin({

    }),
    new CompressionPlugin()
  ],
  devtool: 'source-map'
}