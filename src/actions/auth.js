import { LOGIN_START } from './actionTypes';
import APIURls from '../helpers/url';
import { getFormBody } from '../helpers/utils';
export function startLogin() {
  return {
    type: LOGIN_START,
  };
}

export function login(email, password) {
  return (disptach) => {
    const url = APIURls.login();
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: getFormBody({ email, password }),
    });
  };
}
