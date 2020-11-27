import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { inject, observer } from 'mobx-react';
import { COLORS } from '../assets/Colors';
import { SIGN_UP_PHONE_VIEW_STATUS } from '../constant/SignUpPhoneStatus';

const PhoneAuthTimer = (props) => {
  const getTimer = () => {
    if (
      props.signUpPhoneStore.phoneValidationStatus ===
      SIGN_UP_PHONE_VIEW_STATUS.PHONE_NUMBER_SENT_AFTER
    ) {
      console.log('타이머 시작!!!');
      props.signUpPhoneStore.startTimer();
    }
    if (
      props.signUpPhoneStore.phoneValidationStatus === SIGN_UP_PHONE_VIEW_STATUS.PHONE_NUMBER_RESENT
    ) {
      console.log('타이머 리셋하고 시작!!!');
      props.signUpPhoneStore.clearTimer();
      props.signUpPhoneStore.initialize();
      props.signUpPhoneStore.startTimer();
    }
    return props.signUpPhoneStore.getFormatTimer;
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
