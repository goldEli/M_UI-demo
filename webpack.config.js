const webpack = require('webpack');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: [
    './src/index'
  ],
  module: {
        rules: [{
                  test: /\.less$/,
                  use: [{
                      loader: "style-loader" // creates style nodes from JS strings
                  }, {
                      loader: "css-loader" // translates CSS into CommonJS
                  }, {
                      loader: "less-loader" // compiles Less to CSS
                  }]
                },
                { test: /\.js?$/, loader: 'babel-loader', exclude: /node_modules/ },
                { test: /\.s?css$/, loader: 'style-loader!css-loader!sass-loader' },
        ]
  },
  externals: {
    // antd: 'antd'
  }, 
  resolve: {
    extensions: ['.js','.scss']
  },
  output: {
    path: path.join(__dirname, '/dist'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  devtool: 'cheap-eval-source-map',
  devServer: {
    contentBase: './dist',
    hot: true
  },
  plugins: [
    new CopyWebpackPlugin([
      // {
      //   from: './node_modules/antd/dist/antd.min.js',
      //   to: 'js/antd.min.js'
      // },
    ]),                          
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ]
};
