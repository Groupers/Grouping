import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const GenderSettingView = (props) => {
  const [checked, setChecked] = React.useState('both');

  return (
    <View>
      <TouchableOpacity onPress={props.exitPanel}>
        <Text>취소</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={props.completePanel} groupingGender={props.groupingGender}>
        <Text>완료</Text>
      </TouchableOpacity>
      <Text>그룹에 가입 가능한 성별을 알려주세요</Text>
      <Text>*조건을 설정하지 않은 경우에는 기본설정인 모두환영으로 표시됩니다</Text>
      <TouchableOpacity
        value="모두 환영"
        status={checked === 'both' ? 'checked' : 'unchecked'}
        onPress={() => setChecked('both')}
      >
        <Text>모두 환영</Text>
      </TouchableOpacity>
      <TouchableOpacity
        value="남자만 환영"
        status={checked === 'male' ? 'checked' : 'unchecked'}
        onPress={() => setChecked('male')}
      >
        <Text>남자만 환영</Text>
      </TouchableOpacity>
      <TouchableOpacity
        value="여자만 환영"
        status={checked === 'female' ? 'checked' : 'unchecked'}
        onPress={() => setChecked('female')}
      >
        <Text>여자만 환영</Text>
      </TouchableOpacity>
    </View>
  );
};

export default GenderSettingView;
