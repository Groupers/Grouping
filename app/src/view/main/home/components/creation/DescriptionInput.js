import * as React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { WINDOW_SIZE } from '../../../../../constant/WindowSize';
import { COLORS } from '../../../../../assets/Colors';

const DescriptionInput = (props) => {
  return (
    <View style={styles.titleContainer}>
      <TextInput
        textAlignVertical="top"
        style={styles.title}
        maxLength={1000}
        placeholder={props.textExample}
        autoCorrect={false}
        multiline
        numberOfLines={5}
        placeholderTextColor="#ddd"
        value={props.value}
        onChangeText={props.onChangeText != null ? (text) => props.onChangeText(text) : null}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    flex: 1,
    // width: WINDOW_SIZE.WIDTH,
    // borderWidth: 1,
    paddingLeft: 30 * WINDOW_SIZE.WIDTH_WEIGHT,
    paddingRight: 30 * WINDOW_SIZE.WIDTH_WEIGHT,
    paddingTop: 30 * WINDOW_SIZE.HEIGHT_WEIGHT,
    backgroundColor: COLORS.MAIN_COLOR,
  },

  title: {
    height: WINDOW_SIZE.HEIGHT,
    color: Colors.black,
    fontSize: 14 * WINDOW_SIZE.HEIGHT_WEIGHT,
  },

  counter: {
    color: 'black',
  },
});

export default DescriptionInput;
