import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import Colors from 'react-native/Libraries/NewAppScreen/components/Colors';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, FlatList } from 'react-native';
import GroupingMainHeader from './GroupingMainHeader';
import { GROUPING_VIEW_STATUS } from '../../../constant/GroupingViewStatus';
import GroupingCreationMain from './creation/GroupingCreationMain';

@inject('groupingStore')
@observer
class GroupingMain extends Component {
  // 컴포넌트가 만들어지고 첫 렌더링을 다 마친 후 실행되는 메소드입니다.
  // 이 안에서 다른 JavaScript 프레임워크를 연동하거나,
  // setTimeout, setInterval 및 AJAX 처리 등을 넣습니다.
  componentDidMount() {}

  componentDidUpdate(prevProps: Readonly<P>, prevState: Readonly<S>, snapshot: SS) {}

  // 친구목록, 채팅, 모임찾기, 마이페이지

  onKeywordSearchClicked() {
    this.props.groupingStore.changeView(GROUPING_VIEW_STATUS.KEYWORD_SEARCH);
  }

  onSearchViewBackButtonClicked() {
    this.props.groupingStore.changeView(GROUPING_VIEW_STATUS.NONE);
  }

  onGroupingCreationClicked() {
    this.props.groupingStore.changeView(GROUPING_VIEW_STATUS.GROUPING_CREATION);
  }

  onGroupingCreationBackButtonClicked() {
    this.props.groupingStore.changeView(GROUPING_VIEW_STATUS.NONE);
  }

  render() {
    let view = (
      <View>
        <GroupingMainHeader
          onSearchViewBackButtonClicked={this.onSearchViewBackButtonClicked.bind(this)}
          onGroupingCreationClicked={this.onGroupingCreationClicked.bind(this)}
          isActivated={this.props.groupingStore.isKeywordSearchActivated}
          onKeywordSearchClicked={this.onKeywordSearchClicked.bind(this)}
        />
        <FlatList
          onScrollBeginDrag={(event) => console.log('hello drag')}
          data={DATA}
          renderItem={({ item }) => <Item title={item.title} />}
          keyExtractor={(item) => item.id}
        />
      </View>
    );

    if (this.props.groupingStore.groupingViewStatus === GROUPING_VIEW_STATUS.GROUPING_CREATION) {
      view = (
        <GroupingCreationMain
          backButtonClicked={this.onGroupingCreationBackButtonClicked.bind(this)}
        />
      );
    }

    return <SafeAreaView style={styles.body}>{view}</SafeAreaView>;
  }
}

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
];

function Item({ title }) {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: Colors.primary,
    flex: 1,
  },

  scrollView: {
    backgroundColor: Colors.primary,
    flex: 1,
  },
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default GroupingMain;
