import { SERVER_URL } from '../constant/HttpProperty';
import axios from 'axios';
import auth from '@react-native-firebase/auth';

const TARGET_URL = SERVER_URL + '/users';

export default class UserRepository {
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

  checkEmail = async email => {
    axios
      .get(TARGET_URL + '/sign/email?email=' + email)
      .then(response => {
        return response.data;
      })
      .catch(err => {
        return err;
      });
  };

  sendSignUpPhoneCode = async phoneNumber => {
    const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
    console.log("sendSignUpPhoneCode.");
    console.log(confirmation);
    return confirmation;
  };
}
