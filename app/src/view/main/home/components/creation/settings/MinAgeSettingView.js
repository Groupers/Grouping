import * as React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { WINDOW_SIZE } from '../../../../../../constant/WindowSize';

const MinAgeSettingView = (props) => {
  return (
    <View>
      <TextInput
        maxLength={50}
        style={styles.age}
        autoCorrect={false}
        placeholder="최소 나이 입력"
        value={props.groupingMinAge}
        onChangeText={props.onChangeText != null ? (minAge) => props.onChangeText(minAge) : null}
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

export default MinAgeSettingView;
