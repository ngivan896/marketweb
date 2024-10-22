const path = require('path');

module.exports = {
  entry: './public/js/index.js', // Make sure this path points to the correct index.js location
  output: {
    filename: 'index.bundle.js',
    path: path.resolve(__dirname, 'dist'), // Output the bundle to the dist folder
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
