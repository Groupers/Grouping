import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { WINDOW_SIZE } from '../../../../../constant/WindowSize';

// eslint-disable-next-line react/prop-types
export default function Preview({ navigation }) {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => <Text onPress={() => navigation.navigate('Home')}>완료</Text>,
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.background} />
      <View style={styles.contents} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
  },
  background: {
    width: '100%',
    flex: 1,
    height: 50,
    backgroundColor: 'green',
  },
  contents: {
    width: '100%',
    flex: 1,
    backgroundColor: 'tomato',
  },
  PaddingBlock: {
    padding: 32 * WINDOW_SIZE.WIDTH_WEIGHT,
    margin: 32 * WINDOW_SIZE.WIDTH_WEIGHT,
    marginTop: 0,
    display: 'flex',
  },
  CreateGroupText: {
    fontSize: 14 * WINDOW_SIZE.WIDTH_WEIGHT,
    fontWeight: 'bold',
  },
});
