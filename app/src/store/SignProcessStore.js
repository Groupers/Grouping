import { observable, action } from 'mobx';
import { SIGN_VIEW_STATUS } from '../constant/SignViewStatus';
import GroupingUserDto from '../dto/GroupingUserDto';
import SignRepository from '../repository/SignRepository';
import SignUpEmailStore from './SignUpEmailStore';

export default class SignProcessStore {
  signRepository = new SignRepository();
  signUpEmailStore = new SignUpEmailStore();

  @observable signViewStatus = SIGN_VIEW_STATUS.NONE;

  @observable groupingUserDto = new GroupingUserDto();

  @observable isKeyboardShow = false;
  @observable keyboardHeight = 0;
  @observable normalHeight = 0;
  @observable shortHeight = 0;

  @action keyboardDidShow = (keyboardHeight, normalHeight, shortHeight) => {
    console.log(keyboardHeight + ':' + normalHeight + ':' + shortHeight);
    this.isKeyboardShow = true;
    this.keyboardHeight = keyboardHeight;
    this.normalHeight = normalHeight;
    this.shortHeight = shortHeight;
  };

  @action keyboardDidHide = () => {
    this.isKeyboardShow = false;
  };

  @action signInStarted = () => {
    this.signViewStatus = SIGN_VIEW_STATUS.SIGN_IN_STARTED;
  };

  @action signUpStarted = () => {
    this.signViewStatus = SIGN_VIEW_STATUS.SIGN_UP_STARTED;
  };

  @action emailCompleted = async email => {
    try {
      this.groupingUserDto = await this.signRepository.enrollEmail(email);
      if (this.groupingUserDto !== undefined) {
        this.signViewStatus = SIGN_VIEW_STATUS.EMAIL_COMPLETED;
      }
    } catch (e) {}
  };

  @action passwordCompleted = password => {
    this.signViewStatus = SIGN_VIEW_STATUS.PASSWORD_COMPLETED;
    this.groupingUserDto.password = password;
  };

  @action basicInfoCompleted = (name, gender, birthDay) => {
    this.signViewStatus = SIGN_VIEW_STATUS.BASIC_INFO;
    this.groupingUserDto.name = name;
    this.groupingUserDto.gender = gender;
    this.groupingUserDto.birthDay = birthDay;
  };

  @action phoneCompleted = async phoneNumber => {
    try {
      this.groupingUserDto = await this.signRepository.enrollPhoneNumber(
        this.groupingUserDto.id,
        phoneNumber
      );
      if (this.groupingUserDto !== undefined) {
        this.signViewStatus = SIGN_VIEW_STATUS.PHONE_COMPLETED;
      }
    } catch (e) {}
  };
}
