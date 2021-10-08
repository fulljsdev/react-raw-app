const path = require('path');
const { merge } = require('webpack-merge');
const main = require('./webpack.main');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(main, {
    mode: "production",
    devtool: false,
    output: {
        path: path.resolve(__dirname, "../dist"),
        publicPath: "./",
        filename: "js/[name].[contenthash].bundle.js",
    },

    plugins: [
        new MiniCssExtractPlugin({
            filename: "styles/[name].[contenthash].css",
            chunkFilename: "[id].css",
        })
    ],

    module: {
        rules: [
            {
                test: /\.(scss|css)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {
                            importLoaders: 2,
                            sourceMap: false,
                        },
                    },
                    "sass-loader",
                ],
            },
        ],
    },
})