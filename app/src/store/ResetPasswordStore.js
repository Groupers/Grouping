import { action, computed, observable } from 'mobx';
import BackgroundTimer from 'react-native-background-timer';
import * as Alert from 'react-native';
import { SIGN_UP_PHONE_VIEW_STATUS } from '../constant/SignUpPhoneStatus';
import SignRepository from '../repository/SignRepository';
import FirebaseRepository from '../repository/FirebaseRepository';
import SignProcessStore from './SignProcessStore';
import { INPUT_PHONE_STATUS } from '../constant/InputPhoneStatus';
import PhoneValidator from '../component/PhoneValidator';
import { TIME_OUT } from '../constant/TimeOut';
import { INPUT_EMAIL_STATUS } from '../constant/InputEmailStatus';
import EmailValidator from '../component/EmailValidator';
import UserRepository from '../repository/UserRepository';
import { INPUT_STATUS } from '../constant/InputStatus';
import { ResponseCode } from '../constant/ResponseCode';
import { INPUT_PASSWORD_STATUS } from '../constant/InputPasswordStatus';
import GroupingUserDto from '../dto/GroupingUserDto';
import { USER_STATUS } from '../constant/UserStatus';

export default class res {
  koreaPhonePrefixConditionFirst = '010';

  koreaPhonePrefixConditionSecond = '10';

  koreaPhonePrefix = '+82';

  userRepository = new UserRepository();

  emailValidator = new EmailValidator();

  @observable emailText = '';

  @observable timeRemained = 300;

  @observable phoneValidationViewStatus = SIGN_UP_PHONE_VIEW_STATUS.PHONE_NUMBER_SENT_BEFORE;

  @observable phoneNumber = '';

  @observable phoneCode = '';

  @observable inputStatus = INPUT_STATUS.NONE;

  @observable emailStatus = INPUT_EMAIL_STATUS.NONE;

  @observable phoneValidationStatus = INPUT_PHONE_STATUS.NONE;

  @observable timeOut = TIME_OUT.START_TIME;

  @observable passwordChangeStatus = null;

  signRepository = new SignRepository();

  firebaseRepository = new FirebaseRepository();

  phoneValidator = new PhoneValidator();

  groupingUserDto = new GroupingUserDto();

  constructor(signProcessStore: SignProcessStore) {
    this.signProcessStore = signProcessStore;
  }

  @action countDown() {
    if (this.timeOut > 0) {
      this.timeOut -= TIME_OUT.A_SECOND;
    }
  }

  @action initialize() {
    this.timeOut = TIME_OUT.START_TIME;
  }

  @action startTimer() {
    BackgroundTimer.setTimeout(() => {
      this.countDown();
    }, TIME_OUT.THOUSAND_MILLI_SECONDS);
  }

  @action completePhoneNumber = async () => {
    await this.signProcessStore.phoneCompleted(this.phoneNumber);
  };

  // @action clearPhoneNumber = async () => {
  //   if (this.phoneNumber !== '') {
  //     await this.signRepository.cancelSignUpPhoneNumber(this.phoneNumber, () => {});
  //   }
  // };

  @action emailTextChanged = (email) => {
    if (String(email).length === 0) {
      this.emailStatus = INPUT_EMAIL_STATUS.NONE;
      this.emailText = email;
      return;
    }

    if (!this.emailValidator.validateEmail(email)) {
      this.emailStatus = INPUT_EMAIL_STATUS.NOT_FORMATTED;
      this.emailText = email;
      return;
    }

    this.emailStatus = INPUT_EMAIL_STATUS.SUCCEED;
    this.emailText = email;
  };

