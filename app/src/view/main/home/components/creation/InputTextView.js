import * as React from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const InputTextView = (props) => {
  return (
    <View style={styles.titleContainer}>
      <TextInput
        style={styles.title}
        maxLength={50}
        placeholder={props.testExample}
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
    borderColor: 'black',
    borderBottomWidth: 1,
    flexDirection: 'row',
    width: '90%',
    margin: 10,
  },

  title: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
    marginLeft: 10,
    marginBottom: 10,
    color: Colors.black,
    fontSize: 15,
  },

  counter: {
    color: 'black',
  },
});

export default InputTextView;
