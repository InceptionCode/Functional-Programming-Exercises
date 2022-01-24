/* global module: true */

const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: "./bundle/files.js",
    output: {
        path: path.resolve(__dirname, 'bundle'),
        filename: "bundle.js"
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './bundle',
        inline: true
    },
    module: {
        rules: [
         { 
            test: /\.js$/, 
            exclude: /node_modules/, 
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env', '@babel/preset-flow']
                }
            }
         },
         { test: /\.sass$/, use: ["style-loader", "css-loader", "sass-loader" ]},
         { test: /\.html$/, use: ["html-loader"] }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Functional Programming Exercises",
            template: "./html/index.html"
         }),
        new HtmlWebpackPlugin({
            title: "Functional Programming Exercises",
            filename: "exercises.html",
            template: "./html/exercises.html"
        }),
        new HtmlWebpackPlugin({
            title: "Functional Programming Exercises",
            filename: "projects.html",
            template: "./html/projects.html"
        })
    ]
};
