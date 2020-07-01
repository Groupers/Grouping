import React, { Component } from 'react';
import Colors from 'react-native/Libraries/NewAppScreen/components/Colors';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Icon } from 'react-native-elements';

class ChatMainHeader extends Component {
  componentDidMount() {}

  componentDidUpdate(prevProps: Readonly<P>, prevState: Readonly<S>, snapshot: SS) {}

  render() {
    return (
      <View style={styles.body}>
        <View paddingRigth={8} paddingLeft={8}>
          <View style={styles.titleBar}>
            <Text style={styles.title}>채팅</Text>
            <View flex={1} />
            <Icon
              style={styles.searchIcon}
              size={26}
              name="search"
              type="feather"
              color="black"
              onPress={() => {
                this.props.backButtonClicked();
              }}
            />
            <Icon
              style={styles.settingIcon}
              size={26}
              name="menu"
              type="feather"
              color="black"
              onPress={() => {
                this.props.backButtonClicked();
              }}
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: Colors.primary,
    borderBottomWidth: 0.5,
    borderBottomColor: Colors.white,
    height: 60,
    paddingHorizontal: 8,
  },
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#FFF',
    flexDirection: 'row',
    height: 80,
  },
  titleBar: {
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  title: {
    fontSize: 20,
    color: 'black',
    flex: 1,
    fontWeight: 'bold',
  },
  searchIcon: {},
  settingIcon: {},
});

export default ChatMainHeader;
