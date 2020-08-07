import * as React from 'react';
import { Button, Text, TouchableOpacity, View } from 'react-native';
import { Icon } from 'react-native-elements';

// eslint-disable-next-line react/prop-types
export default function HomeMain({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TouchableOpacity onPress={() => navigation.navigate('GroupCreation')}>
        <Text>+그룹</Text>
      </TouchableOpacity>
      <Text>Home screen</Text>
    </View>
  );
}
