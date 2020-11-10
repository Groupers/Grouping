import React, { Component } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { COLORS } from '../../../assets/Colors';
import { WINDOW_SIZE } from '../../../constant/WindowSize';

export default class PhoneCodeNextButton extends Component {
  constructor(props) {
    super(props);
  }

  buttonStyle = function () {
    return {
      width: 39 * WINDOW_SIZE.WIDTH_WEIGHT,
      alignItems: 'space-between',
      justifyContent: 'center',
      height: 20 * WINDOW_SIZE.HEIGHT_WEIGHT,
      // backgroundColor: this.props.isActive === true ? COLORS.SUB_COLOR : COLORS.FONT_GRAY,
      // borderRadius: 8,
      // marginBottom: this.props.isKeyboardShow
      //   ? this.props.keyboardHeight - 15
      //   : 0,
    };
  };

  fontStyle = function () {
    return {
      fontSize: 14 * WINDOW_SIZE.HEIGHT_WEIGHT,
      color: this.props.isActive === true ? COLORS.SUB_COLOR : COLORS.FONT_GRAY,
      fontWeight: 'bold',
    };
  };

  render() {
    return (
      <TouchableOpacity
        style={this.buttonStyle()}
        onPress={this.props.isActive ? () => this.props.onClick() : null}
      >
        <Text style={this.fontStyle()}>{this.props.text}</Text>
      </TouchableOpacity>
    );
  }
}

// const styles = StyleSheet.create({
//   title: {
//
//   },
// });
