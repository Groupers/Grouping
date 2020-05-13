import { action, computed, observable } from 'mobx';
import { SIGN_UP_EMAIL_STATUS } from '../constant/SignUpEmailStatus';
import SignRepository from '../repository/SignRepository';
import SignProcessStore from './SignProcessStore';

export default class SignUpEmailStore {
  signRepository = new SignRepository();

  @observable emailText = '';
  @observable emailValidation = SIGN_UP_EMAIL_STATUS.NONE;

  signProcessStore;

  constructor(signProcessStore: SignProcessStore) {
    this.signProcessStore = signProcessStore;
  }

  @action emailTextChanged = async text => {
    const expression = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([\t]*\r\n)?[\t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([\t]*\r\n)?[\t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;

    if (String(text).length === 0) {
      this.emailValidation = SIGN_UP_EMAIL_STATUS.NONE;
    }

    if (!expression.test(String(text).toLowerCase())) {
      this.emailValidation = SIGN_UP_EMAIL_STATUS.INVALID;
      this.emailText = text;
      return this.emailText;
    }

    try {
      let data = await this.signRepository.checkEmail(text);

      console.log(data);
      if (data.emailAvailable === true) {
        this.emailValidation = SIGN_UP_EMAIL_STATUS.SUCCEED;
        this.emailText = text;
        return this.emailText;
      }

      this.emailValidation = SIGN_UP_EMAIL_STATUS.ALREADY_REGISTERED;
      this.emailText = text;
      return this.emailText;
    } catch {
      this.emailValidation = SIGN_UP_EMAIL_STATUS.ALREADY_REGISTERED;
      this.emailText = text;
      return this.emailText;
    }
  };
}
