import * as React from 'react';
import { Text, View } from 'react-native';
import { WINDOW_SIZE } from '../../../../../constant/WindowSize';

const GroupKeyword = (props) => {
  return (
    <View>
      <Text
        style={{
          fontSize: 12 * WINDOW_SIZE.HEIGHT_WEIGHT,
        }}
      >
        {props.groupKeyword}
      </Text>
    </View>
  );
};

export default GroupKeyword;
