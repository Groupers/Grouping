import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { inject, observer } from 'mobx-react';
import ImagePicker from 'react-native-image-picker';
import GroupName from './GroupName';
import GroupingUserDto from '../../../../../dto/GroupingUserDto';
import GroupLeaderProfile from './GroupLeaderProfile';
import GroupKeyword from './GroupKeyword';
import GroupDescription from './GroupDescription';
import { GROUPING_CREATION_VIEW_STATUS } from '../../../../../constant/GroupingCreationViewStatus';
import { WINDOW_SIZE } from '../../../../../constant/WindowSize';
import { COLORS } from '../../../../../assets/Colors';

// eslint-disable-next-line react/prop-types
const NewGroupPreview = (props) => {
  React.useLayoutEffect(() => {
    props.navigation.setOptions({
      headerRight: () => <Text onPress={() => onHeaderNextButtonClicked()}>완료</Text>,
    });
    // eslint-disable-next-line react/destructuring-assignment
  }, [props.navigation]);

  const onHeaderNextButtonClicked = () => {
    props.groupingCreationMainStore.groupingCreationViewChanged(
      GROUPING_CREATION_VIEW_STATUS.CONFIRM
    );
    props.groupingCreationMainStore.groupCreation();
    props.navigation.navigate('Home');
  };

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
        props.groupingCreationMainStore.groupingBackgroundImageChanged({
          ...uri,
        });
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
        <View
          style={{
            position: 'absolute',
            top: -20 * WINDOW_SIZE.HEIGHT_WEIGHT,
          }}
        >
          <Text>
            {props.groupingCreationMainStore.groupingAvailableMinAge} ~{' '}
            {props.groupingCreationMainStore.groupingAvailableMaxAge}
          </Text>
        </View>
      </View>
      <View style={styles.contents}>
        <GroupLeaderProfile />
        <GroupName groupName={props.groupingCreationMainStore.groupingTitle} />
        <GroupKeyword groupKeyword={props.groupingCreationMainStore.groupingKeyword} />
        <View
          style={{
            height: 1,
            width: '100%',
            backgroundColor: COLORS.FONT_GRAY,
            marginTop: 24 * WINDOW_SIZE.HEIGHT_WEIGHT,
            marginBottom: 24 * WINDOW_SIZE.HEIGHT_WEIGHT,
          }}
        />
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
    backgroundColor: 'white',
    padding: 30 * WINDOW_SIZE.HEIGHT_WEIGHT,
  },
});

export default inject('groupingCreationMainStore')(observer(NewGroupPreview));
