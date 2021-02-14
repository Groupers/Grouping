import auth from '@react-native-firebase/auth';
import { SERVER_URL } from '../constant/HttpProperty';

const TARGET_URL = `${SERVER_URL}/users`;

export default class FirebaseRepository {
  sendSignUpPhoneCode = async (phoneNumber) => {
    const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
    return confirmation;
  };
}
