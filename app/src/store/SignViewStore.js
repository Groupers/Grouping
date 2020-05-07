import {observable, action} from 'mobx';
import {SIGN_VIEW_STATUS} from '../constant/SignViewStatus';

export default class SignViewStore {
  @observable signViewStatus = SIGN_VIEW_STATUS.NONE;

  @action signInStarted = () => {
    this.signViewStatus = SIGN_VIEW_STATUS.SIGN_IN_STARTED;
    return this.signViewStatus;
  };

  @action signUpStarted = () => {
    this.signViewStatus = SIGN_VIEW_STATUS.SIGN_UP_STARTED;
    return this.signViewStatus;
  };

  @action emailCompleted = () => {
    this.signViewStatus = SIGN_VIEW_STATUS.EMAIL_COMPLETED;
    return this.signViewStatus;
  };

  @action passwordCompleted = () => {
    this.signViewStatus = SIGN_VIEW_STATUS.PASSWORD_COMPLETED;
    return this.signViewStatus;
  };

  @action genderCompleted = () => {
    this.signViewStatus = SIGN_VIEW_STATUS.GENDER_COMPLETED;
    return this.signViewStatus;
  };

  @action phoneCompleted = () => {
    this.signViewStatus = SIGN_VIEW_STATUS.PHONE_COMPLETED;
    return this.signViewStatus;
  };

  @action allCompleted = () => {
    this.signViewStatus = SIGN_VIEW_STATUS.ALL_COMPLETED;
    return this.signViewStatus;
  };
}
