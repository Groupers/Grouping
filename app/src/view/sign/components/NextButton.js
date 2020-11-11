import React, { Component } from 'react';
import { TouchableOpacity, Text, StyleSheet, Platform } from 'react-native';
import { COLORS } from '../../../assets/Colors';
import { WINDOW_SIZE } from '../../../constant/WindowSize';

export default class NextButton extends Component {
  constructor(props) {
    super(props);
  }

  buttonStyle = function (isActive, buttonType = 'notEntrance') {
    return buttonType === 'EntranceSignIn' || buttonType === 'EntranceLogIn'
      ? {
          width: 300 * WINDOW_SIZE.WIDTH_WEIGHT,
          height: 48 * WINDOW_SIZE.HEIGHT_WEIGHT,
          borderRadius: 12,
          backgroundColor: buttonType === 'EntranceSignIn' ? COLORS.SUB_COLOR : COLORS.WHITE,
          borderWidth: 1,
          borderColor: buttonType === 'EntranceSignIn' ? COLORS.SUB_COLOR : '#e3e3e3',
          justifyContent: 'center',
        }
      : {
          width: WINDOW_SIZE.WIDTH,
          height: 56 * WINDOW_SIZE.HEIGHT_WEIGHT,
          backgroundColor: isActive === true ? COLORS.SUB_COLOR : COLORS.LIGHT_GRAY,
          borderColor: isActive === true ? COLORS.SUB_COLOR : '#e3e3e3',
          justifyContent: 'center',
        };
  };

  fontStyle = function (fontcolor) {
    return {
      color: fontcolor,
      fontSize: 14 * WINDOW_SIZE.WIDTH_WEIGHT,
      fontWeight: 'bold',
      alignSelf: 'center',
    };
  };

  render() {
    return (
      <TouchableOpacity
        style={this.buttonStyle(this.props.isActive, this.props.buttonType)}
        onPress={this.props.isActive ? () => this.props.onClick() : null}
      >
        <Text style={this.fontStyle(this.props.fontColor)}>{this.props.text}</Text>
      </TouchableOpacity>
    );
  }
}
