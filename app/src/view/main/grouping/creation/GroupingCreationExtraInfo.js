import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import Colors from 'react-native/Libraries/NewAppScreen/components/Colors';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import { Icon } from 'react-native-elements';
import { GROUPING_CREATION_VIEW_STATUS } from '../../../../constant/GroupingCreationViewStatus';
import LabelView from '../../../sign/LabelView';
import KeywordInputTextView from './KeywordInputTextView';

@inject('groupingCreationMainStore')
@observer
class GroupingCreationExtraInfo extends Component {
  // 컴포넌트가 만들어지고 첫 렌더링을 다 마친 후 실행되는 메소드입니다.
  // 이 안에서 다른 JavaScript 프레임워크를 연동하거나,
  // setTimeout, setInterval 및 AJAX 처리 등을 넣습니다.

  componentDidMount() {
    this.props.navigation.setOptions({
      headerLeft: () => (
        <Icon
          style={styles.leftIconStyle}
          size={26}
          name="chevron-left"
          type="feather"
          color="#fff"
          onPress={() => {
            this.onHeaderBackButtonClicked();
          }}
        />
      ),
    });
  }

  rightIconStyle(groupingCreationView) {
    return {
      marginRight: 15,
      fontSize: 18,
      color: this.props.groupingCreationMainStore.isHeaderRightIconActivated(
        groupingCreationView
      )
        ? Colors.white
        : '#999'
    };
  }

  componentDidUpdate(
    prevProps: Readonly<P>,
    prevState: Readonly<S>,
    snapshot: SS
  ) {}

  onHeaderBackButtonClicked() {
    this.props.groupingCreationMainStore.groupingCreationViewChanged(
      GROUPING_CREATION_VIEW_STATUS.KEYWORD
    );
    this.props.navigation.navigate('groupingCreationKeyword');
  }

  onSetLocationButtonClicked() {
    this.props.navigation.navigate('groupingCreationMapInfo');
  }

  // 친구목록, 채팅, 모임찾기, 마이페이지

  render() {
    return (
      <KeyboardAvoidingView
        behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
        style={styles.body}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.inner}>
            <View style={styles.contentContainer}>
              <View style={styles.numberOfMemberContainer}>
                <Text>최대 인원</Text>
              </View>
              <View style={styles.registerLocationContainer}>
                <Text>위치</Text>
                <Icon
                  style={styles.registerLocationIcon}
                  size={26}
                  name="chevron-right"
                  type="feather"
                  color="#fff"
                  onPress={this.onSetLocationButtonClicked.bind(this)}
                />
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: Colors.primary,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  },

  inner: {
    flex: 1,
    backgroundColor: Colors.primary,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  },
  contentContainer: {
    flex: 5,
    width: '100%'
  },
  bottomContainer: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 30,
  },
  leftIconStyle: {
    marginLeft: 15,
  },
  numberOfMemberContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  numberOfMemberIcon: {},

  registerLocationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  registerLocationIcon: {}
});

export default GroupingCreationExtraInfo;
