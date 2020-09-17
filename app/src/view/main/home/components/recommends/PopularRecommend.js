import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Icon } from 'react-native-elements';
import { WINDOW_SIZE } from '../../../../../constant/WindowSize';
import { COLORS } from '../../../../../assets/Colors';

const PopularRecommend = () => {
  return (
    <View>
      <View style={styles.textBlock}>
        <TouchableOpacity style={{ flexDirection: 'row' }}>
          <Text style={styles.textStyle}>지금 내 주변 인기 그룹</Text>
          <Icon name="keyboard_arrow_right" />
        </TouchableOpacity>
      </View>
      <View style={styles.carouselBox}>
        <View>
          <View style={styles.sampleStyle} />
        </View>
        <View>
          <Text
            style={{
              marginTop: 10 * WINDOW_SIZE.HEIGHT_WEIGHT,
              fontSize: 14 * WINDOW_SIZE.HEIGHT_WEIGHT,
              fontWeight: 'bold',
            }}
          >
            인사동 냥집사 모여라
          </Text>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Icon name="person" size={14} color={COLORS.FONT_GRAY} />
            <Text style={{ fontSize: 12 * WINDOW_SIZE.HEIGHT_WEIGHT, color: COLORS.FONT_GRAY }}>
              삼청동
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textBlock: {},
  textStyle: { fontSize: 20 * WINDOW_SIZE.HEIGHT_WEIGHT, fontWeight: 'bold', color: COLORS.BLACK },
  sampleStyle: {
    height: 144 * WINDOW_SIZE.HEIGHT_WEIGHT,
    width: 144 * WINDOW_SIZE.HEIGHT_WEIGHT,
    borderRadius: 35 * (WINDOW_SIZE.HEIGHT_WEIGHT / WINDOW_SIZE.WIDTH_WEIGHT),
    backgroundColor: 'purple',
  },
  carouselBox: {
    marginTop: 18 * WINDOW_SIZE.HEIGHT_WEIGHT,
  },
});

export default PopularRecommend;
