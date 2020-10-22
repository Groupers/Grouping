import * as React from 'react';
import { Text, View } from 'react-native';
import { WINDOW_SIZE } from '../../../../../constant/WindowSize';

const GroupName = (props) => {
  return (
    <View>
      <Text style={{ fontSize: 26 * WINDOW_SIZE.HEIGHT_WEIGHT }}>{props.groupName}</Text>
    </View>
  );
};

export default GroupName;
