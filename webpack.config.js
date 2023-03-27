const path = require('path');


module.exports = {
  mode: 'development',
  entry: {
    writtenLexicalDecision: './written_lexical_decision/task.js',
    auditoryLexicalDecision: './auditory_lexical_decision/task.js',
    antelopesAndCantelopes: './antelopes_and_cantelopes/index.js'
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