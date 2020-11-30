import React, { Component } from 'react';
import { View, StatusBar, TextInput, Text, Animated } from 'react-native';
import { inject, observer } from 'mobx-react';
import { COLORS } from '../../../assets/Colors';
import { SIGN_UP_PHONE_VIEW_STATUS } from '../../../constant/SignUpPhoneStatus';
import PhoneCodeNextButton from './PhoneCodeNextButton';
import { WINDOW_SIZE } from '../../../constant/WindowSize';

@inject('signUpPhoneStore')
@observer
class PhoneNumberInputTextView extends Component {
  constructor(props) {
    super(props);
  }

  async authorizeButtonClicked() {
    await this.props.signUpPhoneStore.sendPhoneCode();
  }

  render() {
    const { label, ...props } = this.props;
    return (
      <View
        style={{
          borderBottomWidth: 1,
          borderColor: COLORS.FONT_GRAY,
          width: 300 * WINDOW_SIZE.WIDTH_WEIGHT,
          height: 48 * WINDOW_SIZE.HEIGHT_WEIGHT,
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        {/* <Text style={labelStyle}>{label}</Text> */}
        <TextInput
          {...props}
          maxLength={20}
          autoCorrect={false}
          style={{
            width: 261 * WINDOW_SIZE.WIDTH_WEIGHT,
            alignItems: 'center',
            justifyContent: 'center',
            height: 48 * WINDOW_SIZE.HEIGHT_WEIGHT,
            fontSize: 14 * WINDOW_SIZE.HEIGHT_WEIGHT,
            color: '#111',
            paddingTop: 13 * WINDOW_SIZE.HEIGHT_WEIGHT,
            paddingBottom: 13 * WINDOW_SIZE.HEIGHT_WEIGHT,
          }}
          textContentType="telephoneNumber"
          onFocus={this.handleFocus}
          onBlur={this.props.value === null ? this.handleBlur : null}
          blurOnSubmit
          placeholder={this.props.placeholder}
        />
        <PhoneCodeNextButton
          label="인증번호"
          isActive={this.props.signUpPhoneStore.isValidPhoneNumber}
          text={
            this.props.signUpPhoneStore.phoneValidationViewStatus ===
            SIGN_UP_PHONE_VIEW_STATUS.PHONE_NUMBER_SENT_AFTER
              ? '재전송'
              : '인증'
          }
          textcolor={
            this.props.signUpPhoneStore.phoneValidationViewStatus ===
            SIGN_UP_PHONE_VIEW_STATUS.PHONE_NUMBER_SENT_AFTER
              ? COLORS.BLACK
              : COLORS.SUB_COLOR
          }
          onClick={this.authorizeButtonClicked.bind(this)}
        />
      </View>
    );
  }
}

export default PhoneNumberInputTextView;
