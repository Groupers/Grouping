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

  constructor(signProcessStore: SignProcessStore) {
    this.signProcessStore = signProcessStore;
  }

  @action clearPhoneNumber = async () => {
    if (this.phoneNumber !== "") {
      await this.signRepository.cancelSignUpPhoneNumber(
        this.phoneNumber,
        () => {}
      );
    }
  };

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
    let data = await this.signRepository.checkPhoneNumber(
      this.phoneNumber,
      responseCode => {}
    );
    if (data.phoneNumberAvailable !== true) {
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
  };

  @action phoneCodeDeleted = index => {
    if (this.phoneCode[index] !== "") {
      this.phoneCode[index] = "";
      return true;
    }
    return false;
  };

  @action phoneCodeFocused = index => {
    this.phoneCode[index] = "";
  };

  @action validatePhoneCode = () => {
    let isValid = true;
    this.phoneCode.forEach((value, index, array) => {
      if (value === "") {
        isValid = false;
        return;
      }
    });

    this.isPhoneCodeCorrect = isValid;
  };

  @action invalidatePhoneCode = () => {
    this.isPhoneCodeCorrect = false;
  };

  @action phoneCodeValidationSucceed = async () => {
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
