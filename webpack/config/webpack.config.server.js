const nodeExternals = require('webpack-node-externals');
const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    server: './server/src/index.tsx',
  },
  target: 'node',
  externals: [nodeExternals()],
  output: {
    path: path.resolve('./server/dist'),
    filename: 'server.js',
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.css', '.scss'],
    alias: {
      '@assets': path.resolve(process.cwd(), './public/'),
      '@common': path.resolve(process.cwd(), './src/common/'),
      '@enhancers': path.resolve(process.cwd(), './src/enhancers/'),
      '@store': path.resolve(process.cwd(), './src/store/'),
      'react-dom': '@hot-loader/react-dom'
    },
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader',
          },
        ],
      },
      {
        test: /\.(scss|png|jpe?g|gif|woff(2)?|ttf|eot)$/,
        loader: 'null-loader',
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'env.production': JSON.stringify(false),
    }),
  ],
};
