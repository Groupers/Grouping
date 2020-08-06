import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

function ActiveInputText({ title }) {
  return (
    <View>
      <Text>{title}</Text>
      <TextInput />
    </View>
  );
}

export default ActiveInputText;

const styles = StyleSheet.create({});
