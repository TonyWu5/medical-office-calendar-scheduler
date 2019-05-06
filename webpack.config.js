const path = require('path');
const SRC_DIR = path.join(__dirname, 'client/src');
const DIST_DIR = path.join(__dirname, 'client/dist');

module.exports = {
  mode: 'development', // "production" | "development" | "none"
  entry: `${SRC_DIR}/index.jsx`, // string | object | array
  output: {
    path: DIST_DIR, // string
    filename: 'bundle.js', // string
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: [
            '@babel/preset-env',
            '@babel/preset-react'
          ]
        },
        // options for the loader
      }
    ]
  }
};
