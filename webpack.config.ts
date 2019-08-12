import path from 'path';
import webpack from 'webpack';

const config: webpack.Configuration = {
  // development , production
  mode: 'development',
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  module: {
    rules: [{
      test: /\.tsx?$/,
      use: 'ts-loader',
      exclude: /node_modules/
    }]
  },
  resolve: {
    modules: ['src', 'node_modules'],
    extensions: ['.ts', '.js', '.tsx', '.json']
  },
  devServer: {
    contentBase: path.join(__dirname,'dist'),
    open: true
  }
};

export default config;