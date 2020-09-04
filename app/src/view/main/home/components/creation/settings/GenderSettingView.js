import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const GenderSettingView = (props) => {
  const [checked, setChecked] = React.useState('ALL');

  return (
    <View>
      <TouchableOpacity
        status={checked === 'MALE' ? 'checked' : 'unchecked'}
        onGenderSelected={checked}
        onPress={() => props.onSelectGender('MALE')}
      >
        <Text>남자만 환영</Text>
      </TouchableOpacity>
      <TouchableOpacity
        status={checked === 'FEMALE' ? 'checked' : 'unchecked'}
        onGenderSelected={checked}
        onPress={() => props.onSelectGender('FEMALE')}
      >
        <Text>여자만 환영</Text>
      </TouchableOpacity>
    </View>
  );
};

export default GenderSettingView;
