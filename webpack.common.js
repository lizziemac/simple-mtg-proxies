const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index: './app/index.tsx',                 // root file of the module
  },
  experiments: {topLevelAwait: true},
  module: {
    rules: [                                  // define how to convert files
      { test: /\.(tsx|ts)$/, use: 'ts-loader', exclude: /node_modules/ },
      { test: /\.(css)$/, use: ['style-loader', 'css-loader'] },
      { test: /\.(jpe?g|png|gif)$/, type: 'asset/resource' }
    ]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),    // the output path will be ./github-battle/dist
    filename: '[name].bundle.js',             // the name of the file to be placed in the path
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'app/index.html'              // add index.html into dist/
    })
  ],
  resolve: {
    alias: {
      app: path.resolve(__dirname, 'app/')
    },
    extensions: [".js", ".jsx", ".json", ".ts", ".tsx"],
  },
  target: 'web',
}