import { action, computed, observable } from 'mobx';
import { SIGN_UP_NAME_STATUS } from '../constant/SignUpNameStatus';
import SignProcessStore from './SignProcessStore';
import { INPUT_GENDER_STATUS } from '../constant/InputGenderStatus';
import { GENDER } from '../constant/Gender';
import { INPUT_BIRTHDAY_STATUS } from '../constant/InputBirthdayStatus';
import BirthdayValidator from '../component/BirthdayValidator';

export default class SignUpBasicInfoStore {
  birthdayValidator = new BirthdayValidator();

  @observable nameText = '';

  @observable nameValidation = SIGN_UP_NAME_STATUS.NONE;

  @observable gender = null;

  @observable genderValidation = INPUT_GENDER_STATUS.NONE;

  @observable birthdayText = '';

  @observable birthdayValidation = INPUT_BIRTHDAY_STATUS.NONE;

  constructor(signProcessStore: SignProcessStore) {
    this.signProcessStore = signProcessStore;
  }

  @action completeBasicInfo = () => {
    this.signProcessStore.basicInfoCompleted(this.nameText, this.gender, this.birthdayText);
  };

  @action nameTextChanged = (text) => {
    this.nameText = text;
    if (String(this.nameText).length === 0) {
      this.nameValidation = SIGN_UP_NAME_STATUS.NONE;
      this.nameText = text;
      return;
    }

    this.nameValidation = SIGN_UP_NAME_STATUS.SUCCEED;
  };

  @action genderSelected = (isMale) => {
    if (isMale) {
      this.gender = GENDER.MALE;
    } else {
      this.gender = GENDER.FEMALE;
    }

    this.genderValidation = INPUT_GENDER_STATUS.SELECTED;
  };

  @action birthdayChanged = (birthday) => {
    if (String(birthday).length === 0) {
      this.birthdayValidation = INPUT_BIRTHDAY_STATUS.NONE;
      this.birthdayText = birthday;
      return;
    }

    if (birthday[birthday.length - 1] === '.') {
      birthday = birthday.toString().slice(0, birthday.length - 1);
    }

    if (birthday.length > 10) {
      return;
    }

    this.birthdayText = birthday;

    if (this.birthdayText.length === 5 || this.birthdayText.length === 8) {
      this.birthdayText = `${this.birthdayText
        .toString()
        .slice(0, birthday.length - 1)}.${this.birthdayText
        .toString()
        .slice(birthday.length - 1, birthday.length)}`;
    }

    console.log(this.birthdayValidator.validateBirthday(this.birthdayText));

    if (this.birthdayValidator.validateBirthday(this.birthdayText)) {
      this.birthdayValidation = INPUT_BIRTHDAY_STATUS.SUCCEED;
      return;
    }

    this.birthdayValidation = INPUT_BIRTHDAY_STATUS.NOT_FORMATTED;
    console.log(`${this.nameValidation}:${this.genderValidation}:${this.birthdayValidation}`);
  };

  @computed get errorMessage() {
    if (this.nameValidation === SIGN_UP_NAME_STATUS.NOT_FORMATTED) {
      return '이름 형식이 맞지 않습니다.';
    }

    if (this.birthdayValidation === INPUT_BIRTHDAY_STATUS.NOT_FORMATTED) {
      return '생년월일 형식이 올바르지 않습니다.';
    }
    return '';
  }

  @computed get isValidInputData() {
    return (
      this.nameValidation === SIGN_UP_NAME_STATUS.SUCCEED &&
      this.genderValidation === INPUT_GENDER_STATUS.SELECTED &&
      this.birthdayValidation === INPUT_BIRTHDAY_STATUS.SUCCEED
    );
  }

  @computed get isMaleSelected() {
    return this.genderValidation === INPUT_GENDER_STATUS.SELECTED && this.gender === GENDER.MALE;
  }

  @computed get isFemaleSelected() {
    return this.genderValidation === INPUT_GENDER_STATUS.SELECTED && this.gender === GENDER.FEMALE;
  }
}
