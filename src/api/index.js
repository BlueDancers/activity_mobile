import request from "../utils/request";

/**
 *
 * @param {String} name 项目名称
 */
export function getTemplate(name) {
  return request({
    url: "/getTemplate",
    method: "POST",
    data: {
      name
    }
  });
}
