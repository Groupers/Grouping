import auth from '@react-native-firebase/auth';

export default class FirebaseRepository {
  sendSignUpPhoneCode = async (phoneNumber) => {
    const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
    return confirmation;
  };
}
