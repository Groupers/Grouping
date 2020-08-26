import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const GenderSettingView = (props) => {
  const [checked, setChecked] = React.useState('both');

  return (
    <View>
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
