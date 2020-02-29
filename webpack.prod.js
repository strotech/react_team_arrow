const common=require('./webpack.common.js');
const merge=require('webpack-merge');
const path = require('path');

module.exports = merge(common, {

    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
  });