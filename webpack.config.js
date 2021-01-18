
const path = require('path');

module.exports = {
  entry: './src/cms/index.tsx',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
    fallback: { "path": false }
  },
  output: {
    filename: 'cms.js',
    path: path.resolve(__dirname, 'dist'),
  },
};