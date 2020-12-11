import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  TextInput,
  Button,
  TouchableOpacity,
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
import { TIME_OUT } from '../../../constant/TimeOut';

const ResetPassword = (props) => {
  const [minutes, setMinutes] = useState(TIME_OUT.START_TIME);
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  const getTimer = () => (
    <Text style={styles.timeText}>
      {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
    </Text>
  );

  const startTimer = () => {
    if (
      props.resetPasswordStore.phoneValidationViewStatus ===
      SIGN_UP_PHONE_VIEW_STATUS.PHONE_NUMBER_SENT_AFTER
    ) {
      console.log('타이머 시작!!!');
      setIsActive(true);
    }
    if (
      props.resetPasswordStore.phoneValidationViewStatus ===
      SIGN_UP_PHONE_VIEW_STATUS.PHONE_NUMBER_RESENT
    ) {
      console.log('타이머 리셋하고 시작!!!');
      reset();
      setIsActive(true);
    }
  };

  const reset = () => {
    setMinutes(TIME_OUT.START_TIME);
    setSeconds(0);
    setIsActive(false);
  };

  useEffect(() => {
    let countDown = null;
    if (isActive) {
      countDown = setInterval(() => {
        if (seconds > 0) {
          setSeconds(seconds - TIME_OUT.A_SECOND);
        }
        if (seconds === 0) {
          if (minutes === 0) {
            clearInterval(countDown);
          } else {
            setMinutes(minutes - TIME_OUT.A_SECOND);
            setSeconds(59);
          }
        }
      }, TIME_OUT.THOUSAND_MILLI_SECONDS);
    }
    return () => clearInterval(countDown);
  }, [minutes, seconds, isActive]);

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
    props.resetPasswordStore.sendPhoneCode().then(startTimer);
  }

  const buttonStyle = () => {
    return {
      width: 39 * WINDOW_SIZE.WIDTH_WEIGHT,
      alignItems: 'space-between',
      justifyContent: 'center',
      height: 20 * WINDOW_SIZE.HEIGHT_WEIGHT,
    };
  };

  const fontStyle = () => {
    return {
      fontSize: 9 * WINDOW_SIZE.HEIGHT_WEIGHT,
      color:
        props.resetPasswordStore.phoneValidationViewStatus ===
        SIGN_UP_PHONE_VIEW_STATUS.PHONE_NUMBER_SENT_AFTER
          ? COLORS.SUB_COLOR
          : COLORS.FONT_GRAY,
      fontWeight: 'bold',
    };
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
            <LabelView text="휴대폰 번호" />
            <View style={styles.phoneCodeContainer}>
              <PhoneNumberInputTextView
                isActive={!props.resetPasswordStore.isValidPhoneNumber}
                text={props.resetPasswordStore.phoneNumber}
                onChangeText={props.resetPasswordStore.phoneNumberChanged.bind(this)}
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
              {/* <TouchableOpacity style={buttonStyle} onPress={authorizeButtonClicked}> */}
              {/*  <Text style={fontStyle}> */}
              {/*    {props.resetPasswordStore.phoneValidationViewStatus === */}
              {/*    SIGN_UP_PHONE_VIEW_STATUS.PHONE_NUMBER_SENT_AFTER */}
              {/*      ? '재인증' */}
              {/*      : '인 증'} */}
              {/*  </Text> */}
              {/* </TouchableOpacity> */}
              {/* <Button */}
              {/*  title="전송" */}
              {/*  onPress={authorizeButtonClicked} */}
              {/*  style={{ width: 40 * WINDOW_SIZE.WIDTH_WEIGHT }} */}
              {/* /> */}
            </View>
            <View>
              <LabelView text="인증번호" />
              <View style={styles.phoneCodeContainer}>
                <PhoneCodeInputTextView
                  onBlur={props.resetPasswordStore.phoneCodeValidationSucceed.bind(this)}
                  onChangeText={props.resetPasswordStore.phoneCodeChanged.bind(this)}
                  text={props.resetPasswordStore.phoneCode}
                />
                {getTimer()}
              </View>
            </View>
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
    flexDirection: 'row',
    height: 50 * WINDOW_SIZE.HEIGHT_WEIGHT,
    alignItems: 'center',
    width: 300 * WINDOW_SIZE.WIDTH_WEIGHT,
    borderBottomWidth: 1,
    borderColor: COLORS.FONT_GRAY,
    justifyContent: 'space-between',
  },
  title: { fontSize: 26 * WINDOW_SIZE.HEIGHT_WEIGHT, marginBottom: 6, color: COLORS.BLACK },
  bottomContainer: {
    // borderWidth:2,
    width: '100%',
    // alignItems: 'center',
    justifyContent: 'flex-end',
    flex: 1,
  },

  timeText: {
    color: COLORS.SUB_COLOR,
    fontSize: 9 * WINDOW_SIZE.HEIGHT_WEIGHT,
  },

  authButton: {},
});

export default inject(
  'signInStore',
  'resetPasswordStore',
  'signUpEmailStore'
)(observer(ResetPassword));
