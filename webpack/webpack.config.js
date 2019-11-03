const yargs = require('yargs');
const webpackMerge = require('webpack-merge');

const baseConfig = require('./config/webpack.config.base');
const devConfig = require('./config/webpack.config.dev');
const prodConfig = require('./config/webpack.config.prod');

module.exports = () => {
  const { env } = yargs.argv;
  return webpackMerge(
    baseConfig,
    env === 'production' ? prodConfig : devConfig
  );
};
