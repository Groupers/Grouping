import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  TextInput,
} from 'react-native';
import { inject, observer } from 'mobx-react';
import { COLORS } from '../../../assets/Colors';
import PhoneNumberInputTextView from '../components/PhoneNumberInputTextView';
import PhoneCodeInputTextView from '../components/PhoneCodeInputTextView';
import NextButton from '../components/NextButton';
import { SIGN_UP_PHONE_VIEW_STATUS } from '../../../constant/SignUpPhoneStatus';
import PhoneCodeNextButton from '../components/PhoneCodeNextButton';
import { WINDOW_SIZE } from '../../../constant/WindowSize';
import LabelView from '../components/LabelView';

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
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 0} style={styles.body}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
          <View style={styles.contentContainer}>
            <View style={styles.textArea}>
              <Text style={styles.title}>비밀번호를 재설정해주세요.</Text>
              <Text
                style={{
                  fontSize: 12 * WINDOW_SIZE.HEIGHT_WEIGHT,
                  color: COLORS.BLACK,
                  lineHeight: 18 * WINDOW_SIZE.HEIGHT_WEIGHT,
                }}
              >
                계정 확인을 위해 이메일을 입력해주세요!
              </Text>
              <View style={{ height: 30 * WINDOW_SIZE.HEIGHT_WEIGHT }} />
            </View>
            <View>
              <LabelView text="이메일 주소" />
              {/* <EmailInputTextView */}
              {/*  value={props.resetPasswordStore.emailText} */}
              {/*  // onChangeText={props.resetPasswordStore.emailTextChanged.bind(this)} */}
              {/* /> */}
              <TextInput
                value={props.resetPasswordStore.emailText}
                editable={false}
                focusable={false}
                style={{
                  borderBottomWidth: 1,
                  borderColor: COLORS.FONT_GRAY,
                  width: 300 * WINDOW_SIZE.WIDTH_WEIGHT,
                  height: 48 * WINDOW_SIZE.HEIGHT_WEIGHT,
                  flexDirection: 'row',
                  alignItems: 'center',
                  fontSize: 14 * WINDOW_SIZE.HEIGHT_WEIGHT,
                }}
                onChangeText={props.resetPasswordStore.emailTextChanged(
                  props.resetPasswordStore.emailText
                )}
              />
            </View>
            <View style={styles.phoneCodeContainer}>
              <LabelView text="휴대폰 번호" />
              <PhoneNumberInputTextView
                isActive={!props.resetPasswordStore.isValidPhoneNumber}
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
            {/* <PhoneAuthTimer style={styles.authTimer} /> */}

            {/* <SignErrorMessageView text={props.resetPasswordStore.errorMessage} /> */}
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
    alignItems: 'center',
    justifyContent: 'center',
  },

  inner: {
    backgroundColor: COLORS.MAIN_COLOR,
    flex: 1,
  },
  textArea: {
    marginTop: 12 * WINDOW_SIZE.HEIGHT_WEIGHT,
    width: 300 * WINDOW_SIZE.WIDTH_WEIGHT,
  },
  contentContainer: {
    marginLeft: 30 * WINDOW_SIZE.WIDTH_WEIGHT,
    marginRight: 30 * WINDOW_SIZE.WIDTH_WEIGHT,
    alignItems: 'center',
  },

  phoneCodeContainer: {
    height: 50,
    // alignItems: 'center',
    width: 300 * WINDOW_SIZE.WIDTH_WEIGHT,
    // borderWidth: 1,
  },
  title: { fontSize: 26 * WINDOW_SIZE.HEIGHT_WEIGHT, marginBottom: 6, color: COLORS.BLACK },
  bottomContainer: {
    // borderWidth:2,
    width: '100%',
    // alignItems: 'center',
    justifyContent: 'flex-end',
    flex: 1,
  },

  authTimer: { margin: 10 },

  authButton: {},
});

export default inject(
  'signInStore',
  'resetPasswordStore',
  'signUpEmailStore'
)(observer(ResetPassword));