  @action phoneNumberChanged = (text) => {
    console.log('phoneNumberChanged');
    text = text.replace(/-/gi, '');
    if (text.toString().slice(0, 3) === this.koreaPhonePrefixConditionFirst) {
      this.phoneNumber =
        this.koreaPhonePrefix + text.toString().slice(1, text.toString().length + 1);
    } else if (text.toString().slice(0, 2) === this.koreaPhonePrefixConditionSecond) {
      this.phoneNumber =
        this.koreaPhonePrefix + text.toString().slice(0, text.toString().length + 1);
    } else if (
      text.toString().length >= 4 &&
      text.toString().length < 6 &&
      text.toString().slice(0, 3) === this.koreaPhonePrefix
    ) {
      this.phoneNumber = text.toString().slice(3, text.toString().length);
    } else if (text.toString().length > 13) {
      this.phoneNumber = text.toString().slice(0, 13);
      this.phoneNumber = this.phoneNumber.trim();
      return;
    } else {
      this.phoneNumber = text;
    }

    this.phoneNumber = this.phoneNumber.trim();
    console.log(this.phoneNumber);
    if (this.phoneValidator.validatePhoneNumber(this.phoneNumber)) {
      this.phoneValidationStatus = INPUT_PHONE_STATUS.PHONE_NUMBER_FORMATTED;
      return;
    }
    this.phoneValidationStatus = INPUT_PHONE_STATUS.PHONE_NUMBER_NOT_FORMATTED;
  };

  @action sendPhoneCode = async () => {
    console.log('send code');
    let isSucceed = false;
    const data = await this.signRepository.checkPhoneNumber(this.phoneNumber, (responseCode) => {});
    // if (data.phoneNumberAvailable !== true) {
    //   this.phoneValidationStatus = INPUT_PHONE_STATUS.PHONE_NUMBER_ALREADY_EXISTED;
    //   return;
    // }
    try {
      this.codeConfirmation = await this.firebaseRepository.sendSignUpPhoneCode(this.phoneNumber);
      console.log(this.codeConfirmation);
      isSucceed = true;
      console.log(isSucceed);
    } catch (e) {
      console.log('인증번호 요청 에러');
      this.phoneValidationViewStatus = SIGN_UP_PHONE_VIEW_STATUS.PHONE_CODE_SEND_ERROR;
    }
    if (isSucceed) {
      this.phoneValidationViewStatus = SIGN_UP_PHONE_VIEW_STATUS.PHONE_NUMBER_SENT_AFTER;
      // this.initialize();
      // console.log(`codeConfirmation${this.codeConfirmation.status.toString()}`);
    }
  };

  @action phoneCodeChanged = (phoneCode) => {
    console.log('phoneCodeChanged');
    if (phoneCode.length > 6) {
      return;
    }
    this.phoneCode = phoneCode;
    if (this.phoneValidator.validatePhoneCode(this.phoneCode)) {
      this.phoneValidationStatus = INPUT_PHONE_STATUS.PHONE_CODE_FORMATTED;
      console.log(`phoneValidationStatus${this.phoneValidationStatus}`);
      return;
    }
    this.phoneValidationStatus = INPUT_PHONE_STATUS.PHONE_CODE_NOT_FORMATTED;
    console.log(phoneCode.toString());
  };

  @action phoneCodeFocused = (index) => {
    this.phoneCode = '';
  };

  @action validatePhoneCode = () => {
    console.log('validatePhoneCode');
    if (this.phoneValidator.validatePhoneCode(this.phoneCode.trim())) {
      this.phoneValidationStatus = INPUT_PHONE_STATUS.PHONE_CODE_FORMATTED;
      console.log(`phonecode Foramtted${this.phoneValidationStatus}`);
      return;
    }

    this.phoneValidationStatus = INPUT_PHONE_STATUS.PHONE_CODE_NOT_FORMATTED;
  };

  @action invalidatePhoneCode = () => {
    this.phoneValidationStatus = INPUT_PHONE_STATUS.PHONE_CODE_NOT_FORMATTED;
  };

  @action phoneCodeValidationSucceed = async () => {
    let isSucceed;
    console.log('call phoneCodeValidationSucceed');
    if (
      this.phoneValidationStatus === INPUT_PHONE_STATUS.PHONE_CODE_FORMATTED &&
      this.codeConfirmation != null
    ) {
      try {
        console.log(this.phoneCode.trim());
        isSucceed = await this.codeConfirmation.confirm(this.phoneCode.trim());
      } catch {
        this.phoneCode = '';
        this.phoneValidationStatus = INPUT_PHONE_STATUS.PHONE_CODE_NOT_VALID;
        return;
      }

      if (isSucceed) {
        this.phoneValidationStatus = INPUT_PHONE_STATUS.SUCCEED;
        this.phoneValidationViewStatus = SIGN_UP_PHONE_VIEW_STATUS.PHONE_VALIDATION_SUCCEED;
      }
    }
    console.log('성공여부 : ');
    console.log(isSucceed);
  };

