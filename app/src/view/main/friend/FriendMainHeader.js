import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import Colors from 'react-native/Libraries/NewAppScreen/components/Colors';
import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native';

class FriendMainHeader extends Component {
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
      <View style={styles.body}>
        <Text style={styles.title}>Friend</Text>
        <Image
          source={{
            uri:
              'https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-search-strong-512.png',
          }}
          style={styles.headerImage}
        />
        <Image
          source={{
            uri: 'https://cdn4.iconfinder.com/data/icons/feather/24/message-circle-512.png',
          }}
          style={styles.headerImage}
        />
        <Image
          source={{
            uri:
              'https://cdn3.iconfinder.com/data/icons/linecons-free-vector-icons-pack/32/music-256.png',
          }}
          style={styles.headerImage}
        />
        <Image
          source={{
            uri: 'https://cdn4.iconfinder.com/data/icons/forgen-phone-settings/48/setting-512.png',
          }}
          style={styles.headerImage}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    // backgroundColor: Colors.primary,
    backgroundColor: '#cccccc',
    borderBottomWidth: 0.5,
    borderBottomColor: Colors.white,
    height: 60,
    flexDirection: 'row',
  },
  title: {
    fontSize: 30,
    marginTop: 15,
    flex: 7,
  },
  headerImage: {
    flex: 1,
    padding: 5,
    marginLeft: 8,
    marginTop: 10,
    marginBottom: 5,
  },
});

export default FriendMainHeader;
