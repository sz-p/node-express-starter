import * as fs from 'fs';
import paths from "../configs/paths";
import { merge } from "lodash";
export const isPathExists = function (p: string): boolean {
  try {
    fs.accessSync(p);
  } catch (err) {
    return false;
  }
  return true;
};
export const getConfigFromFile = function (configPath: string): false | {
  [key: string]: any
} {
  if (!isPathExists(configPath))
    return false
  const configString = fs.readFileSync(configPath, 'utf8')
  const configJson = JSON.parse(configString);
  return configJson
}
export const getConfig = function (): {
  [key: string]: any;
} {
  const defaultConfig = getConfigFromFile(paths.defaultConfigJson)
  const config = getConfigFromFile(paths.configJson)
  if (!defaultConfig && !config) {
    console.error("No config file")
    process.exit(1)
  }
  if (defaultConfig && config) {
    return merge(defaultConfig, config)
  }
  if (config) {
    return config
  }
  console.error("No config file")
  process.exit(1)
}
