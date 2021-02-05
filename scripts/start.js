const config = require("../configs/app.config").default;
try {
  require("../src/server.js");
  console.log(
    "\x1B[32m%s\x1B[0m",
    `Server running at http://localhost:${config.PORT}`
  );
} catch (e) {
  console.log("\x1B[31m%s\x1B[0m", "Server startup failed");
}
