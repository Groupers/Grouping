import React from 'react';
import { Text, View, FlatList, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { WINDOW_SIZE } from '../../../../../constant/WindowSize';
import { COLORS } from '../../../../../assets/Colors';

const HotKeyword = () => {
  const popularList = [
    { hashtag: '문학' },
    { hashtag: '취미미술' },
    { hashtag: '캠핑' },
    { hashtag: '아웃도어' },
    { hashtag: '홈트' },
  ];

  const hotKeywordItem = ({ item }) => (
    <View style={{ padding: 10 }}>
      <TouchableOpacity>
        <Image
          source={{
            uri:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRDcX-y0hQ8j988oKlwkfH4ACUkKbOccRkQqw&usqp=CAU',
          }}
          style={{
            width: 70 * WINDOW_SIZE.HEIGHT_WEIGHT,
            height: 70 * WINDOW_SIZE.HEIGHT_WEIGHT,
            borderRadius: 35 * WINDOW_SIZE.HEIGHT_WEIGHT,
            backgroundColor: 'green',
            marginBottom: 8 * WINDOW_SIZE.HEIGHT_WEIGHT,
          }}
        />
        <Text style={{ alignSelf: 'center', fontSize: 12 * WINDOW_SIZE.HEIGHT_WEIGHT }}>
          #{item.hashtag}
        </Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View>
      <Text
        style={{
          fontSize: 20 * WINDOW_SIZE.HEIGHT_WEIGHT,
          color: COLORS.BLACK,
          fontWeight: 'bold',
        }}
      >
        인기 키워드
      </Text>
      <FlatList
        data={popularList}
        renderItem={hotKeywordItem}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{
          height: 116 * WINDOW_SIZE.HEIGHT_WEIGHT,
          marginTop: 12 * WINDOW_SIZE.HEIGHT_WEIGHT,
        }}
      />
    </View>
  );
};

export default HotKeyword;
