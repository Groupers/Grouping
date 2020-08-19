import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const GenderSettingView = (props) => {
  const [checked, setChecked] = React.useState('both');

  return (
    <View>
      <TouchableOpacity onPress={props.initialize}>
        <Text>취소</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={props.exitPanel}>
        <Text>완료</Text>
      </TouchableOpacity>
      <Text>그룹에 가입 가능한 성별을 알려주세요</Text>
      <Text>*조건을 설정하지 않은 경우에는 기본설정인 모두환영으로 표시됩니다</Text>
      <TouchableOpacity
        status={checked === 'male' ? 'checked' : 'unchecked'}
        onGenderSelected={checked}
        onPress={() => props.onSelectGender('male')}
      >
        <Text>남자만 환영</Text>
      </TouchableOpacity>
      <TouchableOpacity
        status={checked === 'female' ? 'checked' : 'unchecked'}
        onGenderSelected={checked}
        onPress={() => props.onSelectGender('female')}
      >
        <Text>여자만 환영</Text>
      </TouchableOpacity>
    </View>
  );
};

export default GenderSettingView;