  @computed get getFormatTimer() {
    let time = this.timeOut;
    const minutes = Math.floor(time / 60);
    time -= minutes * 60;
    const seconds = parseInt(time % 60, 10);
    return `${minutes < 10 ? `0${minutes}` : minutes} : ${seconds < 10 ? `0${seconds}` : seconds}`;
  }

  @computed get isValidPhoneNumber() {
    return (
      this.phoneValidationStatus !== INPUT_PHONE_STATUS.PHONE_NUMBER_NOT_FORMATTED &&
      this.phoneValidationViewStatus !== SIGN_UP_PHONE_VIEW_STATUS.PHONE_VALIDATION_SUCCEED
    );
  }

  @computed get isValidPhoneCode() {
    return (
      this.phoneValidationStatus === INPUT_PHONE_STATUS.PHONE_CODE_FORMATTED &&
      this.phoneValidationViewStatus !== SIGN_UP_PHONE_VIEW_STATUS.PHONE_VALIDATION_SUCCEED
    );
  }

  @computed get isAllCompleted() {
    return this.phoneValidationViewStatus === SIGN_UP_PHONE_VIEW_STATUS.PHONE_VALIDATION_SUCCEED;
  }

  @computed get errorMessage() {
    if (this.phoneValidationStatus === INPUT_PHONE_STATUS.PHONE_NUMBER_ALREADY_EXISTED) {
      return '이미 등록된 번호 입니다.';
    }

    if (this.phoneValidationStatus === INPUT_PHONE_STATUS.PHONE_NUMBER_NOT_FORMATTED) {
      return '핸드폰 형식이 맞지 않습니다.';
    }

    if (this.phoneValidationStatus === INPUT_PHONE_STATUS.PHONE_CODE_NOT_VALID) {
      return '인증 코드가 틀렸습니다.';
    }

    return '인증번호를 받지 못 하셨다면 다시 인증버튼을 눌러주세요';
  }

  @action isValidUser = async () => {
    console.log('isValid');
    console.log(this.emailStatus);
    console.log(`phoneValidationStatus${this.phoneValidationStatus}`);
    console.log(`phoneValidationViewStatus${this.phoneValidationViewStatus}`);
    await this.phoneCodeValidationSucceed();
    console.log('phoneValidationViewStatus');
    console.log(this.phoneValidationViewStatus);
    // const groupingUserDto = new GroupingUserDto;
    if (
      (this.emailStatus === INPUT_EMAIL_STATUS.SUCCEED) &
      (this.phoneValidationViewStatus === SIGN_UP_PHONE_VIEW_STATUS.PHONE_VALIDATION_SUCCEED)
    ) {
      const userId = await this.userRepository.checkIsValidUser(
        this.emailText,
        this.phoneNumber,
        (responseCode) => {
          console.log('error');
          if (responseCode === ResponseCode.SUCCEED) {
          } else {
            this.inputStatus = INPUT_STATUS.INVALID;
          }
        }
      );
      this.groupingUserDto.userId = userId;
    }
    console.log('hello');
    console.log(this.groupingUserDto.userId);
    if (this.groupingUserDto.userId !== null) {
      console.log('confirmed user Id : ');
      console.log(this.groupingUserDto.userId);
      // return this.groupingUserDto.userId;
    }
  };

  @action resetPassword = async (password) => {
    const responseCode = await this.userRepository.resetPassword(
      this.groupingUserDto.userId,
      password
    );
    console.log(responseCode);
    if (responseCode === ResponseCode.SUCCEED) {
      this.passwordChangeStatus = ResponseCode.SUCCEED;
    }
  };
}
