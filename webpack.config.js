var path = require('path');

module.exports = {
  context: __dirname,
  entry: "./src/lib/game.js",
  output: {
    path: path.resolve(__dirname),
    filename: "./src/bundle.js",
  },
  module: {
    rules: [
      {
        test: [/\.jsx?$/, /\.js?$/],
        exclude: /(node_modules)/,
        loader: "babel-loader",
        options: {
          presets: ["env"],
        },
      },
    ],
  },
  devtool: "source-map",
  resolve: {
    extensions: [".js", ".jsx", "*"],
  },
};
