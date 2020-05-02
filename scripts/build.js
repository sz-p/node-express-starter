process.env.NODE_ENV = 'production';
process.env.BABEL_ENV = 'production';

const webpack = require('webpack');
const paths = require('../configs/paths');
const fs = require('fs');

const webpackConfig = require('../configs/webpack.config');
const compiler = webpack(webpackConfig);

function deleteFolder(path) {
  let files = [];
  if (fs.existsSync(path)) {
    files = fs.readdirSync(path);
    files.forEach(function (file, index) {
      var curPath = path + "/" + file;
      if (fs.statSync(curPath).isDirectory()) { // recurse
        deleteFolder(curPath);
      } else { // delete file
        fs.unlinkSync(curPath);
      }
    });
    fs.rmdirSync(path);
  }
}

const removeBuildDir = function () {
  const path = paths.build;
  deleteFolder(path);
}

const createBuildDir = function () {
  const path = paths.build;
  fs.mkdirSync(path)
}

const createPackageJosn = function () {
  const devPackageJson = require(paths.packageJson);
  let proPackageJson = {
    name: devPackageJson.name,
    version: devPackageJson.version,
    scripts: {
      start: `node ./starter.js`
    }
  };
  fs.writeFileSync(paths.build + '/package.json', JSON.stringify(proPackageJson, null, 2));
}

const createStarter = function (bundleFileName) {
  fs.writeFileSync(paths.build + '/starter.js', `require("./${bundleFileName}");`);
}

const runWebPack = function () {
  compiler.run((err, stats) => {
    let messages;
    if (err) {
      messages = {
        errors: [err.message]
      };
      console.log(messages);
    } else {
      messages = stats.toJson({ all: false, warnings: true, errors: true });
      createStarter(Object.keys(stats.compilation.assets)[0])
      createPackageJosn();
    }
    if (messages.errors.length) {
      if (messages.errors.length > 1) {
        messages.errors.length = 1;
      }
      console.log(new Error(messages.errors.join('\n\n')));
    }
  });
}


removeBuildDir();
createBuildDir();
runWebPack();

