const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const vueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    entry: path.join(__dirname, 'src/main.js'),
    output: {
        path: path.join(__dirname, 'dist'),
        filename: "bundle.js",
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
            {test: /\.css$/, use: ['style-loader', 'css-loader']},
            {test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader']},
            {test: /\.sass$/, use: ['style-loader', 'css-loader', 'sass-loader']},
            {test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader']},
            {test: /\.(png|jpg|bmp|gif)$/, use: 'url-loader'},
            {test: /\.(ttf|eot|svg|woff|woff2)$/, loader: 'url-loader?name=fonts/[name].[md5:hash:hex:7].[ext]'},
            {test: /\.js$/, use: ['babel-loader'], exclude: /node_modules/},
            {test: /\.vue$/, use: ['vue-loader']}
        ]
    }
}
