import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { inject, observer } from 'mobx-react';
import Colors from 'react-native/Libraries/NewAppScreen/components/Colors';
import { GROUPING_CREATION_VIEW_STATUS } from '../../../../../constant/GroupingCreationViewStatus';
import InputTextView from './InputTextView';
import { WINDOW_SIZE } from '../../../../../constant/WindowSize';

// eslint-disable-next-line react/prop-types
const InputNewGroupInterestsView = (props) => {
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
      GROUPING_CREATION_VIEW_STATUS.DESCRIPTION
    );
    props.navigation.navigate('InputNewGroupMoreInfo');
  };

  const rightIconStyle = (groupingCreationView) => {
    return {
      marginRight: 15 * WINDOW_SIZE.WIDTH_WEIGHT,
      fontSize: 18 * WINDOW_SIZE.WIDTH_WEIGHT,
      color: props.groupingCreationMainStore.isHeaderRightIconActivated(groupingCreationView)
        ? Colors.black
        : '#999',
    };
  };

  const onKeywordChanged = (keyword) => {
    props.groupingCreationMainStore.groupingKeywordChanged(keyword);

    props.navigation.setOptions({
      headerRight: () => (
        <Text
          onPress={() => {
            onHeaderNextButtonClicked();
          }}
          style={rightIconStyle(GROUPING_CREATION_VIEW_STATUS.INTERESTS)}
        >
          다음
        </Text>
      ),
    });
  };

  return (
    // eslint-disable-next-line no-use-before-define
    <View style={styles.mainContainer}>
      <View style={styles.labelContainer}>
        <Text>그룹의 관심사를 {'\n'} #해시태그로 소개해주세요.</Text>
      </View>
      <View style={styles.groupNameInputContainer}>
        <InputTextView
          textExample="#키워드,"
          onChangeText={onKeywordChanged.bind(this)}
          groupingTitle={props.groupingCreationMainStore.groupingKeyword}
        />
      </View>
      <View style={styles.hotKeywordContainer}>
        <Text>인기 키워드</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  labelContainer: {},
  groupNameInputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  hotKeywordContainer: {},
});

export default inject('groupingCreationMainStore')(observer(InputNewGroupInterestsView));
