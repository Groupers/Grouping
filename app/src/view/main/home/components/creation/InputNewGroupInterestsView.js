import * as React from 'react';
import { Text, View } from 'react-native';

// eslint-disable-next-line react/prop-types
export default function InputNewGroupInterestsView({ navigation }) {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Text onPress={() => navigation.navigate('InputNewGroupMoreInfo')}>다음</Text>
      ),
    });
  }, [navigation]);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>input group interests</Text>
    </View>
  );
}
