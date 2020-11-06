const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js'
  },
  devServer: {
    host: '0.0.0.0',
    contentBase: './dist'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
    ],
  },
  resolve: {
    extensions: [
      '.js',
      '.jsx'
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: require('html-webpack-template'),
      inject: false,
      title: 'jeact app',
      meta: [
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no'
        }
      ],
      appMountId: 'root',
    })
  ]
}

module.exports = config;
