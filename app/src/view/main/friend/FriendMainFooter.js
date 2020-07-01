import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import Colors from 'react-native/Libraries/NewAppScreen/components/Colors';
import { StyleSheet, View, Image } from 'react-native';

class FriendMainFooter extends Component {
  // 컴포넌트가 만들어지고 첫 렌더링을 다 마친 후 실행되는 메소드입니다.
  // 이 안에서 다른 JavaScript 프레임워크를 연동하거나,
  // setTimeout, setInterval 및 AJAX 처리 등을 넣습니다.
  // componentDidMount() {}
  //
  // componentDidUpdate(
  //   prevProps: Readonly<P>,
  //   prevState: Readonly<S>,
  //   snapshot: SS,
  // ) {}

  // 친구목록, 채팅, 모임찾기, 마이페이지

  render() {
    return (
      <View style={styles.footer}>
        <Image
          source={{
            uri: 'https://cdn4.iconfinder.com/data/icons/forgen-phone-settings/48/setting-512.png',
          }}
          style={styles.footerImage}
        />
        <Image
          source={{
            uri: 'https://cdn4.iconfinder.com/data/icons/forgen-phone-settings/48/setting-512.png',
          }}
          style={styles.footerImage}
        />
        <Image
          source={{
            uri: 'https://cdn4.iconfinder.com/data/icons/forgen-phone-settings/48/setting-512.png',
          }}
          style={styles.footerImage}
        />
        <Image
          source={{
            uri: 'https://cdn4.iconfinder.com/data/icons/forgen-phone-settings/48/setting-512.png',
          }}
          style={styles.footerImage}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  footer: {
    height: 60,
    flexDirection: 'row',
    backgroundColor: '#cccccc',
  },
  footerImage: {
    flex: 1,
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 20,
    marginRight: 20,
  },
});

export default FriendMainFooter;
