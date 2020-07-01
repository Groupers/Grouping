import { action, computed, observable } from 'mobx';
import SignRepository from '../repository/SignRepository';
import EmailValidator from '../component/EmailValidator';
import PasswordValidator from '../component/PasswordValidator';
import { INPUT_EMAIL_STATUS } from '../constant/InputEmailStatus';
import { INPUT_PASSWORD_STATUS } from '../constant/InputPasswordStatus';
import { ResponseCode } from '../constant/ResponseCode';
import UserStore from './UserStore';

export default class SignInStore {
  signRepository = new SignRepository();

  emailValidator = new EmailValidator();

  passwordValidator = new PasswordValidator();

  @observable emailText = '';

  @observable passwordText = '';

  @observable isShowPassword = false;

  @observable emailStatus = INPUT_EMAIL_STATUS.NONE;

  @observable passwordStatus = INPUT_PASSWORD_STATUS.NONE;

  constructor(userStore: UserStore) {
    this.userStore = userStore;
  }

  @action toggleShowPassword = () => {
    this.isShowPassword = !this.isShowPassword;
  };

  @action clearData = () => {
    this.emailText = '';
    this.passwordText = '';
    this.isShowPassword = false;
    this.emailStatus = INPUT_EMAIL_STATUS.NONE;
    this.passwordStatus = INPUT_PASSWORD_STATUS.NONE;
  };

  @action passwordTextChanged = (password) => {
    if (String(password).length === 0) {
      this.passwordStatus = INPUT_PASSWORD_STATUS.NONE;
      this.passwordText = password;
      return;
    }

    if (!this.passwordValidator.validatePassword(password)) {
      this.passwordStatus = INPUT_PASSWORD_STATUS.NOT_FORMATTED;
      this.passwordText = password;
      console.log(this.passwordStatus);
      return;
    }
    this.passwordStatus = INPUT_PASSWORD_STATUS.SUCCEED;
    this.passwordText = password;
  };

  @action emailTextChanged = (email) => {
    if (String(email).length === 0) {
      this.emailStatus = INPUT_EMAIL_STATUS.NONE;
      this.emailText = email;
      return;
    }

    if (!this.emailValidator.validateEmail(email)) {
      this.emailStatus = INPUT_EMAIL_STATUS.NOT_FORMATTED;
      this.emailText = email;
      console.log(this.emailStatus);
      return;
    }

    this.emailStatus = INPUT_EMAIL_STATUS.SUCCEED;
    this.emailText = email;
  };

  @computed get isValidInputData() {
    return (
      this.emailStatus === INPUT_EMAIL_STATUS.SUCCEED &&
      this.passwordStatus === INPUT_PASSWORD_STATUS.SUCCEED
    );
  }

  @computed get errorMessage() {
    if (this.emailStatus === INPUT_EMAIL_STATUS.NOT_FORMATTED) {
      return '이메일 형식이 맞지 않습니다.';
    }

    if (this.passwordStatus === INPUT_PASSWORD_STATUS.NOT_FORMATTED) {
      return '비밀번호 형식이 맞지 않습니다.';
    }

    if (this.emailStatus === INPUT_EMAIL_STATUS.INVALID) {
      return '존재하지 않는 이메일입니다.';
    }

    if (this.passwordStatus === INPUT_PASSWORD_STATUS.INVALID) {
      return '비밀번호가 일치하지 않습니다.';
    }
  }

  @action signIn = async () => {
    const groupingUserDto = await this.signRepository.signIn(
      this.emailText,
      this.passwordText,
      (responseCode) => {
        if (responseCode === ResponseCode.INVALID_PASSWORD) {
          this.passwordStatus = INPUT_PASSWORD_STATUS.INVALID;
          return;
        }

        if (responseCode === ResponseCode.USER_NOT_EXISTED) {
          this.emailStatus = INPUT_EMAIL_STATUS.INVALID;
        }
      }
    );

    if (groupingUserDto !== undefined) {
      this.userStore.signInCompleted(groupingUserDto);
    }
  };
}
