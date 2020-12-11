import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { COLORS } from '../../../assets/Colors';
import { WINDOW_SIZE } from '../../../constant/WindowSize';

const PhoneCodeNextButton = (props) => {
  const buttonStyle = () => {
    return {
      width: 39 * WINDOW_SIZE.WIDTH_WEIGHT,
      alignItems: 'space-between',
      justifyContent: 'center',
      height: 20 * WINDOW_SIZE.HEIGHT_WEIGHT,
    };
  };

  const fontStyle = () => {
    return {
      fontSize: 9 * WINDOW_SIZE.HEIGHT_WEIGHT,
      color: props.isActive === true ? COLORS.SUB_COLOR : COLORS.FONT_GRAY,
      fontWeight: 'bold',
    };
  };

  return (
    <TouchableOpacity style={buttonStyle()} onPress={props.isActive ? () => props.onClick() : null}>
      <Text style={fontStyle()}>{props.text}</Text>
    </TouchableOpacity>
  );
};

export default PhoneCodeNextButton;
