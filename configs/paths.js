// paths 文件 导出了一堆有用的路径信息
const path = require("path");
let resolveApp = undefined;
if (process.env.NODE_ENV === "production") {
  resolveApp = (relativePath) => path.resolve(__dirname, "./", relativePath);
} else {
  resolveApp = (relativePath) => path.resolve(__dirname, "../", relativePath);
}
export default {
  packageJson: resolveApp("./package.json"),
  mainjs: resolveApp("./src/main.ts"),
  build: resolveApp("./build"),
  src: resolveApp("./src"),
  config: resolveApp("./configs"),
  configJson: resolveApp("./configs/config.json"),
  defaultConfigJson: resolveApp("./configs/config.default.json"),
};
