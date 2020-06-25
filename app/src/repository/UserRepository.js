import { SERVER_URL } from '../constant/HttpProperty';
import axios from 'axios';
import auth from '@react-native-firebase/auth';

const TARGET_URL = SERVER_URL + '/users';

export default class UserRepository{
  initialize = async () => {
    axios
      .post(TARGET_URL + '/auth', {})
      .then(response => {
        return response.data;
      })
      .catch(err => {
        return err;
      });
  };
}
