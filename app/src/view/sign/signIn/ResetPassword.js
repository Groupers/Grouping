import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
} from 'react-native';
import { inject, observer } from 'mobx-react';
import { func } from 'prop-types';
import { COLORS } from '../../../assets/Colors';
import PhoneNumberInputTextView from '../components/PhoneNumberInputTextView';
import PhoneCodeInputTextView from '../components/PhoneCodeInputTextView';
import SignErrorMessageView from '../components/SignErrorMessageView';
import ActiveEmailInputTextView from '../components/ActiveEmailInputTextView';
import NextButton from '../components/NextButton';
import { USER_STATUS } from '../../../constant/UserStatus';
import Main from '../../main/Main';
import { INPUT_EMAIL_STATUS } from '../../../constant/InputEmailStatus';
import { SIGN_UP_PHONE_VIEW_STATUS } from '../../../constant/SignUpPhoneStatus';
import PhoneCodeNextButton from '../components/PhoneCodeNextButton';
import { INPUT_PHONE_STATUS } from '../../../constant/InputPhoneStatus';
import EmailInputTextView from '../components/EmailInputTextView';

const ResetPassword = (props) => {
  async function resetPasswordButtonClicked() {
    // await props.signUpEmailStore.completeEmail();
    // if
    // this.props.signUpPhoneStore.phoneCodeValidationSucceed.bind(this)
    // props.resetPasswordStore.phoneCodeValidationSucceed.bind(this);
    // props.groupingUserDto.userId = ;
    // props.resetPasswordStore.phoneCodeValidationSucceed.bind(this);
    await props.resetPasswordStore.isValidUser();

    props.resetPasswordStore.groupingUserDto.userId !== null
      ? props.navigation.navigate('newPassword')
      : null;
    // props.navigation.navigate('SignIn');
  }

  async function authorizeButtonClicked() {
    await props.resetPasswordStore.sendPhoneCode();
  }

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : null} style={styles.body}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
          <View style={styles.textArea}>
            <Text style={{ fontSize: 12, color: COLORS.DARK_GRAY }}>비밀번호 재설정을 위해</Text>
            <Text style={{ fontSize: 12, color: COLORS.DARK_GRAY }}>
              휴대폰 번호를 입력해주세요
            </Text>
          </View>
          <View height={30} />
          <View style={styles.contentContainer}>
            <ActiveEmailInputTextView
              label="이메일주소"
              value={props.resetPasswordStore.emailText}
              onChangeText={props.resetPasswordStore.emailTextChanged.bind(this)}
            />
            <View style={styles.phoneCodeContainer}>
              <PhoneNumberInputTextView
                label="휴대폰 번호"
                isActive={!props.resetPasswordStore.isAllCompleted}
                text={props.resetPasswordStore.phoneNumber}
                onChangeText={props.resetPasswordStore.phoneNumberChanged.bind(this)}
              />
            </View>
            {/* {this.props.signUpPhoneStore.phoneValidationViewStatus === */}
            {/* SIGN_UP_PHONE_VIEW_STATUS.PHONE_CODE_SEND_ERROR ? ( */}
            {/*  <View>/!* <ShowErrorModal /> *!/</View> */}
            {/* ) : null} */}

            <View>
              <View style={styles.phoneCodeContainer}>
                <PhoneCodeInputTextView
                  onBlur={props.resetPasswordStore.phoneCodeValidationSucceed}
                  onChangeText={props.resetPasswordStore.phoneCodeChanged.bind(this)}
                  text={props.resetPasswordStore.phoneCode}
                />
                <PhoneCodeNextButton
                  label="인증번호"
                  isActive={props.resetPasswordStore.isValidPhoneNumber}
                  text={
                    props.resetPasswordStore.phoneValidationViewStatus ===
                    SIGN_UP_PHONE_VIEW_STATUS.PHONE_NUMBER_SENT_AFTER
                      ? '재인증'
                      : '인 증'
                  }
                  onClick={authorizeButtonClicked.bind(this)}
                />
                {/* <PhoneCodeNextButton */}
                {/*  style={styles.authButton} */}
                {/*  text={ */}
                {/*    this.props.signUpPhoneStore.phoneValidationViewStatus === */}
                {/*    SIGN_UP_PHONE_VIEW_STATUS.PHONE_NUMBER_SENT_AFTER */}
                {/*      ? '인증' */}
                {/*      : '재인증' */}
                {/*  } */}
                {/*  isActive={this.props.signUpPhoneStore.isValidPhoneNumber} */}
                {/*  onClick={this.props.signUpPhoneStore.phoneCodeValidationSucceed.bind(this)} */}
                {/* /> */}
              </View>
            </View>

            <SignErrorMessageView text={props.resetPasswordStore.errorMessage} />
            <View style={styles.bottomContainer}>
              <NextButton
                isActive={props.resetPasswordStore.isValidPhoneCode}
                text="다음"
                onClick={resetPasswordButtonClicked.bind(this)}
              />
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: COLORS.MAIN_COLOR,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },

  inner: {
    flex: 1,
    backgroundColor: COLORS.MAIN_COLOR,
    flexDirection: 'column',
    alignItems: 'center',
    // justifyContent: 'center',
    width: '90%',
    // paddingTop:30
  },
  textArea: {
    width: '100%',
    marginTop: 10,
    alignItems: 'center',
  },
  contentContainer: {
    flex: 1,
    // alignItems: 'center',
    backgroundColor: COLORS.MAIN_COLOR,
    width: '100%',
    // justifyContent: 'center',
    // borderWidth: 2
  },

  phoneCodeContainer: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    // borderWidth: 1,
  },

  bottomContainer: {
    // borderWidth:2,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 60,
    flex: 1,
  },

  authTimer: { margin: 10 },

  authButton: {},
});

export default inject('signInStore', 'resetPasswordStore')(observer(ResetPassword));
