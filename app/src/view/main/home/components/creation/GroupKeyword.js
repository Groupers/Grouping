import * as React from 'react';
import { Text, View } from 'react-native';

const GroupKeyword = (props) => {
  return (
    <View>
      <Text>그룹 키워드</Text>
      <Text>{props.groupKeyword}</Text>
    </View>
  );
};

export default GroupKeyword;
