import * as React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { inject, observer } from 'mobx-react';
import Colors from 'react-native/Libraries/NewAppScreen/components/Colors';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { color } from 'react-native-reanimated';
import { GROUPING_CREATION_VIEW_STATUS } from '../../../../../constant/GroupingCreationViewStatus';
import { WINDOW_SIZE } from '../../../../../constant/WindowSize';
import { COLORS } from '../../../../../assets/Colors';
import GroupCreationProgressBar from '../GroupCreationProgressBar';
import { FONT_SIZE } from '../../../../../constant/FontSize';
import { EMPTY_VALUE } from '../../../../../constant/EmptyValue';
import KeywordInput from './KeywordInput';

// eslint-disable-next-line react/prop-types
const NewGroupInterestsInputView = (props) => {
  const [input, setInput] = React.useState('');
  const [keywordList, setKeywordList] = React.useState([]);

  const rightIconStyle = (groupingCreationView) => {
    return {
      marginRight: 15 * WINDOW_SIZE.WIDTH_WEIGHT,
      fontSize: 18 * WINDOW_SIZE.WIDTH_WEIGHT,
      color: props.groupingCreationMainStore.isHeaderRightIconActivated(groupingCreationView)
        ? Colors.black
        : '#999',
    };
  };

  const onHeaderNextButtonClicked = () => {
    props.groupingCreationMainStore.groupingCreationViewChanged(
      GROUPING_CREATION_VIEW_STATUS.DESCRIPTION
    );
    props.navigation.navigate('NewGroupMoreInfoView');
  };

  const onKeywordInserted = (keyword) => {
    // 공백이 빈칸이면 리턴
    if (!keyword) {
      return;
    }
    // 추가된 키워드 리스트에 추가 키워드가 있다면 리턴
    if (keywordList.includes(keyword)) {
      return;
    }
    const nextKeywords = [...keywordList, keyword];
    setKeywordList(nextKeywords);
    props.groupingCreationMainStore.pushKeywordToHashtagList(keyword);
  };

  const onKeywordRemove = (keyword) => {
    const nextKeywords = keywordList.filter((t) => t !== keyword);
    setKeywordList(nextKeywords);
    props.groupingCreationMainStore.deleteKeywordFromHashtagList(keyword);
  };

  const onKeywordChange = (keywordInput) => {
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
    if (keywordInput.includes(' ')) {
      onKeywordSubmit(keywordInput);
      return;
    }
    setInput(keywordInput);
  };

  const onKeywordSubmit = () => {
    console.log('submit active');
    onKeywordInserted(input.trim());
    setInput(EMPTY_VALUE);
  };
  // useEffect로 태그의 상태가 변경이 되면 다시 불러올 수 있게
  React.useEffect(() => {
    if (keywordList.length > 0) {
      props.navigation.setOptions({
        headerRight: () => (
          <Text
            onPress={() => {
              props.navigation.navigate('NewGroupMoreInfoView');
            }}
            style={styles.rightIconStyle}
          >
            다음
          </Text>
        ),
      });
    } else {
      props.navigation.setOptions({
        headerRight: false,
      });
    }
  }, [keywordList]);

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
        <KeywordInput
          textExample="#키워드,"
          input={input}
          onKeywordChange={onKeywordChange}
          keywordList={keywordList}
        />
      </View>
      <View style={{ flexDirection: 'row' }}>
        {/* keywords에서 불러오는것이 아니라 mobx에 상태에서 가져왔으면 좋겠음 */}
        {keywordList.map((keyword) => (
          <View style={styles.keywordListBlock}>
            <TouchableOpacity onPress={() => onKeywordRemove(keyword)}>
              <Text>
                {keyword}
                <Text style={{ color: 'white' }}> x</Text>
              </Text>
            </TouchableOpacity>
          </View>
        ))}
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
      <View style={{ flexDirection: 'row', marginTop: 11 * WINDOW_SIZE.HEIGHT_WEIGHT }}>
        {/* keywords에서 불러오는것이 아니라 mobx에 상태에서 가져왔으면 좋겠음 */}
        {keywordList.map((keyword) => (
          <View style={styles.keywordListBlock}>
            <TouchableOpacity
              onPress={() => onKeywordRemove(keyword)}
              style={{ flexDirection: 'row', alignItems: 'center' }}
            >
              <Text style={{ color: COLORS.WHITE, fontSize: 11 * WINDOW_SIZE.HEIGHT_WEIGHT }}>
                {keyword}
              </Text>
              <Image
                source={require('../../../../../../../Img/tag_ic_x.png')}
                resizeMode="center"
                width={6 * WINDOW_SIZE.HEIGHT_WEIGHT}
                height={6 * WINDOW_SIZE.HEIGHT_WEIGHT}
                style={{ paddingLeft: 4 * WINDOW_SIZE.HEIGHT_WEIGHT }}
              />
            </TouchableOpacity>
          </View>
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
  keywordListBlock: {
    paddingTop: 6 * WINDOW_SIZE.HEIGHT_WEIGHT,
    paddingBottom: 6 * WINDOW_SIZE.HEIGHT_WEIGHT,
    paddingLeft: 12 * WINDOW_SIZE.WIDTH_WEIGHT,
    paddingRight: 12 * WINDOW_SIZE.WIDTH_WEIGHT,
    borderRadius: 24.5 * WINDOW_SIZE.WIDTH_WEIGHT,
    marginRight: 5 * WINDOW_SIZE.WIDTH_WEIGHT,
    backgroundColor: COLORS.SUB_COLOR,
    marginTop: 3 * WINDOW_SIZE.HEIGHT_WEIGHT,
    marginBottom: 3 * WINDOW_SIZE.HEIGHT_WEIGHT,
  },
  rightIconStyle: {
    marginRight: 15 * WINDOW_SIZE.WIDTH_WEIGHT,
    fontSize: 14 * WINDOW_SIZE.WIDTH_WEIGHT,
    color: '#999',
  },
});

export default inject('groupingCreationMainStore')(observer(NewGroupInterestsInputView));
