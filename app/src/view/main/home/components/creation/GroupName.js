import * as React from 'react';
import { Text, View } from 'react-native';

const GroupName = (props) => {
  return (
    <View>
      <Text>그룹명</Text>
      <Text>{props.groupName}</Text>
    </View>
  );
};

export default GroupName;
