import React, { Component } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { COLORS } from '../../../assets/Colors';
import {WINDOW_SIZE} from "../../../constant/WindowSize";

export default class PhoneCodeNextButton extends Component {
  constructor(props) {
    super(props);
  }

  buttonStyle = function () {
    return {
      width: 50,
      alignItems: 'center',
      justifyContent: 'center',
      height: 25,
      backgroundColor: this.props.isActive === true ? COLORS.SUB_COLOR : COLORS.FONT_GRAY,
      borderRadius: 8,
      // marginBottom: this.props.isKeyboardShow
      //   ? this.props.keyboardHeight - 15
      //   : 0,
    };
  };

  render() {
    return (
      <TouchableOpacity
        style={this.buttonStyle()}
        onPress={this.props.isActive ? () => this.props.onClick() : null}
      >
        <Text style={styles.title}>{this.props.text}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 12 * WINDOW_SIZE.WIDTH_WEIGHT,
    fontWeight: '600',
    color: 'white',
  },
});
