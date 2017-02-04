/* global module: true */
module.exports = {
  entry: "./bundle/files.js",
  output: {
    path: "./bundle/",
    publicPath: "/bundle/"
  },
  devServer: {inline: true},
  module: {
    loaders: [
    { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
    { test: /\.sass$/, loader: "style-loader!css-loader!sass-loader"}
    ]
  }
};
