import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { inject, observer } from 'mobx-react';
import ImagePicker from 'react-native-image-picker';
import GroupName from './GroupName';
import GroupingUserDto from '../../../../../dto/GroupingUserDto';
import GroupLeaderProfile from './GroupLeaderProfile';
import GroupKeyword from './GroupKeyword';
import GroupDescription from './GroupDescription';

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
        // 에러시에 alert 를 사용할지 추가 논의 필요
      } else {
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
      <View>
        <Text>{props.groupingCreationMainStore.groupingGender}</Text>
        <Text>
          {props.groupingCreationMainStore.groupingAvailableMinAge} ~{' '}
          {props.groupingCreationMainStore.groupingAvailableMaxAge}
        </Text>
      </View>
      <View style={styles.contents}>
        <GroupLeaderProfile groupingUserDto={GroupingUserDto} />
        <GroupName groupName={props.groupingCreationMainStore.groupingTitle} />
        <GroupKeyword groupKeyword={props.groupingCreationMainStore.groupingKeyword} />
        <GroupDescription groupDescription={props.groupingCreationMainStore.groupingDescription} />
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
});

export default inject('groupingCreationMainStore')(observer(Preview));
