import { observable, action } from 'mobx';
import { SIGN_VIEW_STATUS } from '../constant/SignViewStatus';
import GroupingUserDto from '../dto/GroupingUserDto';
import SignRepository from '../repository/SignRepository';
import UserStore from './UserStore';

export default class SignProcessStore {
  signRepository = new SignRepository();

  @observable signViewStatus = SIGN_VIEW_STATUS.NONE;

  @observable groupingUserDto = new GroupingUserDto();

  @observable isKeyboardShow = false;
  @observable keyboardHeight = 0;
  @observable normalHeight = 0;
  @observable shortHeight = 0;

  constructor(userStore: UserStore) {
    this.userStore = userStore;
  }

  @action keyboardDidShow = (keyboardHeight, normalHeight, shortHeight) => {
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
    let isSucceed = await this.signRepository.enrollEmail(
      email,
      responseCode => {}
    );
    if (isSucceed) {
      this.groupingUserDto.email = email;
      this.signViewStatus = SIGN_VIEW_STATUS.EMAIL_COMPLETED;
    }
  };

  @action passwordCompleted = password => {
    this.signViewStatus = SIGN_VIEW_STATUS.PASSWORD_COMPLETED;
    this.groupingUserDto.password = password;
  };

  @action basicInfoCompleted = (name, gender, birthday) => {
    this.signViewStatus = SIGN_VIEW_STATUS.BASIC_INFO_COMPLETED;
    this.groupingUserDto.name = name;
    this.groupingUserDto.gender = gender;
    this.groupingUserDto.birthday = birthday;
  };

  @action phoneCompleted = async phoneNumber => {
    let isSucceed = await this.signRepository.enrollPhoneNumber(
      phoneNumber,
      () => {}
    );

    if (isSucceed === true) {
      this.signViewStatus = SIGN_VIEW_STATUS.PHONE_COMPLETED;
      this.groupingUserDto.phoneNumber = phoneNumber;
    }
  };

  @action termsAgreementCompleted = async () => {
    let groupingUserDto = await this.signRepository.completeSignUp(
      this.groupingUserDto,
      responseCode => {}
    );
    this.userStore.signUpCompleted(groupingUserDto);
  };
}
