const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const vueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    entry: path.join(__dirname, 'src/main.js'),
    output: {
        path: path.join(__dirname, 'dist'),
        filename: "bundle.js"
    },
    plugins: [
        new htmlWebpackPlugin({
            template: path.join(__dirname, 'src/index.html'),
            filename: "index.html"
        }),
        new vueLoaderPlugin()
    ],
    module: {
        rules: [
            {test: /\.css$/, use: ['css-loader', 'style-loader']},
            {test: /\.less$/, use: ['css-loader', 'style-loader', 'less-loader']},
            {test: /\.sass$/, use: ['css-loader', 'style-loader', 'sass-loader']},
            {test: /\.(png|jpg|bmp|gif)$/, use: 'url-loader'},
            {test: /\.(ttf|eot|svg|woff|woff2)$/, use: ['url-loader']},
            {test: /\.js$/, use: ['babel-loader'], exclude: /node_modules/},
            {test: /\.vue$/, use: ['vue-loader']}
        ]
    }
}
