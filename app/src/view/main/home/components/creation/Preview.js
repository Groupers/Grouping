import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
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

    ImagePicker.showImagePicker(options, (response) => {
      if (response.didCancel) {
        console.log('사용자가 취소하였습니다.');
      } else if (response.error) {
        console.log('에러 : ', response.error);
      } else {
        // 이곳에 왔다면 이미지가 잘 선택된 것임
        // 선택된 이미지의 경로 uri 얻어오기
        const uri = { uri: response.uri };
        console.log(response.uri);
        props.groupingCreationMainStore.groupingBackgroundImageChanged({ ...uri });
      }
    });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.background} onPress={showPicker}>
        <Image
          source={props.groupingCreationMainStore.getBackgroundImageURI}
          style={{ flex: 1, height: '100%', width: '100%', zIndex: 1 }}
        />
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

export default inject('groupingCreationMainStore')(observer(Preview));
