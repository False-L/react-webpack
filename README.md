#  react-webpack
## package
```json
{
  "name": "react-demo",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "start": "webpack-dev-server --hot --inline",
    "build": "webpack"
  },
  "author": "",
  "license": "ISC",
  "dependencies": { 
    "react": "^15.5.3",
    "react-dom": "^15.5.3",
    "react-redux": "^5.0.3",
    "react-router": "^2.0.0",
    "less": "^2.7.2",
    "redux": "^3.6.0"
  },
  "devDependencies": {
    "babel-core": "^6.24.0",
    "babel-loader": "^6.4.1",
    "babel-preset-es2015": "^6.24.0",
    "babel-preset-react": "^6.23.0",
    "babel-preset-stage-3": "^6.22.0",
    "css-loader": "^0.28.0",
    "file-loader": "^0.11.1",
    "less-loader": "^4.0.3",
    "react-hot-loader": "^1.3.1",
    "react-router-dom": "^4.0.0",
    "redux-logger": "^3.0.1",
    "redux-thunk": "^2.2.0",
    "style-loader": "^0.16.1",
    "svg-loader": "0.0.2",
    "svg-url-loader": "^2.0.2",
    "url-loader": "^0.5.8",
    "webpack": "^2.3.3",
    "webpack-dev-server": "^2.4.5"
  }
}
```
##  webpack
```javascript
var webpack = require('webpack');
var path = require('path');
module.exports = {
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  devServer:{
      contentBase: path.join(__dirname, "build"),//webpack-dev-server的目录
      compress: true,//开启gzip
      port: 9000//端口
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
```