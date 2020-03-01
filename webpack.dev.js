const common=require('./webpack.common');
const merge=require('webpack-merge');
const path = require('path');

module.exports = merge(common, {

    devServer:{
        index:"./appmain.html",
        historyApiFallback: true,
        port: 9000
    },
    output: {
        filename: '[name].[contentHash].js',
        path: path.resolve(__dirname, 'dist')
    }
  });