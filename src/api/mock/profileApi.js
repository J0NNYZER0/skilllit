import delay from './../delay';
import data from '../../data/profile.json';

class Api {
  static load() {

    return new Promise((resolve) => {

      setTimeout(() => {
        console.log('profile', data)
        resolve(data);
      }, delay);
    });
  }
}

export default Api;
