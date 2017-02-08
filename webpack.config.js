/**
 * Created by zhaoyongsheng on 16/8/3.
 */
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin'); 
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
var path = require('path');

module.exports = {
    entry: {
        main: './src/main.js'
    },
    output: {
        path: './dist',
        filename: '[name].build.js'
    },
    resolve: {
        extensions: ['.js', '.vue', '']
    },
    module: {
        loaders: [
            {
                test: /\.vue$/,
                loader: 'vue'
            },
            {
                test: /\.(png|jpg|gif)$/,
                loader: 'url-loader?limit=819200'
            },
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules/
            },
            {   test: /\.css$/,
                loader: 'style-loader!css-loader?sourceMap'
            },
            {
                test: /\.(woff|svg|eot|ttf)\??.*$/,
                loader: 'url-loader?limit=50000&name=[path][name].[ext]'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({ template: './src/index.html' }),
        new OpenBrowserPlugin({
            url: 'http://localhost:8081'
        })
    ],

    devServer: {
        port: 8081,
        historyApiFallback: true,
        watchOptions: { aggregateTimeout: 300, poll: 1000 }
    }
};

