import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { inject, observer } from 'mobx-react';
import { COLORS } from '../assets/Colors';

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
          {this.props.signUpPhoneStore.startTimer()}
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
