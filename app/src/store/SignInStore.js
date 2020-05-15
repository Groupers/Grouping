import SignRepository from "../repository/SignRepository";
import { action, computed, observable } from 'mobx';
import EmailValidator from '../component/EmailValidator';
import PasswordValidator from '../component/PasswordValidator';
import { INPUT_EMAIL_STATUS } from '../constant/InputEmailStatus';
import { INPUT_PASSWORD_STATUS } from '../constant/InputPasswordStatus';

export default class SignInStore {
  signRepository = new SignRepository();
  emailValidator = new EmailValidator();
  passwordValidator = new PasswordValidator();

  @observable emailText = "";
  @observable passwordText = "";
  @observable isShowPassword = false;
  @observable emailStatus = INPUT_EMAIL_STATUS.NONE;
  @observable passwordStatus = INPUT_PASSWORD_STATUS.NONE;


  @action clearData = () => {
    console.log("sign in, clear data");
    this.emailText = "";
    this.passwordText = "";
    this.isShowPassword = false;
    this.emailStatus = INPUT_EMAIL_STATUS.NONE;
    this.passwordStatus = INPUT_PASSWORD_STATUS.NONE;
  };

  @action passwordTextChanged = password => {
    if (String(password).length === 0) {
      this.passwordStatus = INPUT_PASSWORD_STATUS.NONE;
      this.passwordText = password;
      return;
    }

    if (!this.passwordValidator.validatePassword(password)) {
      this.passwordStatus = INPUT_PASSWORD_STATUS.INVALID;
      this.passwordText = password;
      console.log(this.passwordStatus);
      return;
    }
    console.log("valid password");
    this.passwordStatus = INPUT_PASSWORD_STATUS.SUCCEED;
    this.passwordText = password;
  };

  @action emailTextChanged = email => {
    if (String(email).length === 0) {
      this.emailStatus = INPUT_EMAIL_STATUS.NONE;
      this.emailText = email;
      return;
    }

    if (!this.emailValidator.validateEmail(email)) {
      this.emailStatus = INPUT_EMAIL_STATUS.INVALID;
      this.emailText = email;
      console.log(this.emailStatus);
      return;
    }

    console.log("valid email");
    this.emailStatus = INPUT_EMAIL_STATUS.SUCCEED;
    this.emailText = email;
  };

  @computed get isValidInputData() {
    return (
      this.emailStatus === INPUT_EMAIL_STATUS.SUCCEED &&
      this.passwordStatus === INPUT_PASSWORD_STATUS.SUCCEED
    );
  }

  @computed get errorMessage(){

  }

  @action signIn = async () => {
    await this.signRepository.signIn(
      this.emailText,
      this.passwordText,
      (responseCode) => {
      }
    );
  };
}
