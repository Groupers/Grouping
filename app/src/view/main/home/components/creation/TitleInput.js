import * as React from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { WINDOW_SIZE } from '../../../../../constant/WindowSize';
import { COLORS } from '../../../../../assets/Colors';

const TitleInput = (props) => {
  return (
    <View style={styles.titleContainer}>
      <TextInput
        style={styles.title}
        maxLength={30}
        placeholder={props.textExample}
        autoCorrect={false}
        placeholderTextColor="#ddd"
        value={props.groupingTitle}
        onChangeText={props.onChangeText != null ? (text) => props.onChangeText(text) : null}
      />
      <Text style={styles.counter}>{props.groupingTitle.length}/30</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    borderColor: COLORS.FONT_GRAY,
    borderBottomWidth: 1 * WINDOW_SIZE.WIDTH_WEIGHT,
    flexDirection: 'row',
    width: 300 * WINDOW_SIZE.WIDTH_WEIGHT,
    padding: 0,
    alignItems: 'center',
  },

  title: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10 * WINDOW_SIZE.HEIGHT_WEIGHT,
    color: Colors.black,
    fontSize: 14 * WINDOW_SIZE.WIDTH_WEIGHT,
    padding: 0,
  },

  counter: {
    color: COLORS.FONT_GRAY,
    margin: 0,
    fontSize: 9*WINDOW_SIZE.HEIGHT_WEIGHT
  },
});

export default TitleInput;
