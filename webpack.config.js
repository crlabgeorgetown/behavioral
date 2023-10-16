const path = require('path');


module.exports = {
  mode: 'development',
  entry: {
    antelopesAndCanteloupes: './antelopesAndCanteloupes/task.js',
    lexicalDecision: './lexicalDecision/task.js',
    rhymeDecision: './rhymeDecision/task.js',
    stroop: './stroop/task.js',
    wordReading: './wordReading/task.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
    library: '[name]'
  },
  module: {
    rules: [
     {
       test: /\.(png|svg|jpg|jpeg|gif|wav)$/i,
       type: 'asset/resource',
     },
    ],
  },
}