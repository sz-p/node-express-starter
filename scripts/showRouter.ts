import { routers } from "../src/routers/routers";
import config from "../configs/app.config";
const structuralData = [];
for (let i = 0; i < routers.length; i++) {
  structuralData.push({
    endpoint: `http://localhost:${config.PORT}${routers[i].router}`,
    method: routers[i].method,
    description: routers[i].description,
  });
}
console.table(structuralData);
