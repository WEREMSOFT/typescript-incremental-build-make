const path = require('path');

module.exports = {
  mode: 'development',
  entry: './obj/main.js',
  output: {
    path: path.resolve(__dirname, 'bin'),
    filename: '[name].js',
    chunkFilename: '[id].chunk.js' 
  }
};