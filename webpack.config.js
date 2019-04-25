const path = require('path');
const srcPath = path.resolve('./src');
const distPath = path.resolve('./dist');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    'index': `${srcPath}/index.tsx`,
  },
  output: {
    path: distPath,
    filename: '[name].[hash].js',
    sourceMapFilename: '[file].map.json'
  },
  devtool: 'source-map',
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'initial',
        },
      },
    },
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 3001
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader'
      },
      {
        test: /\.scss|sass|css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader',
            'sass-loader'
          ]
        })
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js', '.tsx', '.css', '.scss', '.sass'],
    modules: [
      path.resolve(srcPath),
      'node_modules'
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      chunks: ['index', 'vendor'],
      template: './src/index.html'
    }),
    new ExtractTextPlugin({
      filename: '[name].[hash].css'
    })
  ]
}