import { resSuccess, resFailed } from '../../responseformat';

/**
 * hello world Handle
 *
 */
export const helloWorldHandle = async function () {
  return resSuccess({ api: 'helloworld', data: 'helloworld' })
}
