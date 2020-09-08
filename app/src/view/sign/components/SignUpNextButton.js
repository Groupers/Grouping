import React, { Component } from 'react';
import { TouchableOpacity, Text, StyleSheet, Platform } from 'react-native';
import { COLORS } from '../../../assets/Colors';
import { WINDOW_SIZE } from '../../../constant/WindowSize';

export default class SignUpNextButton extends Component {
  constructor(props) {
    super(props);
  }

  buttonStyle = function (isActive) {
    return {
      width: WINDOW_SIZE.WIDTH,
      height: 40,
      borderRadius: 5,
      backgroundColor: isActive === true ? COLORS.SUB_COLOR : COLORS.FONT_GRAY,
      justifyContent: 'center',
    };
  };

  render() {
    return (
      <TouchableOpacity
        style={this.buttonStyle(this.props.isActive)}
        onPress={this.props.isActive ? () => this.props.onClick() : null}
      >
        <Text style={styles.title}>{this.props.text}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    backgroundColor: COLORS.MAIN_COLOR,
    borderRadius: 5,
    height: 24 * WINDOW_SIZE.WIDTH_WEIGHT,
  },
  title: {
    fontSize: 14,
    fontWeight: '600',
    color: 'white',
    alignSelf: 'center',
  },
});
