import { action, computed, observable } from 'mobx';
import { SIGN_UP_PHONE_VIEW_STATUS } from '../constant/SignUpPhoneStatus';
import SignRepository from '../repository/SignRepository';
import FirebaseRepository from '../repository/FirebaseRepository';
import SignProcessStore from './SignProcessStore';
import { INPUT_PHONE_STATUS } from '../constant/InputPhoneStatus';
import PhoneValidator from '../component/PhoneValidator';

export default class SignUpPhoneStore {
  koreaPhonePrefixConditionFirst = '010';

  koreaPhonePrefixConditionSecond = '10';

  koreaPhonePrefix = '+82';

  @observable timeRemained = 300;

  @observable phoneValidationViewStatus = SIGN_UP_PHONE_VIEW_STATUS.PHONE_NUMBER_SENT_BEFORE;

  @observable phoneNumber = '';

  @observable phoneCode = '';

  @observable phoneValidationStatus = INPUT_PHONE_STATUS.NONE;

  signRepository = new SignRepository();

  firebaseRepository = new FirebaseRepository();

  phoneValidator = new PhoneValidator();

  constructor(signProcessStore: SignProcessStore) {
    this.signProcessStore = signProcessStore;
  }

  @action completePhoneNumber = async () => {
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
    const data = await this.signRepository.checkPhoneNumber(this.phoneNumber, (responseCode) => {});
    if (data.phoneNumberAvailable !== true) {
      this.phoneValidationStatus = INPUT_PHONE_STATUS.PHONE_NUMBER_ALREADY_EXISTED;
      return;
    }
    this.codeConfirmation = await this.firebaseRepository.sendSignUpPhoneCode(this.phoneNumber);
    console.log(this.codeConfirmation);
    this.phoneValidationViewStatus = SIGN_UP_PHONE_VIEW_STATUS.PHONE_NUMBER_SENT_AFTER;
  };

  @action phoneCodeChanged = (phoneCode) => {
    if (phoneCode.length > 6) {
      return;
    }
    this.phoneCode = phoneCode;
    if (this.phoneValidator.validatePhoneCode(this.phoneCode)) {
      this.phoneValidationStatus = INPUT_PHONE_STATUS.PHONE_CODE_FORMATTED;
      return;
    }
    this.phoneValidationStatus = INPUT_PHONE_STATUS.PHONE_CODE_NOT_FORMATTED;
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
    if (
      this.phoneValidationStatus === INPUT_PHONE_STATUS.PHONE_CODE_FORMATTED &&
      this.codeConfirmation != null
    ) {
      try {
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
  };

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
