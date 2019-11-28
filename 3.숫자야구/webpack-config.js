const VueLoaderPlugin = require('vue-loader/lib/plugin');
const path = require('path');
// path.join(__dirname, 'main.js')
// ex) C://Users/myComputer/desktop/vue_learn/3.숫자야구/main.js

module.exports = {
  mode: 'development',
  devtool: 'eval', // eval build하는 속도 빠름
  resolve: {
    extensions: ['.js', '.vue'],
  },
  entry: {
    app: path.join(__dirname, '/main.js'),
  },
  module: {
    rules: [{
      test: /\.vue$/, // .vue로 끝나는 파일
      loader: 'vue-loader',
    }],
  },
  plugins: [
    new VueLoaderPlugin(),
  ],
  output: {
    filename: '[name].js',
    path: path.join(__dirname, '/dist'),
  },
}
