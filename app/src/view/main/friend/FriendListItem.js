import React, {useState} from 'react';
import axios from 'axios';
import {ScrollView, StyleSheet, Text, View, Dimensions, Image, FlatList, TouchableOpacity} from 'react-native';
import { observable } from 'mobx';
import {inject, observer} from "mobx-react";


@inject('friendListStore')
@observer
class FriendListItem extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.contentContainer}>
        <FlatList
            data={this.props.friendListStore.friendList}
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
});

export default FriendListItem;