import * as React from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { WINDOW_SIZE } from '../../../../../constant/WindowSize';

const InputKeywordView = (props) => {
  return (
    <View style={styles.keywordContainer}>
      <TextInput
        style={styles.keyword}
        maxLength={100}
        placeholder="ex. #카페 #커피 #책 #향기"
        autoCorrect={false}
        blurOnSubmit
        multiline
        placeholderTextColor="#ddd"
        value={props.groupingKeyword}
        onChangeText={props.onChangeText != null ? (text) => props.onChangeText(text) : null}
      />
      <Text style={styles.counter}>{props.groupingKeyword.length}/100</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  keywordContainer: {
    borderColor: 'black',
    borderBottomWidth: 1 * WINDOW_SIZE.WIDTH_WEIGHT,
    flexDirection: 'row',
    width: '90%',
    margin: 10 * WINDOW_SIZE.WIDTH_WEIGHT,
  },

  keyword: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10 * WINDOW_SIZE.WIDTH_WEIGHT,
    marginLeft: 10 * WINDOW_SIZE.WIDTH_WEIGHT,
    marginBottom: 10 * WINDOW_SIZE.HEIGHT_WEIGHT,
    color: Colors.black,
    fontSize: 15 * WINDOW_SIZE.WIDTH_WEIGHT,
  },

  counter: {
    color: 'black',
  },
});

export default InputKeywordView;
