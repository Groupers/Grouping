import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { WINDOW_SIZE } from '../../../../../constant/WindowSize';
import { TouchableOpacity } from 'react-native-gesture-handler';

const PopularRecommend = () => {
  return (
    <View>
      <View style={styles.textBlock}>
        <TouchableOpacity>
          <Text style={styles.textStyle}>인기 키워드 ></Text>
        </TouchableOpacity>
      </View>
      <View style={styles.carouselBox}>
        <View>
          <View style={styles.sampleStyle} />
        </View>
        <View>
          <Text>같이 다이어트해요</Text>
          <Text>
            6 <Text>삼청동</Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textBlock: {},
  textStyle: { fontSize: 20 * WINDOW_SIZE.WIDTH_WEIGHT, fontWeight: 'bold' },
  sampleStyle: {
    height: 70 * WINDOW_SIZE.WIDTH_WEIGHT,
    width: 70 * WINDOW_SIZE.WIDTH_WEIGHT,
    borderRadius: 35 * (WINDOW_SIZE.HEIGHT_WEIGHT / WINDOW_SIZE.WIDTH_WEIGHT),
    backgroundColor: 'purple',
  },
  carouselBox: {
    marginTop: 18 * WINDOW_SIZE.HEIGHT_WEIGHT,
  },
});

export default PopularRecommend;
