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
        maxLength={1500}
        placeholder={props.textExample}
        autoCorrect={false}
        multiline
        numberOfLines={20}
        placeholderTextColor={COLORS.GRAY_2}
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
    paddingLeft: 24 * WINDOW_SIZE.HEIGHT_WEIGHT,
    paddingRight: 24 * WINDOW_SIZE.HEIGHT_WEIGHT,
    paddingTop: 18 * WINDOW_SIZE.HEIGHT_WEIGHT,
    backgroundColor: COLORS.MAIN_COLOR,
  },

  title: {
    height: WINDOW_SIZE.HEIGHT,
    color: Colors.black,
    fontSize: 14 * WINDOW_SIZE.HEIGHT_WEIGHT,
    lineHeight:20*WINDOW_SIZE.HEIGHT_WEIGHT
  },

  counter: {
    color: 'black',
  },
});

export default DescriptionInput;
