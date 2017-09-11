import { REGISTER, LOGIN, PROFILE } from '../constants/end-points';

async function sendRequest(url, requestParams) {
  let response = await fetch(url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json;charset=UTF-8',
    },
    body: JSON.stringify(requestParams),
  });
  console.log(requestParams);
  let result;

  try {
    result = await response.json();
  } catch (e) {
    result = { error: e };
  }
  return result;
}

class API {
  static async registerAccount(registryInfo) {
    return sendRequest(REGISTER, registryInfo);
  }

  static async logIntoAccount(loginInfo) {
    return sendRequest(LOGIN, loginInfo);
  }
}

export default API;
