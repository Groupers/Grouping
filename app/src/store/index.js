import SplashStore from './SplashStore';
import SignProcessStore from './SignProcessStore';
import SignUpEmailStore from './SignUpEmailStore';
import SignUpPasswordStore from './SignUpPasswordStore';
import SignUpPhoneStore from './SignUpPhoneStore';

const splashStore = new SplashStore();
const signProcessStore = new SignProcessStore();
const signUpEmailStore = new SignUpEmailStore();
const signUpPasswordStore = new SignUpPasswordStore();
const signUpPhoneStore = new SignUpPhoneStore();

export default {
  splashStore: splashStore,
  signProcessStore: signProcessStore,
  signUpEmailStore: signUpEmailStore,
  signUpPasswordStore: signUpPasswordStore,
  signUpPhoneStore: signUpPhoneStore,
};
