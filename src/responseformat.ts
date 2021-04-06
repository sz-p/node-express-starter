export interface Msg {
  api: string;
  data: any;
  info?: string;
  status?: number;
}
export const resSuccess = function (msg: Msg) {
  return {
    success: true,
    status: 0,
    api: msg.api,
    information: msg.info,
    data: msg.data
  };
}
export const resFailed = function (msg: Msg) {
  return {
    success: false,
    status: msg.status || 1,
    api: msg.api,
    information: msg.info,
    data: msg.data
  };
}
