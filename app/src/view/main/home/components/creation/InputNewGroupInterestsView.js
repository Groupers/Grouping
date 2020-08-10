import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { inject, observer } from 'mobx-react';
import Colors from 'react-native/Libraries/NewAppScreen/components/Colors';
import { GROUPING_CREATION_VIEW_STATUS } from '../../../../../constant/GroupingCreationViewStatus';
import InputTextView from './InputTextView';

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
      marginRight: 15,
      fontSize: 18,
      color: props.groupingCreationMainStore.isHeaderRightIconActivated(groupingCreationView)
        ? Colors.white
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
          style={rightIconStyle(GROUPING_CREATION_VIEW_STATUS.MAIN_INFO)}
        >
          다음
        </Text>
      ),
    });
  };

  return (
    // eslint-disable-next-line no-use-before-define
    <View style={styles.groupNameInputContainer}>
      <Text>그룹의 관심사를 {'\n'} #해시태그로 소개해주세요.</Text>
      <InputTextView
        textExample="#키워드,"
        onChangeText={onKeywordChanged.bind(this)}
        groupingTitle={props.groupingCreationMainStore.groupingKeyword}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  groupNameInputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default inject('groupingCreationMainStore')(observer(InputNewGroupInterestsView));
