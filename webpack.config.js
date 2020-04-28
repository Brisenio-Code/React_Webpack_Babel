const HtmlwebpackPlugin = require('html-webpack-plugin');
const dontEnv = require('dotenv-webpack');

 const htmlPlugin = new HtmlwebpackPlugin({
    template: './src/index.html',
    filename: './index.html'
 });

module.exports = {
    module:{
        rules:[
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader','eslint-loader']
            },
            {
                test: /\.css$/,
                use: ['style-loader','css-loader']
            } 
        ]
    },
    plugins: [htmlPlugin, new dontEnv()]
};