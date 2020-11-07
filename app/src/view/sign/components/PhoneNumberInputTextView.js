import React, { Component } from 'react';
import { View, StatusBar, TextInput, Text, Animated } from 'react-native';
import { inject, observer } from 'mobx-react';
import { COLORS } from '../../../assets/Colors';
import { SIGN_UP_PHONE_VIEW_STATUS } from '../../../constant/SignUpPhoneStatus';
import PhoneCodeNextButton from './PhoneCodeNextButton';
import { WINDOW_SIZE } from '../../../constant/WindowSize';

class PhoneNumberInputTextView extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    isFocused: false,
  };

  // 나중에 store에 연결
  handleFocus = () => this.setState({ isFocused: true });

  handleBlur = () => this.setState({ isFocused: false });

  render() {
    const { label, ...props } = this.props;
    const { isFocused } = this.state;
    const labelStyle = {
      position: 'absolute',
      left: 0, // left로부터 0떨어진
      top: !isFocused ? 25 : 0,
      fontSize: !isFocused ? 12 : 12,
      color: !isFocused ? COLORS.FONT_GRAY : COLORS.SUB_COLOR,
      margin: 0,
      // backgroundColor: 'green',
    };
    return (
      <Animated.View style={{}}>
        {/*<Text style={labelStyle}>{label}</Text>*/}
        <TextInput
          {...props}
          maxLength={20}
          autoCorrect={false}
          style={{
            width: 274 * WINDOW_SIZE.WIDTH_WEIGHT,
            alignItems: 'center',
            justifyContent: 'center',
            height: 40,
            fontSize: 14,
            color: '#111',
            borderBottomWidth: 1,
            borderBottomColor: !isFocused ? COLORS.FONT_GRAY : COLORS.SUB_COLOR,
            // backgroundColor: 'gray',
          }}
          textContentType="telephoneNumber"
          onFocus={this.handleFocus}
          onBlur={this.props.value === null ? this.handleBlur : null}
          blurOnSubmit
        />
      </Animated.View>
    );
  }
}

export default PhoneNumberInputTextView;
