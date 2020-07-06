import axios from 'axios';
import auth from '@react-native-firebase/auth';
import { SERVER_URL } from '../constant/HttpProperty';

const TARGET_URL = `${SERVER_URL}/users`;

export default class FirebaseRepository {
  /*
  sendSignUpPhoneCode = async (phoneNumber) => {
    const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
    return confirmation;
  }
   */
  sendSignUpPhoneCode = async (phoneNumber, timeOut, forceResend) => {
    const confirmation = await auth()
      .verifyPhoneNumber(phoneNumber)
      .on('state_changed', (phoneAuthSnapshot, timeOut, forceResend) => {
        if (phoneAuthSnapshot.state === auth.PhoneAuthState.CODE_SENT) {
          return Promise.resolve();
        }
        return Promise.reject(new Error('Code not sent!'));
      })
      .then(
        (phoneAuthSnapshot) => {
          console.log(phoneAuthSnapshot.state);
        },
        (error) => {
          console.error(error.message);
        }
      );
    return confirmation;
  };
}
