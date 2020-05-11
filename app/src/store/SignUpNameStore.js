import { action, computed, observable } from 'mobx';
import { SIGN_UP_NAME_STATUS } from '../constant/SignUpNameStatus';

export default class SignUpNameStore {
  @observable nameText = '';
  @observable nameValidation = SIGN_UP_NAME_STATUS.NONE;

  @action nameTextChanged = text => {
    console.log("nameTextChanged!" + text);
    this.nameText = text;
    if (String(this.nameText).length === 0) {
      this.nameValidation = SIGN_UP_NAME_STATUS.INVALID;
      return;
    }

    this.nameValidation = SIGN_UP_NAME_STATUS.SUCCEED;
  };
}
