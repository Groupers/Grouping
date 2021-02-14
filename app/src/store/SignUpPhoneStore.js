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

export default class SignUpPhoneStore {
  koreaPhonePrefixConditionFirst = '010';

  koreaPhonePrefixConditionSecond = '10';

  koreaPhonePrefix = '+82';

  @observable timeRemained = 300;

  @observable phoneValidationViewStatus = SIGN_UP_PHONE_VIEW_STATUS.PHONE_NUMBER_SENT_BEFORE;

  @observable phoneNumber = '';

  @observable phoneCode = '';

  @observable phoneValidationStatus = INPUT_PHONE_STATUS.NONE;

  @observable timeOut = TIME_OUT.START_TIME;

  @observable timerID;

  signRepository = new SignRepository();

  firebaseRepository = new FirebaseRepository();

  phoneValidator = new PhoneValidator();

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
    console.log('start timer begin');
    this.timerID = BackgroundTimer.setTimeout(() => {
      this.countDown();
    }, TIME_OUT.THOUSAND_MILLI_SECONDS);
  }

  @action reStartTimer() {
    console.log('re start timer begin');
    this.clearTimer();
    this.initialize();
    this.startTimer();
  }

  @action clearTimer() {
    console.log('clear timer begin');
    console.log(this.timerID);
    clearTimeout(this.timerID);
  }

  @action completePhoneNumber = async () => {
    console.log('completePhoneNumber 호출');
    await this.signProcessStore.phoneCompleted(this.phoneNumber);
  };

  @action clearPhoneNumber = async () => {
    if (this.phoneNumber !== '') {
      await this.signRepository.cancelSignUpPhoneNumber(this.phoneNumber, () => {});
    }
  };

  @action phoneNumberChanged = (text) => {
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
    if (data.phoneNumberAvailable !== true) {
      this.phoneValidationStatus = INPUT_PHONE_STATUS.PHONE_NUMBER_ALREADY_EXISTED;
      return;
    }
    try {
      this.codeConfirmation = await this.firebaseRepository.sendSignUpPhoneCode(this.phoneNumber);
      console.log(`codeConfirmation : ${this.codeConfirmation}`);
      isSucceed = true;
    } catch (e) {
      console.log('인증번호 요청 에러');
      this.phoneValidationViewStatus = SIGN_UP_PHONE_VIEW_STATUS.PHONE_CODE_SEND_ERROR;
    }
    if (isSucceed) {
      if (this.phoneValidationViewStatus === SIGN_UP_PHONE_VIEW_STATUS.PHONE_NUMBER_SENT_AFTER) {
        console.log('재전송!!!');
        console.log(`codeConfirmation${this.codeConfirmation.toString()}`);
        this.phoneValidationViewStatus = SIGN_UP_PHONE_VIEW_STATUS.PHONE_NUMBER_RESENT;
        return;
      }
      console.log('첫 전송!!!');
      console.log(`codeConfirmation${this.codeConfirmation.toString()}`);
      this.phoneValidationViewStatus = SIGN_UP_PHONE_VIEW_STATUS.PHONE_NUMBER_SENT_AFTER;
    }
  };

  @action phoneCodeChanged = (phoneCode) => {
    console.log(phoneCode);
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
    if (this.phoneValidator.validatePhoneCode(this.phoneCode.trim())) {
      this.phoneValidationStatus = INPUT_PHONE_STATUS.PHONE_CODE_FORMATTED;
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
        console.log(`isSucceed${isSucceed}`);
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
}
