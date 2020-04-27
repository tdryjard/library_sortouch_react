var path = require('path');
var webpack = require("webpack");

module.exports = {
    mode: 'production',
    entry: './src/chatbotArea/ChatBotArea.js',
    output: {
        path: path.resolve('build'),
        filename: 'ChatBotArea.js',
        libraryTarget: 'commonjs2'
    },
    module: {
        rules: [
            {
                test: /\.js$|jsx/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
              test: /\.(png|jpg|gif)$/i,
              use: [
                {
                  loader: 'url-loader',
                  options: {
                    limit: 8192,
                  },
                },
              ],
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
      },
    externals: {
        react: "react"
      }
}