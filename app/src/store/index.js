import SplashStore from './SplashStore';
import SignProcessStore from './SignProcessStore';
import SignUpEmailStore from './SignUpEmailStore';
import SignUpPasswordStore from './SignUpPasswordStore';
import SignUpPhoneStore from './SignUpPhoneStore';
import SignUpNameStore from './SignUpNameStore';

const splashStore = new SplashStore();
const signProcessStore = new SignProcessStore();
const signUpEmailStore = new SignUpEmailStore();
const signUpPasswordStore = new SignUpPasswordStore();
const signUpPhoneStore = new SignUpPhoneStore();
const signUpNameStore = new SignUpNameStore();

export default {
  splashStore: splashStore,
  signProcessStore: signProcessStore,
  signUpEmailStore: signUpEmailStore,
  signUpPasswordStore: signUpPasswordStore,
  signUpPhoneStore: signUpPhoneStore,
  signUpNameStore: signUpNameStore,
};
