process.env.NODE_ENV = "development"
import * as packageJson from "../package.json";
import { getConfig } from "../utils/utils"
const config = getConfig()
try {
  require("../src/main.ts");
  console.log(
    "\x1B[32m%s\x1B[0m",
    `${packageJson.name} running at http://localhost:${config.PORT}`
  );
} catch (e) {
  console.log("\x1B[31m%s\x1B[0m", "Server startup failed");
  console.log("\x1B[31m%s\x1B[0m", e);
}
