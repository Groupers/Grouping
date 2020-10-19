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
      headerRight: () => (
        <Text
          onPress={() => onHeaderNextButtonClicked()}
          style={{ marginRight: 24 * WINDOW_SIZE.WIDTH_WEIGHT }}
        >
          완료
        </Text>
      ),
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
      <View style={styles.contents}>
        <View
          style={{
            position: 'absolute',
            top: -38 * WINDOW_SIZE.HEIGHT_WEIGHT,
            left: 24 * WINDOW_SIZE.HEIGHT_WEIGHT,
            flexDirection: 'row',
          }}
        >
          <View style={styles.moreInfoTextContainerOnImage}>
            <Text style={styles.moreInfoTextOnImage}>
              {props.groupingCreationMainStore.minAge} ~ {props.groupingCreationMainStore.maxAge}
            </Text>
          </View>
          <View style={styles.moreInfoTextContainerOnImage}>
            <Text style={styles.moreInfoTextOnImage}>
              {props.groupingCreationMainStore.groupingGender}
            </Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Image
            source={require('../../../../../../../Img/ic_people.png')}
            style={{
              height: 18 * WINDOW_SIZE.HEIGHT_WEIGHT,
              width: 10 * WINDOW_SIZE.HEIGHT_WEIGHT,
            }}
          />
          <Text style={styles.moreInfoText}>1</Text>
          <View
            style={{
              backgroundColor: COLORS.BLACK,
              height: 6 * WINDOW_SIZE.HEIGHT_WEIGHT,
              width: 1,
              marginLeft: 8 * WINDOW_SIZE.HEIGHT_WEIGHT,
              marginRight: 8 * WINDOW_SIZE.HEIGHT_WEIGHT,
            }}
          />
          <Text style={styles.moreInfoText}>{props.groupingCreationMainStore.groupingAddress}</Text>
        </View>
        {/* <GroupLeaderProfile /> */}
        <GroupName groupName={props.groupingCreationMainStore.groupingTitle} />
        <GroupKeyword groupKeyword={props.groupingCreationMainStore.hashtagList} />
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
    // alignItems: 'center',
    // backgroundColor: 'blue',
  },
  background: {
    width: '100%',
    // flex: 1,
    height: 260 * WINDOW_SIZE.HEIGHT_WEIGHT,
    backgroundColor: 'green',
    top: -30,
    position: 'absolute',
  },
  contents: {
    width: '100%',
    // flex: 1,
    backgroundColor: 'white',
    padding: 30 * WINDOW_SIZE.HEIGHT_WEIGHT,
  },
  moreInfoText: { fontSize: 12 * WINDOW_SIZE.HEIGHT_WEIGHT, color: COLORS.BLACK },
  moreInfoTextContainerOnImage: {
    backgroundColor: '#11111188',
    borderRadius: 6 * WINDOW_SIZE.HEIGHT_WEIGHT,
    paddingLeft: 6 * WINDOW_SIZE.HEIGHT_WEIGHT,
    paddingRight: 6 * WINDOW_SIZE.HEIGHT_WEIGHT,
    paddingTop: 2 * WINDOW_SIZE.HEIGHT_WEIGHT,
    paddingBottom: 2 * WINDOW_SIZE.HEIGHT_WEIGHT,
    marginRight: 8 * WINDOW_SIZE.WIDTH_WEIGHT,
  },
  moreInfoTextOnImage: { color: COLORS.WHITE, fontSize: 11 * WINDOW_SIZE.HEIGHT_WEIGHT },
});

export default inject('groupingCreationMainStore')(observer(NewGroupPreview));
