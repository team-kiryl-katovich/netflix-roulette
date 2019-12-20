const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'production',
  optimization: {
    minimize: true,
  },
  plugins: [new CleanWebpackPlugin({})],
};
