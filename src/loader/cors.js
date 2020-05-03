function checkWhiteList(origin, allowedOrigin) {
  for (let i = 0; i < allowedOrigin.length; i++) {
    if (typeof allowedOrigin[i] === "string") {
      if (allowedOrigin[i] === origin) {
        return true;
      } else if (allowedOrigin[i] instanceof RegExp) {
        if (origin.search(allowedOrigin[i])) {
          return true;
        }
      } else {
        return false
      }
    }
  }
}
export default function (allowedOrigin) {
  return function (req, res, next) {
    const { origin } = { ...req.headers }
    if (origin === undefined || checkWhiteList(origin, allowedOrigin)) {
      res.header("Access-Control-Allow-Origin", origin);
      res.header('Access-Control-Allow-Credentials', 'true');
      next()
    } else {
      //ToDo send origin
      res.send(403)
    }
  }
}
