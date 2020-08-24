import * as React from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { WINDOW_SIZE } from '../../../../../../constant/WindowSize';

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
      <TextInput
        maxLength={50}
        style={styles.age}
        autoCorrect={false}
        placeholder="최소 나이 입력"
        value={props.groupingMinAge}
        onMinAgeSelected={props.onMinAgeSelected != null ? (minAge) => props.onMinAgeSelected(minAge) : null}
      />
      <TextInput
        maxLength={50}
        style={styles.age}
        autoCorrect={false}
        placeholder="최대 나이 입력"
        value={props.groupingMaxAge}
        onMaxAgeSelected={props.onMaxAgeSelected != null ? (maxAge) => props.onMaxAgeSelected(maxAge) : null}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  age: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10 * WINDOW_SIZE.WIDTH_WEIGHT,
    marginLeft: 10 * WINDOW_SIZE.WIDTH_WEIGHT,
    marginBottom: 10 * WINDOW_SIZE.HEIGHT_WEIGHT,
    color: Colors.black,
    fontSize: 15 * WINDOW_SIZE.WIDTH_WEIGHT,
  },
});

export default AgeSettingView;
