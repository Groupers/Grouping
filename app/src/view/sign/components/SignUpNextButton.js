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
      width: '100%',
      height: 40,
      borderRadius: 5,
      backgroundColor: isActive === true ? COLORS.SUB_COLOR : COLORS.FONT_GRAY,
      justifyContent: 'center',
      // ...Platform.select({
      //   ios: {
      //     shadowColor: '#000',
      //     shadowOffset: { width: 0, height: 2 },
      //     shadowOpacity: 0.2,
      //   },
      //   android: {
      //     elevation: 8,
      //   },
      // }),
      // marginBottom: this.props.isKeyboardShow
      //   ? this.props.keyboardHeight - 15
      //   : 0,
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
    height: WINDOW_SIZE.WIDTH * 0.068,
  },
  title: {
    fontSize: WINDOW_SIZE.WIDTH * 0.035,
    fontWeight: '600',
    color: 'white',
    alignSelf: 'center',
  },
});
