import React, { Component } from 'react';
import { View, StatusBar, TextInput, Text, Animated, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';
import { COLORS } from '../../../assets/Colors';

class ActivePasswordInputTextView extends Component {
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
      top: !isFocused? 20 : 0,
      fontSize: !isFocused ? 12 : 12,
      color: !isFocused ? COLORS.FONT_GRAY : COLORS.SUB_COLOR,
      margin: 0,
    };
    return (
      <Animated.View style={{ paddingTop: 18, width: '100%', height: 40 }}>
        <Text style={labelStyle}>{label}</Text>
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            borderBottomWidth: 1,
            borderBottomColor: !isFocused ? COLORS.FONT_GRAY : COLORS.SUB_COLOR,
          }}
        >
          <TextInput
            {...props}
            maxLength={20}
            autoCorrect={false}
            style={{
              width: '90%',
              alignItems: 'center',
              justifyContent: 'center',
              height: 30,
              fontSize: 14,
              color: '#111',
              padding: 1,
            }}
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
            secureTextEntry={!this.props.isShowPassword}
            textContentType="password"
            autoCompleteType="password"
            blurOnSubmit
          />
          <Icon
            style={styles.passwordToggleButton}
            name={this.props.isShowPassword ? 'eye-off' : 'eye'}
            type="feather"
            color={COLORS.FONT_GRAY}
            onPress={() => this.props.toggleShowPassword()}
          />
        </View>
      </Animated.View>
    );
  }
}

export default ActivePasswordInputTextView;
const styles = StyleSheet.create({
  // passwordContainer: ,

  password: {
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'black',
    fontSize: 12,
  },

  passwordToggleButton: {
  },

});
