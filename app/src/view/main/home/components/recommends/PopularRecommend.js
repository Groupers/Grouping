import React from 'react';
import { Text, View, StyleSheet, FlatList, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Icon } from 'react-native-elements';
import { WINDOW_SIZE } from '../../../../../constant/WindowSize';
import { COLORS } from '../../../../../assets/Colors';

const PopularRecommend = () => {
  return (
    <View style={{ marginBottom: 54 * WINDOW_SIZE.HEIGHT_WEIGHT }}>
      <View style={styles.textBlock}>
        <TouchableOpacity style={{ flexDirection: 'row' }}>
          <Text style={styles.textStyle}>지금 내 주변 인기 그룹</Text>
          <Icon name="navigate-next" size={20} color={COLORS.BLACK} />
        </TouchableOpacity>
        <Text style={{ fontSize: 12 * WINDOW_SIZE.HEIGHT_WEIGHT }}>#고양이 #사진 #카페투어</Text>
      </View>
      <FlatList
        data={dataArr}
        renderItem={dataItem}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const dataItem = ({ item }) => (
  <View style={styles.carouselBox}>
    <View>
      <Image
        style={styles.sampleStyle}
        source={{
          uri:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRDcX-y0hQ8j988oKlwkfH4ACUkKbOccRkQqw&usqp=CAU',
        }}
      />
    </View>
    <View>
      <Text
        style={{
          marginTop: 10 * WINDOW_SIZE.HEIGHT_WEIGHT,
          fontSize: 14 * WINDOW_SIZE.HEIGHT_WEIGHT,
          fontWeight: 'bold',
        }}
      >
        {item.title}
      </Text>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Icon name="person" size={14} color={COLORS.FONT_GRAY} />
        <Text style={{ fontSize: 12 * WINDOW_SIZE.HEIGHT_WEIGHT, color: COLORS.FONT_GRAY }}>
          {item.numOfPeople} | {item.location}
        </Text>
      </View>
    </View>
  </View>
);

const dataArr = [
  {
    tag: ['고양이', '사진', '카페투어'],
    title: '인사동 냥집사 모여라',
    numberOfMem: 6,
    location: '삼청동',
    image: '',
  },
  {
    tag: ['고양이', '사진', '카페투어'],
    title: '인사동 냥집사 모여라',
    numberOfMem: 6,
    location: '삼청동',
    image: '',
  },
  {
    tag: ['고양이', '사진', '카페투어'],
    title: '인사동 냥집사 모여라',
    numberOfMem: 6,
    location: '삼청동',
    image: '',
  },
];

const styles = StyleSheet.create({
  textBlock: {},
  textStyle: { fontSize: 20 * WINDOW_SIZE.HEIGHT_WEIGHT, fontWeight: 'bold', color: COLORS.BLACK },
  sampleStyle: {
    height: 144 * WINDOW_SIZE.HEIGHT_WEIGHT,
    width: 144 * WINDOW_SIZE.HEIGHT_WEIGHT,
    borderRadius: 12 * (WINDOW_SIZE.HEIGHT_WEIGHT / WINDOW_SIZE.WIDTH_WEIGHT),
    backgroundColor: 'purple',
  },
  carouselBox: {
    marginTop: 18 * WINDOW_SIZE.HEIGHT_WEIGHT,
    marginRight: 12 * WINDOW_SIZE.WIDTH_WEIGHT,
  },
});

export default PopularRecommend;
