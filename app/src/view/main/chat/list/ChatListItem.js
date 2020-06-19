import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';

import 'react-native-gesture-handler';
export {Item} ;


function Item({rowInfo}) {
  return (
    <TouchableOpacity >
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
              12:00
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

const styles = {
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#FFF',
    flexDirection: 'row',
    height: 80,
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
