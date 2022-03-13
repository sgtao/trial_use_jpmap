const path = require('path');
const webpack = require('webpack');
module.exports = {
  entry: {
    bundle: './src/main.js'
  },
  output: {
    library: "jpmap",
    libraryTarget: "umd",
    path: path.join(__dirname, 'dist'),
    filename: 'jpmap.js'
  },
  resolve: {
    extensions: ['.js']
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    open: true // サーバー起動時にブラウザを開く
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  }
}