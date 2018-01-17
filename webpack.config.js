const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

let config = {
    context: path.resolve(__dirname, 'src'),
    entry: {
        libs: [
            '@babel/polyfill'
        ],
        app: path.join(__dirname, '/src/app/app.module.js')
    },
    output: {
        filename: '[name]-bundle.js',
        path: path.join(__dirname, '/build/'),
        pathinfo: true,
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({
                    use: 'css-loader'
                })
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract({
                use: ['css-loader', 'sass-loader']
                })
            },
            {
                test: /\.html$/,
                loader: ['ngtemplate-loader', 'html-loader'],
                include: path.resolve(__dirname, 'src/app')
            },  
            // inline base64 URLs for <=8k images, direct URLs for the rest
            {
                test: /\.(png|jpg)$/,
                loader: 'url-loader?limit=8192'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Books Wishlist',
            template: './index.html'
        }),
        new ExtractTextPlugin('bundle.css'),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'libs',
            filename: 'libs-bundle.js',
            minChunks: 3
        })
    ]
};

if (process.env.NODE_ENV === 'production') {
    config.plugins.push(
        new webpack.optimize.UglifyJsPlugin()
    );
}
else {
    config.devServer = {
        publicPath: '/',
        contentBase: path.join(__dirname, '/build'),
        compress: true
    }
}

module.exports = config;