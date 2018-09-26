import fetch from 'isomorphic-fetch';
import * as server from '../constants/server';
import * as endpoint from '../constants/endpoint';

class AccountApi {

  static login(data) {
    return new Promise((resolve, reject) => {
      const url = `${server.HOST}${endpoint.API}${endpoint.ACCOUNT.LOGIN}`;
      fetch(url, {
        credentials: 'include',
        headers: {
          'Accept': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(data)
      })
      .then((response) => resolve(response.json()))
      .catch(err => reject(err))
    });
  }

  static logout() {
    return new Promise((resolve, reject) => {
      const url = `${server.HOST}${endpoint.API}${endpoint.ACCOUNT.LOGOUT}`;
      fetch(url, { method: 'GET', credentials: 'include' })
      .then((response) => resolve(response.json()))
      .catch(err => reject(err))
    });
  }

}

export { AccountApi };
