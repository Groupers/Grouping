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
import { TouchableOpacity } from 'react-native-gesture-handler';

// eslint-disable-next-line react/prop-types
const InputNewGroupInterestsView = (props) => {
  // solmin--------------------------------------------------------------------------------------------------------
  const [input, setInput] = React.useState('');
  const [keywords, setKeywords] = React.useState([]);

  const onInsert = (keyword) => {
    // 공백이 빈칸이면 리턴
    if (!keyword) return;
    // 추가된 키워드 리스트에 추가 키워드가 있다면 리턴
    if (keywords.includes(keyword)) return;
    const nextKeywords = [...keywords, keyword];
    setKeywords(nextKeywords);
  };

  const onRemove = (keyword) => {
    const nextKeywords = keywords.filter((t) => t !== keyword);
    setKeywords(nextKeywords);
  };

  const onChange = (text) => {
    if (text.includes(' ')) {
      onSubmit(text);
      return;
    }
    setInput(text);
  };

  const onSubmit = () => {
    console.log('submit active');
    onInsert(input.trim());
    setInput('');
  };
  // useEffect로 태그의 상태가 변경이 되면 다시 불러올 수 있게
  React.useEffect(() => {
    console.log(keywords);
  }, [keywords]);
  // solmin--------------------------------------------------------------------------------------------------------

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
    props.navigation.navigate('InputNewGroupMoreInfo');
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

  // const onKeywordChanged = (keyword) => {
  //   props.groupingCreationMainStore.groupingKeywordChanged(keyword);

  //   props.navigation.setOptions({
  //     headerRight: () => (
  //       <Text
  //         onPress={() => {
  //           onHeaderNextButtonClicked();
  //         }}
  //         style={rightIconStyle(GROUPING_CREATION_VIEW_STATUS.INTERESTS)}
  //       >
  //         다음
  //       </Text>
  //     ),
  //   });
  // };

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
          input={input}
          onChange={onChange}
          keywords={keywords}
        />
      </View>
      <View style={styles.hotKeywordContainer}>
        <Text
          style={{
            fontSize: 12 * WINDOW_SIZE.HEIGHT_WEIGHT,
            fontWeight: 'bold',
          }}
        >
          인기 키워드
        </Text>
      </View>
      <View>
        {/* keywords에서 불러오는것이 아니라 mobx에 상태에서 가져왔으면 좋겠음 */}
        {keywords.map((k) => (
          <TouchableOpacity onPress={() => onRemove(k)}>
            <Text>{k}</Text>
          </TouchableOpacity>
        ))}
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

export default inject('groupingCreationMainStore')(
  observer(InputNewGroupInterestsView),
);
