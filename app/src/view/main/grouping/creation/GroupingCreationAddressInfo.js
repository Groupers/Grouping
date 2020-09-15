import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import Colors from 'react-native/Libraries/NewAppScreen/components/Colors';
import {
  StyleSheet,
  View,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import AddressSearchTextView from '../../AddressSearchTextView';
import AddressSearchResultView from '../../AddressSearchResultView';
import { GROUPING_CREATION_VIEW_STATUS } from '../../../../constant/GroupingCreationViewStatus';

@inject('groupingCreationMainStore')
@observer
class GroupingCreationAddressInfo extends Component {
  // 컴포넌트가 만들어지고 첫 렌더링을 다 마친 후 실행되는 메소드입니다.
  // 이 안에서 다른 JavaScript 프레임워크를 연동하거나,
  // setTimeout, setInterval 및 AJAX 처리 등을 넣습니다.

  componentDidMount() {}

  componentDidUpdate(prevProps: Readonly<P>, prevState: Readonly<S>, snapshot: SS) {}

  async onAddressKeywordChanged(keyword) {
    console.log(keyword);
    await this.props.groupingCreationMainStore.groupingAddressSearchKeywordChanged(keyword);
  }

  onAddressSelected(address) {
    this.props.groupingCreationMainStore.groupingAddressSelected(address);
    this.props.groupingCreationMainStore.groupingCreationViewChanged(
      GROUPING_CREATION_VIEW_STATUS.EXTRA_INFO
    );
    this.props.navigation.navigate('groupingCreationExtraInfo');
  }

  render() {
    return (
      // <KeyboardAvoidingView
      //   behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      //   style={styles.body}
      // >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        {/* <View style={styles.inner}> */}
        <View style={styles.contentContainer}>
          <AddressSearchResultView
            onClick={this.onAddressSelected.bind(this)}
            addressList={this.props.groupingCreationMainStore.groupingAddressSearchResult}
          />
        </View>
        {/* </View> */}
      </TouchableWithoutFeedback>
      // </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: Colors.primary,
    // alignItems: 'center',
    // justifyContent: 'center',
    width: '100%',
  },

  // inner: {
  //   flex: 1,
  //   backgroundColor: Colors.primary,
  //   flexDirection: 'column',
  //   paddingTop: 50,
  //   width: '100%',
  // },
  contentContainer: {
    flex: 1,
    width: '100%',
  },
  searchContainer: {
    width: '100%',
  },

  leftIconStyle: {
    marginLeft: 15,
  },
});

export default GroupingCreationAddressInfo;
