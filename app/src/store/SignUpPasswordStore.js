import { action, observable } from 'mobx';
import { SIGN_UP_PASSWORD_STATUS } from '../constant/SignUpPasswordStatus';
import SignProcessStore from './SignProcessStore';

export default class SignUpPasswordStore {
  @observable passwordText = '';
  @observable passwordValidation = SIGN_UP_PASSWORD_STATUS.NONE;

  signProcessStore;

  constructor(signProcessStore: SignProcessStore) {
    this.signProcessStore = signProcessStore;
  }

  @action passwordTextChanged = async text => {
    console.log('passwordStore: ' + text + this.passwordValidation);

    const expression = /^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])[\w!@#$%^&*]{8,}$/;
    if (String(text).length === 0) {
      this.passwordValidation = SIGN_UP_PASSWORD_STATUS.NONE;
    }

    if (!expression.test(String(text))) {
      this.passwordValidation = SIGN_UP_PASSWORD_STATUS.INVALID;
      this.passwordText = text;
      return this.passwordText;
    }

    this.passwordValidation = SIGN_UP_PASSWORD_STATUS.SUCCEED;
    this.passwordText = text;
    return this.passwordText;
  };
}
