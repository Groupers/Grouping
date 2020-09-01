import * as React from 'react';
import { Text, View } from 'react-native';

const GroupDescription = (props) => {
  return (
    <View>
      <Text>그룹 설명</Text>
      <Text>{props.groupDescription}</Text>
    </View>
  );
};

export default GroupDescription;
