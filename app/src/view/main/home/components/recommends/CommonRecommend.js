import React from 'react';
import { ImageBackground, Text, View } from 'react-native';
import { WINDOW_SIZE } from '../../../../../constant/WindowSize';
import { COLORS } from '../../../../../assets/Colors';

const CommonRecommend = () => {
  return (
    <View
      style={{
        width: '100%',
        height: 260 * WINDOW_SIZE.HEIGHT_WEIGHT,
      }}
    >
      <View
        style={{
          position: 'absolute',
          top: 0,
          paddingRight: 32 * WINDOW_SIZE.WIDTH_WEIGHT,
          paddingLeft: 32 * WINDOW_SIZE.WIDTH_WEIGHT,
        }}
      >
        <Text
          style={{
            fontSize: 26 * WINDOW_SIZE.HEIGHT_WEIGHT,
            lineHeight: 32 * WINDOW_SIZE.HEIGHT_WEIGHT,
          }}
        >
          선선한 여름밤,
        </Text>
        <View style={{ flexDirection: 'row' }}>
          <Text
            style={{
              color: COLORS.SUB_COLOR,
              fontSize: 26 * WINDOW_SIZE.HEIGHT_WEIGHT,
              lineHeight: 32 * WINDOW_SIZE.HEIGHT_WEIGHT,
              fontWeight: 'bold',
            }}
          >
            #캠핑{' '}
          </Text>
          <Text
            style={{
              fontSize: 26 * WINDOW_SIZE.HEIGHT_WEIGHT,
              lineHeight: 32 * WINDOW_SIZE.HEIGHT_WEIGHT,
            }}
          >
            어떠세요?
          </Text>
        </View>

        <Text
          style={{
            fontSize: 12 * WINDOW_SIZE.HEIGHT_WEIGHT,
            marginTop: 6 * WINDOW_SIZE.HEIGHT_WEIGHT,
            lineHeight: 18 * WINDOW_SIZE.HEIGHT_WEIGHT,
            color: COLORS.BLACK,
            letterSpacing: -0.3,
            opacity: 0.4,
          }}
        >
          관련 그룹 보기 >
        </Text>
        <Text
          style={{
            fontSize: 10 * WINDOW_SIZE.HEIGHT_WEIGHT,
            paddingTop: 119 * WINDOW_SIZE.HEIGHT_WEIGHT,
          }}
        >
          1/3
        </Text>
      </View>
    </View>
  );
};

export default CommonRecommend;
