const path = require('path')

module.exports = {
  entry: './src/index.tsx',
  output: {
    filename: '[name].tsx',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
}