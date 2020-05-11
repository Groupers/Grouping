import { observable, action } from 'mobx';
import { SIGN_VIEW_STATUS } from '../constant/SignViewStatus';

export default class SignProcessStore {
  @observable signViewStatus = SIGN_VIEW_STATUS.NONE;

  signUpInfo = {
    email: '',
    name: '',
    password: '',
    gender: '',
    birthDay: '',
    phoneNumber: ''
  };

  @action signInStarted = () => {
    this.signViewStatus = SIGN_VIEW_STATUS.SIGN_IN_STARTED;
  };

  @action signUpStarted = () => {
    this.signViewStatus = SIGN_VIEW_STATUS.SIGN_UP_STARTED;
  };

  @action emailCompleted = email => {
    this.signViewStatus = SIGN_VIEW_STATUS.EMAIL_COMPLETED;
    this.signUpInfo.email = email;
  };

  @action nameCompleted = name => {
    this.signViewStatus = SIGN_VIEW_STATUS.NAME_COMPLETED;
    this.signUpInfo.name = name;
  };

  @action passwordCompleted = password => {
    this.signViewStatus = SIGN_VIEW_STATUS.PASSWORD_COMPLETED;
    this.signUpInfo.password = password;
  };

  @action genderCompleted = gender => {
    this.signViewStatus = SIGN_VIEW_STATUS.GENDER_COMPLETED;
    this.signUpInfo.gender = gender;
  };

  @action phoneCompleted = phoneNumber => {
    this.signViewStatus = SIGN_VIEW_STATUS.PHONE_COMPLETED;
    this.signUpInfo.phoneNumber = phoneNumber;
    return this.signViewStatus;
  };
}
