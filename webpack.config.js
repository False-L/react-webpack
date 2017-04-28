var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  devServer:{
      contentBase: path.join(__dirname, "build"),
      compress: true,//开启gzip
      port: 9000,
      clientLogLevel: "none",//阻止消
  },
  module: {
    loaders: [
    {
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015','react', 'stage-3'],
        "plugins": []
      }
    },{
        test: /\.css$/,
        exclude: /^node_modules$/,
        loader: 'style-loader!css-loader!less-loader'
    },{
    test: /\.(png|jpg|gif|svg)$/,
    loader: 'url-loader?limit=8192' // 这里的 limit=8192 表示用 base64 编码 <= ８K 的图像
    },
    { test: /\.less$/,
      loader: 'style-loader!css-loader!less-loader'
    }
    ]
  }
}