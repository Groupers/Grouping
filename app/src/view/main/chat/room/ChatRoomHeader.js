import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native';
import { Icon } from 'react-native-elements';

class ChatRoomHeader extends React.Component {
  componentDidMount() {}

  componentDidUpdate(prevProps: Readonly<P>, prevState: Readonly<S>, snapshot: SS) {}

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <SafeAreaView style={styles.header_safe_area}>
        <View style={styles.header}>
          <View style={styles.header_inner}>
            <View>
              <Icon
                style={styles.leftIconStyle}
                size={26}
                name="chevron-left"
                type="feather"
                color="black"
                onPress={() => {
                  this.props.backButtonClicked();
                }}
              />
            </View>
            <View>
              <Text style={styles.chat_room_name}>Olaf</Text>
            </View>
            <View style={styles.option}>
              <Icon
                style={styles.leftIconStyle}
                size={23}
                name="search"
                type="feather"
                color="black"
                onPress={() => {
                  this.props.backButtonClicked();
                }}
              />
              <Icon
                style={styles.leftIconStyle}
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
      </SafeAreaView>
    );
  }
}

export default ChatRoomHeader;

const styles = StyleSheet.create({
  header_safe_area: {
    backgroundColor: '#B0C4DE',
    elevation: 3,
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
    fontSize: 15,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
