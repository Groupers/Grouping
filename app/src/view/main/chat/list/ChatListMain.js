import * as React from 'react';
import {Button, View, Text, Image, FlatList, ActivityIndicator} from 'react-native';
import {Item} from './ChatListItem';

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

class ChatListArea extends React.Component {
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

  fetchChatRoomInfo = () => {
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
              flex={1}>
            <FlatList
                style={styles.flexlist}
                data={this.state.data}
                // data={chatItem}
                keyExtractor={(x, i) => i}
                onEndReached={() => this.fetchChatRoomInfo()}
                onEndReachedThreshold={0}
                ListFooterComponent={() =>
                    this.state.loading ? null : (
                        <ActivityIndicator size="large" animating />
                    )
                }
                renderItem={
                  ({item}) => (
                      <Item rowInfo={`${item}`} />
                  )
                  // <ChatListRow rowInfo={} />
                }
            />
          </View>
        </>
    );
  }
}

export class ChatListMain extends React.Component {
  render() {
    return (
        <>
          <AdArea />
          <ChatListArea />
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
  adArea: {
    height: 70,
      backgroundColor: 'white',
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
};
