import fetch from 'isomorphic-fetch';
import * as server from '../constants/server';
import * as endpoint from '../constants/endpoint';

class Api {
  static load() {
    return new Promise((resolve, reject) => {
      const url = `${server.HOST}${endpoint.API}${endpoint.PROFILE.LOAD}`;
      fetch(url, { credentials: 'include' }).then((response) => {
        if (response.status >= 400) return reject(response.status);
          return response.json();
      })
      .then(function (data) {
        resolve(data.data ? data.data : data);
      })
    });
  }

  static homeLoad(account_id) {
    return new Promise((resolve, reject) => {
      const url = `${server.HOST}${endpoint.API}${endpoint.PROFILE.HOME.LOAD}` + account_id;
      fetch(url).then((response) => {
        if (response.status >= 400) return reject(response.status);
          resolve(response.json());
      })
      .then(function (data) {
        resolve(data);
      })
    });
  }

  static homeUpsert(data) {

    return new Promise((resolve, reject) => {
      const url = `${server.HOST}${endpoint.API}${endpoint.PROFILE.HOME.UPSERT}`;
      fetch(url, {
        headers: {
          'Accept': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(data)
      })
      .then((response) => {
        if (response.status >= 400) return reject(response.status);
        resolve(response.json());
      })
      .catch(err => reject(err))
    });
  }

  static experienceLoad(account_id) {
    return new Promise((resolve, reject) => {
      const url = `${server.HOST}${endpoint.API}${endpoint.PROFILE.EXPERIENCE.LOAD}` + account_id;
      fetch(url).then((response) => {
        if (response.status >= 400) return reject(response.status);
          resolve(response.json());
      })
      .then(function (data) {
        resolve(data);
      })
    });
  }

  static experienceUpsert(data) {

    return new Promise((resolve, reject) => {
      const url = `${server.HOST}${endpoint.API}${endpoint.PROFILE.EXPERIENCE.UPSERT}`;
      fetch(url, {
        headers: {
          'Accept': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(data)
      })
      .then((response) => {
        if (response.status >= 400) return reject(response.status);
        resolve(response.json());
      })
      .catch(err => reject(err))
    });
  }

  static projectLoad(experience_id) {
    return new Promise((resolve, reject) => {
      const url = `${server.HOST}${endpoint.API}${endpoint.PROFILE.PROJECT.LOAD}` + experience_id;
      fetch(url).then((response) => {
        if (response.status >= 400) return reject(response.status);
          resolve(response.json());
      })
      .then(function (data) {
        resolve(data);
      })
    });
  }

  static projectUpsert(data) {

    return new Promise((resolve, reject) => {
      const url = `${server.HOST}${endpoint.API}${endpoint.PROFILE.PROJECT.UPSERT}`;
      fetch(url, {
        headers: {
          'Accept': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(data)
      })
      .then((response) => {
        if (response.status >= 400) return reject(response.status);
        resolve(response.json());
      })
      .catch(err => reject(err))
    });
  }

  static projectDelete(id) {
    console.log('test', id)
    return new Promise((resolve, reject) => {
      const url = `${server.HOST}${endpoint.API}${endpoint.PROFILE.PROJECT.DELETE}` + id;
      fetch(url, { method: 'DELETE' }).then((response) => {
        if (response.status >= 400) return reject(response.status);
          resolve(response.json());
      })
      .then(function (data) {
        resolve(data);
      })
    });
  }

  static skillLoad(experience_id) {
    return new Promise((resolve, reject) => {
      const url = `${server.HOST}${endpoint.API}${endpoint.PROFILE.SKILL.LOAD}` + experience_id;
      fetch(url).then((response) => {
        if (response.status >= 400) return reject(response.status);
          resolve(response.json());
      })
      .then(function (data) {
        resolve(data);
      })
    });
  }

  static skillUpsert(data) {

    return new Promise((resolve, reject) => {
      const url = `${server.HOST}${endpoint.API}${endpoint.PROFILE.SKILL.UPSERT}`;
      fetch(url, {
        headers: {
          'Accept': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(data)
      })
      .then((response) => {
        if (response.status >= 400) return reject(response.status);
        resolve(response.json());
      })
      .catch(err => reject(err))
    });
  }

}

export default Api;
