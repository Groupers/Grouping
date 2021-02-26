import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { WINDOW_SIZE } from '../../../../../constant/WindowSize';

// carousel menu

const JoinedGroup = ({ navigateTo }) => {
  const dataArr = [
    {
      tag: ['다이어트', '운동', '직장인'],
      title: '출근러들 같이 다이어트',
      numberOfMem: 6,
      location: '삼청동',
      image: '',
    },
    {
      tag: ['다이어트', '운동', '직장인'],
      title: '출근러들 같이 다이어트',
      numberOfMem: 6,
      location: '삼청동',
      image: '',
    },
    {
      tag: ['다이어트', '운동', '직장인'],
      title: '출근러들 같이 다이어트',
      numberOfMem: 6,
      location: '삼청동',
      image: '',
    },
  ];

  return (
    <View>
      <FlatList data={dataArr} renderItem={ChannelItem} />
    </View>
  );
};

const ChannelItem = () => {
  return (
    <View
      style={{
        width: 312 * WINDOW_SIZE.WIDTH_WEIGHT,
        height: 239 * WINDOW_SIZE.HEIGHT_WEIGHT,
        backgroundColor: 'yellow',
      }}
    >
      <Text>item</Text>
    </View>
  );
};

const style = StyleSheet.create({
  joinedGroupHeaderBlock: {
    flexDirection: 'row',
  },
});

export default JoinedGroup;
