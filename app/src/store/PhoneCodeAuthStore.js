import { action, computed, observable } from 'mobx';
import { PHONE_CODE_AUTH_STATE } from '../constant/PhoneCodeAuthState';
import { SIGN_UP_PHONE_VIEW_STATUS } from '../constant/SignUpPhoneStatus';

export default class PhoneCodeAuthStore {
  @observable phoneCodeAuthState = PHONE_CODE_AUTH_STATE.NONE;

  @observable signUpPhoneViewStatus = SIGN_UP_PHONE_VIEW_STATUS.PHONE_NUMBER_SENT_BEFORE;

  @observable userInputPhoneCode = '';

  @observable timeOut = 3;

  @action startTimer() {
    if (this.timeOut > 0) {
      this.timeOut -= 1;
    }
  }
  //
}
