import fetch from 'isomorphic-fetch';
import * as endpoint from '../constants/endpoint';

class ContactApi {

  static load() {
    return new Promise((resolve, reject) => {
      const url = `${server.HOST}${endpoint.API}${endpoint.CONTACT.LOAD}`;
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
      const url = `${server.HOST}${endpoint.API}${endpoint.CONTACT.INSERT}`;
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

class EducationApi {

  static load() {
    return new Promise((resolve, reject) => {
      const url = `${endpoint.EDUCATION.LOAD}`;
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

class ExperienceApi {
  static load() {
    return new Promise((resolve, reject) => {
      const url = `${endpoint.EXPERIENCE.LOAD}`;
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

class HomeApi {

  static load() {
    return new Promise((resolve, reject) => {
      const url = `${endpoint.HOME.LOAD}`;
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

class ResumeApi {

  static load() {
    return new Promise((resolve, reject) => {
      const url = `${endpoint.RESUME.LOAD}`;
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

class SiteApi {

  static load() {
    return new Promise((resolve, reject) => {
      const url = `${endpoint.SITE.LOAD}`;
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

class SkillsetApi {

  static load() {
    return new Promise((resolve, reject) => {
      const url = `${endpoint.SKILLSET.LOAD}`;
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

class SocialMediaApi {

  static load() {
    return new Promise((resolve, reject) => {
      const url = `${endpoint.SOCIALMEDIA.LOAD}`;
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

export {
  ContactApi,
  EducationApi,
  ExperienceApi,
  HomeApi,
  ResumeApi,
  SiteApi,
  SkillsetApi,
  SocialMediaApi
};
