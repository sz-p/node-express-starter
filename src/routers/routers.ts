import { helloWorldHandle } from "./helloworld/helloworld";
import { Request, Response } from "express-serve-static-core"
import { Msg } from "../responseformat"
export const routers: {
  router: string;
  method: string;
  handler: (requestData?: Object, req?: Request, res?: Response) => Promise<Msg>;
  description: string;
}[] = [
    {
      router: "/helloworld",
      method: "get",
      handler: helloWorldHandle,
      description: "hello world",
    },
  ];

