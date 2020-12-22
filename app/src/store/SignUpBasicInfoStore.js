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

  @action completeName = () => {
    this.signProcessStore.nameCompleted(this.nameText);
  };

  @action completeGender = () => {
    this.signProcessStore.genderCompleted(this.gender);
  };

  @action completeBirthday = () => {
    this.signProcessStore.birthdayCompleted(this.birthdayText);
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
    this.birthdayText = birthday;
    const curdate = new Date();
    console.log(birthday);
    console.log(`${curdate.getFullYear()}.${curdate.getMonth() + 1}.${curdate.getDate()}`);
    if (
      this.birthdayValidator.validateBirthday(this.birthdayText) &&
      this.birthdayText < `${curdate.getFullYear()}.${curdate.getMonth() + 1}.${curdate.getDate()}`
    ) {
      this.birthdayValidation = INPUT_BIRTHDAY_STATUS.SUCCEED;
      console.log(this.birthdayValidator.validateBirthday(this.birthdayText));
      console.log(birthday);
      console.log('success');
      console.log(this.birthdayValidator.validateBirthday(this.birthdayText));
      return;
    }

    this.birthdayValidation = INPUT_BIRTHDAY_STATUS.NOT_FORMATTED;
    console.log(`${this.nameValidation}:${this.genderValidation}:${this.birthdayValidation}`);
  };

  @computed get errorMessage() {
    if (this.nameValidation === SIGN_UP_NAME_STATUS.NOT_FORMATTED) {
      if (this.nameText.length < 2) return '이름이 너무 짧아요';
      if (this.nameText.length > 6) return '이름이 너무 길어요';
      return '이름 형식이 올바르지 않습니다.';
    }

    if (this.birthdayValidation === INPUT_BIRTHDAY_STATUS.NOT_FORMATTED) {
      return '생년월일 형식이 올바르지 않습니다.';
    }
    return '';
  }

  // 각 단계에서는 각 데이터 유효성만 체크하고 next활성화, 가입 마지막단계에서 isValidation 판단하기로..
  @computed get isValidInputData() {
    return (
      this.nameValidation === SIGN_UP_NAME_STATUS.SUCCEED &&
      this.genderValidation === INPUT_GENDER_STATUS.SELECTED &&
      this.birthdayValidation === INPUT_BIRTHDAY_STATUS.SUCCEED
    );
  }

  @computed get isValidName() {
    return this.nameValidation === SIGN_UP_NAME_STATUS.SUCCEED;
  }

  @computed get isValidGender() {
    return this.genderValidation === INPUT_GENDER_STATUS.SELECTED;
  }

  @computed get isValidBirthday() {
    return this.birthdayValidation === INPUT_BIRTHDAY_STATUS.SUCCEED;
  }

  @computed get isMaleSelected() {
    return this.genderValidation === INPUT_GENDER_STATUS.SELECTED && this.gender === GENDER.MALE;
  }

  @computed get isFemaleSelected() {
    return this.genderValidation === INPUT_GENDER_STATUS.SELECTED && this.gender === GENDER.FEMALE;
  }
}
