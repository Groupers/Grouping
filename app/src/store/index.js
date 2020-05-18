import UserStore from './UserStore';
import SignProcessStore from './SignProcessStore';
import SignUpEmailStore from './SignUpEmailStore';
import SignUpPasswordStore from './SignUpPasswordStore';
import SignUpPhoneStore from './SignUpPhoneStore';
import SignUpBasicInfoStore from './SignUpBasicInfoStore';
import SignInStore from './SignInStore';
import SignUpTermsAgreementStore from './SignUpTermsAgreementStore';

const userStore = new UserStore();
const signInStore = new SignInStore(userStore);
const signProcessStore = new SignProcessStore(userStore);
const signUpEmailStore = new SignUpEmailStore(signProcessStore);
const signUpPasswordStore = new SignUpPasswordStore(signProcessStore);
const signUpPhoneStore = new SignUpPhoneStore(signProcessStore);
const signUpBasicInfoStore = new SignUpBasicInfoStore(signProcessStore);
const signUpTermsAgreementStore = new SignUpTermsAgreementStore(
  signProcessStore
);

export default {
  userStore: userStore,
  signUpTermsAgreementStore: signUpTermsAgreementStore,
  signProcessStore: signProcessStore,
  signUpEmailStore: signUpEmailStore,
  signUpPasswordStore: signUpPasswordStore,
  signUpPhoneStore: signUpPhoneStore,
  signUpBasicInfoStore: signUpBasicInfoStore,
  signInStore: signInStore,
};
