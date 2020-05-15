import { action, observable } from 'mobx';
import { INPUT_PASSWORD_STATUS } from '../constant/InputPasswordStatus';
import SignProcessStore from './SignProcessStore';
import PasswordValidator from '../component/PasswordValidator';

export default class SignUpPasswordStore {
  @observable passwordText = '';
  @observable passwordValidation = INPUT_PASSWORD_STATUS.NONE;

  passwordValidator = new PasswordValidator();

  constructor(signProcessStore: SignProcessStore) {
    this.signProcessStore = signProcessStore;
  }

  @action passwordTextChanged = async text => {
    if (String(text).length === 0) {
      this.passwordValidation = INPUT_PASSWORD_STATUS.NONE;
      return;
    }

    if (!this.passwordValidator.validatePassword(text)) {
      this.passwordValidation = INPUT_PASSWORD_STATUS.INVALID;
      this.passwordText = text;
      return;
    }

    this.passwordValidation = INPUT_PASSWORD_STATUS.SUCCEED;
    this.passwordText = text;
    return this.passwordText;
  };
}
