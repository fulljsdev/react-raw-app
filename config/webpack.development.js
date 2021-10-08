const path = require('path');
const webpack = require('webpack');
const { merge } = require('webpack-merge');
const main = require('./webpack.main');

module.exports = merge(main, {
    mode: "development",

    devtool: "inline-source-map",

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ],

    devServer: {
        historyApiFallback: true,
        contentBase: path.resolve(__dirname, "../dist"),
        open: true,
        compress: true,
        hot: true,
        port: 8081,
    },
});
