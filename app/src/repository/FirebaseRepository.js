import { SERVER_URL } from '../constant/HttpProperty';
import axios from 'axios';
import auth from '@react-native-firebase/auth';

const TARGET_URL = SERVER_URL + '/users';

export default class FirebaseRepository {
  sendSignUpPhoneCode = async phoneNumber => {
    const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
    console.log("sendSignUpPhoneCode.");
    console.log(confirmation);
    return confirmation;
  };
}
