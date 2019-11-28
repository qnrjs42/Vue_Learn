const path = require('path');
const nodeExternals = require('webpack-node-externals');
// path.join(__dirname, 'main.js')
// ex) C://Users/myComputer/desktop/vue_learn/3.숫자야구/main.js

module.exports = {
  target: 'node',
  externals: [nodeExternals()],
  entry: {
    app: path.join(__dirname, '/main.js'),
  },
  module: {
    rules: [{
      test: /\.vue$/, // .vue로 끝나는 파일
      loader: 'vue-loader',
    }],
  },
  plugins: [],
  output: {
    filename: '[name].js',
    path: path.join(__dirname, '/dist'),
  },
}
