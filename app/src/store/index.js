import SplashStore from './SplashStore';
import SignViewStore from './SignViewStore';
import SignUpEmailStore from './SignUpEmailStore';
import SignUpPasswordStore from './SignUpPasswordStore';

const splashStore = new SplashStore();
const signViewStore = new SignViewStore();
const signUpEmailStore = new SignUpEmailStore();
const signUpPasswordStore = new SignUpPasswordStore();

export default {
  splashStore: splashStore,
  signViewStore: signViewStore,
  signUpEmailStore: signUpEmailStore,
  signUpPasswordStore: signUpPasswordStore,
};
