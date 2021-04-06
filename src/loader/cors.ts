import { Request, Response, NextFunction } from "express-serve-static-core"

function checkWhiteList(origin: string, allowedOrigin: Array<string | RegExp>) {
  for (let i = 0; i < allowedOrigin.length; i++) {
    if (typeof allowedOrigin[i] === 'string') {
      if (allowedOrigin[i] === origin) {
        return true;
      }
    } else if (allowedOrigin[i] instanceof RegExp) {
      const reg = allowedOrigin[i] as RegExp;
      if (reg.test(origin)) {
        return true;
      }
    }
  }
  return false;
}
export default function (allowedOrigin: Array<string | RegExp>) {
  return function (req: Request, res: Response, next: NextFunction) {
    const { origin } = { ...req.headers };
    if (origin === undefined || checkWhiteList(origin, allowedOrigin)) {
      res.header('Access-Control-Allow-Origin', origin);
      res.header('Access-Control-Allow-Headers', 'Content-Type');
      res.header('Access-Control-Allow-Methods', origin);
      res.header('Content-Type', 'application/json;charset=utf-8');
      next();
    }
  };
}
