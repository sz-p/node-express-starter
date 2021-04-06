const paths = require("./paths");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;
const SimpleProgressPlugin = require("webpack-simple-progress-plugin");

module.exports = {
  mode: "production",
  target: "node",
  node: {
    global: true,
    __filename: true,
    __dirname: true,
  },
  module: {
    rules: [
      {
        test: /\.ts/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  entry: paths.mainjs,
  output: {
    path: paths.build,
    filename: "bundle.[hash:8].js",
  },
  resolve: {
    extensions: [".ts", ".js", ".json"],
  },
  plugins: [new BundleAnalyzerPlugin(), new SimpleProgressPlugin()],
};
