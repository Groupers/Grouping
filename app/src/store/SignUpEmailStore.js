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

  constructor(signProcessStore: SignProcessStore) {
    this.signProcessStore = signProcessStore;
  }

  @action completeEmail = async () => {
    await this.signProcessStore.emailCompleted(this.emailText);
  };

  @action clearEmail = async () => {
    if (this.emailText !== '') {
      await this.signRepository.cancelSignUpEmail(this.emailText, () => {});
    }
  };

  @action emailTextChanged = async (text) => {
    if (String(text).length === 0) {
      this.emailValidation = INPUT_EMAIL_STATUS.NONE;
      this.emailText = text;
      return;
    }

    if (!this.emailValidator.validateEmail(text)) {
      this.emailValidation = INPUT_EMAIL_STATUS.NOT_FORMATTED;
      this.emailText = text;
      return;
    }

    const data = await this.signRepository.checkEmail(text, (responseCode) => {});

    if (data.emailAvailable === true) {
      this.emailValidation = INPUT_EMAIL_STATUS.SUCCEED;
      this.emailText = text;
      return;
    }

    this.emailValidation = INPUT_EMAIL_STATUS.ALREADY_REGISTERED;
    this.emailText = text;
  };

  @computed get isValidInputData() {
    return this.emailValidation === INPUT_EMAIL_STATUS.SUCCEED;
  }

  @computed get isAlreadyRegisted() {
    return this.emailValidation === INPUT_EMAIL_STATUS.ALREADY_REGISTERED;
  }

  @computed get isRightFormat() {
    return (
      this.emailValidation !== INPUT_EMAIL_STATUS.NOT_FORMATTED &&
      this.emailValidation !== INPUT_EMAIL_STATUS.NONE
    );
  }

  @computed get errorMessage() {
    if (this.emailValidation === INPUT_EMAIL_STATUS.ALREADY_REGISTERED) {
      return '이미 등록된 계정입니다.';
    }

    if (this.emailValidation === INPUT_EMAIL_STATUS.NOT_FORMATTED) {
      return '올바르지 않은 메일형식입니다.';
    }
    if (this.emailValidation === INPUT_EMAIL_STATUS.INVALID) {
      return '올바른 이메일 패턴입니다.';
    }

    return '';
  }
}
