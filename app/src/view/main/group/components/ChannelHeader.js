import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { WINDOW_SIZE } from '../../../../constant/WindowSize';
import { COLORS } from '../../../../assets/Colors';
import { FONT_SIZE } from '../../../../constant/FontSize';

const ChannelHeader = ({ navigateTo, navigateMap }) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoBlock}>
        <Text
          style={{ fontSize: 26, letterSpacing: -1, lineHeight: 32 * WINDOW_SIZE.HEIGHT_WEIGHT }}
        >
          채널
        </Text>
      </View>
      <View style={{ width: '50%', flexDirection: 'row-reverse' }}>
        <Image
          source={require('../../../../../../Img/component_ic_big_ic_setting.png')}
          style={{
            width: 22 * WINDOW_SIZE.HEIGHT_WEIGHT,
            height: 22 * WINDOW_SIZE.HEIGHT_WEIGHT,
            marginLeft: 16 * WINDOW_SIZE.WIDTH_WEIGHT,
          }}
        />
        <Image
          source={require('../../../../../../Img/component_ic_big_ic_setting.png')}
          style={{
            width: 22 * WINDOW_SIZE.HEIGHT_WEIGHT,
            height: 22 * WINDOW_SIZE.HEIGHT_WEIGHT,
            marginLeft: 16 * WINDOW_SIZE.WIDTH_WEIGHT,
          }}
        />
        <Image
          source={require('../../../../../../Img/component_ic_big_ic_setting.png')}
          style={{
            width: 22 * WINDOW_SIZE.HEIGHT_WEIGHT,
            height: 22 * WINDOW_SIZE.HEIGHT_WEIGHT,
            marginLeft: 16 * WINDOW_SIZE.WIDTH_WEIGHT,
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 72 * WINDOW_SIZE.HEIGHT_WEIGHT,
    width: '100%',
    paddingLeft: 29 * WINDOW_SIZE.WIDTH_WEIGHT,
    paddingRight: 29 * WINDOW_SIZE.WIDTH_WEIGHT,
    backgroundColor: COLORS.WHITE,
  },
  logoBlock: { width: '50%' },
  createGroupText: {
    color: COLORS.BLACK,
    fontSize: FONT_SIZE.INPUT_TEXT,
  },
});

export default ChannelHeader;
