import delay from './../delay';
import data from '../../data/education.json';

class Api {
  static load() {

    return new Promise((resolve) => {

      setTimeout(() => {

        resolve(data);
      }, delay);
    });
  }
}

export default Api;
