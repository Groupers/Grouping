import React from 'react';
import { View, Text, StyleSheet, Platform} from 'react-native';
import PropTypes from 'prop-types';
import type { Element as ReactElement } from 'react';
import BackgroundTimer from 'react-native-background-timer';
import styles from '../style/phoneAuthTimerStyles';

type TimerProps = {};
type TimerState = {};

class PhoneAuthTimer extends React.PureComponent<TimerProps, TimerState> {
  static defaultProps: any;

  constructor(props: TimerProps) {
    super(props);
    this.state = {
      second: 0,
    };
  }

  _interval: any;

  renderStartTimer() {
    BackgroundTimer.start();

    this._interval = setInterval(() => {
      this.setState({
        second: this.state.second + 1,
      });
    }, 1000);
  }

  renderContent = (): ReactElement<any> => {
    return (
      <View style={styles.container}>
        <Text style={styles.time}>{this.state.second}</Text>
        {this.renderStartTimer()}
      </View>
    );
  };

  render() {
    const content = this.renderContent();

    return content;
  }
}

export default PhoneAuthTimer;
