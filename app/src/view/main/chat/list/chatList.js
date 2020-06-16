import React, {Component} from 'react';
import {
  View,
  Text,
  Dimensions,
  Image,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
// import {DetailsScreen} from './src/detail';
import 'react-native-gesture-handler';

function AdArea() {
  return (
    <>
      <View style={styles.adArea}>
        <Image
          style={styles.ad}
          source={{
            uri:
              'https://ssl.pstatic.net/tveta/libs/1281/1281372/38a98b76cb5b87ad613d_20200611113550630.jpg',
          }}
        />
      </View>
    </>
  );
}

function Item({rowInfo}) {
  return (
    <TouchableOpacity>
      {/*<Text style={styles.title}>{rowInfo}</Text>*/}
      <View style={styles.container}>
        <Image
          style={styles.chatRoomImg}
          alt={{
            uri:
              'https://data.ac-illust.com/data/thumbnails/32/329084b55b541c0382ae52913bde83c3_t.jpeg',
          }}
          source={{uri: '{rowInfo.chatRoomImg}'}}
        />
        <View flexDirection="column" flex={1} padding={5}>
          <View flexDirection="row">
            <Text
              style={styles.chatRoomTitle}
              numberOfLines={1}
              ellipsizeMode={'tail'}>
              Title
              {/*{rowInfo.chatRoomTitle}*/}
            </Text>
            <Text style={styles.numOfParti}>5</Text>
            <Text style={styles.lastMessageTime}>
              {/*{rowInfo.lastMessageTime}*/}
              Hello
            </Text>
          </View>
          <View flexDirection="row" alignItems={'center'}>
            <Text
              style={styles.lastMessage}
              numberOfLines={1}
              ellipsizeMode={'tail'}>
              {' '}
              {/*{rowInfo.lastMessage}{' '}*/}
              lastMessage
            </Text>
            {/*<Text style={styles.numOfNewMessages}>*/}
            {/*  /!*{rowInfo.numOfNewMessages}*!/*/}
            {/*</Text>*/}
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

function ChatListRow({rowInfo}) {
  return (
    <>
      <View style={styles.container}>
        <Image
          style={styles.chatRoomImg}
          alt={{
            uri:
              'https://data.ac-illust.com/data/thumbnails/32/329084b55b541c0382ae52913bde83c3_t.jpeg',
          }}
          source={{uri: '{rowInfo.chatRoomImg}'}}
        />
        <View flexDirection="column" flex={1} padding={5}>
          <View flexDirection="row">
            <Text
              style={styles.chatRoomTitle}
              numberOfLines={1}
              ellipsizeMode={'tail'}>
              {rowInfo.chatRoomTitle}
            </Text>
            <Text style={styles.numOfParti}>{rowInfo.numOfParti}</Text>
            <Text style={styles.lastMessageTime}>
              {rowInfo.lastMessageTime}
            </Text>
          </View>
          <View flexDirection="row" alignItems={'center'}>
            <Text
              style={styles.lastMessage}
              numberOfLines={1}
              ellipsizeMode={'tail'}>
              {rowInfo.lastMessage}
            </Text>
            <Text style={styles.numOfNewMessages}>
              {rowInfo.numOfNewMessages}
            </Text>
          </View>
        </View>
      </View>
    </>
  );
}

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Stack = createStackNavigator();

class First extends React.Component {
  state = {
    data: [],
    page: 0,
    loading: false,
  };

  componentWillMount() {
    this.fetchData();
  }

  fetchData = async () => {
    const response = await fetch('https://randomuser.me/api?results=500');
    const json = await response.json();
    this.setState({data: json.results});
  };

  handleEnd = () => {
    this.setState(
      state => ({page: this.state.page + 1}, () => this.fetchData()),
    );
  };

  render() {
    return (
      <>
        <View
          padding={5}
          flexDirection={'column'}
          width={windowWidth}
          height={windowHeight}>
          {/*<TitleBar />*/}
          <FlatList
            style={styles.flexlist}
            data={this.state.data}
            // data={chatItem}
            keyExtractor={(x, i) => i}
            onEndReached={() => this.handleEnd()}
            onEndReachedThreshold={0}
            ListFooterComponent={() =>
              this.state.loading ? null : (
                <ActivityIndicator size="large" animating />
              )
            }
            renderItem={
              ({item}) => (
                <Item rowInfo={`${item}`} />
                // <Text style={styles.container}>{`${item.name.first} ${
                //   item.name.last
                // }`}</Text>
              )
              // <ChatListRow rowInfo={} />
            }
          />
        </View>
      </>
    );
  }
}

export class ChatList extends React.Component {
  render() {
    return (
      <>
        <AdArea />
        <First />
      </>
    );
  }
}

const styles = {
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
    paddingLeft: 10,
    paddingRigth: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    color: 'black',
    flex: 1,
    fontWeight: 'bold',
  },
  titleImg: {
    width: 26,
    height: 26,
    marginRight: 8,
  },
  adArea: {
    height: 70,
  },
  ad: {
    height: 70,
    borderRadius: 10,
    margin: 5,
  },
  flexlist: {
    flex: 1,
    marginTop: 5,
  },
  chatRoomImg: {
    width: 65,
    height: 65,
    backgroundColor: '#eee',
    alignItems: 'flex-start',
    borderRadius: 25,
    marginRight: 5,
    borderWidth: 1,
    borderColor: 'black',
  },
  chatRoomTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    flex: 1,
  },
  numOfParti: {
    fontSize: 14,
    backgroundColor: '#eee',
    borderRadius: 20,
    padding: 3,
    marginRight: 5,
    marginLeft: 5,
    height: 28,
  },
  lastMessageTime: {
    color: 'gray',
    fontSize: 12,
    marginTop: 3,
  },
  lastMessage: {
    color: 'gray',
    flex: 1,
  },
  numOfNewMessages: {
    color: 'white',
    backgroundColor: 'red',
    borderRadius: 15,
    justifyContent: 'center',
    padding: 3,
    fontSize: 12,
  },
  imagesForTitleBar: {},
};
