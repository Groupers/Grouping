import * as React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { WINDOW_SIZE } from '../../../../../../constant/WindowSize';
import { FONT_SIZE } from '../../../../../../constant/FontSize';
import { COLORS } from '../../../../../../assets/Colors';

const GenderSettingView = (props) => {
  const [checked, setChecked] = React.useState('ALL');

  return (
    <View style={{ flexDirection: 'row' }}>
      <TouchableOpacity
        status={checked === 'MALE' ? 'checked' : 'unchecked'}
        onGenderSelected={checked}
        onPress={() => {
          props.onSelectGender('MALE');
        }}
        style={{
          borderRadius: 12 * WINDOW_SIZE.HEIGHT_WEIGHT,
          backgroundColor: '#f1f1f1',
          height: 120 * WINDOW_SIZE.HEIGHT_WEIGHT,
          width: 144 * WINDOW_SIZE.WIDTH_WEIGHT,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {/* 이미지 테스트 추후 수정 필요 */}
        <Image
          source={require('../../../../../../../../Img/normal_w.png')}
          style={{ width: 72 * WINDOW_SIZE.WIDTH_WEIGHT, height: 72 * WINDOW_SIZE.HEIGHT_WEIGHT }}
        />
        <Text>남자만</Text>
      </TouchableOpacity>
      <View style={{ width: 12 * WINDOW_SIZE.WIDTH_WEIGHT }} />
      <TouchableOpacity
        status={checked === 'FEMALE' ? 'checked' : 'unchecked'}
        onGenderSelected={checked}
        onPress={() => {
          props.onSelectGender('FEMALE');
        }}
        style={{
          borderRadius: 12 * WINDOW_SIZE.HEIGHT_WEIGHT,
          backgroundColor: {==='FEMALE'?'red':'#f1f1f1'}
          height: 120 * WINDOW_SIZE.HEIGHT_WEIGHT,
          width: 144 * WINDOW_SIZE.WIDTH_WEIGHT,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {/* 이미지 테스트 추후 수정 필요 */}
        <Image
          source={require('../../../../../../../../Img/normal_w.png')}
          style={{ width: 72 * WINDOW_SIZE.WIDTH_WEIGHT, height: 72 * WINDOW_SIZE.HEIGHT_WEIGHT }}
        />
        <Text>여자만</Text>
      </TouchableOpacity>
    </View>
  );
};

export default GenderSettingView;
