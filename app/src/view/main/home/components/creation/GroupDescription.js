import * as React from 'react';
import { Text, View } from 'react-native';
import { WINDOW_SIZE } from '../../../../../constant/WindowSize';

const GroupDescription = (props) => {
  return (
    <View>
      <Text style={{ fontWeight: 'bold', fontSize: 14 * WINDOW_SIZE.HEIGHT_WEIGHT }}>
        그룹 소개글
      </Text>
      <Text
        style={{
          paddingTop: 12 * WINDOW_SIZE.HEIGHT_WEIGHT,
          fontSize: 14 * WINDOW_SIZE.HEIGHT_WEIGHT,
        }}
      >
        {props.groupDescription}
      </Text>
    </View>
  );
};

export default GroupDescription;
