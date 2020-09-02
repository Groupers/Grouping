import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { inject, observer } from 'mobx-react';
import Colors from 'react-native/Libraries/NewAppScreen/components/Colors';
import { GROUPING_CREATION_VIEW_STATUS } from '../../../../../constant/GroupingCreationViewStatus';
import { WINDOW_SIZE } from '../../../../../constant/WindowSize';
import InputKeywordView from './InputKeywordView';
import { COLORS } from '../../../../../assets/Colors';
import GroupCreationProgressBar from '../GroupCreationProgressBar';
import { FONT_SIZE } from '../../../../../constant/FontSize';

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
      <GroupCreationProgressBar step={2} />
      <View style={styles.labelContainer}>
        <Text style={{ fontSize: FONT_SIZE.CONTENTS_TITLE }}>
          그룹의 관심사를 {'\n'}키워드로 소개해주세요.
        </Text>
        <Text>스페이스바를 눌러 키워드를 구분해주세요.</Text>
      </View>
      <View style={styles.interestInputContainer}>
        <InputKeywordView
          textExample="#키워드,"
          onChangeText={onKeywordChanged.bind(this)}
          groupingKeyword={props.groupingCreationMainStore.groupingKeyword}
        />
      </View>
      <View style={styles.hotKeywordContainer}>
        <Text style={{ fontSize: 12 * WINDOW_SIZE.HEIGHT_WEIGHT, fontWeight: 'bold' }}>
          인기 키워드
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingLeft: 30 * WINDOW_SIZE.WIDTH_WEIGHT,
    paddingRight: 30 * WINDOW_SIZE.WIDTH_WEIGHT,
  },
  labelContainer: {
    borderColor: COLORS.MAIN_COLOR,
    width: '100%',
    marginTop: 30 * WINDOW_SIZE.HEIGHT_WEIGHT,
    marginBottom: 21 * WINDOW_SIZE.HEIGHT_WEIGHT,
    alignSelf: 'flex-start',
  },
  interestInputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  hotKeywordContainer: {
    marginTop: 30 * WINDOW_SIZE.HEIGHT_WEIGHT,
  },
});

export default inject('groupingCreationMainStore')(observer(InputNewGroupInterestsView));
