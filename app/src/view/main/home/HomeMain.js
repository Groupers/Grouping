import * as React from 'react';
import { Button, Text, View } from 'react-native';

// eslint-disable-next-line react/prop-types
export default function HomeMain({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home screen</Text>
      {/* eslint-disable-next-line react/prop-types */}
      <Button title="create a new group" onPress={() => navigation.navigate('GroupCreation')} />
    </View>
  );
}
