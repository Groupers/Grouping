import * as React from 'react';
import { Text, View } from 'react-native';

// eslint-disable-next-line react/prop-types
export default function InputNewGroupNameView({ navigation }) {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Text onPress={() => navigation.navigate('InputNewGroupInterests')}>다음</Text>
      ),
    });
  }, [navigation]);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>input a new group name</Text>
    </View>
  );
}
