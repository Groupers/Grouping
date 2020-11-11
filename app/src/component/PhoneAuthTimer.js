import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { inject, observer } from 'mobx-react';
import { COLORS } from '../assets/Colors';
import { SIGN_UP_PHONE_VIEW_STATUS } from '../constant/SignUpPhoneStatus';

@inject('signUpPhoneStore')
@observer
class PhoneAuthTimer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.timeText}>
          {this.props.signUpPhoneStore.isSucceed ? this.props.signUpPhoneStore.startTimer() : null}
          {this.props.signUpPhoneStore.getFormatTimer}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {},
  timeText: {
    fontSize: 12,
    color: COLORS.SUB_COLOR,
  },
});

export default PhoneAuthTimer;
