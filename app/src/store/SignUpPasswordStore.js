import { action, computed, observable } from 'mobx';
import { INPUT_PASSWORD_STATUS } from '../constant/InputPasswordStatus';
import SignProcessStore from './SignProcessStore';
import PasswordValidator from '../component/PasswordValidator';

export default class SignUpPasswordStore {
  @observable passwordText = '';

  @observable passwordValidation = INPUT_PASSWORD_STATUS.NONE;

  @observable isShowPassword = false;

  passwordValidator = new PasswordValidator();

  constructor(signProcessStore: SignProcessStore) {
    this.signProcessStore = signProcessStore;
  }

  @action completePassword = () => {
    this.signProcessStore.passwordCompleted(this.passwordText);
  };

  @action toggleShowPassword = () => {
    this.isShowPassword = !this.isShowPassword;
  };

  @action passwordTextChanged = (text) => {
    if (String(text).length === 0) {
      this.passwordValidation = INPUT_PASSWORD_STATUS.NONE;
      this.passwordText = text;
      return;
    }

    if (!this.passwordValidator.validatePassword(text)) {
      this.passwordValidation = INPUT_PASSWORD_STATUS.NOT_FORMATTED;
      this.passwordText = text;
      return;
    }

    this.passwordValidation = INPUT_PASSWORD_STATUS.SUCCEED;
    this.passwordText = text;
    return this.passwordText;
  };

  @computed get isValidInputData() {
    return this.passwordValidation === INPUT_PASSWORD_STATUS.SUCCEED;
  }

  @computed get errorMessage() {
    if (this.passwordValidation === INPUT_PASSWORD_STATUS.NOT_FORMATTED) {
      return '8자 이상이어야 합니다.';
    }

    return '';
  }
}
