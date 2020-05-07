import {SERVER_URL} from '../constant/HttpProperty';
import axios from 'axios';

const TARGET_URL = SERVER_URL + '/users';

export default class UserRepository {
  initialize = async () => {
    axios
      .post(TARGET_URL + '/auth', {})
      .then((response) => {
        return response.data;
      })
      .catch((err) => {
        return err;
      });
  };

  checkEmail = async (email) => {
    axios
      .get(TARGET_URL + '/sign/email?email=' + email)
      .then((response) => {
        return response.data;
      })
      .catch((err) => {
        return err;
      });
  };
}
