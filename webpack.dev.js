const path = require("path");
const merge = require("webpack-merge");
const common = require("./webpack.common");

module.exports = merge(common, {
  mode: "development",
  output: {
    filename: "[name].[hash].js",
  },
  devtool: "eval-source-map",
  devServer: {
    contentBase: "./dist",
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        include: path.resolve(__dirname, "src/stylesheets"),
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
    ],
  },
});
