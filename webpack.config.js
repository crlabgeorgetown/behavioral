const path = require('path');


module.exports = {
  mode: 'development',
  entry: {
    lexicalDecision: './lexicalDecision/task.js',
    antelopesAndCantelopes: './antelopesAndCantelopes/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
    library: '[name]'
  },
  module: {
    rules: [
     {
       test: /\.(png|svg|jpg|jpeg|gif)$/i,
       type: 'asset/resource',
     },
    ],
  },
}