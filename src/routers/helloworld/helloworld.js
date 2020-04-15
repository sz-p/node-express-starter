import RP from '../../responseformat';

/**
 * hello world Handle
 *
 */
export default async function (requestData) {
  return RP.success({ api: 'helloworld', data: 'helloworld' })
}
