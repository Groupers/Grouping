import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import Colors from 'react-native/Libraries/NewAppScreen/components/Colors';
import { StyleSheet, Text, View, SafeAreaView, TextInput, Image } from 'react-native';
import { Icon } from 'react-native-elements';

class ChatRoomFooter extends React.Component {
  componentDidMount() {}

  componentDidUpdate(prevProps: Readonly<P>, prevState: Readonly<S>, snapshot: SS) {}

  constructor(props) {
    super(props);

    this.state = {
      isFocused: false,
      keyword: 'what the fuck',
    };
  }

  render() {
    return (
      <>
        <SafeAreaView style={styles.header_safe_area}>
          <View style={styles.header}>
            <View style={styles.header_inner}>
              <View>
                <Image
                  // source={require('../Assets/back.png')}
                  style={{ width: 25, height: 25 }}
                />
              </View>
              <View>
                <TextInput
                  clearButtonMode="always"
                  value={this.state.keyword}
                  onChangeText={(value) => this.setState({ keyword: value })}
                  style={styles.input_view}
                />
              </View>
              <View>
                <Image
                  // source={require('../Assets/back.png')}
                  style={{ width: 25, height: 25 }}
                />
              </View>
              <View>
                <Image
                  // source={require('../Assets/back.png')}
                  style={{ width: 25, height: 25 }}
                />
              </View>
            </View>
          </View>
        </SafeAreaView>
      </>
    );
  }
}

export default ChatRoomFooter;

const styles = StyleSheet.create({
  header_safe_area: {
    zIndex: 1000,
  },
  header: {
    height: 50,
    paddingHorizontal: 16,
  },
  header_inner: {
    flex: 1,
    overflow: 'hidden',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'relative',
  },
  chat_room_name: {
    fontWeight: 'bold',
    fontSize: 18,
    marginLeft: -180,
  },
  input_view: {
    fontSize: 15,
  },
});
