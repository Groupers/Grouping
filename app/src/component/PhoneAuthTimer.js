import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { inject, observer } from 'mobx-react';
import { COLORS } from '../assets/Colors';
import { TIME_OUT } from '../constant/TimeOut';

const PhoneAuthTimer = (props) => {
  const [minutes, setMinutes] = useState(TIME_OUT.START_TIME);
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  const startTimer = () => {
    toggle();
  };

  const reStartTimer = () => {
    toggle();
    reset();
  };

  const toggle = () => {
    setIsActive(!isActive);
  };

  const reset = () => {
    setSeconds(0);
    setIsActive(false);
  };

  useEffect(() => {
    const countdown = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - TIME_OUT.A_SECOND);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(countdown);
        } else {
          setMinutes(minutes - TIME_OUT.A_SECOND);
          setSeconds(59);
        }
      }
    }, TIME_OUT.THOUSAND_MILLI_SECONDS);
    return () => clearInterval(countdown);
  }, [minutes, seconds]);

  /*  const getTimer = () => {
    if (
      props.signUpPhoneStore.phoneValidationViewStatus ===
      SIGN_UP_PHONE_VIEW_STATUS.PHONE_NUMBER_SENT_AFTER
    ) {
      console.log('타이머 시작!!!');
      props.signUpPhoneStore.startTimer();
    }
    if (
      props.signUpPhoneStore.phoneValidationViewStatus ===
      SIGN_UP_PHONE_VIEW_STATUS.PHONE_NUMBER_RESENT
    ) {
      console.log('타이머 리셋하고 시작!!!');
      props.signUpPhoneStore.reStartTimer();
    }
  }; */

  return (
    <View style={styles.container}>
      <Text style={styles.timeText}>
        {}
        {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
        {/* {props.signUpPhoneStore.getFormatTimer} */}
      </Text>
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
