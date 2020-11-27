import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { inject, observer } from 'mobx-react';
import BackgroundTimer from 'react-native-background-timer';
import { computed } from 'mobx';
import { COLORS } from '../assets/Colors';
import { SIGN_UP_PHONE_VIEW_STATUS } from '../constant/SignUpPhoneStatus';
import { TIME_OUT } from '../constant/TimeOut';

const PhoneAuthTimer = (props) => {
  const countDown = () => {
    if (props.signUpPhoneStore.timeOut > 0) {
      props.signUpPhoneStore.timeOut -= TIME_OUT.A_SECOND;
    }
  };

  const initialize = () => {
    props.signUpPhoneStore.timeOut = TIME_OUT.START_TIME;
  };

  const startTimer = () => {
    console.log('start timer begin');
    props.signUpPhoneStore.timeOut = BackgroundTimer.setTimeout(() => {
      countDown();
    }, TIME_OUT.THOUSAND_MILLI_SECONDS);
  };

  const clearTimer = () => {
    console.log('clear timer begin');
    console.log(props.signUpPhoneStore.timerID);
    clearTimeout(props.signUpPhoneStore.timerID);
  };

  const getFormatTimer = () => {
    let time = props.signUpPhoneStore.timeOut;
    const minutes = Math.floor(time / 60);
    time -= minutes * 60;
    const seconds = parseInt(time % 60, 10);
    return `${minutes < 10 ? `0${minutes}` : minutes} : ${seconds < 10 ? `0${seconds}` : seconds}`;
  };

  const getTimer = () => {
    if (
      props.signUpPhoneStore.phoneValidationViewStatus ===
      SIGN_UP_PHONE_VIEW_STATUS.PHONE_NUMBER_SENT_AFTER
    ) {
      console.log('타이머 시작!!!');
      startTimer();
    }
    if (
      props.signUpPhoneStore.phoneValidationViewStatus ===
      SIGN_UP_PHONE_VIEW_STATUS.PHONE_NUMBER_RESENT
    ) {
      console.log('타이머 리셋하고 시작!!!');
      clearTimer();
      initialize();
      startTimer();
    }
    return getFormatTimer();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.timeText}>{getTimer()}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  timeText: {
    fontSize: 12,
    color: COLORS.SUB_COLOR,
  },
});

export default inject('signUpPhoneStore')(observer(PhoneAuthTimer));
