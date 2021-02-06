import helloWorldHandle from "./helloworld/helloworld";

export default [
  {
    router: "/helloworld",
    method: "get",
    handler: helloWorldHandle,
    description: "hello world",
  },
];
