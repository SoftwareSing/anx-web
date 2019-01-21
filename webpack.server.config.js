const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: './server/server.ts',
  externals: [nodeExternals()],
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  node: {
    __dirname: false
  },
  output: {
    path: path.resolve(__dirname, 'dist/server'),
    filename: 'server.bundle.js'
  },
  resolve: {
    alias: {
      'server': path.resolve(__dirname, 'server/')
    },
    extensions: ['.ts', '.tsx', '.wasm', '.mjs', '.js', '.json']
  },
  target: 'node'
};
