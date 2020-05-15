import { action, computed, observable } from 'mobx';
import { INPUT_EMAIL_STATUS } from '../constant/InputEmailStatus';
import SignRepository from '../repository/SignRepository';
import SignProcessStore from './SignProcessStore';
import EmailValidator from '../component/EmailValidator';

export default class SignUpEmailStore {
  signRepository = new SignRepository();
  emailValidator = new EmailValidator();

  @observable emailText = '';
  @observable emailValidation = INPUT_EMAIL_STATUS.NONE;

  signProcessStore;

  constructor(signProcessStore: SignProcessStore) {
    this.signProcessStore = signProcessStore;
  }

  @action clearEmail = async () => {
    console.log("clear!");
    if (this.emailText !== '') {
      await this.signRepository.cancelSignUpEmail(this.emailText, () => {});
    }
  };

  @action emailTextChanged = async text => {
    if (String(text).length === 0) {
      this.emailValidation = INPUT_EMAIL_STATUS.NONE;
      return;
    }

    if (!this.emailValidator.validateEmail(text)) {
      this.emailValidation = INPUT_EMAIL_STATUS.INVALID;
      this.emailText = text;
      return;
    }

    let data = await this.signRepository.checkEmail(text, responseCode => {});
    console.log(data);

    if (data.emailAvailable === true) {
      this.emailValidation = INPUT_EMAIL_STATUS.SUCCEED;
      this.emailText = text;
      return;
    }

    this.emailValidation = INPUT_EMAIL_STATUS.ALREADY_REGISTERED;
    this.emailText = text;
  };
}
