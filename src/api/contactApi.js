import fetch from 'isomorphic-fetch';
import * as server from '../constants/server';
import * as endpoint from '../constants/endpoint';

class Api {
  static load() {
    return new Promise((resolve, reject) => {
      const url = `${endpoint.API} ${endpoint.CONTACT.LOAD}`;
      fetch(url, { credentials: 'include' }).then((response) => {
        if (response.status >= 400) return reject(response.status);
          return response.json();
      })
      .then(function (data) {
        resolve(data.data ? data.data : data);
      })
    });
  }

  static insert(data) {
    return new Promise((resolve, reject) => {
      const url = `${endpoint.API} ${endpoint.CONTACT.INSERT}`;
      fetch(url, {
        //credentials: 'include',
        //mode: 'same-origin',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Origin': server.HOST
        },
        method: 'POST',
        body: JSON.stringify(data)
      })
      .then((response) => response.json())
      .catch(err => reject(err))
    });
  }
}

export default Api;
