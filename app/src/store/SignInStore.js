import { action, computed, observable } from 'mobx';
import SignRepository from '../repository/SignRepository';
import EmailValidator from '../component/EmailValidator';
import PasswordValidator from '../component/PasswordValidator';
import { INPUT_EMAIL_STATUS } from '../constant/InputEmailStatus';
import { INPUT_PASSWORD_STATUS } from '../constant/InputPasswordStatus';
import { INPUT_PHONE_STATUS } from '../constant/InputPhoneStatus';
import { ResponseCode } from '../constant/ResponseCode';
import UserStore from './UserStore';
import PhoneValidator from '../component/PhoneValidator';
import { INPUT_STATUS } from '../constant/InputStatus';
import GroupingUserDto from '../dto/GroupingUserDto';

export default class SignInStore {
  koreaPhonePrefixConditionFirst = '010';

  koreaPhonePrefixConditionSecond = '10';

  koreaPhonePrefix = '+82';

  signRepository = new SignRepository();

  emailValidator = new EmailValidator();

  phoneValidator = new PhoneValidator();

  passwordValidator = new PasswordValidator();

  @observable emailText = '';

  @observable inputText = '';

  @observable phoneNumberText = '';

  @observable formattedPhoneNumber = '';

  @observable passwordText = '';

  @observable isShowPassword = false;

  @observable inputStatus = INPUT_STATUS.NONE;

  @observable emailStatus = INPUT_EMAIL_STATUS.NONE;

  @observable phoneStatus = INPUT_PHONE_STATUS.NONE;

  @observable passwordStatus = INPUT_PASSWORD_STATUS.NONE;

  constructor(userStore: UserStore) {
    this.userStore = userStore;
  }

  @action toggleShowPassword = () => {
    this.isShowPassword = !this.isShowPassword;
  };

  @action clearData = () => {
    this.emailText = '';
    this.inputText = '';
    this.phoneNumberText = '';
    this.passwordText = '';
    this.isShowPassword = false;
    this.emailStatus = INPUT_EMAIL_STATUS.NONE;
    this.passwordStatus = INPUT_PASSWORD_STATUS.NONE;
  };

  @action inputTextChanged = (inputText) => {
    this.inputText = inputText;
    this.phoneNumberChanged(inputText);
    // 입력된 값 이메일 형태일 때
    if (this.emailValidator.validateEmail(inputText)) {
      this.emailTextChanged(inputText);
    } else if (this.phoneValidator.validatePhoneNumber(this.formattedPhoneNumber))
      // 입력된 값 핸드폰번호 형태일 때
      this.phoneNumberTextChanged(inputText);

    if (
      this.emailStatus === INPUT_EMAIL_STATUS.SUCCEED ||
      this.phoneStatus === INPUT_PHONE_STATUS.SUCCEED
    ) {
      this.inputStatus = INPUT_STATUS.SUCCEED;
    }
  };

  @action phoneNumberChanged = (text) => {
    text = text.replace(/-/gi, '');
    if (text.toString().slice(0, 3) === this.koreaPhonePrefixConditionFirst) {
      this.formattedPhoneNumber =
        this.koreaPhonePrefix + text.toString().slice(1, text.toString().length + 1);
    } else if (text.toString().slice(0, 2) === this.koreaPhonePrefixConditionSecond) {
      this.formattedPhoneNumber =
        this.koreaPhonePrefix + text.toString().slice(0, text.toString().length + 1);
    } else if (
      text.toString().length >= 4 &&
      text.toString().length < 6 &&
      text.toString().slice(0, 3) === this.koreaPhonePrefix
    ) {
      this.formattedPhoneNumber = text.toString().slice(3, text.toString().length);
    } else if (text.toString().length > 13) {
      this.formattedPhoneNumber = text.toString().slice(0, 13);
      this.formattedPhoneNumber = this.formattedPhoneNumber.trim();
      return;
    } else {
      this.formattedPhoneNumber = text;
    }

    this.formattedPhoneNumber = this.formattedPhoneNumber.trim();
  };

  @action passwordTextChanged = (password) => {
    if (String(password).length === 0) {
      this.passwordStatus = INPUT_PASSWORD_STATUS.NONE;
      this.passwordText = password;
      return;
    }

    if (!this.passwordValidator.validatePassword(password)) {
      this.passwordStatus = INPUT_PASSWORD_STATUS.NOT_FORMATTED;
      this.passwordText = password;
      return;
    }
    this.passwordStatus = INPUT_PASSWORD_STATUS.SUCCEED;
    this.passwordText = password;
  };

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

  @action phoneNumberTextChanged = (text) => {
    if (String(text).length === 0) {
      this.phoneStatus = INPUT_PHONE_STATUS.NONE;
      this.phoneNumberText = text;
      return;
    }

    if (!this.phoneValidator.validatePhoneNumber(this.formattedPhoneNumber)) {
      this.phoneStatus = INPUT_PHONE_STATUS.NOT_FORMATTED;
      this.phoneNumberText = text;
      return;
    }

    this.phoneStatus = INPUT_PHONE_STATUS.SUCCEED;
    this.phoneNumberText = text;
  };

  @computed get isValidInputData() {
    return (
      this.inputStatus === INPUT_STATUS.SUCCEED &&
      this.passwordStatus === INPUT_PASSWORD_STATUS.SUCCEED
    );
  }

  @computed get errorMessage() {
    if (this.inputStatus === INPUT_STATUS.NOT_FORMATTED) {
      return '이메일 혹은 전화번호 형식이 맞지 않습니다1.';
    }

    if (this.emailStatus === INPUT_STATUS.NOT_FORMATTED) {
      return '이메일 혹은 전화번호 형식이 맞지 않습니다.';
    }

    if (this.passwordStatus === INPUT_PASSWORD_STATUS.NOT_FORMATTED) {
      return '비밀번호 형식이 맞지 않습니다.';
    }

    if (this.inputStatus === INPUT_STATUS.INVALID) {
      return '존재하지 않는 이메일입니다.';
    }

    if (this.passwordStatus === INPUT_PASSWORD_STATUS.INVALID) {
      return '비밀번호가 일치하지 않습니다.';
    }

    return '로그인 할 수 없습니다.';
  }

  @action signIn = async () => {
    if (this.emailStatus === INPUT_EMAIL_STATUS.SUCCEED) {
      this.groupingUserDto = await this.signRepository.signInWithEmail(
        this.inputText,
        this.passwordText,
        (responseCode) => {
          if (responseCode === ResponseCode.INVALID_PASSWORD) {
            this.passwordStatus = INPUT_PASSWORD_STATUS.INVALID;
            return;
          }

          if (responseCode === ResponseCode.USER_NOT_EXISTED) {
            this.inputStatus = INPUT_STATUS.INVALID;
          }
        }
      );
    } else if (this.phoneStatus === INPUT_PHONE_STATUS.SUCCEED) {
      this.groupingUserDto = await this.signRepository.signInWithPhone(
        this.phoneNumberText,
        this.passwordText,
        (responseCode) => {
          if (responseCode === ResponseCode.INVALID_PASSWORD) {
            this.passwordStatus = INPUT_PASSWORD_STATUS.INVALID;
            return;
          }

          if (responseCode === ResponseCode.USER_NOT_EXISTED) {
            this.inputStatus = INPUT_STATUS.INVALID;
          }
        }
      );
    }

    if (this.groupingUserDto !== undefined) {
      console.log(this.groupingUserDto);
      this.userStore.signInCompleted(this.groupingUserDto);
      console.log('signInCompleted');
    }
  };

}
