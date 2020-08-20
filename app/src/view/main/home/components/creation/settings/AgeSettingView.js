import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const AgeSettingView = (props) => {
  return (
    <View>
      <TouchableOpacity onPress={props.initialize}>
        <Text>취소</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={props.exitPanel}>
        <Text>완료</Text>
      </TouchableOpacity>
      <Text>나이 제한 설정 패널</Text>
    </View>
  );
};

export default AgeSettingView;
