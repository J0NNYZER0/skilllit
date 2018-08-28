import delay from './../delay';
import data from '../../data/message.json';

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
