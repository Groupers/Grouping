import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { inject, observer } from 'mobx-react';
import { GROUPING_CREATION_VIEW_STATUS } from '../../../../../constant/GroupingCreationViewStatus';
import TitleInput from './TitleInput';
import { WINDOW_SIZE } from '../../../../../constant/WindowSize';
import { COLORS } from '../../../../../assets/Colors';
import GroupCreationProgressBar from '../GroupCreationProgressBar';
import { FONT_SIZE } from '../../../../../constant/FontSize';

// eslint-disable-next-line react/prop-types
const NewGroupNameView = (props) => {
  const onHeaderNextButtonClicked = () => {
    props.groupingCreationMainStore.groupingCreationViewChanged(
      GROUPING_CREATION_VIEW_STATUS.DESCRIPTION
    );
    props.navigation.navigate('NewGroupInterestsView');
  };

  const onTitleChanged = (title) => {
    props.groupingCreationMainStore.groupingTitleChanged(title);
  };

  const rightIconStyle = (selectedColor) => {
    return {
      marginRight: 15 * WINDOW_SIZE.WIDTH_WEIGHT,
      fontSize: 18 * WINDOW_SIZE.WIDTH_WEIGHT,
      color: selectedColor,
    };
  };

  React.useEffect(() => {
    if (props.groupingCreationMainStore.groupingTitle.length > 2) {
      props.navigation.setOptions({
        headerRight: () => (
          <Text
            onPress={() => {
              onHeaderNextButtonClicked();
            }}
            style={rightIconStyle(COLORS.BLACK)}
          >
            다음
          </Text>
        ),
      });
    } else if (props.groupingCreationMainStore.groupingTitle.length < 2) {
      props.navigation.setOptions({
        headerRight: () => <Text style={rightIconStyle(COLORS.LIGHT_GRAY)}>다음</Text>,
      });
    }
  });

  return (
    <View style={styles.mainContainer}>
      <GroupCreationProgressBar step={1} />
      <View style={styles.labelContainer}>
        <Text style={{ fontSize: FONT_SIZE.CONTENTS_TITLE }}>그룹 이름을 알려주세요.</Text>
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
