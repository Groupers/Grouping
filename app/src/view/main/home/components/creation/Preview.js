import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { inject, observer } from 'mobx-react';
import ImagePicker from 'react-native-image-picker';
import { WINDOW_SIZE } from '../../../../../constant/WindowSize';

// eslint-disable-next-line react/prop-types
const Preview = (props) => {
  React.useLayoutEffect(() => {
    props.navigation.setOptions({
      headerRight: () => <Text onPress={() => props.navigation.navigate('Home')}>완료</Text>,
    });
    // eslint-disable-next-line react/destructuring-assignment
  }, [props.navigation]);

  const showPicker = () => {
    const options = {
      title: 'Select Avatar',
      customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    ImagePicker.showImagePicker(options, () => {});
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.background} onPress={showPicker}>
        <View style={styles.background} />
      </TouchableOpacity>
      <View style={styles.contents}>
        {/*
        <GroupName />
        <GroupKeywords />
        <GroupDescription />
        */}
      </View>
    </View>
  );
};

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

export default inject('userStore')(observer(Preview));
