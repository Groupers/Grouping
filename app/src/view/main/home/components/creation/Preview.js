import * as React from 'react';
import { Text, View } from 'react-native';

// eslint-disable-next-line react/prop-types
export default function Preview({ navigation }) {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Text onPress={() => navigation.navigate('Home')}>완료</Text>
      ),
    });
  }, [navigation]);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>preview</Text>
    </View>
  );
}
