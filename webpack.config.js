const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'none',
  entry: './src/index.ts',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      // Typescript
      {
        test: /\.(ts|tsx)$/,
        exclude: [/node_modules/],
        loader: "ts-loader",
        options: {
          configFile: path.join(__dirname, "./tsconfig.json")
        },
      },
      // CSS SASS
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      hash: true,
      base: "",
      template: "static/index.html",
      filename: "index.html",
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin(),
  ],
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
  },
};