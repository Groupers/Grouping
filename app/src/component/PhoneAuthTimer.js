import React from 'react';
import { View, Text, Platform, StyleSheet } from 'react-native';
import BackgroundTimer from 'react-native-background-timer';

type TimerProps = {};
type TimerState = {};

class PhoneAuthTimer extends React.PureComponent<TimerProps, TimerState> {
  static defaultProps: any;

  constructor(props: TimerProps) {
    super(props);
    this.state = {
      time: 180,
    };
  }

  _interval: any;

  onStart = () => {
    if (Platform.OS === 'ios') {
      BackgroundTimer.start();
    }

    this._interval = BackgroundTimer.setTimeout(() => {
      this.setState({
        time: this.state.time - 1,
      });
    }, 1000);
  };

  onPause = () => {
    BackgroundTimer.clearTimeout(this._interval);
  };

  renderStartButton = () => {
    if (this.time < 0) {
      return this.onPause();
    }
    return this.onStart();
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.timeText}>
          {formatTime(this.state.time)}
          {this.renderStartButton()}
        </Text>
      </View>
    );
  }
}

function formatTime(time) {
  const minutes = Math.floor(time / 60);
  time -= minutes * 60;
  const seconds = parseInt(time % 60, 10);
  return `${minutes < 10 ? `0${minutes}` : minutes} : ${seconds < 10 ? `0${seconds}` : seconds}`;
}

const styles = StyleSheet.create({
  container: {},
  timeText: {
    fontSize: 15,
  },
});

PhoneAuthTimer.propTypes = {};
PhoneAuthTimer.defaultProps = {};

export default PhoneAuthTimer;
