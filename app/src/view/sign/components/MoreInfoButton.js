import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import { WINDOW_SIZE } from '../../../constant/WindowSize';
import { COLORS } from '../../../assets/Colors';

const MoreInfoButton = (props) => {
  // console.log(props);
  return (
    <TouchableOpacity
      onPress={() => {
        props.navigation.navigate(props.screen);
      }}
    >
      <View style={{ flexDirection: 'row', height: 18 * WINDOW_SIZE.HEIGHT_WEIGHT }}>
        <Text
          style={{ fontSize: 12, borderBottomWidth: 0.5, fontWeight: 'bold', color: COLORS.BLACK }}
        >
          {props.title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default MoreInfoButton;
