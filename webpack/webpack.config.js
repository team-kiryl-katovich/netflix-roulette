const yargs = require('yargs');
const webpackMerge = require('webpack-merge');
const webpack = require('webpack');

const baseConfig = require('./config/webpack.config.base');
const devConfig = require('./config/webpack.config.dev');
const prodConfig = require('./config/webpack.config.prod');

module.exports = () => {
  const { env } = yargs.argv;
  const isProduction = env === 'production';
  if (!isProduction) {
    baseConfig.entry.main.unshift('react-hot-loader/patch', 'webpack-hot-middleware/client?reload=true');
  }
  baseConfig.plugins.push(
    new webpack.DefinePlugin({
      'env.production': JSON.stringify(isProduction),
    }),
  );
  return webpackMerge(baseConfig, isProduction ? prodConfig : devConfig);
};
