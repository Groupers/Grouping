import React from 'react';
import { Text, View, StyleSheet, FlatList, Image, ImageBackground } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Icon } from 'react-native-elements';
import { WINDOW_SIZE } from '../../../../../constant/WindowSize';
import { COLORS } from '../../../../../assets/Colors';

const HotKeywordRecommend = () => {
  const HotKeywordGroup = [
    { title: '소수정예 카페투어', location: '계동', numOfPeople: 5 },
    { title: '여자들끼리 디저트 뿌시기', location: '을지동', numOfPeople: 8 },
    { title: '미술관 옆 카페', location: '회현동', numOfPeople: 14 },
  ];

  const KeywordBanner = () => {
    return (
      <View
        style={{
          paddingTop: 30 * WINDOW_SIZE.HEIGHT_WEIGHT,
          paddingBottom: 8 * WINDOW_SIZE.HEIGHT_WEIGHT,
        }}
      >
        <ImageBackground
          source={require('../../../../../../../Img/img.png')}
          style={{
            height: 120 * WINDOW_SIZE.HEIGHT_WEIGHT,
            paddingTop: 14 * WINDOW_SIZE.HEIGHT_WEIGHT,
            paddingLeft: 16 * WINDOW_SIZE.HEIGHT_WEIGHT,
          }}
          borderRadius={12 * WINDOW_SIZE.HEIGHT_WEIGHT}
        >
          <Text style={{ fontSize: 12 * WINDOW_SIZE.HEIGHT_WEIGHT, color: COLORS.WHITE }}>
            요즘 이 키워드가 뜨고 있어요
          </Text>
          <View style={{ height: 30 * WINDOW_SIZE.HEIGHT_WEIGHT, justifyContent: 'center' }}>
            <Text
              style={{
                fontSize: 20 * WINDOW_SIZE.HEIGHT_WEIGHT,
                color: COLORS.WHITE,
                fontWeight: 'bold',
              }}
            >
              #카페투어
            </Text>
          </View>
        </ImageBackground>
      </View>
    );
  };

  const HotKeywordGroupItem = ({ item, index }) => (
    <View
      flexDirection="row"
      style={{
        alignSelf: 'center',
        height: 66 * WINDOW_SIZE.HEIGHT_WEIGHT,
        justifyContent: 'center',
      }}
    >
      <Image
        source="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRDcX-y0hQ8j988oKlwkfH4ACUkKbOccRkQqw&usqp=CAU"
        style={{
          backgroundColor: 'yellow',
          borderRadius: 12 * WINDOW_SIZE.HEIGHT_WEIGHT,
          width: 50 * WINDOW_SIZE.HEIGHT_WEIGHT,
          height: 50 * WINDOW_SIZE.HEIGHT_WEIGHT,
          alignSelf: 'center',
        }}
      />
      <View
        style={
          index === 0
            ? {
                flex: 1,
                marginLeft: 16 * WINDOW_SIZE.HEIGHT_WEIGHT,
                paddingBottom: 14 * WINDOW_SIZE.HEIGHT_WEIGHT,
                paddingTop: 14 * WINDOW_SIZE.HEIGHT_WEIGHT,
                borderColor: COLORS.FONT_GRAY,
                width: 200 * WINDOW_SIZE.WIDTH_WEIGHT,
              }
            : {
                flex: 1,
                marginLeft: 16 * WINDOW_SIZE.HEIGHT_WEIGHT,
                paddingBottom: 14 * WINDOW_SIZE.HEIGHT_WEIGHT,
                paddingTop: 14 * WINDOW_SIZE.HEIGHT_WEIGHT,
                borderColor: COLORS.FONT_GRAY,
                width: 200 * WINDOW_SIZE.WIDTH_WEIGHT,
                borderTopWidth: 1 * WINDOW_SIZE.HEIGHT_WEIGHT,
              }
        }
      >
        <Text
          style={{
            fontSize: 14 * WINDOW_SIZE.HEIGHT_WEIGHT,
            fontWeight: 'bold',
            paddingBottom: 4 * WINDOW_SIZE.HEIGHT_WEIGHT,
          }}
        >
          {item.title}
        </Text>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Image
            source={require('../../../../../../../Img/ic_people.png')}
            style={{ height: 18 * WINDOW_SIZE.HEIGHT_WEIGHT, resizeMode: 'contain' }}
          />
          <Text style={styles.carouselTitle}>{item.numberOfMem}</Text>
          <Text style={styles.carouselTitle}>Ι</Text>
          <Text style={styles.carouselTitle}>{item.location}</Text>
        </View>
      </View>
    </View>
  );

  return (
    <View
      style={{
        marginRight: 32 * WINDOW_SIZE.WIDTH_WEIGHT,
        marginLeft: 32 * WINDOW_SIZE.WIDTH_WEIGHT,
      }}
    >
      <KeywordBanner />
      <FlatList data={HotKeywordGroup} renderItem={HotKeywordGroupItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  carouselTitle: {
    fontSize: 12 * WINDOW_SIZE.HEIGHT_WEIGHT,
    color: COLORS.BLACK,
    lineHeight: 18 * WINDOW_SIZE.HEIGHT_WEIGHT,
    opacity: 0.4,
    marginRight: 8 * WINDOW_SIZE.WIDTH_WEIGHT,
  },
});

export default HotKeywordRecommend;
