import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { inject, observer } from 'mobx-react';
import { Icon } from 'react-native-elements';
import { WINDOW_SIZE } from '../../../../../constant/WindowSize';
import { COLORS } from '../../../../../assets/Colors';
import { FONT_SIZE } from '../../../../../constant/FontSize';

const PersonalRecommend = (props) => {
  return (
    <View style={{ marginBottom: 54 * WINDOW_SIZE.HEIGHT_WEIGHT }}>
      <View style={styles.textBlock}>
        <TouchableOpacity style={{ flexDirection: 'row' }}>
          {/* 추후변경 */}
          <Text style={styles.textStyle}>연수님 맞춤 추천 그룹</Text>
          <Icon name="navigate-next" size={22} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.carouselBox}>
        <View style={{ marginBottom: 10 * WINDOW_SIZE.HEIGHT_WEIGHT }}>
          <View style={styles.sampleStyle}>
            <View
              style={{
                position: 'absolute',
                right: 0,
                bottom: 0,
                width: 230 * WINDOW_SIZE.HEIGHT_WEIGHT,
                height: 144 * WINDOW_SIZE.HEIGHT_WEIGHT,
                borderRadius: 12 * WINDOW_SIZE.HEIGHT_WEIGHT,
                backgroundColor: 'yellow',
              }}
            />
            <View
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                backgroundColor: 'orange',
                width: 108 * WINDOW_SIZE.HEIGHT_WEIGHT,
                height: 124 * WINDOW_SIZE.HEIGHT_WEIGHT,
                borderRadius: 12 * WINDOW_SIZE.HEIGHT_WEIGHT,
                padding: 12 * WINDOW_SIZE.HEIGHT_WEIGHT,
              }}
            >
              <Text
                style={{
                  color: 'white',
                  fontSize: 14 * WINDOW_SIZE.HEIGHT_WEIGHT,
                }}
                numberOfLines={1}
              >
                #건강다이어트
              </Text>
            </View>
          </View>
        </View>
        <Text style={{ fontSize: FONT_SIZE.INPUT_TEXT }}>같이 다이어트해요</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Icon name="person" size={14} color={COLORS.FONT_GRAY} />
          <Text style={{ fontSize: 12 * WINDOW_SIZE.HEIGHT_WEIGHT, color: COLORS.FONT_GRAY }}>
            삼청동
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textBlock: {
    // flexDirection: 'row'
  },
  textStyle: { fontSize: 20 * WINDOW_SIZE.HEIGHT_WEIGHT, fontWeight: 'bold', color: 'black' },
  sampleStyle: {
    height: 144 * WINDOW_SIZE.HEIGHT_WEIGHT,
    width: 264 * WINDOW_SIZE.HEIGHT_WEIGHT,
    backgroundColor: 'white',
  },
  carouselBox: {
    marginTop: 18 * WINDOW_SIZE.HEIGHT_WEIGHT,
  },
});

export default inject('userStore')(observer(PersonalRecommend));
