const path = require("path");
const webpack = require("webpack");
const common = require('./webpack.common');
const merge = require('webpack-merge');

const devSpecifics = {
  entry: {
    app: [
      "react-hot-loader/patch",
      "./src/index.js",
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(), // Enable HMR
  ],
  devtool: "source-map",
  devServer: {
    hot: true,
    host : "192.168.1.82",
    contentBase: path.join("./dist/"),
    publicPath: "/",
    compress: true,
    historyApiFallback: true,
    port: 9000,
  }
};

const devConfig = merge(common, devSpecifics);

module.exports = devConfig;
