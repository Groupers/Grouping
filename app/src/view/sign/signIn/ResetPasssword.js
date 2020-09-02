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
import SignUpNextButton from '../components/SignUpNextButton';
import { USER_STATUS } from '../../../constant/UserStatus';
import Main from '../../main/Main';
import { INPUT_EMAIL_STATUS } from '../../../constant/InputEmailStatus';
import { SIGN_UP_PHONE_VIEW_STATUS } from '../../../constant/SignUpPhoneStatus';
import PhoneAuthTimer from '../../../component/PhoneAuthTimer';
import PhoneCodeNextButton from '../components/PhoneCodeNextButton';
import { INPUT_PHONE_STATUS } from '../../../constant/InputPhoneStatus';

const Width = Dimensions.get('window').width;
const ResetPasssword = (props) => {
  async function resetPasswordButtonClicked() {
    // await props.signUpEmailStore.completeEmail();
    props.navigation.navigate('SignIn');
  }

  async function authorizeButtonClicked() {
    await props.resetPasswordStore.sendPhoneCode();
  }

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : null} style={styles.body}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
          <View style={styles.informTextContainer}>
            <Text>비밀번호 재설정을 위해</Text>
            <Text>아래 정보를 입력해주세요</Text>
          </View>
          <View height={30} />
          <View style={styles.contentContainer}>
            <ActiveEmailInputTextView
              label="이메일 주소"
              value={props.signInStore.emailText}
              onChangeText={props.signInStore.emailTextChanged.bind(this)}
            />
            <View style={styles.phoneCodeContainer}>
              <PhoneNumberInputTextView
                label="휴대폰 번호"
                isActive={!props.resetPasswordStore.isAllCompleted}
                text={props.resetPasswordStore.phoneNumber}
                onChangeText={props.resetPasswordStore.phoneNumberChanged.bind(this)}
              />
            </View>
            {/* {props.signUpPhoneStore.phoneValidationViewStatus === */}
            {/* SIGN_UP_PHONE_VIEW_STATUS.PHONE_CODE_SEND_ERROR ? ( */}
            {/*  <View>/!* <ShowErrorModal /> *!/</View> */}
            {/* ) : null} */}

            <View>
              <View style={styles.phoneCodeContainer}>
                <PhoneCodeInputTextView
                  onChangeText={props.resetPasswordStore.phoneCodeChanged.bind(this)}
                  onBlur={() => {
                    props.resetPasswordStore.phoneCodeValidationSucceed.bind(this);
                  }}
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
              <PhoneAuthTimer style={styles.authTimer} />
            </View>

            <SignErrorMessageView text={props.resetPasswordStore.errorMessage} />
            <View style={styles.bottomContainer}>
              <SignUpNextButton
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
  container: {
    flex: 1,
    alignItems: 'center',
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
  informTextContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  informText: {
    color: COLORS.FONT_DARK,
  },
  contentsContainer: {
    flex: 1,
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
});

export default inject('signInStore', 'resetPasswordStore')(observer(ResetPasssword));
