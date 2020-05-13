import { action, observable } from 'mobx';
import { SIGN_UP_PHONE_STATUS } from '../constant/SignUpPhoneStatus';
import SignRepository from '../repository/SignRepository';
import FirebaseRepository from '../repository/FirebaseRepository';
import SignProcessStore from './SignProcessStore';

export default class SignUpPhoneStore {
  koreaPhonePrefixConditionFirst = "010";
  koreaPhonePrefixConditionSecond = "10";
  koreaPhonePrefix = "+82";
  @observable timeRemained = 300;
  @observable phoneValidationStatus =
    SIGN_UP_PHONE_STATUS.PHONE_NUMBER_SENT_BEFORE;
  @observable phoneNumber;
  @observable isPhoneNumberCorrect = false;
  @observable isPhoneCodeCorrect = false;
  @observable phoneCode = ["", "", "", "", "", ""];

  codeConfirmation = null;

  signRepository = new SignRepository();
  firebaseRepository = new FirebaseRepository();

  signProcessStore;

  constructor(signProcessStore: SignProcessStore) {
    this.signProcessStore = signProcessStore;
  }

  @action phoneNumberChanged = async text => {
    text = text.replace(/-/gi, "");

    if (text.toString().slice(0, 3) === this.koreaPhonePrefixConditionFirst) {
      this.phoneNumber =
        this.koreaPhonePrefix +
        text.toString().slice(1, text.toString().length + 1);
    } else if (
      text.toString().slice(0, 2) === this.koreaPhonePrefixConditionSecond
    ) {
      this.phoneNumber =
        this.koreaPhonePrefix +
        text.toString().slice(0, text.toString().length + 1);
    } else if (
      text.toString().length >= 4 &&
      text.toString().length < 6 &&
      text.toString().slice(0, 3) === this.koreaPhonePrefix
    ) {
      this.phoneNumber = text.toString().slice(3, text.toString().length);
    } else if (text.toString().length > 13) {
      this.phoneNumber = text.toString().slice(0, 13);
      this.phoneNumber = this.phoneNumber.trim();
      return this.phoneNumber;
    } else {
      this.phoneNumber = text;
    }

    this.phoneNumber = this.phoneNumber.trim();

    if (
      this.phoneNumber.toString().length === 13 &&
      this.phoneNumber.toString().slice(0, 3) === this.koreaPhonePrefix
    ) {
      this.isPhoneNumberCorrect = true;

      return this.phoneNumber;
    }
    this.isPhoneNumberCorrect = false;
    return this.phoneNumber;
  };

  @action phoneCodeSent = async () => {
    try {
      const data = await this.signRepository.enrollPhoneNumber(
        this.signProcessStore.groupingUserDto.id,
        this.phoneNumber
      );
      if (data !== undefined) {
      }
    } catch (e) {
      this.isPhoneNumberCorrect = false;
      return;
    }
    this.codeConfirmation = await this.firebaseRepository.sendSignUpPhoneCode(
      this.phoneNumber
    );
    this.phoneValidationStatus = SIGN_UP_PHONE_STATUS.PHONE_NUMBER_SENT_AFTER;
  };

  @action phoneCodeChanged = (index, code) => {
    this.phoneCode[index] = code;
    console.log(" phoneCodeChanged: " + this.phoneCode);
  };

  @action phoneCodeDeleted = index => {
    if (this.phoneCode[index] !== "") {
      this.phoneCode[index] = "";
      console.log(" phoneCodeDeleted1: " + this.phoneCode);
      return true;
    }
    console.log(" phoneCodeDeleted2: " + this.phoneCode);
    return false;
  };

  @action phoneCodeFocused = index => {
    this.phoneCode[index] = "";
    console.log("phone Code Focused: " + this.phoneCode);
  };

  @action validatePhoneCode = () => {
    console.log("valid");
    console.log(this.phoneCode);
    let isValid = true;
    this.phoneCode.forEach((value, index, array) => {
      if (value === "") {
        isValid = false;
        return;
      }
    });

    console.log('validatePhoneCode : ' + isValid);
    this.isPhoneCodeCorrect = isValid;
  };

  @action invalidatePhoneCode = () => {
    console.log("invalid");
    this.isPhoneCodeCorrect = false;
  };

  @action phoneCodeValidationSucceed = async () => {
    console.log("phoneCodeValidationSucceed");
    console.log(this.isPhoneCodeCorrect);
    console.log(this.codeConfirmation != null);
    console.log("*" + this.phoneCode.toString() + '*');

    let isSucceed;
    if (this.isPhoneCodeCorrect && this.codeConfirmation != null) {
      try {
        isSucceed = await this.codeConfirmation.confirm(
          this.phoneCode.join().replace(/,/gi, "")
        );
      } catch {
        this.phoneCode = ["", "", "", "", "", ""];
        this.isPhoneCodeCorrect = false;
        return;
      }

      console.log("phoneCodeValidationSucceed");
      console.log(isSucceed);

      if (isSucceed) {
        this.phoneValidationStatus =
          SIGN_UP_PHONE_STATUS.PHONE_VALIDATION_SUCCEED;
        return;
      }
    }
  };
}
