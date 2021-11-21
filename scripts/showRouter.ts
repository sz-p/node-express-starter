import { routers } from "../src/routers/routers";
import { getConfig } from "../utils/utils"
const structuralData = [];
const config = getConfig()
for (let i = 0; i < routers.length; i++) {
  structuralData.push({
    endpoint: `http://localhost:${config.PORT}${routers[i].router}`,
    method: routers[i].method,
    description: routers[i].description,
  });
}
console.table(structuralData);
