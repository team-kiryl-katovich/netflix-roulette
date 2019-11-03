const DEV_SERVER_PORT = 3000;
const DEV_SERVER_PUBLIC_PATH = '/';

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    port: DEV_SERVER_PORT,
    publicPath: DEV_SERVER_PUBLIC_PATH,
    https: true,
    open: true
  }
};
