const HtmlWebpackPlugin = require('html-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: {
    main: './src/index.tsx'
  },
  output: {
    filename: 'main.js',   
    chunkFilename: '[name].chunk.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader'
          }
        ]
      },
      /**
       * Rules to support SASS pre-processor.
       *
       * Add ability to import CSS from JS code.
       * CSS will be injected automatically to DOM using <style> tag.
       *
       * @see https://webpack.js.org/loaders/css-loader/
       * @see https://webpack.js.org/loaders/style-loader/
       * @see https://webpack.js.org/loaders/sass-loader/
       */
      {
        test: /\.(scss|css)$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: { sourceMap: true }
          },
          {
            loader: 'sass-loader',
            options: { sourceMap: true }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.css', '.scss']
  },
  plugins: [
    /*
     * Plugin: HtmlWebpackPlugin
     * Description: Simplifies creation of HTML files to serve your webpack bundles.
     * This is especially useful for webpack bundles that include a hash in the filename
     * which changes every compilation.
     *
     * @see https://github.com/ampedandwired/html-webpack-plugin
     */
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'public/index.html',
      chunks: ['main'],
      hash: true
    }),
    /**
     * Plugin: OptimizeCssAssetsPlugin
     * Description: Minifies resulted CSS. Removes duplicated SCSS imports.
     *
     * @see https://github.com/NMFR/optimize-css-assets-webpack-plugin
     */
    new OptimizeCssAssetsPlugin(),
    /**
     * All files inside webpack's output.path directory will be removed once, but the
     * directory itself will not be. If using webpack 4+'s default configuration,
     * everything under <PROJECT_DIR>/dist/ will be removed.
     * Use cleanOnceBeforeBuildPatterns to override this behavior.
     *
     * During rebuilds, all webpack assets that are not used anymore
     * will be removed automatically.
     *
     * @see https://github.com/johnagan/clean-webpack-plugin
     */
    new CleanWebpackPlugin()
  ]
};
