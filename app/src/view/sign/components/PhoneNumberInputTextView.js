import React from 'react';
import { View, TextInput } from 'react-native';
import { inject, observer } from 'mobx-react';
import { COLORS } from '../../../assets/Colors';
import { SIGN_UP_PHONE_VIEW_STATUS } from '../../../constant/SignUpPhoneStatus';
import PhoneCodeNextButton from './PhoneCodeNextButton';
import { WINDOW_SIZE } from '../../../constant/WindowSize';

const PhoneNumberInputTextView = (props) => {
  const authorizeButtonClicked = () => {
    props.signUpPhoneStore.sendPhoneCode().then();
  };

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
      />
      <PhoneCodeNextButton
        label="인증번호"
        isActive={props.signUpPhoneStore.isValidPhoneNumber}
        text={
          props.signUpPhoneStore.phoneValidationViewStatus ===
          SIGN_UP_PHONE_VIEW_STATUS.PHONE_NUMBER_SENT_AFTER
            ? '재전송'
            : '인증'
        }
        textcolor={
          props.signUpPhoneStore.phoneValidationViewStatus ===
          SIGN_UP_PHONE_VIEW_STATUS.PHONE_NUMBER_SENT_AFTER
            ? COLORS.BLACK
            : COLORS.SUB_COLOR
        }
        onClick={authorizeButtonClicked}
      />
    </View>
  );
};

export default inject('signUpPhoneStore')(observer(PhoneNumberInputTextView));
