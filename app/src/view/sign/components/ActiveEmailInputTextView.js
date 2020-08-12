import React, { Component } from 'react';
import { View, StatusBar, TextInput, Text, Animated } from 'react-native';
import { COLORS } from '../../../assets/Colors';

class ActiveEmailInputTextView extends Component {
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
      top: !isFocused ? 20 : 0,
      fontSize: !isFocused ? 12 : 12,
      color: !isFocused ? COLORS.FONT_GRAY : COLORS.SUB_COLOR,
      margin: 0,
    };
    return (
      <Animated.View style={{ paddingTop: 18, width: '100%', height: 40 }}>
        <Text style={labelStyle}>{label}</Text>
        <TextInput
          {...props}
          maxLength={30}
          autoCorrect={false}
          style={{
            height: 30,
            fontSize: 14,
            color: '#111',
            borderBottomWidth: 1,
            borderBottomColor: !isFocused ? COLORS.FONT_GRAY : COLORS.SUB_COLOR,
            padding: 1,
          }}
          onFocus={this.handleFocus}
          onBlur={this.props.value === null ? this.handleBlur : null}
          blurOnSubmit
        />
      </Animated.View>
    );
  }
}

export default ActiveEmailInputTextView;
