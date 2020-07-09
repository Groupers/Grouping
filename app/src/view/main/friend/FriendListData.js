import React, {useState} from 'react';
import axios from 'axios';
import {ScrollView, StyleSheet, Text, View, Dimensions, Image, FlatList, TouchableOpacity} from 'react-native';
import { observable } from 'mobx';
import { SERVER_URL } from '../../../constant/HttpProperty';
import {inject, observer} from "mobx-react";
import UserStore from "../../../store/UserStore";
import UserRepository from "../../../repository/UserRepository";
import GroupingUserDto from "../../../dto/GroupingUserDto";
import UserTable from "../../../table/UserTable";

// const TARGET_URL = `http://ec2-3-34-97-95.ap-northeast-2.compute.amazonaws.com/v1/users/`;

@inject('friendListStore')
@observer
class FriendListData extends React.Component {

  constructor(props) {
    super(props);
  }

  // iconSrc = 'https://cdn4.iconfinder.com/data/icons/forgen-phone-settings/48/setting-512.png';


  render() {
    return (
      <View style={styles.contentContainer}>
        <FlatList
            data={this.props.friendListStore.userList}
            keyExtractor={(x, i) => i}
            renderItem={({item})=>(
                <TouchableOpacity onPress={() => {}}>
                  <View style={styles.itemContainer}>
                    <Text>{item.name}</Text>
                  </View>
                </TouchableOpacity>
          )} />
      </View>
    );
  }

  // Item({ item }) {
  //   return (
  //       <TouchableOpacity onPress={() => {}}>
  //         <View style={styles.itemContainer}>
  //           <Text>{item.name}</Text>
  //         </View>
  //       </TouchableOpacity>
  //   );
  // }

}



const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    minWidth: 1,
    minHeight: 1,
  },container: {
    flex: 1,
    backgroundColor: 'gold',
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  adArea: {
    height: 70,
    backgroundColor: 'tomato',
  },
  ad: {
    height: 70,
    borderRadius: 10,
    margin: 5,
  },
  listContainer: {
    backgroundColor: 'tomato',
    flex: 1,
    height: '100%',
  },
  itemContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#FFF',
    flexDirection: 'row',
    height: 80,
  },
  chatRoomImage: {
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
  numberOfParticipants: {
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
});

export default FriendListData;