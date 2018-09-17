import * as types from '../constants/actionTypes';
import * as fetchTypes from '../constants/fetchTypes';
//import api from '../api/siteApi';
import { ContactApi, EducationApi,
  ExperienceApi, HomeApi, ResumeApi,
  SiteApi, SkillsetApi,
  SocialMediaApi } from '../api/mock/siteApi';
import {beginAjaxCall} from './ajaxStatusActions';

const load = (api, success) => dispatch => {

    dispatch(beginAjaxCall());

    return api.load().then(data => {

      dispatch(success(data));

    }).catch(error => {

      throw(error);

    });

  };

const insert = (api, success) => {

  return dispatch => {

    dispatch(beginAjaxCall());

    return api.insert(data).then(response => {

      dispatch(success(response));

    }).catch(error => {

      throw(error);

    });

  };

}

const fetchSuccess = status => {
  return { type: fetchTypes.FETCH.SUCCESS, status };
}

const insertContactSuccess = data => {
  return { type: types.CONTACT.INSERT, data };
}

const loadContactSuccess = (data) => {
  return { type: types.CONTACT.LOAD, data };
}

const loadEducationSuccess = (data) => {
  return { type: types.EDUCATION.LOAD, data };
}

const loadExperienceSuccess = (data) => {
  return { type: types.EXPERIENCE.LOAD, data };
}

const loadHomeSuccess = (data) => {
  return { type: types.HOME.LOAD, data };
}

const loadResumeSuccess = (data) => {
  return { type: types.RESUME.LOAD, data };
}

const loadSiteSuccess = (data) => {
  return { type: types.SITE.LOAD, data };
}

const loadSkillsetSuccess = (data) => {
  return { type: types.SKILLSET.LOAD, data };
}

const loadSocialMediaSuccess = (data) => {
  return { type: types.SOCIALMEDIA.LOAD, data };
}

export function insertContact() {
  return insert(ContactApi, insertContactSuccess);
}

export function loadContact() {
  return load(ContactApi, loadContactSuccess);
}

export function loadEducation() {
  return load(EducationApi, loadEducationSuccess);
}

export function loadExperience() {
  return load(ExperienceApi, loadExperienceSuccess);
}

export function loadHome() {
  return load(HomeApi, loadHomeSuccess);
}

export function loadResume() {
  return load(ResumeApi, loadResumeSuccess);
}

export function loadSite() {
  return load(SiteApi, loadSiteSuccess);
}

export function loadSkillset() {
  return load(SkillsetApi, loadSkillsetSuccess);
}

export function loadSocialMedia() {
  return load(SocialMediaApi, loadSocialMediaSuccess);
}
