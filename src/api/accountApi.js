import fetch from 'isomorphic-fetch';
import * as server from '../constants/server';
import * as endpoint from '../constants/endpoint';

class Api {

  static login(data) {
    return new Promise((resolve, reject) => {
      const url = `${server.HOST}${endpoint.API}${endpoint.ACCOUNT.LOGIN}`;
      fetch(url, {
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
}

export default Api;
