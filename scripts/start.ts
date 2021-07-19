import config from "../configs/app.config";
try {
  require("../src/main.ts");
  console.log(
    "\x1B[32m%s\x1B[0m",
    `Server running at http://localhost:${config.PORT}`
  );
} catch (e) {
  console.log("\x1B[31m%s\x1B[0m", "Server startup failed");
  console.log("\x1B[31m%s\x1B[0m", e);
}
