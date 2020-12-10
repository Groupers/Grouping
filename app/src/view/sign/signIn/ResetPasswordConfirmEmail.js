import React, { useState, useEffect } from 'react';
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
import PhoneAuthTimer from '../../../component/PhoneAuthTimer';
import PhoneCodeNextButton from '../components/PhoneCodeNextButton';
import { INPUT_PHONE_STATUS } from '../../../constant/InputPhoneStatus';
import EmailInputTextView from '../components/EmailInputTextView';
import { WINDOW_SIZE } from '../../../constant/WindowSize';
import LabelView from '../components/LabelView';

const Toast = ({ visible, message }) => {
  if (visible) {
    ToastAndroid.showWithGravityAndOffset(message, ToastAndroid.LONG, ToastAndroid.BOTTOM, 25, 50);
    return null;
  }
  return null;
};

const ResetPasswordConfirmEmail = (props) => {
  async function resetPasswordButtonClicked() {
    // await props.signUpEmailStore.completeEmail();
    // if
    // this.props.signUpPhoneStore.phoneCodeValidationSucceed.bind(this)
    // props.resetPasswordStore.phoneCodeValidationSucceed.bind(this);
    // props.groupingUserDto.userId = ;
    // props.resetPasswordStore.phoneCodeValidationSucceed.bind(this);
    props.resetPasswordStore.emailTextChanged(props.signUpEmailStore.emailText);
    props.signUpEmailStore.isAlreadyRegisted === true
      ? props.navigation.navigate('ResetPassword')
      : handleButtonPress;

    // props.navigation.navigate('SignIn');
  }
  const [visibleToast, setvisibleToast] = useState(false);

  useEffect(() => setvisibleToast(false), [visibleToast]);

  const handleButtonPress = () => {
    setvisibleToast(true);
  };

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
              <EmailInputTextView
                value={props.signUpEmailStore.emailText}
                onChangeText={props.signUpEmailStore.emailTextChanged.bind(this)}
              />
            </View>
            {/* <PhoneAuthTimer style={styles.authTimer} /> */}

            {/* <SignErrorMessageView text={props.resetPasswordStore.errorMessage} /> */}
            <View style={styles.bottomContainer}>
              <NextButton
                isActive={props.signUpEmailStore.isRightFormat}
                text="다음"
                onClick={resetPasswordButtonClicked.bind(this)}
              />
            </View>
            <Toast visible={visibleToast} message="Example" />
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
  'resetPasswordStore',
  'signUpEmailStore'
)(observer(ResetPasswordConfirmEmail));
