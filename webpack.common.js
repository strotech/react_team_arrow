const HtmlWebPackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        },
        {
            test: /\.html$/,
            use: [
              {
                loader: "html-loader"
              }
            ]
        },
        {
            test: /\.css$/,
            use: [{loader:MiniCssExtractPlugin.loader}, { loader: 'css-loader' },{loader:"sass-loader" }],
        },
        {
            test: /\.(png|jpg|gif)$/,
            use: [
              {
                loader: 'file-loader'
              },
            ],
        }
      ]
    },

    entry: {
      main:'./src/app.js',
      vendor:'./src/vendors.js',
    },

    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebPackPlugin({
          template: "./src/app.html",
          filename: "./appmain.html"
        }),
        new MiniCssExtractPlugin()
      ]
  };