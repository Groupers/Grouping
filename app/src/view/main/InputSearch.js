import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { StyleSheet, Text, View, SafeAreaView, TextInput } from 'react-native';
import { Icon } from 'react-native-elements';
import { COLORS } from '../../assets/Colors';
import { WINDOW_SIZE } from '../../constant/WindowSize';

class InputSearch extends Component {
  // 컴포넌트가 만들어지고 첫 렌더링을 다 마친 후 실행되는 메소드입니다.
  // 이 안에서 다른 JavaScript 프레임워크를 연동하거나,
  // setTimeout, setInterval 및 AJAX 처리 등을 넣습니다.
  componentDidMount() {}

  componentDidUpdate(
    prevProps: Readonly<P>,
    prevState: Readonly<S>,
    snapshot: SS,
  ) {}

  // 친구목록, 채팅, 모임찾기, 마이페이지

  render() {
    return (
      <View style={styles.body}>
        <View style={styles.iconWrapper}>
          <Icon
            style={styles.icon}
            size={24}
            name="search"
            type="feather"
            color={COLORS.MAIN_COLOR}
          />
        </View>
        <View style={styles.searchWrapper}>
          <TextInput
            // onTouchStart={() => this.props.onFocus()}
            editable={this.props.isActivated}
            placeholder="검색"
            style={styles.search}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#FFF',
    flexDirection: 'row',
    marginRight: 5 * WINDOW_SIZE.HEIGHT_WEIGHT,
    borderRadius: 10,
  },

  iconWrapper: {},
  icon: {
    padding: 5,
    borderEndWidth: 1,
    borderEndColor: COLORS.MAIN_COLOR,
  },

  searchWrapper: {
    flex: 1,
    borderBottomEndRadius: 10,
    borderTopEndRadius: 10,
    backgroundColor: '#FFF',
  },
  search: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    fontSize: 24 * WINDOW_SIZE.WIDTH_WEIGHT,
  },
});

export default InputSearch;
