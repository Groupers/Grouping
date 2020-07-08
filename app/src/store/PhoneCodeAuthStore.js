import { action, computed, observable } from 'mobx';
import { PHONE_CODE_AUTH_STATUS } from '../constant/PhoneCodeAuthStatus';
import { SIGN_UP_PHONE_VIEW_STATUS } from '../constant/SignUpPhoneStatus';
import {inject, observer} from "mobx-react";

@inject('signUpPhoneStore')
@observer
export default class PhoneCodeAuthStore {
  @observable phoneCodeAuthStatus = PHONE_CODE_AUTH_STATUS.NONE;

  @observable signUpPhoneViewStatus = SIGN_UP_PHONE_VIEW_STATUS.PHONE_NUMBER_SENT_BEFORE;

  // @observable userInputPhoneCode = '';

  @observable timeOut = 180;

  @action startTimer() {
    if (this.timeOut > 0) {
      this.timeOut -= 1;
    }
  }

  @action changeView(signUpPhoneViewStatus) {
    this.signUpPhoneViewStatus = signUpPhoneViewStatus;
  }

  @computed get isPhoneCodeAuthSucceed() {
    return this.phoneCodeAuthStatus === PHONE_CODE_AUTH_STATUS.SUCCEED && this.timeOut > 0;
  }
}
