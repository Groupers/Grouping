import * as React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { WINDOW_SIZE } from '../../../../../constant/WindowSize';

const InputDescriptionTextView = (props) => {
  return (
    <View style={styles.titleContainer}>
      <TextInput
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
    width: WINDOW_SIZE.WIDTH,
    height: WINDOW_SIZE.HEIGHT * 0.8,
    borderWidth: 1,
    paddingLeft: 30 * WINDOW_SIZE.WIDTH_WEIGHT,
    paddingRight: 30 * WINDOW_SIZE.WIDTH_WEIGHT,
  },

  title: {
    flex: 1,
    color: Colors.black,
    fontSize: 14 * WINDOW_SIZE.WIDTH_WEIGHT,
    // flexDirection: 'flex-start',
  },

  counter: {
    color: 'black',
  },
});

export default InputDescriptionTextView;
