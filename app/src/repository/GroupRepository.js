import axios from 'axios';
import auth from '@react-native-firebase/auth';
import { SERVER_URL } from '../constant/HttpProperty';

const TARGET_URL = `${SERVER_URL}/group`;

export default class GroupRepository {
  initialize = async () => {
    axios
      .post(`${TARGET_URL}`, {})
      .then((response) => {
        return response.data;
      })
      .catch((err) => {
        return err;
      });
  };
}
