import React, { useEffect, useState } from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { inject, observer } from 'mobx-react';
import NextButton from '../components/NextButton';
import PhoneNumberInputTextView from '../components/PhoneNumberInputTextView';
import PhoneCodeInputTextView from '../components/PhoneCodeInputTextView';
import { WINDOW_SIZE } from '../../../constant/WindowSize';
import LabelView from '../components/LabelView';
import { TIME_OUT } from '../../../constant/TimeOut';
import { SIGN_UP_PHONE_VIEW_STATUS } from '../../../constant/SignUpPhoneStatus';
import PhoneCodeNextButton from '../components/PhoneCodeNextButton';
import {COLORS} from '../../../assets/Colors';

const SignUpPhone = (props) => {
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
      props.signUpPhoneStore.phoneValidationViewStatus ===
      SIGN_UP_PHONE_VIEW_STATUS.PHONE_NUMBER_SENT_AFTER
    ) {
      console.log('타이머 시작!!!');
      setIsActive(true);
    }
    if (
      props.signUpPhoneStore.phoneValidationViewStatus ===
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

  // useEffect(() => {
  //   // eslint-disable-next-line no-param-reassign
  //   props.focusListener = props.navigation.addListener(
  //     'focus',
  //     props.signUpPhoneStore.clearPhoneNumber()
  //   );
  //   return () => {
  //     props.focusListener();
  //   };
  // });

  const signUpNextButtonClicked = async () => {
    props.signUpPhoneStore.phoneCodeValidationSucceed.bind(this);
    props.signUpPhoneStore.isAllCompleted ? signUpNextButtonClicked.bind(this) : null;
    await props.signUpPhoneStore.completePhoneNumber();
    props.navigation.navigate('SignUpEmail');
  };

  const authorizeButtonClicked = () => {
    props.signUpPhoneStore.sendPhoneCode().then(startTimer);
  };

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 0} style={styles.body}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
          <View style={styles.contentContainer}>
            <View style={styles.textArea}>
              <Text style={styles.title}>휴대폰 번호를 입력해주세요</Text>
              <Text
                style={{
                  fontSize: 12 * WINDOW_SIZE.HEIGHT_WEIGHT,
                  color: COLORS.BLACK,
                  lineHeight: 18 * WINDOW_SIZE.HEIGHT_WEIGHT,
                }}
              >
                {
                  '허위 및 중복 가입을 예방하기 위한 절차입니다. \n핸드폰번호는 타인에게 절대 공개되지 않습니다.'
                }
              </Text>
            </View>
            <View height={12 * WINDOW_SIZE.HEIGHT_WEIGHT} />
            <LabelView text="휴대폰 번호" />
            <View style={styles.phoneCodeContainer}>
              <PhoneNumberInputTextView
                label="휴대폰 번호"
                isActive={!props.signUpPhoneStore.isAllCompleted}
                text={props.signUpPhoneStore.phoneNumber}
                onChangeText={props.signUpPhoneStore.phoneNumberChanged.bind(this)}
                placeholder="-없이 번호 입력"
              />
              <PhoneCodeNextButton
                label="인증번호"
                isActive={props.signUpPhoneStore.isValidPhoneNumber}
                text={
                  props.signUpPhoneStore.phoneValidationViewStatus ===
                  SIGN_UP_PHONE_VIEW_STATUS.PHONE_NUMBER_SENT_AFTER
                    ? '재인증'
                    : '인 증'
                }
                onClick={authorizeButtonClicked.bind(this)}
              />
            </View>
            {/* <SignErrorMessageView text={this.props.signUpPhoneStore.errorMessage} /> */}
            <LabelView text="인증번호" />
            <View style={styles.phoneCodeContainer}>
              <PhoneCodeInputTextView
                onChangeText={props.signUpPhoneStore.phoneCodeChanged.bind(this)}
                onBlur={() => {
                  props.signUpPhoneStore.phoneCodeValidationSucceed.bind(this);
                }}
                text={props.signUpPhoneStore.phoneCode}
              />
              {getTimer()}
            </View>
          </View>
          <View style={styles.bottomContainer}>
            <NextButton
              isActive={props.signUpPhoneStore.isValidPhoneCode}
              text="다음"
              onClick={signUpNextButtonClicked.bind(this)}
              fontColor={COLORS.WHITE}
            />
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
    // alignItems: 'center',
    // marginLeft: 30 * WINDOW_SIZE.WIDTH_WEIGHT,
    // marginEnd: 30 * WINDOW_SIZE.WIDTH_WEIGHT,
  },
  contentContainer: {
    marginLeft: 30 * WINDOW_SIZE.WIDTH_WEIGHT,
    marginRight: 30 * WINDOW_SIZE.WIDTH_WEIGHT,
    alignItems: 'center',
  },
  textArea: {
    width: '100%',
    marginTop: 10,
  },
  title: { fontSize: 26 * WINDOW_SIZE.HEIGHT_WEIGHT, marginBottom: 6, color: COLORS.BLACK },
  phoneCodeContainer: {
    // backgroundColor: 'green',
    alignItems: 'center',
    flexDirection: 'row',
    borderBottomWidth: 1,
    width: 300 * WINDOW_SIZE.WIDTH_WEIGHT,
    justifyContent: 'space-between',
  },

  bottomContainer: {
    // borderWidth:2,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end',
    flex: 1,
  },

  timeText: {
    color: COLORS.SUB_COLOR,
    fontSize: 9 * WINDOW_SIZE.HEIGHT_WEIGHT,
  },

  authButton: {},
});

export default inject('signUpPhoneStore')(observer(SignUpPhone));
