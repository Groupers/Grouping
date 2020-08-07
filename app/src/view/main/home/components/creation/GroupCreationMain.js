import * as React from 'react';
import { Button, Text, View } from 'react-native';

// eslint-disable-next-line react/prop-types
export default function GroupCreationMain({ navigation }) {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Text onPress={() => navigation.navigate('GroupCreationDescription')}>다음</Text>
      ),
    });
  }, [navigation]);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>group creation screen</Text>
      <Button title="next" onPress={() => navigation.navigate('GroupCreationInfo')} />
    </View>
  );
}
