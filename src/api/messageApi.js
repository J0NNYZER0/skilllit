import fetch from 'isomorphic-fetch';
import * as endpoints from '../constants/endpoints';

class Api {
  static load() {
    return new Promise((resolve, reject) => {
      const url = `${endpoints.MESSAGE.LOAD}`;
      fetch(url, { credentials: 'include' }).then((response) => {
        if (response.status >= 400) return reject(response.status);
          return response.json();
      })
      .then(function (data) {
        resolve(data.data ? data.data : data);
      })
    });
  }
}

export default Api;
