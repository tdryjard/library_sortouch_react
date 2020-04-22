var path = require('path');
var webpack = require("webpack");

module.exports = {
    mode: 'production',
    entry: './index.jsx',
    output: {
        path: path.resolve('src'),
        filename: 'index.jsx',
        libraryTarget: 'commonjs2'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
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
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                  {
                    loader: 'file-loader',
                  },
                ],
              },
        ]
    },
    externals: {
        react: "react"
      }
}