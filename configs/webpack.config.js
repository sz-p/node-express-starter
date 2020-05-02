const paths = require('./paths');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const SimpleProgressPlugin = require('webpack-simple-progress-plugin');

module.exports = {
  mode: 'production',
  target: 'node',
  node: {
    global: true,
    __filename: true,
    __dirname: true
  },
  entry: paths.mainjs,
  output: {
    path: paths.build,
    filename: 'bundle.[hash:8].js'
  },
  plugins: [
    new BundleAnalyzerPlugin(),
    new SimpleProgressPlugin()
  ]
};
