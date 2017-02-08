var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

module.exports = {
    entry: {
        main: './src/main.js'
    },
    output: {
        path: './dist',
        filename: '[name].build.[chunkhash].js'
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
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader?sourceMap'
            },
            {
                test: /\.(woff|svg|eot|ttf)\??.*$/,
                loader: 'url-loader?limit=50000&name=[path][name].[ext]'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            inject: true,
            minify: { removeComments: true, //移除HTML中的注释
            collapseWhitespace: true //删除空白符与换行符
                 }
        }),

        new webpack.DefinePlugin({
            'process.env': {
                ENV: JSON.stringify('production'),
                NODE_ENV: JSON.stringify('production')
            }
        }),

        new webpack.optimize.OccurenceOrderPlugin(),

        new webpack.optimize.DedupePlugin(),

        new webpack.optimize.UglifyJsPlugin({

            beautify: false,

            mangle: { screw_ie8: true },

            compress: {
                screw_ie8: true,
                warnings: false
            },
            comments: false
        })
    ]

}