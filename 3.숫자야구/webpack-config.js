const path = require('path');
// path.join(__dirname, './main.js')
// ex) C://Users/myComputer/desktop/vue_learn/3.숫자야구/main.js

module.exports = {
  entry: {
    app: path.join(__dirname, 'main.js'),
  },
  module: {
    rules: [{

    }],
  },
  plugins: [],
  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'dist'),
  },
}
