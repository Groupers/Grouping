import * as React from 'react';
import { Button, Text, View } from 'react-native';

// eslint-disable-next-line react/prop-types
export default function InputNewGroupMoreInfoView({ navigation }) {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => <Text onPress={() => navigation.navigate('Preview')}>다음</Text>,
    });
  }, [navigation]);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>more info</Text>
      <Button title="GROUP LOCATION" onPress={() => navigation.navigate('InputNewGroupLocation')} />
      <Button
        title="GROUP DESCRIPTION"
        onPress={() => navigation.navigate('InputNewGroupDescription')}
      />
    </View>
  );
}
