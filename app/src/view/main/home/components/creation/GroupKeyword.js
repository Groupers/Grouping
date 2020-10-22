import * as React from 'react';
import { Text, View } from 'react-native';
import { WINDOW_SIZE } from '../../../../../constant/WindowSize';
import { COLORS } from '../../../../../assets/Colors';

const GroupKeyword = (props) => {
  return (
    <View>
      <Text
        style={{
          fontSize: 12 * WINDOW_SIZE.HEIGHT_WEIGHT,
          color: COLORS.BLACK,
          opacity: 0.4,
        }}
      >
        {props.groupKeyword}
      </Text>
    </View>
  );
};

export default GroupKeyword;
