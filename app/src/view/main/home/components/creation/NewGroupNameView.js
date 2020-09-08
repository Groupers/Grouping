import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { inject, observer } from 'mobx-react';
import Colors from 'react-native/Libraries/NewAppScreen/components/Colors';
import { GROUPING_CREATION_VIEW_STATUS } from '../../../../../constant/GroupingCreationViewStatus';
import TitleInput from './TitleInput';
import { WINDOW_SIZE } from '../../../../../constant/WindowSize';
import { COLORS } from '../../../../../assets/Colors';
import GroupCreationProgressBar from '../GroupCreationProgressBar';
import { FONT_SIZE } from '../../../../../constant/FontSize';

// eslint-disable-next-line react/prop-types
const NewGroupNameView = (props) => {
  /* React.useLayoutEffect(() => {
    // eslint-disable-next-line react/prop-types
    props.navigation.setOptions({
      headerRight: () => (
        // eslint-disable-next-line react/prop-types
        <Text onPress={() => props.navigation.navigate('InputNewGroupInterests')}>다음</Text>
      ),
    });
    // eslint-disable-next-line react/prop-types,react/destructuring-assignment
  }, [props.navigation]); */

  const onHeaderNextButtonClicked = () => {
    props.groupingCreationMainStore.groupingCreationViewChanged(
      GROUPING_CREATION_VIEW_STATUS.DESCRIPTION,
    );
    props.navigation.navigate('NewGroupInterestsView');
  };

  const rightIconStyle = (groupingCreationView) => {
    return {
      marginRight: 15 * WINDOW_SIZE.WIDTH_WEIGHT,
      fontSize: 18 * WINDOW_SIZE.WIDTH_WEIGHT,
      color: props.groupingCreationMainStore.isHeaderRightIconActivated(
        groupingCreationView,
      )
        ? Colors.black
        : '#999',
    };
  };

  const onTitleChanged = (title) => {
    props.groupingCreationMainStore.groupingTitleChanged(title);
    props.navigation.setOptions({
      headerRight: () => (
        <Text
          onPress={() => {
            onHeaderNextButtonClicked();
          }}
          style={rightIconStyle(GROUPING_CREATION_VIEW_STATUS.NAME)}
        >
          다음
        </Text>
      ),
    });
  };

  React.useEffect(() => {
    console.log('그룹 생성하는 유저 아이디');
    console.log(props.userStore.groupingUser.groupingUserId);
    props.groupingCreationMainStore.initialize(
      props.userStore.groupingUser.groupingUserId,
    );
  }, []);

  return (
    <View style={styles.mainContainer}>
      <GroupCreationProgressBar step={1} />
      <View style={styles.labelContainer}>
        <Text style={{ fontSize: FONT_SIZE.CONTENTS_TITLE }}>
          그룹 이름을 알려주세요.
        </Text>
      </View>
      <View style={styles.groupNameInputContainer}>
        <TitleInput
          textExample="30자 이내로 입력해 주세요."
          onChangeText={onTitleChanged.bind(this)}
          groupingTitle={props.groupingCreationMainStore.groupingTitle}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    paddingLeft: 30 * WINDOW_SIZE.WIDTH_WEIGHT,
    paddingRight: 30 * WINDOW_SIZE.WIDTH_WEIGHT,
  },
  labelContainer: {
    borderColor: COLORS.MAIN_COLOR,
    width: '100%',
    marginTop: 30 * WINDOW_SIZE.HEIGHT_WEIGHT,
    marginBottom: 75 * WINDOW_SIZE.HEIGHT_WEIGHT,
    alignSelf: 'flex-start',
  },
  groupNameInputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default inject('groupingCreationMainStore', 'userStore')(observer(NewGroupNameView));
