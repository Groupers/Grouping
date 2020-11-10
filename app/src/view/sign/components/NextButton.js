import React, { Component } from 'react';
import { TouchableOpacity, Text, StyleSheet, Platform } from 'react-native';
import { COLORS } from '../../../assets/Colors';
import { WINDOW_SIZE } from '../../../constant/WindowSize';

export default class NextButton extends Component {
  constructor(props) {
    super(props);
  }

  buttonStyle = function (isActive, buttonType = false) {
    return buttonType === true
      ? {
          width: 300 * WINDOW_SIZE.WIDTH_WEIGHT,
          height: 48 * WINDOW_SIZE.HEIGHT_WEIGHT,
          borderRadius: 12,
          backgroundColor: isActive === true ? COLORS.SUB_COLOR : COLORS.WHITE,
          borderWidth: 1,
          borderColor: isActive === true ? COLORS.SUB_COLOR : '#e3e3e3',
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

const styles = StyleSheet.create({
  button: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    backgroundColor: COLORS.SUB_COLOR,
    borderRadius: 5,
    height: 24 * WINDOW_SIZE.WIDTH_WEIGHT,
  },
  title: {
    fontSize: 14 * WINDOW_SIZE.WIDTH_WEIGHT,
    fontWeight: 'bold',
    color: 'white',
    alignSelf: 'center',
  },
});
