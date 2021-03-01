import React from 'react';
import { StyleSheet, View, Text, Image, FlatList } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { inject, observer } from 'mobx-react';
import { Icon } from 'react-native-elements';
import { WINDOW_SIZE } from '../../../../../constant/WindowSize';
import { COLORS } from '../../../../../assets/Colors';
import { FONT_SIZE } from '../../../../../constant/FontSize';

const PersonalRecommend = (props) => {
  return (
    <View
      style={{
        marginBottom: 54 * WINDOW_SIZE.HEIGHT_WEIGHT,
        width: '100%',
      }}
    >
      <View style={styles.textBlock}>
        <TouchableOpacity style={{ flexDirection: 'row' }}>
          {/* 추후변경 */}
          <Text style={styles.textStyle}>연수님 맞춤 추천 그룹</Text>
          <Image
            style={{
              height: 22 * WINDOW_SIZE.HEIGHT_WEIGHT,
              width: 22 * WINDOW_SIZE.HEIGHT_WEIGHT,
              alignSelf: 'center',
            }}
            source={require('../../../../../../../Img/component_ic_middle_ic_more_1.png')}
          />
        </TouchableOpacity>
      </View>
      <FlatList
        data={dataArr}
        renderItem={personalItem}
        horizontal
        showsHorizontalScrollIndicator={false}
        ListHeaderComponent={<View width={32 * WINDOW_SIZE.WIDTH_WEIGHT} />}
        ListFooterComponent={<View width={32 * WINDOW_SIZE.WIDTH_WEIGHT} />}
      />
    </View>
  );
};

class RecmmendGroupItem {
  tag;

  title;

  numberOfMem;

  location;

  image;

  constructor(data = {}) {
    Object.assign(this, data);
  }
}

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

const personalItem = ({ item }) => (
  <View style={styles.carouselBox}>
    <View style={{ marginBottom: 10 * WINDOW_SIZE.HEIGHT_WEIGHT }}>
      <View style={styles.sampleStyle}>
        <Image
          style={{
            position: 'absolute',
            right: 0,
            bottom: 0,
            width: 230 * WINDOW_SIZE.HEIGHT_WEIGHT,
            height: 132 * WINDOW_SIZE.HEIGHT_WEIGHT,
            borderRadius: 12 * WINDOW_SIZE.HEIGHT_WEIGHT,
            marginTop: 12 * WINDOW_SIZE.HEIGHT_WEIGHT,
          }}
          source={{
            uri:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRDcX-y0hQ8j988oKlwkfH4ACUkKbOccRkQqw&usqp=CAU',
          }}
        />
        <View
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: 108 * WINDOW_SIZE.HEIGHT_WEIGHT,
            height: 124 * WINDOW_SIZE.HEIGHT_WEIGHT,
            borderRadius: 12 * WINDOW_SIZE.HEIGHT_WEIGHT,
            padding: 12 * WINDOW_SIZE.HEIGHT_WEIGHT,
            backgroundColor: '#ff6a4ddd',
          }}
        >
          <Text
            style={{
              color: 'white',
              fontSize: 14 * WINDOW_SIZE.HEIGHT_WEIGHT,
              fontWeight: 'bold',
            }}
            numberOfLines={1}
          >
            #{item.tag[0]}
          </Text>
          <Text
            style={{
              color: 'white',
              fontSize: 14 * WINDOW_SIZE.HEIGHT_WEIGHT,
              fontWeight: 'bold',
            }}
            numberOfLines={1}
          >
            #{item.tag[1]}
          </Text>
        </View>
      </View>
    </View>
    <Text
      style={{
        fontSize: FONT_SIZE.INPUT_TEXT,
        lineHeight: 18 * WINDOW_SIZE.HEIGHT_WEIGHT,
        color: COLORS.BLACK,
      }}
    >
      {item.title}
    </Text>
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <Icon
        name="person"
        size={14}
        color={COLORS.FONT_GRAY}
        marginRight={1 * WINDOW_SIZE.WIDTH_WEIGHT}
      />
      <Text style={styles.carouselTitle}>{item.numberOfMem}</Text>
      <Text style={styles.carouselTitle}>Ι</Text>
      <Text style={styles.carouselTitle}>{item.location}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  textBlock: {
    marginLeft: 32 * WINDOW_SIZE.WIDTH_WEIGHT,
  },
  textStyle: { fontSize: 20 * WINDOW_SIZE.HEIGHT_WEIGHT, fontWeight: 'bold', color: 'black' },
  sampleStyle: {
    height: 144 * WINDOW_SIZE.HEIGHT_WEIGHT,
    width: 264 * WINDOW_SIZE.HEIGHT_WEIGHT,
    backgroundColor: 'white',
  },
  carouselBox: {
    marginTop: 18 * WINDOW_SIZE.HEIGHT_WEIGHT,
    marginRight: 12 * WINDOW_SIZE.WIDTH_WEIGHT,
  },
  carouselTitle: {
    fontSize: 12 * WINDOW_SIZE.HEIGHT_WEIGHT,
    color: COLORS.BLACK,
    lineHeight: 18 * WINDOW_SIZE.HEIGHT_WEIGHT,
    opacity: 0.4,
    marginRight: 8 * WINDOW_SIZE.WIDTH_WEIGHT,
  },
});

export default inject('userStore')(observer(PersonalRecommend));
