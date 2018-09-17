import fetch from 'isomorphic-fetch';
import * as server from '../../constants/server';
import * as endpoint from '../../constants/endpoint';
import delay from './../delay';
import contactData from '../../data/contact.json';
import educationData from '../../data/education.json';
import experienceData from '../../data/experience.json';
import homeData from '../../data/home.json';
import resumeData from '../../data/resume.json';
import siteData from '../../data/site.json';
import skillsetData from '../../data/skillset.json';
import socialMediaData from '../../data/social_media.json';

class ContactApi {
  static load() {

    return new Promise((resolve) => {

      setTimeout(() => {

        resolve(contactData);
      }, delay);
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

    return new Promise((resolve) => {

      setTimeout(() => {

        resolve(educationData);
      }, delay);
    });
  }
}

class ExperienceApi {
  static load() {

    return new Promise((resolve) => {

      setTimeout(() => {

        resolve(experienceData);
      }, delay);
    });
  }
}

class HomeApi {
  static load() {

    return new Promise((resolve) => {

      setTimeout(() => {

        resolve(homeData);
      }, delay);
    });
  }
}

class ResumeApi {
  static load() {

    return new Promise((resolve) => {

      setTimeout(() => {

        resolve(resumeData);
      }, delay);
    });
  }
}

class SiteApi {
  static load() {

    return new Promise((resolve) => {

      setTimeout(() => {

        resolve(siteData);
      }, delay);
    });
  }
}

class SkillsetApi {
  static load() {

    return new Promise((resolve) => {

      setTimeout(() => {

        resolve(skillsetData);
      }, delay);
    });
  }
}

class SocialMediaApi {
  static load() {

    return new Promise((resolve) => {

      setTimeout(() => {

        resolve(socialMediaData);
      }, delay);
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
